import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import image from '../../assets/images/station.jpg'
function ControlCard() {
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(null);

    const handleFormInsert = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBExvzTm1RCsYRAMASZG1oQjidRH7GivOw`
    //     );
    //     const { lat, lng } = response.data.results[0].geometry.location;
    //     setLatitude(lat);
    //     setLongitude(lng);
    //   } catch (error) {
    //     console.log('Error:', error);
    //   }
    axios.post('http://localhost:8088/api/station/insert',{
        id:id,
        name:name,
        lat:latitude,
        lon:longitude
    })
    .then( (response)=>{
      console.log(response.data);
  })
  .catch(function (error) {
      alert(error.response.data)
      console.log(error);
    });
    };
    const handleFormUpdate = async (e) => {
      axios.put('http://localhost:8088/api/station/updateuser',{
        id:id,
        name:name,
        lat:latitude,
        lon:longitude
      })
      .then( (response)=>{
        console.log(response.data);
    })
    .catch(function (error) {
        alert(error.response.data)
        console.log(error);
      });
      };
      const handleFormDelete = async (e) => {
      axios.put('http://localhost:8088/api/station/updateuser',{
          id:id,
          name:name,
      })
      .then( (response)=>{
        console.log(response.data);
    })
    .catch(function (error) {
        alert(error.response.data)
        console.log(error);
      });
      };
  
    return (
    <div className='flex'>
      <img src={image} alt="" className='h-3/4' />
        <div className='flex h-full w-full m-10 items-center justify-start'>
        <form >
        <input type="text" value={id} placeholder=' Station ID' onChange={e => setId(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg w-full focus:outline-none'/>
        <br />
            <input type="text" value={name} placeholder=' Station Name' onChange={e => setName(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg w-full focus:outline-none'/>
            <br />
            <input type="text" value={latitude} placeholder='Latitude' onChange={e => setLatitude(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 w-full rounded-lg focus:outline-none'/>
            <br/>
            <input type="text" value={longitude} placeholder='Longitude' onChange={e => setLongitude(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 w-full rounded-lg focus:outline-none'/>
            <br/>
            <div className="flex gap-10">
            <input type="button" value="add"  onClick={()=>handleFormInsert()} className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]'/>
            <input type="button" value="update"  onClick={()=>handleFormUpdate()} className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]'/>
            <input type="button" value="delete"  onClick={()=>handleFormDelete()} className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]'/>
            </div>
        </form>
        </div>
    </div>
    );
  };
  

export default ControlCard
