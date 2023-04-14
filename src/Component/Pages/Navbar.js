import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logIn"); 
    localStorage.removeItem("TotalItems")
    Navigate('/Home')
    window.location.reload();// remove token from local storage
    // perform any other necessary logout actions, such as redirecting to a login page
  };

  return (
    <div className='Nav'>
        <div className='Nav-logo'>
        <img src={logo} className="img-logo" alt="brand" />
        </div>
        
        <div className='menu-btn'>
            <Link className='Menu' to="/">Home</Link>
            {/* <Link className='Menu' to="/getFood">Menu</Link> */}
            {/* <Link className='Menu' to="/SingIn">SingIn</Link> */}
            {/* <Link className='Menu' to="/Cart">Cart</Link> */}
            {localStorage.getItem("logIn") ? <Link className='Menu' to="/Cart">Cart</Link> : <></>}
            {localStorage.getItem("logIn") ? <Link className='Menu' to="/Order">Order</Link> : <></>} 
            <Link className='Menu' to="/About">About</Link>
            <Link className='Menu' to="/Contact">Contact</Link>
        </div> 
        <div className='login-btn'>
        {localStorage.getItem("logIn") ? <button className='Menu' onClick={handleLogout}>Logout</button> : <Link className='Menu' to="/LogIn">LogIn</Link>}
        </div>
    </div>
  )
}

export default Navbar