import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='home__content'>
          <h1>Welcome to Jac Adventures!</h1>
          <p>Embark on exciting journeys to discover the wonders of our planet's ecosystems and terrains. Are you ready for an adventure?</p>
          <a class="btn" href="#explore">Explore!</a>
        </div>
    </div>
  )
}

export default Home;
