import React from 'react';
import WhereTo from '.';

import Map from 'components/Map';

export default {
  title: 'WhereTo',
  component: WhereTo,
};

export const Default = () => <WhereTo />;

export const WithMap = () => (
  <>
    <WhereTo />
    <div style={{ height: '800px', width: '800px' }}>
      <Map>Map</Map>
    </div>
  </>
);
