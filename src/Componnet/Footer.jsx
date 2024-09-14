// Footer.js
import React from 'react';
import logo from '../Componnet/image/Group-21.svg';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-3 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 logo-container">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-6 col-xs-6 about-container">
                <h5 className='abt'>About</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-6 col-xs-6 data-container">
                <h5 className='dat'>Data</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Policy Data</a></li>
                  <li><a href="#">Resource Guides</a></li>
                  <li><a href="#">Narrative</a></li>
                  <li><a href="#">Press Releases</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mt-4 mt-md-0 col-sm-6 col-xs-6 narrative-container">
                <h5 className='nar'>NARRATIVE</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Campaigns</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mt-4 mt-md-0 col-sm-6 action-container">
                <h5 className='act'>ACTION</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Join Us</a></li>
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="lab mb-0">&copy; 2024 My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
