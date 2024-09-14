import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon


function Header() {
  return (
    <header className="headerbackground text-white p-3">
      {/* Data with arrow */}
      <h1 className="container fs-1 fw-bold pt-5 text-center text-md-start">
        <span className="fw-bold">Data </span>
        <FaArrowRight className="act" />
        <span className="fw-bold">NARRATIVE </span>
        <FaArrowRight className="act" />
        <span className="fw-bold">ACTION</span>
      </h1>
      <div className='container pt-5'>
        <p className="fs-5 text-center text-md-start">
          We are committed to producing accurate data<br />
          that supports community narratives and<br />
          drives action toward enduring solutions.
        </p>
      </div>
      <nav className="container pt-5">
        <div className="d-flex flex-wrap justify-content-center">
          <a className="btn btn-warning text-white rounded-pill mx-1 mb-2" href="/">
            Home
          </a>
          <a className="btn btn-warning text-white rounded-pill mx-1 mb-2" href="/about">
            About
          </a>
          <a className="btn btn-warning text-white rounded-pill mx-1 mb-2" href="/narrative">
            <span>Narrative</span>
          </a>
          <a className="btn btn-warning text-white rounded-pill mx-1 mb-2 d-flex align-items-center" href="/action">
            <span>Action</span>
            {/* Add icon here if needed */}
          </a>
          <a className="btn btn-warning text-white rounded-pill mx-1 mb-2" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
