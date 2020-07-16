import React from 'react';
import WhereTo from '.';

import Map from 'components/Map';
import MapContextProvider from 'contexts/MapContext';

export default {
  title: 'WhereTo',
  component: WhereTo,
};

export const Default = () => (
  <MapContextProvider>
    <WhereTo />
  </MapContextProvider>
);

export const WithMap = () => (
  <MapContextProvider>
    <WhereTo />
    <div style={{ height: '800px', width: '800px' }}>
      <Map>Map</Map>
    </div>
  </MapContextProvider>
);
