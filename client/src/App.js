import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";

import './App.css';

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/home" component={Nav}/>
        <Route component={NoMatch}/>

      </Switch>
      {isLoggedIn ? <Nav/> : null}
    </Router>
  );
}

export default App;
