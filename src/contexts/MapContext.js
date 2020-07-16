/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { initView, getTrailFeature } from 'data/map';

export const MapContext = createContext();

const MapContextProvider = (props) => {
  const match = useRouteMatch('/details/:fid');
  const history = useHistory();
  const [mapView, setMapView] = useState(null);
  const [selection, setSelection] = useState(null);
  const [ready, setReady] = useState(false);
  const [featureList, setFeatureList] = useState([]);

  const routeFid = match && match.params.fid;

  // call initView when the mapView is ready, and set the selection if its in the route
  useEffect(() => {
    const init = async function () {
      if (mapView) {
        await initView(mapView);

        if (routeFid) {
          const feature = await getTrailFeature(routeFid);
          setSelection(feature);
        }

        setReady(true);
      }
    };
    init();
  }, [mapView]);

  // Update the selected trail when the fid in the route changes
  useEffect(() => {
    if (mapView) {
      if (routeFid) {
        const updateSelection = async function () {
          const feature = await getTrailFeature(routeFid);
          setSelection(feature);
        };
        updateSelection();
      } else {
        setSelection(null);
      }
    }
  }, [routeFid]);

  // Update the route fid when the selection changes
  useEffect(() => {
    if (selection && selection.attributes) {
      history.push(`/details/${selection.attributes.FID}`);
    }
  }, [selection, history]);

  return (
    <MapContext.Provider
      value={{
        mapView,
        setMapView,
        selection,
        setSelection,
        featureList,
        setFeatureList,
        ready,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
