import React from "react";
import "./style/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalState from "Context/GlobalState";
import LoginRegisterPage from "pages/RegisterLogin/loginRegisterPage";
import CredentialServices from "Services/CredentialService";
import Routes from "Routes/AppRoutes";

function App() {
  const credService: CredentialServices = new CredentialServices();
  const userAuth = credService.GetUserCredentials();
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Switch>
            <Route path={Routes.root} exact>
              {userAuth == null ? (
                <Redirect to={Routes.login} />
              ) : (
                <h4>Hello World</h4>
              )}
            </Route>
            <Route path={Routes.login}>
              <LoginRegisterPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
