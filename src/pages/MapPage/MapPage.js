// Framework and third-party non-ui
import React from 'react';
import { useParams } from 'react-router-dom';

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
import SubHeader from 'components/SubHeader';

// Third-party components (buttons, icons, etc.)

const MapPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { context } = useParams();
  return (
    <MapPageLayout data-testid="MapPage">
      <Header />
      <SubHeader />
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
