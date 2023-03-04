import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    return (
        <div className='bg-black py-14 text-white text-center'>
           <p>&#169; Copyright {date.getFullYear()}-Habib Ullah | All Rights Reserved</p> 
        </div>
    );
};

export default Footer;