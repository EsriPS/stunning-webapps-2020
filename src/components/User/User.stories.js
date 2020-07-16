import React from 'react';
import User from '.';
import fakeUser from './fakeUser.json';

export default {
  title: 'User',
  component: User,
};

export const Default = () => <User userInfo={fakeUser} />;
