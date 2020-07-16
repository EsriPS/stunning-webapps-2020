import React from 'react';
import Sidebar from './';
import { MapContext } from 'contexts/MapContext';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const Default = () => (
  <MapContext.Provider value={{ ready: true }}>
    <div style={{ width: '400px', height: '500px' }}>
      <Sidebar>Sidebar</Sidebar>
    </div>
  </MapContext.Provider>
);
