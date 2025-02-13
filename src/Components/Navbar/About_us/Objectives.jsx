import React from 'react'
import './CSS/objectives.css'
import obj from '../../Assests/obj_img.png'

const Objectives = () => {
  return (
    <div className='objective-container'>
        <div className="objectives">
          <h1>OUR OBJECTIVES AND KEY PILLARS</h1>
          <hr />
          <div className="main-objective">
            <h2>OUR OBJECTIVES</h2>
            <p className='bullet-paragraph'>To improve awareness and awareness of Climate justice, Gender and Social inclusion, WASH, Economic justice, Education, Health, Agriculture amongst citizens.</p>
            <p className='bullet-paragraph'>To provide sustainable development (Appropriate technology and development).</p>
            <p className='bullet-paragraph'>To provide technical assistance and capacity-building support to organization and communities in implementing climate change mitigation and adaptation projects.</p>
            <p className='bullet-paragraph'>To promote sustainable and resilient practices in sectors such as Energy, Transportation, Agriculture, and waste management, through policy advocacy and awareness-raising efforts.</p>
            <p className='bullet-paragraph'>To enhance Gender and Social inclusion for vulnerable populations across the country.</p>
            <p className='bullet-paragraph'>To enhance Gender and Social inclusion for vulnerable populations across the country.</p>
            <p className='bullet-paragraph'>To end gender disparities and eliminate violence against women and girls’ lives.</p>
            <p className='bullet-paragraph'>To eliminate early and forced marriage. Securing equal participation and opportunities.</p>
            <p className='bullet-paragraph'>To foster and develop increased learning and development opportunities for young people by encouraging and supporting them to contribute, steer initiatives.</p>
            <p className='bullet-paragraph'>To eliminate destructive behaviors.</p>
            <p className='bullet-paragraph'>To create opportunities and express their abilities and skills by empowering them in their decision making.</p>

            <div className='obj'>
              <img src={obj} alt="" />
            </div>
            <h2>OUR PILLARS OT ACTION</h2>
            <h3>Youth Participation</h3>
            <p className='bullet-paragraph'>Mobilizing and equipping young people to engage in policy making and development process.</p>
            <p className='bullet-paragraph'>Building capacity through leadership training, mentorship, and advocacy programs.</p>

            <h3>Gender Equality</h3>
            <p className='bullet-paragraph'>Promoting women’s empowerment and leadership in climate resilience and peacebuilding.</p>
            <p className='bullet-paragraph'>Advocating for policies and initiatives that combat gender-based violence and discrimination.</p>

            <h3>Climate Action</h3>
            <p className='bullet-paragraph'>Driving community-led adaptation and mitigation projects.</p>
            <p className='bullet-paragraph'>Partnering with local stakeholders to address climate induced challenges in agriculture, energy and water resources.</p>

            <h3>Capacity Building</h3>
            <p className='bullet-paragraph'>Delivering targeted training programs to strengthen community resilience.</p>
            <p className='bullet-paragraph'>Supporting skills development for youth and women to enhance their impact and sustainability.</p>
          </div>
        </div>
    </div>
  )
}

export default Objectives