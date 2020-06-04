import React, { useState, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Redirect, BrowserRouter as Router } from "react-router-dom";
import {
  UserLoginCredentials,
  UserAuthDetail,
} from "../../Models/BindingModels";
import Routes from "../../Routes/AppRoutes";
import CredentialService from "../../Services/CredentialService";
import LoadingContext from "Context/loadingContext";

function LoginCard(props) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // redirect
  const [redirect, setRedirect] = useState(false);
  const blockUi = useContext(LoadingContext);

  const handleEmailUpdate = (event) => {
    const email = event.target.value;
    setInput((prevState) => ({ ...prevState, email }));
  };

  const handlePasswordUpdate = (event) => {
    const password = event.target.value;
    setInput((prevState) => ({ ...prevState, password }));
  };

  const handleLogin = async () => {
    const loginModel: UserLoginCredentials = new UserLoginCredentials(
      input.email,
      input.password
    );

    const credService = new CredentialService();

    // turn on blockUI
    blockUi.toggleLoadingOn("Logging in, please wait");

    console.log("blocked ui", blockUi.isLoading, blockUi.loadingMessage);

    const userAuth: UserAuthDetail = await credService.Login(loginModel);
    console.log(userAuth);

    blockUi.toggleLoadingOff();

    // if the userAuth isn't null then don't route back
    if (userAuth != null) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return (
      <Router>
        <Redirect to={Routes.home} />
      </Router>
    );
  }

  return (
    <div className={props.className}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="Email"
            value={input.email}
            onChange={(event) => handleEmailUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            icon="key"
            iconPosition="left"
            placeholder="Password"
            value={input.password}
            onChange={(event) => handlePasswordUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <div className="flex-container-centered">
            <Button className="login-button" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form.Field>
      </Form>
    </div>
  );
}

export default LoginCard;
