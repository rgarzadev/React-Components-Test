import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  centerButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>

          <IconButton edge="start" color="inherit">
            <SearchIcon fontSize="large"/>
          </IconButton>

          <IconButton color="inherit" className={classes.centerButton}>
            <ForumIcon fontSize="large"/>
          </IconButton>

          <div className={classes.grow}/>

          <IconButton color="inherit">
            <EditIcon fontSize="large"/>
          </IconButton>

        </Toolbar>

      </AppBar>
  );
}

export default Footer;