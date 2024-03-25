/*
=========================================================
Name        : Header.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Header Component for Company Website
=========================================================
*/
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // import link to styling sheet 


const Header = () =>{
  return (
    <div>
      <header className='header'>
          <img src = "/images/logo.png" alt = "Company logo" className='logoHeader'></img>
          <h1>Company Name</h1>
        </header>
        <nav className="navHeader">
          <Link to="/Homepage" >Home</Link> 
          <Link to="/Productpage" >Products</Link>
          <Link to="/Login" >Login</Link> 
        </nav>
    </div>
  );
}

export default Header;
