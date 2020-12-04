import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./components/Nav/Nav";
import NoMatch from "./pages/NoMatch/NoMatch";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Settings from "./pages/Settings/Settings";
import MyChats from "./pages/MyChats/MyChats";
import Chat from "./pages/Chat/Chat";
import Footer from "./components/Footer/Footer";
import otherUserProfile from "./pages/OtherUserProfile/otherUserProfile"

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import './App.css';

function App() {
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Nav/>
          <Switch>

            <Route path="/" exact component={Home}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/mychats" component={MyChats}/>
            <Route exact path="/chat" component={Chat}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/otheruserprofile" component={otherUserProfile}/>
            <Route path="/*" component={NoMatch}/>

          </Switch>

          {isLoggedIn ? <Footer/> : null}

        </Router>
    </ThemeProvider>
  );
}

export default App;
