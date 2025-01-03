// Navigation
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navigation() {
  return (
    <div className='ab'>
      <ul>
        <li><Link to="/home" style={{color:'white'}}>Home</Link></li>
        <li><Link to="/contact" style={{color:'white'}}>Contact</Link></li>
        <li><Link to="/about"style={{color:'white'}}>About</Link></li>
        <li><Link to="/binarysearch" style={{color:'white'}}>BinarySearch</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
