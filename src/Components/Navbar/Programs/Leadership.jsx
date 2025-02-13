import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/leadership.css';
import leader1 from '../../Assests/leader1.png';
import leader2 from '../../Assests/leader2.png';
import leader3 from '../../Assests/leader3.png';

const Leadership = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default: Show 3 images at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Tablets and below
                settings: {
                    slidesToShow: 2 // Show 2 images at a time
                }
            },
            {
                breakpoint: 480, // Smallest screens (mobile)
                settings: {
                    slidesToShow: 1 // Show 1 image at a time
                }
            }
        ]
    };

    return (
        <div className='leadership-container'>
            <h2>LEADERSHIP AND EMPOWERMENT PROGRAM IN YORK VILLAGE</h2>

            {/* Normal Image Layout (Hidden on Mobile) */}
            <div className="leadership-image">
                <img src={leader1} alt="Leader 1" />
                <img src={leader2} alt="Leader 2" />
                <img src={leader3} alt="Leader 3" />
            </div>

            {/* Carousel (Visible Only on Smallest Screens) */}
            <div className="leadership-carousel">
                <Slider {...settings}>
                    <div><img src={leader1} alt="Leader 1" /></div>
                    <div><img src={leader2} alt="Leader 2" /></div>
                    <div><img src={leader3} alt="Leader 3" /></div>
                </Slider>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
            <p>In iaculis mattis lacus enim nunc sed tortor habitasse magnis...</p>
        </div>
    );
};

export default Leadership;
