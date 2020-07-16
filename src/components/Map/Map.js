// Framework and third-party non-ui
import React, { useContext, useEffect } from 'react';
import { useWebMap, useWatch } from 'esri-loader-hooks';
import debounce from 'lodash.debounce';

// App components
import MapLoader from './MapLoader';
import { MapContext } from 'contexts/MapContext';
import { webmapId } from 'constants/map';
import { filterMapData, fetchTrailsInExtent } from 'data/map';

// JSON & Styles
import { StyledMap } from './Map-styled';

// Third-party components (buttons, icons, etc.)

const Map = () => {
  const { ready, selection, setMapView, setFeatureList } = useContext(
    MapContext
  );
  const [ref, view] = useWebMap(webmapId);

  useEffect(() => {
    if (selection) {
      // If the selected feature changes (in MapContext), call filterMapData
      filterMapData([selection.attributes['FID']]);
    }
  }, [selection]);

  const handleMapReady = () => {
    setMapView(view);
  };

  const handleMapExtentChanged = async (stationary) => {
    // If stationary is false, the map is still being moved, abort
    if (!stationary) return;

    // Since map is now stationary, fetch trails
    const trails = await fetchTrailsInExtent(view);

    // If trails is undefined, abort
    if (!trails) {
      // TODO: Fix issue where this happens on initial load
      console.log('no trails!', trails);
      return;
    }

    setFeatureList(trails);
  };

  useWatch(view, 'ready', handleMapReady);
  useWatch(view, 'stationary', debounce(handleMapExtentChanged, 500));

  return (
    <>
      {!ready ? <MapLoader /> : null}
      <StyledMap ref={ref} data-testid="Map"></StyledMap>
    </>
  );
};

export default Map;
