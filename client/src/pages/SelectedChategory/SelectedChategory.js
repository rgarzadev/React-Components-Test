import React from 'react';

import { Button } from '@material-ui/core';

import ChategoryTopicsList from "../../components/ChategoryTopicsList/ChategoryTopicsList";
import ChategoryNameCard from "../../components/ChategoryNameCard/ChategoryNameCard";
import AddNewTopic from "../../components/AddNewTopic/AddNewTopic";


import "./SelectedChategory.css";


const onButtonClick = (event) => {
    console.log("make api call");
}

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

                        <br/>

                        <div className="AddToMyChategories">
                            <Button variant="contained" color="primary" onClick={() => onButtonClick()} >Add to MY Chategories</Button>
                        </div>

                        <br/>

                        <ChategoryTopicsList/>

                        <br/>

                        <AddNewTopic/>

                    </div>

                </div>

            </div>

        </div>



    )
}

export default SelectedChategory;