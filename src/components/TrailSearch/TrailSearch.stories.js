import React from 'react';
import TrailSearch from '.';

import Map from 'components/Map';

export default {
  title: 'TrailSearch',
  component: TrailSearch,
};

export const Default = () => <TrailSearch fullWidth />;

export const WithMap = () => (
  <>
    <TrailSearch />
    <div style={{ height: '800px', width: '800px' }}>
      <Map />
    </div>
  </>
);
