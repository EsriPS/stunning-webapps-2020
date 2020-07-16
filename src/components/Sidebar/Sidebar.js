// Framework and third-party non-ui
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

// App components
import { MapContext } from 'contexts/MapContext';
import { TrailDetails } from 'components/TrailCard';

// JSON & Styles
import { StyledSidebar, StyledLoader } from './Sidebar-styled';

// Third-party components (buttons, icons, etc.)
import TrailsList from 'components/TrailsList';

const Sidebar = () => {
  const { ready, selection } = useContext(MapContext);

  const getLoadingIndicator = () => {
    return <StyledLoader sizeRatio={1.5} text="Loading..." />;
  };

  if (!ready) {
    return getLoadingIndicator();
  }

  return (
    <StyledSidebar data-testid="Sidebar">
      <Switch>
        <Route exact path="/details/:id">
          <TrailDetails trail={selection && selection.attributes} />
        </Route>
        <Route path="/details">
          <TrailsList />
        </Route>
      </Switch>
    </StyledSidebar>
  );
};

export default Sidebar;
