// Framework and third-party non-ui
import React from 'react';

// JSON & Styles
import {
  StyledWhereTo,
  StyledSearchContainer,
  StyledFormControl,
  StyledCalciteH2,
} from './WhereTo-styled';

// Third-party components (buttons, icons, etc.)
import TrailSearch from 'components/TrailSearch';

const WhereTo = () => {
  return (
    <StyledWhereTo data-testid="WhereTo">
      <StyledCalciteH2>Where to?</StyledCalciteH2>
      <StyledSearchContainer>
        <StyledFormControl horizontal noValidation>
          <TrailSearch fullWidth />
        </StyledFormControl>
      </StyledSearchContainer>
    </StyledWhereTo>
  );
};

export default WhereTo;
