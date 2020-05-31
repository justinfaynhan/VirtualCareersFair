import React from 'react';

export default React.createContext({
    authToken: "",
    // update the AuthToken
    updateAuthToken: (token: string) => {},
    // handle if user is Authenticated
    isUserAuthenticated: () => {}
});