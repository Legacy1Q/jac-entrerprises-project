import React from 'react';
import './Learn.css';

function Learn() {
  return (
    <div className='learn'>
      <div className="learn__content">
        <h1>Welcome to The JAC Informational Page</h1>
        <p>Enjoy our educational videos, pictures, quizzes, downloadable worksheets & infographics! You can view our topics using the menu or via the links.</p>

        <div className="learn__row">
          <a href="/science">
            <img src="./images/335-3355793_science-for-kid.png" alt="science" />
            <h3>Science</h3>
          </a>
        </div>
        <div className="learn__row">
          <a href="/art">
            <img src="./images/happiness-children-hands-children-wallpaper-preview.jpg" alt="" />
            <h3>Art</h3>
          </a>
        </div>
        <div className="learn__row">
          <a href="/history">
            <img src="./images/imageForSharing.jpg" alt="" />
            <h3>History</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Learn;
