import React from 'react';
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import "./Settings.css";


function Settings() {
    return (

        <Container>
            <div className= "OtherUserNamePlate" maxWidth="sm">

                    <br></br>

                <h5> Edit Profile </h5>

                    <br></br>

                <div className="MyUserImage">

                </div>

                    <br></br>

                <div>

                    <input className="usernameTextInput" placeholder="Username"></input>

                </div>

                    <br></br>

                <div>

                <input className="aboutMeTextInput" placeholder="Tell us about yourself!"></input>

                </div>

                <IconButton edge="start" color="inherit" aria-label="menu">
                    <SaveIcon className="saveBtn" fontSize="large"/>
                </IconButton>

            </div>
        </Container>
    )
}

export default Settings;