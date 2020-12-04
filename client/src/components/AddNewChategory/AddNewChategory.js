import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import {Button, TextField} from '@material-ui/core';

const AddNewChategory = (props) => {

    const [chategory, setChategory] = useState("");

    const onChategoryFieldChange = (event) => {
        setChategory(event.target.value);
    }

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
                <TextField label="New Chategory Name" variant="outlined" onChange={()=>onChategoryFieldChange()}/><br/>
                <TextField label="New Chategory Topic" variant="outlined" onChange={()=>onTopicFieldChange()}/><br/>
                <Button variant="contained" color="primary" onClick={()=>onButtonClick()} >Add NEW Chategory</Button>
            </Modal.Body>
        </Modal>
    )
}

export default AddNewChategory