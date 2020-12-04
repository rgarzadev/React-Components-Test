import React from 'react';
import { Container } from '@material-ui/core';
import "./OtherUserAboutMe.css";



function OtherUserAboutMe() {
    return (
        <div className="ContentArea">

            <Container className="aboutMe" maxWidth="sm" >
               
            </Container>

            <br></br>

            <Container className="myChategories">

                <div>
                    <h3> My Chategories: </h3>
                </div>

                <div className="otherUserChategories">

                </div>
            </Container>

        </div>
    )

    
}

export default OtherUserAboutMe;