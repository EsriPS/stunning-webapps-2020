import React from 'react';
import Hero from '.';

import MapContextProvider from 'contexts/MapContext';
import UserContextProvider from 'contexts/UserContext';

export default {
  title: 'Hero',
  component: Hero,
};

export const Default = () => (
  <UserContextProvider>
    <MapContextProvider>
      <Hero>Hero</Hero>
    </MapContextProvider>
  </UserContextProvider>
);
