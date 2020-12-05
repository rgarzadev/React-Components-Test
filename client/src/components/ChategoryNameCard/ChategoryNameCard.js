import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

import "./ChategoryNameCard.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function ChategoryNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <div className= "ContentArea">
        <Container className="ChategoryNameCard" maxWidth="sm">
            <div className="container">
              <div className="row">
                  <div className="col ChategoryNamePlate">Dynamic Chategory Name</div>
              </div>
            </div>
        </Container>
        </div>
    )
}

export default ChategoryNameCard;