// Framework and third-party non-ui
import React from 'react';

// App components
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Map from 'components/Map';

// JSON & Styles
import {
  MapPageLayout,
  ContentWrapper,
  SidebarWrapper,
  MapWrapper,
} from './MapPage-styled';

const MapPage = () => {
  return (
    <MapPageLayout data-testid="MapPage">
      <Header />
      <ContentWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MapWrapper>
          <Map />
        </MapWrapper>
      </ContentWrapper>
    </MapPageLayout>
  );
};

export default MapPage;
