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
        <a href='/'>Home</a>
        <a href='/learn'>Learn</a>
        <a href='/play'>Play</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>
  )
}

export default Nav;
