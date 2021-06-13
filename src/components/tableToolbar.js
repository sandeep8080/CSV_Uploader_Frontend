import React, { useState } from 'react';
import {
    GridToolbarContainer,
    GridToolbarExport,
} from '@material-ui/data-grid';
import {
    Box,
    Button
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HistoryIcon from '@material-ui/icons/History';
import FileUploader from './fileUploader';


const TableToolBar = ({ handleSaveData, handleResetData }) => {

    const [openDialog, setOpenDialog] = useState(false);

    const handleCSVUpload = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    }
    return (
        <GridToolbarContainer style={{ justifyContent: 'space-between' }}>
            <Box>
                <Button
                    color="primary"
                    onClick={handleCSVUpload}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <FileUploader open={openDialog}
                    handleClose={handleClose}
                    handleSaveData={handleSaveData}
                />
                <GridToolbarExport />
            </Box>
            <Box>
                <Button color="primary" onClick={handleResetData} startIcon={<HistoryIcon />}>
                    Reset
                </Button>
            </Box>
        </GridToolbarContainer>
    )
};

export default TableToolBar;