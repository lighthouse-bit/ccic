import React from 'react'
import "./AboutUs.css"
import AboutImage from '../../Components/Assests/about_us.png'
import logo from '../../Components/Assests/logo2.png'


const AboutUs = () => {
  return (
    <div className='container'>
      <div className='about-us'>
        <h1>ABOUT US</h1>
        <hr />
        <img src={AboutImage} alt="" />

        <div className="about-text">
          <p>
          The center for community impact and sustainability (CCIS) is a dynamic youth-led organization dedicated to empowering vulnerable communities through sustainable development initiatives. CCIS works to address pressing global challenges by advancing youth participation, gender equality, climate action, and capacity building. With operations spanning multiple countries including Sierra Leone, CCIS champions innovative solutions to ensure marginalized groups- particularly women, girls, and youth- are at the forefront of decision-making processes and sustainable development efforts. 
          </p>
          <p>The center for community impact and sustainability (CCIS) is a dynamic youth-led organization dedicated to empowering vulnerable communities through sustainable development initiatives. CCIS works to address pressing global challenges by advancing youth participation, gender equality, climate action, and capacity building. With operations spanning multiple countries including Sierra Leone, CCIS champions innovative solutions to ensure marginalized groups- particularly women, girls, and youth- are at the forefront of decision-making processes and sustainable development efforts. </p>
        </div>
      </div>

      <div className="partners">
          <h1>OUR PARTNERS AND COLLABORATORS</h1>
          <div className="partner-card">
            <div className="partner-item">
              <img src={logo} alt="Partner 1" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 2" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 3" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 4" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 5" />
            </div>
        </div>
      </div>
      <div className="partners">
          <div className="partner-card">
            <div className="partner-item">
              <img src={logo} alt="Partner 1" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 2" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 3" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 4" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 5" />
            </div>
        </div>
      </div>
      <div className="partners">
          <div className="partner-card">
            <div className="partner-item">
              <img src={logo} alt="Partner 1" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 2" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 3" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 4" />
            </div>
            <div className="partner-item">
              <img src={logo} alt="Partner 5" />
            </div>
        </div>
      </div>
     
        
    </div>
  )
}

export default AboutUs