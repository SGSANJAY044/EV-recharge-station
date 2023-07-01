import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google }) => {
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
  const markers = data;

  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{ lat: 37.7749, lng:  -122.4194 }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.name}
          position={{ lat: marker.lat, lng: marker.lon }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBExvzTm1RCsYRAMASZG1oQjidRH7GivOw'
})(MapContainer);
