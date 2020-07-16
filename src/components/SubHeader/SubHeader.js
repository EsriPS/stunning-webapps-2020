// Framework and third-party non-ui
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// App components
import Filter from 'components/Filter';

// JSON & Styles
import { StyledSubHeader } from './SubHeader-styled';
import TrailActions from 'components/TrailActions';

// Third-party components (buttons, icons, etc.)

const SubHeader = () => {
  return (
    <StyledSubHeader data-testid="SubHeader">
      <Switch>
        <Route exact path="/details/:id">
          <TrailActions />
        </Route>
        <Route path="/details">
          <Filter />
        </Route>
      </Switch>
    </StyledSubHeader>
  );
};

export default SubHeader;
