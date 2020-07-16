// Framework and third-party non-ui
import React, { useState } from 'react';

// App components

// JSON & Styles
import { StyledFilterSelect } from './FilterSelect-styled';

// Third-party components (buttons, icons, etc.)
import MultiSelect from 'calcite-react/MultiSelect';
import { MenuItem } from 'calcite-react/Menu';

const FilterSelect = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState(options);

  const handleMultiSelectChange = (values, items) => {
    setSelectedValues(values);
  };

  return (
    <StyledFilterSelect data-testid="FilterSelect">
      <MultiSelect
        onChange={handleMultiSelectChange}
        selectedValues={selectedValues}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MultiSelect>
    </StyledFilterSelect>
  );
};

export default FilterSelect;
