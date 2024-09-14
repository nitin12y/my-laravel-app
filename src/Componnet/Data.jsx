import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image2 from '../Componnet/image/image2.png';

function Data() {
  return (
    <div className=' container-fluid'>
            <div>
                {/* Make the Action text large */}
                <p className='datatext  fw-bold pt-5'>DATA</p>
            </div>
            <div className='container-fluid'>
                {/* Make the paragraph text smaller */}
                <p className='small-text fw-light text-darkblue'>
                We uplift narratives that improve recognition and<br></br> prioritization of our communities.
                </p>
            </div>

            {/* Cards Section */}
            <div className='row justify-content-center mt-5'>

            <div className='col-md-4 mb-4'>
    <div className='act-card'>
        {['Policy', 'Community', 'Donate','Join us','Truth'].map((item, index) => (
            <div className='card-body d-flex align-items-center border-bottom-custom' key={index}>
                <p className='card-text flex-grow-1'>{item}</p>
                <FaArrowRight className='arrow1-icon' />
                <br />
            </div>
        ))}
    </div>
</div>


                {/* Card 1: Image on the lower side */}
                <div className='col-md-4 mb-4'>
                    <div className='card bg-orange'>
                        <div className='card-body'>
                            <p className='card-text'>
                                Being the Squeaky Wheel: Timely Call for Disaggregated Data Use Cases
                                Disaggregated data is a powerful tool for
                            </p>
                        </div>
                        <img src={image2} className='card-img-bottom' alt='Card image' />
                    </div>
                </div>

                {/* Card 2: Full-width text block */}
                <div className='col-md-4 mb-4'>
                    <div className='card bg-orange'>
                        <div className='card-body'>
                            <p className='card-text'>
                                Being the Squeaky Wheel: Timely Call for Disaggregated Data Use Cases
                                Disaggregated data is a powerful tool for
                            </p>
                        </div>
                        <img src={image2} className='card-img-bottom' alt='Card image' />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Data;
