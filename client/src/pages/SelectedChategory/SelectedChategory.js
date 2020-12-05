import React from 'react';

import ChategoryTopicsList from "../../components/ChategoryTopicsList/ChategoryTopicsList";
import ChategoryNameCard from "../../components/ChategoryNameCard/ChategoryNameCard";


import "./SelectedChategory.css";

function SelectedChategory() {
    return (

        <div>

            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">



                        <div className="container MuiContainer-maxWidthSm">
                            <h5 className="PageTitle">~ Selected Chategory ~</h5>
                        </div>

                        <ChategoryNameCard />

                        <ChategoryTopicsList />



                    </div>

                </div>

            </div>

        </div>



    )
}

export default SelectedChategory;