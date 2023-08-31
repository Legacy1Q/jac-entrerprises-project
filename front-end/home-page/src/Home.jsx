import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='home__content'>
          <h1>Welcome to Jac Adventures!</h1>
          <p>Embark on exciting journeys to discover the wonders of our planet's ecosystems and terrains.</p>
          <div className="home__row">
            <a href="/learn">
            <img src="./images/nasa-Q1p7bh3SHj8-unsplash.jpg" alt='learn'/>
              <h3>Learn</h3>
            </a>
          </div>
          <div className="home__row">
            <a href="/play">
              <img src="./images/shutterstock_135000779-1200x840.jpg" alt="play" />
              <h3>Play</h3>
            </a>
          </div>
          <div className="home__row">
            <a href="/about">
              <img src="./images/pexels-jopwell-2422290.jpg" alt="" />
              <h3>About</h3>
            </a>
          </div>
          <div className="home__row">
            <a href="/contact">
              <img src="./images/pexels-kerde-severin-1542252.jpg" alt="" />
              <h3>Contact</h3>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home;
