import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import {Button, TextField} from '@material-ui/core';

import "./AddNewTopic.css";

const AddNewTopic = (props) => {

    // const [chategory, setChategory] = useState("");

    // const onChategoryFieldChange = (event) => {
    //     setChategory(event.target.value);
    // }

    const [topic, setTopic] = useState("");

    const onTopicFieldChange = (event) => {
        setTopic(event.target.value);
    }

    const onButtonClick = (event) => {
        console.log("make api call");
    }

     return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>

                <div className="Topic">
                    <TextField fullWidth="true" label="New Topic" variant="outlined" onChange={()=>onTopicFieldChange()}/><br/>
                </div>

                <div className="AddNewButton">
                    <Button variant="contained" color="primary" onClick={()=>onButtonClick()} >Add NEW Topic</Button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default AddNewTopic