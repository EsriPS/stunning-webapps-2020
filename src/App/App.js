// Framework and third-party non-ui
import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Hooks, context, and constants
import MapContextProvider from 'contexts/MapContext';
import { UserContext } from 'contexts/UserContext';
import Routes from 'constants/routes';
import { initialize, checkCurrentStatus } from 'data/oauth';

// App pages & components
import HomePage from 'pages/HomePage';
import MapPage from 'pages/MapPage';
import NoMatch from 'pages/NoMatch';

// Third-party components (buttons, icons, etc.)
import { ToastContainer } from 'calcite-react/Toaster';

const App = () => {
  const { setOauthInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Initialize the Identity Manager
        const oauthInfo = await initialize(
          'xlMqVpNnXme9RSQA',
          'https://www.arcgis.com'
        );

        // Add oauthInfo to UserContext
        setOauthInfo(oauthInfo);

        // Check to see if a user is already signed in
        const userInfo = await checkCurrentStatus(oauthInfo);
        setUserInfo(userInfo);
        if (userInfo) {
          // If user is signed in, add userInfo to UserContext
        }
      } catch (error) {
        // User is not logged in, set userInfo to undefined
        setUserInfo(undefined);
      }
    };
    initAuth();
  }, [setOauthInfo, setUserInfo]);

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path={Routes.Home}>
          <Redirect to="/home" />
        </Route>
        <Route path={Routes.Map}>
          <MapContextProvider>
            <HomePage />
            <MapPage />
          </MapContextProvider>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
};

export default App;
