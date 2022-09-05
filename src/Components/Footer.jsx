import React from 'react';
import "./Footer.css";
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        Copyright CarLoungerX | <FaCopyright className='FaCopyright'/>  Hossanadev 2022.
    </div>
  )
}

export default Footer;