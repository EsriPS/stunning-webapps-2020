// Framework and third-party non-ui
import React from 'react';

// JSON & Styles
import { StyledComingSoon, StyledIntro } from './ComingSoon-styled';
import logo from './logo-white.png';

const ComingSoon = () => {
  return (
    <StyledComingSoon>
      <StyledIntro>
        <div>Welcome to Discover Colorado!</div>
        <img src={logo} alt="Esri" />
      </StyledIntro>
    </StyledComingSoon>
  );
};

export default ComingSoon;
