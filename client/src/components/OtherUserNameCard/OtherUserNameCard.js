import React from 'react';

import { Link } from 'react-router-dom';

import { Container, IconButton, makeStyles } from '@material-ui/core';

import ForumIcon from '@material-ui/icons/Forum';

import "./OtherUserNameCard.css";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function OtherUserNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <div className= "ContentArea">
        <Container className="OtherUserNameCard" maxWidth="sm">
            <div className="container">
            <div className="row">
                <div className="col-4 OtherUserImage"><p>User Image</p></div>
                <div className="col-4 OtherUserNamePlate"><p>UserName</p></div>
                <div className="col-4">
                <Link to='/chat'>
                  <IconButton color="inherit" className={classes.centerButton}>
                    <ForumIcon fontSize="large"/>
                  </IconButton>
                </Link>
                </div>
            </div>
            </div>
        </Container>
        </div>
    )
}

export default OtherUserNameCard;