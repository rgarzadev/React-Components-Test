import React from 'react';
import Switch from '../../components/Switch/Switch';
import MyChategories from '../../components/MyChategories/MyChategories';
import MyPosts from '../../components/MyPosts/MyPosts';

import OtherUserNameCard from "../../components/OtherUserNameCard/OtherUserNameCard";


import "./Home.css";

function Home() {

    return (
        <div>

            <div className="container MuiContainer-maxWidthSm">

                <OtherUserNameCard />

            </div>

            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        <div className="AlignCenter">
                        <Switch left={<h6>MyChategories</h6>} right={<h6>My Posts</h6>} LDisplay={<MyChategories />} RDisplay={<MyPosts />} />
                        </div>

                    </div>

                </div>


            </div>
            
        </div>
    )
}

export default Home;