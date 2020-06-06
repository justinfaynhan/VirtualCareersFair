import React, { useState } from "react";

import UserContext from "./userContext";
import LoadingContext from "./loadingContext";

const GlobalState = (props) => {
  // authToken Provider
  const [AuthToken, setAuthToken] = useState("");
  // loading state provider
  const [LoadingState, setLoadingState] = useState({
    isLoading: false,
    loadingMessage: "",
  });

  // auth token provider functions
  const isUserAuthenticated = () => {
    if (AuthToken) {
      return true;
    }
    return false;
  };

  const updateAuthToken = (token: string) => {
    setAuthToken(token);
  };

  // loading state provider functions
  const toggleLoadingOn = (message: string) => {
    setLoadingState({
      isLoading: true,
      loadingMessage: message,
    });
  };

  const toggleLoadingOff = () => {
    setLoadingState({
      isLoading: false,
      loadingMessage: "",
    });
  };

  return (
    <UserContext.Provider
      value={{
        authToken: AuthToken,
        isUserAuthenticated,
        updateAuthToken,
      }}
    >
      <LoadingContext.Provider
        value={{
          isLoading: LoadingState.isLoading,
          loadingMessage: LoadingState.loadingMessage,
          toggleLoadingOn: toggleLoadingOn,
          toggleLoadingOff: toggleLoadingOff,
        }}
      >
        {props.children}
      </LoadingContext.Provider>
    </UserContext.Provider>
  );
};

export default GlobalState;
