// Action.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image2 from '../Componnet/image/image2.png';

function Action() {
    return (
        <div className='Actionbackground container-fluid'>
            <div>
                {/* Make the Action text large */}
                <p className='Acttext act fw-bold pt-5'>Action</p>
            </div>
            <div className='container-fluid'>
                {/* Make the paragraph text smaller */}
                <p className='small-text fw-light text-darkblue'>
                    We strive to power collective action<br />
                    toward enduring solutions and policies.
                </p>
            </div>

            {/* Cards Section */}
            <div className='row justify-content-center mt-5'>

            <div className='col-md-4 mb-4'>
    <div className='act-card'>
        {['Policy', 'Community', 'Campaigns', 'Join Us', 'Donate'].map((item, index) => (
            <div className='card-body d-flex align-items-center border-bottom-custom' key={index}>
                <p className='card-text flex-grow-1'>{item}</p>
                <FaArrowRight className='arrow-icon' />
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
                    <div className='card full-width-text'>
                        <div className='card-body'>
                            <p className='card-text'>Power in number</p>
                        </div>
                        <br />
                        <div className='container'>
                            <p>Power In Numbers is a national, community-led effort to drive
                                lasting policy changes and investments in
                                civic engagement—ensuring that our AANHPI communities are respected, recognized, and prioritized......
                            </p>
                        </div>
                        <div className='arrow-container'>
                            <FaArrowRight className='arrow-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Action;
