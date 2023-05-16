import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');
    const handleSubmit=()=>{
        console.log("hi");
        axios.post('http://localhost:8088/api/user/signin', {
            name:name,
            email: email,
            password: password,
            phone:phone
          })
          .then(function (response) {
            console.log(response);
            if(response?.data?.user?.email==email){
                navigate('/home')
              }
        })
        .catch(function (error) {
            alert(error.response.data)
            console.log(error);
          });
          
    }
    return (
        <>
        <form >
            Name<input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br/>
            Email<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            Password<input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            <br/>
            Phone<input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
            <br />
            <input type="button" value="login" onClick={handleSubmit} />
        </form>
        </>
    )
}

export default Signup
