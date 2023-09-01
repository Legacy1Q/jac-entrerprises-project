import React from 'react';
import './Contact.css';

function YourComponent() {
  return (
    <div className='contact'>
      <header id="showcase" className="grid">
        <div className="bg-image"></div>
        <div className="content-wrap">
          <h1>Welcome to Jac Enterprises</h1>
          <p>We are an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself."</p>
        </div>
      </header>

      <main id="main">
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">Adventure Offerings</h2>
            <div className="content-text">
              <p>JacKr prides itself on educating all their clients on what adventures are provided and what can be expected on a chosen adventure.  Jac is constantly changing and seeking to innovate adventures that offer the ultimate in adventure excitement in a fun and safe way.  Past adventures offered include JacKr's Spelunking!, EYA! bka Experience Your Aquarium!,  Skip 2 My Cay! aka Island Hopping, JT,B! bka Just Trek Baby!, and Twitchers! adventures.</p>
            </div>
          </div>
        </section>

        <section id="section-b" className="grid">
          <ul>
            {/* Repeat this list item structure for each item */}
            <li>
              <div className="card">
                <img src="./assets/images/redsea-1-1024x768.jpg" alt="" />
                <div className="card-content">
                  <h3 className="card-title">AQUARIUMS!!!</h3>
                  <p>Own an aquarium?  Enjoy visiting major aquariums? Love to visit the tropical fish store?  Is the answer...YES!  Come experience those questions...LIVE AND IN LIVING COLOR!</p>
                </div>
              </div>
            </li>
            {/* Repeat this list item structure for each item */}
          </ul>
        </section>

        <section id="section-c" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">Jac will handle all your cravings for adventure</h2>
            <p>EYA!, Spelunking!, Skip 2 My Cay!, JT,B!, and Twitchers! are just a sampling of the various exhilarating and thrilling eco-friendly global outdoor adventure.</p>
          </div>
        </section>

        <section id="section-d" className="grid">
          <div className="box">
            <h2 className="content-title">Contact Us</h2>
            <p>2645 N High Street Columbus, OH 43202</p>
            <p>1.844.932.2626</p>
            <p>greatadventures@jac.biz</p>
          </div>
          <div className="box">
            <h2 className="content-title">About Our Company</h2>
            <p>Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>Jac</strong> was born.</p>
          </div>
        </section>
      </main>

      <footer id="main-footer" className="grid">
        <div>Jac Enterprises</div>
        <div>Web Site Created By <a href="http://wecancodeit.org" target="_blank">We Can Code IT</a></div>
      </footer>
    </div>
  );
}

export default YourComponent;
