import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>
      <div className='nav__header'>
        <h1>Jac Adventures</h1>   
        <p>Explore, Learn, and Play with Us!</p>
      </div>
      <div className='nav__navbar'>
        <a href='#'>Home</a>
        <a href='#'>Explore</a>
        <a href='#'>Learn</a>
        <a href='#'>Play</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>
    </div>
  )
}

export default Nav;
