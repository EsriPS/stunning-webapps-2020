// Framework and third-party non-ui
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// App pages & components
import ComingSoon from 'components/ComingSoon';
import NoMatch from 'pages/NoMatch';

// Hooks, context, and constants
import Routes from 'constants/routes';

const App = () => {
  return (
    <Switch>
      <Route exact path={Routes.Home}>
        <Redirect to={Routes.ComingSoon} />
      </Route>
      <Route path={Routes.ComingSoon}>
        <ComingSoon />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default App;
