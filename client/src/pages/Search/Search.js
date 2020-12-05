import { makeStyles, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { TextField, Switch, Button } from '@material-ui/core';
import AddNewChategory from '../../components/AddNewChategory/AddNewChategory';
import NewestChategories from '../../components/NewestChategories/NewestChategories';
import SearchResults from '../../components/SearchResults/SearchResults';

import "./Search.css";


function Search() {

    const [toggleState, setToggleState] = useState(false);

    const [modalShow, setModalShow] = React.useState(false);

    const onSearchFieldClick = (event) => {
        setToggleState(true);
    }

    return (

        <div className="TopBottomMargin">

            <div className="container MuiContainer-maxWidthSm">

                <div className="row">

                    <div className="col TextFieldPadding">

                        <TextField fullWidth="true" label="Search" variant="outlined" onClick={() => onSearchFieldClick()} /><br />

                    </div>

                </div>

            </div>


            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        {"New Chategories"} <Switch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {"Search Results"}

                        <div>{toggleState ? <SearchResults/> : <NewestChategories/>}</div>

                        <Button variant="contained" color="primary" onClick={() => setModalShow(true)}>Add a NEW Chategory</Button>

                        <AddNewChategory show={modalShow} onHide={() => setModalShow(false)} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Search;