// Framework and third-party non-ui
import React, { useState } from 'react';
import { useWebMap, useWatch } from 'esri-loader-hooks';

// Hooks, context, and constants
import { webmapId } from 'constants/map';

// App components
import MapLoader from './MapLoader';

// JSON & Styles
import { StyledMap } from './Map-styled';

const Map = () => {
  const [ready, setReady] = useState(false);

  const [ref, view] = useWebMap(webmapId);

  const handleMapReady = () => {
    setReady(true);
  };

  useWatch(view, 'ready', handleMapReady);

  return (
    <>
      {!ready ? <MapLoader /> : null}
      <StyledMap ref={ref} data-testid="Map"></StyledMap>
    </>
  );
};

export default Map;
