import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'
function Home() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8088/api/station/getalluser')
          .then( (response)=>{
            console.log(response.data);
            setData(response.data)
        })
        .catch(function (error) {
            alert(error.response.data)
            console.log(error);
          });
    },[])
    const columns=[
        {
        field:'name',
        headerName:"Name"
        },
        {
        field:'lat',
        headerName:"Latitude"
        },
        {
        field:'lon',
        headerName:"Longitude"
        },
        ]
        
        return (
        <>
        <DataGrid rows={data} columns={columns}/>
        </>
        )
}

export default Home
