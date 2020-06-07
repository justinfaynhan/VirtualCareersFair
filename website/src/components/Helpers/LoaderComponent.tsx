import React, { useContext } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import LoadingContext from "../../context/loadingContext";

const LoaderComponent = () => {
  const loading = useContext(LoadingContext);

  return (
    <Dimmer active={loading.isLoading}>
      <Loader>{loading.loadingMessage}</Loader>
    </Dimmer>
  );
};

export default LoaderComponent;
