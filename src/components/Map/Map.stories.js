import React from 'react';
import Map from '.';

// Setup esri-loader
import { setDefaultOptions } from 'esri-loader';
setDefaultOptions({ version: 'next', css: true });

export default {
  title: 'Map',
  component: Map,
};

export const Default = () => (
  <div style={{ height: '800px', width: '800px' }}>
    <Map>Map</Map>
  </div>
);
