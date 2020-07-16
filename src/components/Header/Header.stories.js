import React from 'react';
import Header from '.';
import UserContextProvider from 'contexts/UserContext';
import MapContextProvider from 'contexts/MapContext';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <MapContextProvider>
    <UserContextProvider>
      <Header />
    </UserContextProvider>
  </MapContextProvider>
);
