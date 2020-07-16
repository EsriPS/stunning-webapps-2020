// Framework and third-party non-ui
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Hooks, context, and constants
import Routes from 'constants/routes';

// App pages & components
import HomePage from 'pages/HomePage';
import MapPage from 'pages/MapPage';
import NoMatch from 'pages/NoMatch';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.Root}>
          <Redirect to={Routes.Home} />
        </Route>
        <Route path={Routes.Home}>
          <HomePage />
        </Route>
        <Route path={Routes.Map}>
          <MapPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
};

export default App;
