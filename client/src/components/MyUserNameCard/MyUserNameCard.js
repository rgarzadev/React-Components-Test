import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

import "./MyUserNameCard.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function MyUserNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <div className= "ContentArea">
        <Container className="MyUserNameCard" maxWidth="sm">
            <div className="container">
              <div className="row">
                  <div className="col-4 MyUserImage">My Dynamic Image</div>
                  <div className="col-8 MyUserNamePlate">My Dynamic UserName</div>
              </div>
            </div>
        </Container>
        </div>
    )
}

export default MyUserNameCard;