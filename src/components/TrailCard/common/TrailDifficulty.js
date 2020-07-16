// Framework and third-party non-ui
import React from 'react';

// App components
import Chip from 'components/Chip';

const TrailDifficulty = ({ slope }) => {
  const getTrailDifficulty = (slope) => {
    if (slope <= 5) return Chip.difficulty.easy;
    if (slope > 5 && slope <= 10) return Chip.difficulty.moderate;
    if (slope > 10) return Chip.difficulty.difficult;
    return Chip.difficulty.unknown;
  };

  return <Chip difficulty={getTrailDifficulty(slope)} />;
};

export default TrailDifficulty;
