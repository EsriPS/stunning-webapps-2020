// Framework and third-party non-ui
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks, context, and constants
import Routes from 'constants/routes';

// App components
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
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
      <div>
        <Link to={Routes.Home}>Home Page</Link>
      </div>
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
