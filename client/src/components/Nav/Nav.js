import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
{/* <Button color="inherit">Login</Button> */}



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Nav() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon fontSize="large"/>
                </IconButton>

                <Typography align="center" variant="h4" className={classes.title}>
                    CG
                </Typography>

                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HelpIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;