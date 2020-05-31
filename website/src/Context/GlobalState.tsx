import React, { useState } from 'react';

import UserContext from './userContext';

const GlobalState = props => {
    // authToken Provider
    const [AuthToken, setAuthToken]  = useState("");

    const isUserAuthenticated = () => {
        if (AuthToken) {
            return true;
        }
        return false;
    }

    const updateAuthToken = (token: string) => {
        setAuthToken(token);
    }

    return (
        <UserContext.Provider
          value={{
            authToken: AuthToken,
            isUserAuthenticated,
            updateAuthToken
          }}
        >
          {props.children}
        </UserContext.Provider>
      );
};

export default GlobalState;