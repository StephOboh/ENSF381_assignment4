/*
=========================================================
Name        : HomeMainSection.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Main Home for Header Component
=========================================================
*/

import React, {useState, useEffect} from 'react';
import './HomeMainSection.css';
import { Link } from 'react-router-dom';
import reviews from '../data/review'; // Import the reviews array



function HomeMainSection() {
    const [DisplayedReviews, setDisplayedReviews] = useState([]);

    useEffect(() => {
      const getDisplayedReviews = () => {
        const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random()); // shuffle reviews
        const selectedReviews = shuffledReviews.slice(0, 2); // select two 
        setDisplayedReviews(selectedReviews);
    };
    getDisplayedReviews(); // Call the function to select random reviews
    },[]);


    return (
        <section className='home-main-section'>
            <div className='aboutUs'>
                <h2>About Us</h2>
                <p>
                    Welcome to our online store! We are passionate about providing high quality 
                    products and execeptional customer service. Learn more about our story and 
                    commitment to your satisfaction
                </p>
            </div>
            <button className="shop-now-button">
                <Link to="/Productpage">Shop Now</Link>
            </button>

            <div className='customerReviews'>
                <h2>Customer Reviews</h2>
                {DisplayedReviews.map((review, index) => (
                    <div key={index} className="review">
                    <p>{review.customerName}</p>
                    <p>{review.reviewContent}</p>
                    <p>
                        Rating: {"★".repeat(review.stars)}
                    </p>
                </div>
            ))}
            </div>
        </section>
    );
    }

export default HomeMainSection;
