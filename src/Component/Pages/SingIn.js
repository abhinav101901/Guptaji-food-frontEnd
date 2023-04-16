import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SingIn.css'


function SingIn() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [streat, setStreat] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');
  const Navigate = useNavigate();

    const userRegistration = function (event) {
        event.preventDefault();
        axios.post('https://guptaji-food-backend-production.up.railway.app/register', {
            name,email,phone,address:{area,streat,landmark,pincode}
        })
            .then((res) => {
                alert(`Your Acount Created Succesfully`)
                Navigate('/LogIn')
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
    }
  return (
    <div className="SingIn-container">
      <div className='Sing'>
      <form className='Input-data' onSubmit={userRegistration}>
        <div className='heading'> User - Register</div>
      <div className="input-container">
        <label>Name:</label>
        <input type="text" value={name} onChange={((e) => setName(e.target.value))} />
      </div>
      <div className="input-container">
        <label>Phone:</label>
        <input type="text" value={phone} onChange={((e) => setPhone(e.target.value))} />
      </div>
      <div className="input-container">
        <label>Email:</label>
        <input type="email" value={email} onChange={((e) => setEmail(e.target.value))} />
      </div>
      
      <div className="input-container">
        <label>Address:</label>
        <div className='Address'>
        <input type="text" value={area} onChange={((e) => setArea(e.target.value))} placeholder='Area' />
        <input type="text" value={streat} onChange={((e) => setStreat(e.target.value))} placeholder='streat'/>
        <input type="text" value={landmark} onChange={((e) => setLandmark(e.target.value))} placeholder='Landmark'/>
        <input type="text" value={pincode} onChange={((e) => setPincode(e.target.value))} placeholder='Pincode'/>
        </div>
        </div>
      <input className="register-button" type="submit" placeholder="SUBMIT" />
      </form>
      </div>
    </div>
  );
}

export default SingIn;
