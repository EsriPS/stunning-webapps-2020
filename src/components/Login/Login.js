// Framework and third-party non-ui
import React, { useContext } from 'react';

// App components
import { signIn } from 'data/oauth';
import { UserContext } from 'contexts/UserContext';

// JSON & Styles
import { StyledLoginButton } from './Login-styled';

// Third-party components (buttons, icons, etc.)

const Login = ({ ...rest }) => {
  const { setUserInfo, oauthInfo } = useContext(UserContext);

  const attemptLogin = async () => {
    try {
      const userInfo = await signIn(oauthInfo);
      setUserInfo(userInfo);
    } catch (error) {}
  };

  return (
    <StyledLoginButton data-testid="Login" onClick={attemptLogin} {...rest}>
      Login
    </StyledLoginButton>
  );
};

export default Login;
