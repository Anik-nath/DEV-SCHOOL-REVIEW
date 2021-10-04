import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="img-overlay">
                <div className="banner-content">
                    <h1>The Best Learning Institution</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                   <div>
                   <Link to="/about">
                   <Button variant="primary">About Us</Button>
                   </Link>
                   </div>
                </div>
            </div>
            <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/06/GettyImages-653901746-1440x864.jpg" alt="" />
        </div>
    );
};

export default Banner;