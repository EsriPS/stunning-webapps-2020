import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [ready, setReady] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [oauthInfo, setOauthInfo] = useState(null);

  useEffect(() => {
    if (userInfo !== null) {
      setReady(true);
    }
  }, [userInfo]);

  return (
    <UserContext.Provider
      value={{ ready, userInfo, setUserInfo, oauthInfo, setOauthInfo }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
