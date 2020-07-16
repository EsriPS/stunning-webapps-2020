// Framework and third-party non-ui
import React from 'react';

// JSON & Styles
import { StyledLoginButton } from './Login-styled';

// Third-party components (buttons, icons, etc.)

const Login = ({ ...rest }) => {
  const attemptLogin = async () => {
    console.log('attempt login');
  };

  return (
    <StyledLoginButton data-testid="Login" onClick={attemptLogin} {...rest}>
      Login
    </StyledLoginButton>
  );
};

export default Login;
