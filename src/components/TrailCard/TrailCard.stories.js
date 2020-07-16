import React from 'react';
import TrailCard from '.';
import dummyFeature from 'contexts/dummyFeature.json';

export default {
  title: 'TrailCard',
  component: TrailCard,
};

export const Default = () => (
  <div style={{ width: '600px' }}>
    <TrailCard attributes={dummyFeature.attributes} />
  </div>
);
