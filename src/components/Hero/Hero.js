// Framework and third-party non-ui
import React from 'react';

// App components
import WhereTo from 'components/WhereTo';
import Login from 'components/Login';

// JSON & Styles
import {
  StyledHero,
  StyledUser,
  StyledHeroContainer,
  StyledHeroTitle,
  StyledCalciteH1,
  StyledCalciteH2,
} from './Hero-styled';

const Hero = () => {
  return (
    <StyledHero data-testid="Hero">
      <StyledUser>
        <Login extraLarge />
      </StyledUser>
      <StyledHeroTitle>
        <StyledCalciteH1>Discover Colorado</StyledCalciteH1>
        <StyledCalciteH2>Plan your next outdoor adventure</StyledCalciteH2>
      </StyledHeroTitle>
      <StyledHeroContainer>
        <WhereTo />
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
