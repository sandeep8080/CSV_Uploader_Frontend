import './App.css';
import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import {
  DataGrid
} from '@material-ui/data-grid';
import TableToolBar from './components/tableToolbar';
import axios from 'axios';

const columns = [{
  field: 'Country',
  headerName: 'Country',
  width: 220
}, {
  field: 'Capital',
  headerName: 'Capital',
  width: 220
}, {
  field: 'Population',
  headerName: 'Population',
  width: 220
}, {
  field: 'National Language',
  headerName: 'National Language',
  width: 220
}, {
  field: 'President',
  headerName: 'President',
  width: 220
}];
function App() {
  const [rows, setRows] = useState([]);

  const getRowData = () => {
    const url = "https://csv-uploader-backend.herokuapp.com/getCSV"
    axios.get(url).
      then(function (data) {
        const aData = data.data;
        setRows(aData.data);
      }).
      catch(function (error) {
        console.log(error);
      });
  };

  const handleSaveData = (csvString) => {
    const url = 'https://csv-uploader-backend.herokuapp.com/saveCSV';
    // console.log(csvString);
    axios.post(url, {
      csvString
    }).
      then(function (response) {
        console.log(response);
        getRowData();
      }).
      catch(function (error) {
        console.log(error);
      });
  };

  const handleResetData = () => {
    const url = "https://csv-uploader-backend.herokuapp.com/resetCSVData";
    axios.get(url).
      then((res) => {
        console.log('Data Reset', res);
        getRowData();
      }).
      catch((error) => console.log(error));
  };

  useEffect(() => {
    getRowData();
  }, []);
  return (
    <div className="App">
      <Box style={{ height: 550, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rows}
          components={{
            Toolbar: TableToolBar
          }}
          componentsProps={{
            toolbar: {
              handleSaveData: handleSaveData,
              handleResetData: handleResetData
            }
          }}
          rowsPerPageOptions={[25, 50, 100,500]}
        />
      </Box>
    </div>
  );
}

export default App;
