import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Chinese from "./image/chinese.png";
function Slider() {
  return (
    <div id="textImageSlider" className="Slider carousel slide container" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="row">
            {/* Text Side */}
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                <h2>Text for Slide 1</h2>
                <p>This is the description text for the first slide. You can put any content here to describe the slide.</p>
              </div>
            </div>
            {/* Image Side */}
            <div className="col-md-6">
              <img src={Chinese} className="d-block w-100" alt="Slide 1" />
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item ">
          <div className="row">
            {/* Text Side */}
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                <h2>Text for Slide 2</h2>
                <p>This is the description text for the second slide. You can put any content here to describe the slide.</p>
              </div>
            </div>
            {/* Image Side */}
            <div className="col-md-6">
              <img src={Chinese} className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <div className="row">
            {/* Text Side */}
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                <h2>Text for Slide 3</h2>
                <p>This is the description text for the third slide. You can put any content here to describe the slide.</p>
              </div>
            </div>
            {/* Image Side */}
            <div className="col-md-6">
              <img src={Chinese} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#textImageSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#textImageSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
