import React from 'react';
import Login from '.';
import UserContextProvider from 'contexts/UserContext';

export default {
  title: 'Login',
  component: Login,
};

export const Default = () => {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
};
