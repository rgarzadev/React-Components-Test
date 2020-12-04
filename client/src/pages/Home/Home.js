import React from 'react';
import Switch from '../../components/Switch/Switch';
import MyChategories from '../../components/MyChategories/MyChategories';
import MyPosts from '../../components/MyPosts/MyPosts';

function Home() {

    return (
        <>
        <h1>This is the HOME page</h1>

        <Switch left="off" right="on" LDisplay={<MyChategories/>} RDisplay={<MyPosts/>}/>
          
        </>
    )
}

export default Home;