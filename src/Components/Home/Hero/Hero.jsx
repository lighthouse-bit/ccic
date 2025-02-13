import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "../../Assests/hero1.png"
import hero2 from "../../Assests/hero2.png"
import hero3 from "../../Assests/hero3.png"
import hero4 from "../../Assests/hero4.png"
import hero5 from "../../Assests/hero5.png"
import hero6 from "../../Assests/hero6.png"
import "./Hero.css"
import { Link } from 'react-router-dom'

const slides = [
    {
        id: 1,
        title: "Mobilizing and equipping young people to engage in policy making and development processes",
        image: hero1,
        link: "#",
    },
    {
      id: 2,
      title: "Promoting women’s empowerment and leadership in climate resilience and peacebuilding",
      subtitle: "Explore powerful tools for your success",
      image: hero2,
      link: "#",
    },
    {
      id: 3,
      title: "Partnering with local stakeholders to address climate-induced challenges in agriculture, energy and water resources",
      subtitle: "",
      image: hero3,
      link: "#",
    },
    {
      id: 4,
      title: "Supporting skill development for youth and women to enhance their impact and sustainability",
      subtitle: "Engage with like-minded professionals",
      image: hero4,
      link: "#",
    },
    {
      id: 5,
      title: "Building capacity through leadership training, mentorship and advocacy programs.",
      subtitle: "Engage with like-minded professionals",
      image: hero5,
      link: "#",
    },
    {
      id: 6,
      title: "Advocating for policies and initiatives that combat gender-based violence and discrimination.",
      subtitle: "Engage with like-minded professionals",
      image: hero6,
      link: "#",
    },
];
const Hero = () => {
    return(
        <div className="hero-carousel">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
            {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
                <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
                >
                <div className="hero-overlay">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <button className="hero-button">Get Involved</button>
                </div>
                </div>
            </SwiperSlide>
            ))}
      </Swiper>

      <div>
        <h1 className="test">this is from style</h1>
      </div>
    </div>

    )
}

export default Hero;