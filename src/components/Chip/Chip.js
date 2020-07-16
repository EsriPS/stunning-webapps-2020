// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// App components

// JSON & Styles
import { StyledChip } from './Chip-styled';

// Third-party components (buttons, icons, etc.)

const difficulty = {
  unknown: 'unknown',
  easy: 'easy',
  moderate: 'moderate',
  difficult: 'difficult',
};

const getLabel = (difficultyLevel) => {
  switch (difficultyLevel) {
    case difficulty.easy:
      return 'Easy';
    case difficulty.moderate:
      return 'Moderate';
    case difficulty.difficult:
      return 'Difficult';
    case difficulty.unknown:
    default:
      return null;
  }
};

const Chip = (props) => {
  const difficultyLevel = difficulty[props.difficulty] || difficulty.unknown;
  return difficultyLevel !== difficulty.unknown ? (
    <StyledChip difficulty={props.difficulty} data-testid="Chip">
      {getLabel(difficultyLevel)}
    </StyledChip>
  ) : null;
};

Chip.propTypes = {
  difficulty: PropTypes.oneOf(Object.keys(difficulty)),
};

Chip.defaultProps = {
  difficulty: difficulty.unknown,
};

Chip.difficulty = difficulty;

export default Chip;
