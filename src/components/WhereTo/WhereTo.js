// Framework and third-party non-ui
import React from 'react';

// App components

// JSON & Styles
import {
  StyledWhereTo,
  StyledSearchContainer,
  StyledQuickLinksContainer,
  StyledFormControl,
  StyledCalciteH2,
} from './WhereTo-styled';

// Third-party components (buttons, icons, etc.)
import { CalciteA } from 'calcite-react/Elements';
import Button from 'calcite-react/Button';
import GpsOnIcon from 'calcite-ui-icons-react/GpsOnIcon';
import TrailSearch from 'components/TrailSearch';

const WhereTo = () => {
  const getQuickLinks = () => {
    const places = [
      { name: 'Denver', location: {} },
      { name: 'Aspen', location: {} },
      { name: 'Boulder', location: {} },
      { name: 'Steamboat Springs', location: {} },
      { name: 'Winter Park', location: {} },
    ];

    return places.map((place) => (
      <span key={place.name}>
        <CalciteA href="#">{place.name}</CalciteA>
        <>&nbsp;|&nbsp;</>
      </span>
    ));
  };

  return (
    <StyledWhereTo data-testid="WhereTo">
      <StyledCalciteH2>Where to?</StyledCalciteH2>
      <StyledSearchContainer>
        <StyledFormControl horizontal noValidation>
          <TrailSearch fullWidth />
          <Button iconButton icon={<GpsOnIcon />} />
        </StyledFormControl>
      </StyledSearchContainer>
      <StyledQuickLinksContainer>{getQuickLinks()}</StyledQuickLinksContainer>
    </StyledWhereTo>
  );
};

export default WhereTo;
