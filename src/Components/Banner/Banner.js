import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import cover from '../../image/cover-1.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="img-overlay">
                <div className="banner-content">
                    <h1>DEV Learning Institution</h1>
                    <p>This is the right place where you learning about more thing and grow up your carriear.</p>
                   <div>
                   <Link to="/about">
                   <Button variant="primary">About Us</Button>
                   </Link>
                   </div>
                </div>
            </div>
            <img src={cover} alt="" />
        </div>
    );
};

export default Banner;

