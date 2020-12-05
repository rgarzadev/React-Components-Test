import { makeStyles, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { TextField, Switch, Button } from '@material-ui/core';
import AddNewChategory from '../../components/AddNewChategory/AddNewChategory';

function Search() {

    const [toggleState, setToggleState] = useState(false);

    const [modalShow, setModalShow] = React.useState(false);

    const onSearchFieldClick = (event) => {
        setToggleState(true);
    }

    return (

        <div>

            <div className="container MuiContainer-maxWidthSm">

                <div className="row">

                    <div className="col AlignCenter">

                        <TextField label="Search" variant="outlined" onClick={() => onSearchFieldClick()} /><br />

                    </div>

                </div>

            </div>


            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        {"Newest Chategories"} <Switch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {"Search Results"}

                        <div>{toggleState ? "Yay I'm on" : "I'm off"}</div>

                        <Button variant="contained" color="primary" onClick={() => setModalShow(true)}>Add a NEW Chategory</Button>

                        <AddNewChategory show={modalShow} onHide={() => setModalShow(false)} />

                    </div>

                </div>


            </div>




        </div>
    )
}

export default Search;