import React from 'react';
import TrailsList from '.';
import { MapContext } from 'contexts/MapContext';
import dummyFeature from 'contexts/dummyFeature.json';

export default {
  title: 'TrailsList',
  component: TrailsList,
};

export const Default = () => (
  <MapContext.Provider
    value={{ featureList: [dummyFeature, dummyFeature, dummyFeature] }}
  >
    <div style={{ height: '600px', width: '600px' }}>
      <TrailsList>TrailsList</TrailsList>
    </div>
  </MapContext.Provider>
);
