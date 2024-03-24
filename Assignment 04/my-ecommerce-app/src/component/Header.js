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
    <header className='header'>
      <div className='logoHeader'>
        <img src = "public/images/logo.png" alt = "Company logo"></img></div>
      <div className='company-nameHeaeder'>Company Name</div>
      <div className='navHeader'>
        <a href='Homepage.js'>Home</a>
        <a href='Productpage.js'>Products</a>
        <a href='Login.js'>Login</a>
      </div>
    </header>
  );
}

export default Header;
