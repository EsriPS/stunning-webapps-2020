// Framework and third-party non-ui
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// App components
import { TrailDetails } from 'components/TrailCard';

// JSON & Styles
import { StyledSidebar } from './Sidebar-styled';

// Third-party components (buttons, icons, etc.)
import TrailsList from 'components/TrailsList';

const Sidebar = () => {
  return (
    <StyledSidebar data-testid="Sidebar">
      <Switch>
        <Route exact path="/details/:id">
          <TrailDetails />
        </Route>
        <Route path="/details">
          <TrailsList />
        </Route>
      </Switch>
    </StyledSidebar>
  );
};

export default Sidebar;
