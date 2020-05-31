import React, { useContext, useEffect } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterView from 'pages/RegisterLogin/register';
import GlobalState from 'Context/GlobalState';
import UserContext from 'Context/userContext';

function App() {
  const user = useContext(UserContext);
  
  return (
    <GlobalState>
      <Router>
        <Switch>
          <Route path="/" exact>
            {}
          </Route>
          <Route>

          </Route>
        </Switch>
        <div className="App">
          <RegisterView />
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
