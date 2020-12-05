import React from 'react';
import Switch from '../../components/Switch/Switch';
import MyChategories from '../../components/MyChategories/MyChategories';
import MyPosts from '../../components/MyPosts/MyPosts';

import MyUserNameCard from "../../components/MyUserNameCard/MyUserNameCard";


import "./Home.css";

function Home() {

    return (
        <div>

            <br/>

            <MyUserNameCard />

            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        <div className="AlignCenter">
                        <Switch left={<h6>My Chategories</h6>} right={<h6>My Posts</h6>} LDisplay={<MyChategories />} RDisplay={<MyPosts />} />
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Home;