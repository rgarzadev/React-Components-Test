import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./components/Nav/Nav";

import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import MyChats from "./pages/MyChats";
import Chat from "./pages/Chat";

import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <Nav/>
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/mychats" component={MyChats}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/settings" component={Settings}/>

        <Route path="/*" component={NoMatch}/>

      </Switch>

      {isLoggedIn ? <Footer/> : null}

    </Router>
  );
}

export default App;
