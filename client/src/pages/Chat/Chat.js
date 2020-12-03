import { Container } from '@material-ui/core';
import React from 'react';
import OtherUserNameCard from "../../components/OtherUserNameCard/OtherUserNameCard";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import ChatTextInputArea from "../../components/ChatTextInputArea/ChatTextInputArea";

import "./Chat.css";

function Chat() {
    return (
        <div>
        
            <br></br>

            <h4 className="pageTitle">Chatting With:</h4>

            <OtherUserNameCard/>

            <br></br>

            <div className="container">
                <div className="row">

                    <div className="col"></div>
                    
                    <div className="col"><h4>About:</h4></div>
                    
                    <div className="col">
                        <div className="DynamicTopicArea">
                        <h6>Dynamic Topic Here</h6>
                        </div>
                    </div>
                    
                    <div className="col"></div>
                </div>
            </div>

            <ChatHistory/>

            <br></br>

            <ChatTextInputArea/>

        </div>
    )
}

export default Chat;