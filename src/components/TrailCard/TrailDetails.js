// Framework and third-party non-ui
import React from 'react';

// App components
import TrailDifficulty from './common/TrailDifficulty';
import { getRandomImage } from 'data/images';
import { getSlope } from 'utils/utils';

// JSON & Styles
import {
  StyledTrailDetails,
  IconsWrapper,
  IconWrapper,
  StatsWrapper,
  DistanceWrapper,
  ElevationWrapper,
  ImageWrapper,
  Title,
  ButtonWrapper,
  ContentWrapper,
  SubTitleWrapper,
  StyledLabel,
  StyledCardImage,
} from './TrailCard-styled';

// Third-party components (buttons, icons, etc.)
import Button from 'calcite-react/Button';
import ElevationIcon from 'calcite-ui-icons-react/AltitudeIcon';
import DistanceIcon from 'calcite-ui-icons-react/MeasureLineIcon';
import { Biking, Dog, Hiking, Horse, Road, Vehicle } from 'icons/icons';

const TrailDetails = ({ trail }) => {
  if (!trail) {
    // TODO: needs a bit of polish :)
    return 'unknown trail!';
  }

  const {
    FID,
    access,
    atv,
    bike,
    dogs,
    hiking,
    horse,
    length_mi_,
    name,
    type,
  } = trail;

  const slope = getSlope(trail);

  const isHikingAllowed = () => {
    return hiking !== 'no';
  };

  const isBikingAllowed = () => {
    return bike !== 'no';
  };

  const isHorseAllowed = () => {
    return horse !== 'no';
  };

  const isDogAllowed = () => {
    return dogs !== 'no';
  };

  const isAtvAllowed = () => {
    return atv !== 'no';
  };

  const getAccess = (access) => {
    if (access === ' ') {
      return <StyledLabel white>Year-round</StyledLabel>;
    }

    return <StyledLabel yellow>{access}</StyledLabel>;
  };

  return (
    <StyledTrailDetails data-testid="TrailDetails">
      <ImageWrapper>
        <StyledCardImage src={getRandomImage()} />
      </ImageWrapper>
      <ContentWrapper>
        <SubTitleWrapper>
          {getAccess(access)}
          <ButtonWrapper>
            <Button>Directions</Button>
            <Button>Hotels</Button>
          </ButtonWrapper>
        </SubTitleWrapper>

        <Title>{name}</Title>

        <StatsWrapper>
          <TrailDifficulty slope={slope} />
          <DistanceWrapper>
            <DistanceIcon size={16} /> {length_mi_}mi
          </DistanceWrapper>
          <ElevationWrapper>
            <ElevationIcon size={16} /> {slope.toFixed(1)}%
          </ElevationWrapper>
        </StatsWrapper>

        <IconsWrapper large>
          <IconWrapper large isActive={isHikingAllowed()}>
            <Hiking key={`hiking-${FID}`} />
          </IconWrapper>
          <IconWrapper large isActive={type === 'Road'}>
            <Road key={`road-${FID}`} />
          </IconWrapper>
          <IconWrapper large isActive={isBikingAllowed()}>
            <Biking key={`biking-${FID}`} />
          </IconWrapper>
          <IconWrapper large isActive={isHorseAllowed()}>
            <Horse key={`horse-${FID}`} />
          </IconWrapper>
          <IconWrapper large isActive={isDogAllowed()}>
            <Dog key={`dog-${FID}`} />
          </IconWrapper>
          <IconWrapper large isActive={isAtvAllowed()}>
            <Vehicle key={`atv-${FID}`} />
          </IconWrapper>
        </IconsWrapper>
      </ContentWrapper>
    </StyledTrailDetails>
  );
};

export default TrailDetails;
