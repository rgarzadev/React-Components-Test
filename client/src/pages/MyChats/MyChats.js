import React from 'react';

import ProfileDisplayName from '../../components/ProfileDisplayName/ProfileDisplayName';
import MyChatsDiv from '../../components/MyChatsDiv/MyChatsDiv';



function MyChats() {
    return (

    <div>

        <ProfileDisplayName className="profile-display-name"/>
        
        <MyChatsDiv/>

    </div>

    )
}

export default MyChats;