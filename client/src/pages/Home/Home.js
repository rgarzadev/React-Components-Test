import React from 'react';
import Switch from '../../components/Switch/Switch';
import ChatTextInputArea from '../../components/ChatTextInputArea/ChatTextInputArea';

function Home() {

    return (
        <>
        <h1>This is the HOME page</h1>

        <Switch left="off" right="on" LDisplay="this is off" RDisplay={<ChatTextInputArea/>}/>
          
        </>
    )
}

export default Home;