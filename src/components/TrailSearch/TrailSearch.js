// Framework and third-party non-ui
import React, { useState } from 'react';

// JSON & Styles
import { StyledTrailSearch } from './TrailSearch-styled';

// Third-party components (buttons, icons, etc.)
import Search from 'calcite-react/Search';

const TrailSearch = ({ ...rest }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Clear both the search term and results
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Handle Search's user actions
  const onUserAction = (inputValue) => {
    if (!inputValue) {
      return clearSearch();
    }

    if (inputValue === searchTerm) {
      return;
    }

    setSearchTerm(inputValue);
  };

  const onChange = async ({ value }) => {
    console.log('search changed', value);
  };

  return (
    <StyledTrailSearch data-testid="TrailSearch">
      <Search
        inputValue={searchTerm}
        onUserAction={onUserAction}
        onChange={onChange}
        onRequestClear={clearSearch}
        remote
        {...rest}
      ></Search>
    </StyledTrailSearch>
  );
};

export default TrailSearch;
