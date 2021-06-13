import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@material-ui/core';


const FileUploader = ({ open, handleClose, handleSaveData }) => {

    const [fileString, setFileString] = useState('');
    const onFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        var reader = new FileReader();
        reader.onload = (evt) => {
            console.log(evt.target.result);
            setFileString(evt.target.result);
        };
        reader.readAsBinaryString(uploadedFile);
    };
    const handleSave = (fileString) => {
        handleSaveData(fileString);
        handleClose();
    };
    return (
        <Dialog open={open}>
            <DialogTitle id="idFileUploadDialog">Upload a Valid CSV File</DialogTitle>
            <DialogContent dividers>
                <input id='idFileUploader' type="file" onChange={onFileChange} />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Close
                </Button>
                <Button color="primary" onClick={() => handleSave(fileString)}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>

    )
};

export default FileUploader;