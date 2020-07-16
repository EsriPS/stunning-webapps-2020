// Framework and third-party non-ui
import React from 'react';

// App components
import TrailDifficulty from './common/TrailDifficulty';
import { getRandomImage } from 'data/images';
import { getSlope } from 'utils/utils';

// JSON & Styles
import {
  StyledCard,
  StyledCardTitle,
  StyledCardContent,
  IconsWrapper,
  IconWrapper,
  StatsWrapper,
  DistanceWrapper,
  ElevationWrapper,
} from './TrailCard-styled';

// Third-party components (buttons, icons, etc.)
import { CardImage } from 'calcite-react/Card';
import ElevationIcon from 'calcite-ui-icons-react/AltitudeIcon';
import DistanceIcon from 'calcite-ui-icons-react/MeasureLineIcon';
import { Biking, Dog, Hiking, Horse, Road, Vehicle } from 'icons/icons';

export default function TrailCard({ style, attributes, setSelection }) {
  const slope = getSlope(attributes);

  const isHikingAllowed = () => {
    return attributes.hiking !== 'no';
  };

  const isBikingAllowed = () => {
    return attributes.bike !== 'no';
  };

  const isHorseAllowed = () => {
    return attributes.horse !== 'no';
  };

  const isDogAllowed = () => {
    return attributes.dogs !== 'no';
  };

  const isAtvAllowed = () => {
    return attributes.atv !== 'no';
  };

  const handleOnClick = async () => {
    const { getTrailFeature } = await import('data/map');

    // Get the full feature object from the layer
    const feature = await getTrailFeature(attributes.FID);

    // Set the selected feature in MapContext
    setSelection(feature);
  };

  return (
    <StyledCard wide style={style} onClick={handleOnClick}>
      <CardImage wide src={getRandomImage()} />
      <StyledCardContent wide>
        <StyledCardTitle>{attributes.name}</StyledCardTitle>
        <IconsWrapper>
          <IconWrapper isActive={isHikingAllowed()}>
            <Hiking key={`hiking-${attributes.FID}`} />
          </IconWrapper>
          <IconWrapper isActive={attributes.type === 'Road'}>
            <Road key={`road-${attributes.FID}`} />
          </IconWrapper>
          <IconWrapper isActive={isBikingAllowed()}>
            <Biking key={`biking-${attributes.FID}`} />
          </IconWrapper>
          <IconWrapper isActive={isHorseAllowed()}>
            <Horse key={`horse-${attributes.FID}`} />
          </IconWrapper>
          <IconWrapper isActive={isDogAllowed()}>
            <Dog key={`dog-${attributes.FID}`} />
          </IconWrapper>
          <IconWrapper isActive={isAtvAllowed()}>
            <Vehicle key={`atv-${attributes.FID}`} />
          </IconWrapper>
        </IconsWrapper>
        <StatsWrapper>
          <TrailDifficulty slope={slope} />
          <DistanceWrapper>
            <DistanceIcon size={16} /> {attributes.length_mi_}mi
          </DistanceWrapper>
          <ElevationWrapper>
            <ElevationIcon size={16} /> {slope.toFixed(1)}%
          </ElevationWrapper>
        </StatsWrapper>
      </StyledCardContent>
    </StyledCard>
  );
}
