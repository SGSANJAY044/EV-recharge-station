import React from 'react'

function Signup() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setNumber]=useState('');
    const handleSubmit=()=>{
        console.log("hi");
        axios.post('http://localhost:8088/api/user/login', {
            email: email,
            password: password
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
            Name<input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            <br/>
            Email<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            Password<input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            <br/>
            Phone<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="button" value="login" onClick={handleSubmit} />
        </form>
        </>
    )
}

export default Signup
