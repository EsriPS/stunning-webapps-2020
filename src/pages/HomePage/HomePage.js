// Framework and third-party non-ui
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks, context, and constants
import Routes from 'constants/routes';

// App components
import Hero from 'components/Hero';
import PopularTrail from 'components/PopularTrail';

// JSON & Styles
import { HomePageLayout, PopularTrailsContainer } from './HomePage-styled';

// Third-party components (buttons, icons, etc.)

const HomePage = () => (
  <HomePageLayout>
    <div>
      <Link to={Routes.Map}>Map Page</Link>
    </div>
    <Hero />
    <PopularTrailsContainer>
      <PopularTrail id={0} />
      <PopularTrail id={1} />
      <PopularTrail id={2} />
    </PopularTrailsContainer>
  </HomePageLayout>
);

export default HomePage;
