import React from 'react';
import "./otherUserProfile.css";

import OtherUserNameCard from '../../components/OtherUserNameCard/OtherUserNameCard';
import OtherUserAboutMe from '../../components/OtherUserAboutMe/OtherUserAboutMe';
import OtherUserMyPosts from '../../components/OtherUserMyPosts/OtherUserMyPosts';
import ProfileDisplayName from '../../components/ProfileDisplayName/ProfileDisplayName';


import Switch from '../../components/Switch/Switch';



function otherUserProfile() {
    return (
        <div>

            <br></br>

            <ProfileDisplayName className="profile-display-name" />

            <br></br>

            <OtherUserNameCard />

            <br></br>
            <>
            <Switch left="About Me" right="My Posts" LDisplay={<OtherUserAboutMe/>} RDisplay={<OtherUserMyPosts/>}/>
            </>

        </div>
    )
}

export default otherUserProfile;