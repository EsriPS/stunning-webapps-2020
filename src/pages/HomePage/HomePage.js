// Framework and third-party non-ui
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks, context, and constants
import Routes from 'constants/routes';

// App components
import Hero from 'components/Hero';

// JSON & Styles
import { HomePageLayout, PopularTrailsContainer } from './HomePage-styled';

const HomePage = () => (
  <HomePageLayout>
    <div>
      <Link to={Routes.Map}>Map Page</Link>
    </div>
    <Hero />
    <PopularTrailsContainer>
      <section></section>
      <section>Popular Trails Placeholder</section>
      <section></section>
    </PopularTrailsContainer>
  </HomePageLayout>
);

export default HomePage;
