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


function Header() {
  return (
    <Header className='header'>
      <div className='logoHeader'>
        <img src = "public/images/logo.png" alt = "Company logo"></img></div>
      <div className='company-nameHeaeder'>Company Name</div>
      <nav className="navHeader">
        <Link to="/Homepage" >Home</Link> 
        <Link to="/Productpage" >Products</Link>
        <Link to="/Login" >Login</Link> 
      </nav>
    </Header>
  );
}

export default Header;
