import React from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalState from "Context/GlobalState";
import LoginRegisterPage from "./pages/RegisterLogin/loginRegisterPage";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          {/* <Switch>
            <Route path="/" exact>
            {}
            </Route>
            <Route></Route>
          </Switch> */}
        </Router>
        <LoginRegisterPage />
      </div>
    </GlobalState>
  );
}

export default App;
