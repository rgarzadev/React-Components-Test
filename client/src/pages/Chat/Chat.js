import { Container } from '@material-ui/core';
import React from 'react';
import OtherUserNameCard from "../../components/OtherUserNameCard/OtherUserNameCard";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import ChatTextInputArea from "../../components/ChatTextInputArea/ChatTextInputArea";

import "./Chat.css";

function Chat() {
    return (
        <div>
        
            <div className="container MuiContainer-maxWidthSm">
                <h5 className="PageTitle">Chatting With:</h5>
            </div>

            <OtherUserNameCard/>

            <div className="container MuiContainer-maxWidthSm">
                
                <div className="row AboutRow">

                    <div className="col-3 AlignRight"><h6>About:</h6></div>
                    
                    <div className="col-6 AlignCenter" >
                        <div className="AlignCenter DynamicTopicArea">
                        <h6>Dynamic Topic Goes Right Here</h6>
                        </div>
                    </div>

                    <div className="col-3 NoPadding"></div>

                </div>
            </div>

            <ChatTextInputArea/>

            <ChatHistory/>

        </div>
    )
}

export default Chat;