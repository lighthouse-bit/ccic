import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "../Assests/hero1.png"
import hero2 from "../Assests/hero2.png"
import hero3 from "../Assests/hero3.png"
import "./Hero.css"
import { Link } from 'react-router-dom'

const slides = [
    {
        id: 1,
        title: "Mobilizing and equipping young people to engage in policy making and development processes",
        image: {hero1},
    },
    {
      id: 2,
      title: "Promoting women’s empowerment and leadership in climate resilience and peacebuilding",
      subtitle: "Explore powerful tools for your success",
      image: {hero2},
    },
    {
      id: 3,
      title: "Partnering with local stakeholders to address climate-induced challenges in agriculture, energy and water resources",
      subtitle: "",
      image: {hero3},
    },
    {
      id: 4,
      title: "Supporting skill development for youth and women to enhance their impact and sustainability",
      subtitle: "Engage with like-minded professionals",
      image: "https://source.unsplash.com/1600x900/?people",
    },
    {
      id: 5,
      title: "Building capacity through leadership training, mentorship and advocacy programs.",
      subtitle: "Engage with like-minded professionals",
      image: "https://source.unsplash.com/1600x900/?people",
    },
    {
      id: 6,
      title: "Advocating for policies and initiatives that combat gender-based violence and discrimination.",
      subtitle: "Engage with like-minded professionals",
      image: "https://source.unsplash.com/1600x900/?people",
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