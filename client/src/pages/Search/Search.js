import { makeStyles } from '@material-ui/core';
import React, {useState} from 'react';
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
            <h1>This is the SEARCH page</h1>
            <TextField label="Search" variant="outlined" onClick={()=>onSearchFieldClick()}/><br/>
            {"Newest Chategory"} <Switch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {"Search Results"}
            <div>{toggleState ? "Yay I'm on" : "I'm off"}</div>

            <Button variant="contained" color="primary" onClick={() => setModalShow(true)}>Add a NEW Chategory</Button>
            <AddNewChategory
             show={modalShow}
             onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Search;