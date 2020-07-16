// Framework and third-party non-ui
import React from 'react';

// JSON & Styles
import { StyledMapLoader, LoaderGlobeWrapper } from './Map-styled';
import { LoaderGlobe } from 'icons/icons';

const MapLoader = () => {
  return (
    <>
      <StyledMapLoader></StyledMapLoader>
      <LoaderGlobeWrapper>
        <LoaderGlobe />
      </LoaderGlobeWrapper>
    </>
  );
};

export default MapLoader;
