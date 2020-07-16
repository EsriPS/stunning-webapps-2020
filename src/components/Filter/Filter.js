// Framework and third-party non-ui
import React from 'react';

// App components
import FilterSelect from 'components/FilterSelect';

// JSON & Styles
import {
  StyledFilter,
  StyledFormControl,
  StyledFormControlLabel,
} from './Filter-styled';

// Third-party components (buttons, icons, etc.)

const Filter = () => {
  return (
    <StyledFilter data-testid="Filter">
      <StyledFormControl noValidation horizontal>
        <StyledFormControlLabel>Difficulty</StyledFormControlLabel>
        <FilterSelect options={difficultyOptions} />
      </StyledFormControl>
      <StyledFormControl noValidation horizontal>
        <StyledFormControlLabel>Distance</StyledFormControlLabel>
        <FilterSelect options={distanceOptions} />
      </StyledFormControl>
      <StyledFormControl noValidation horizontal>
        <StyledFormControlLabel>Elevation Gain</StyledFormControlLabel>
        <FilterSelect options={gainOptions} />
      </StyledFormControl>
      <StyledFormControl noValidation horizontal>
        <StyledFormControlLabel>Trail Type</StyledFormControlLabel>
        <FilterSelect options={typeOptions} />
      </StyledFormControl>
    </StyledFilter>
  );
};

export default Filter;

const difficultyOptions = [
  { value: '0', label: 'Easy' },
  { value: '1', label: 'Medium' },
  { value: '2', label: 'Hard' },
];

const distanceOptions = [
  { value: '0', label: 'Short' },
  { value: '1', label: 'Medium' },
  { value: '2', label: 'Long' },
];

const gainOptions = [
  { value: '0', label: 'A little' },
  { value: '1', label: 'A lot' },
];

const typeOptions = [
  { value: '0', label: 'Paved' },
  { value: '1', label: 'Gravel' },
  { value: '2', label: 'Other' },
];
