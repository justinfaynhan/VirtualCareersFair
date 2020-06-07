import React from "react";

export default React.createContext({
  isLoading: false,
  loadingMessage: "",
  // update the AuthToken
  toggleLoadingOn: (message: string) => {},
  toggleLoadingOff: () => {},
});
