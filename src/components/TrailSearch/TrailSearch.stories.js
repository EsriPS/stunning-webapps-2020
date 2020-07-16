import React from 'react';
import TrailSearch from '.';

import Map from 'components/Map';
import MapContextProvider from 'contexts/MapContext';

export default {
  title: 'TrailSearch',
  component: TrailSearch,
};

export const Default = () => (
  <MapContextProvider>
    <TrailSearch fullWidth>TrailSearch</TrailSearch>
  </MapContextProvider>
);

export const WithMap = () => (
  <MapContextProvider>
    <TrailSearch />
    <div style={{ height: '800px', width: '800px' }}>
      <Map>Map</Map>
    </div>
  </MapContextProvider>
);
