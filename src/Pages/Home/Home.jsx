import React from 'react';  
import Hero from '../../Components/Home/Hero/Hero';
import './Home.css';
import PartCollab from '../../Components/Home/PartCollab';
import donate from "../../Components/Assests/donate.png"
import event1 from "../../Components/Assests/event1.png"
import event2 from "../../Components/Assests/event2.png"
import event3 from "../../Components/Assests/event3.png"
import Founder from "../../Components/Assests/founder.png"
import GallerySec from '../../Components/Home/GallerySec';
import LeaveUs from '../../Components/Home/LeaveUs';


const programs = [
    {
      id: 1,
      date: "20th January 2025",
      title: "Advancing women and girls in climate resilience",
      image: event1,
      link: "#",
    },
    {
      id: 2,
      date: "11th October 2024",
      title: "Youth leadership in climate action and peacebuilding",
      image: event2,
      link: "#",
    },
    {
      id: 3,
      date: "14th February 2023",
      title: "Local conference of youth (LCOY) in Freetown",
      image: event3,
      link: "#",
    },
  ];

const Home=() => {
    return(
        <div>
            <Hero />
            <div className="main-body">
                <div className="content-wrapper">
                    <h1 className="title">CENTER FOR COMMUNITY IMPACT AND SUSTAINABILITY</h1>
                    <p className="description">
                    The center for community impact and sustainability (CCIS) is a dynamic youth-led organization dedicated to empowering
                    vulnerable communities through sustainable development initiatives. CCIS works to address pressing global challenges by
                    advancing <span className="highlight">youth participation, gender equality, climate action, and capacity building</span>.
                    With operations spanning multiple countries including Sierra Leone, CCIS champions innovative solutions to ensure marginalized groups-
                    particularly women, girls, and youth- are at the forefront of decision-making processes and sustainable development efforts.
                    </p>
                    <button className="learn-more-btn">Learn more</button>
                </div>

                <div className="message">
                    <div className="message-wrapper">
                        <div className="image-container">
                            <img
                                src={Founder}
                                alt="Founder"
                                className="founder-image"
                            />
                            <p className="founder-name">Lorem ipsum dolor</p>
                            <p className="founder-title">CEO/FOUNDER</p>
                        </div>
                        <div className="message-content">
                            <h2 className="message-title">MESSAGE FROM THE FOUNDER</h2>
                            <p className="message-text">
                                Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus
                                tellus quam viverra. Leo sed massa non varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt
                                sed sed tortor euismod ultricies vitae orci gravida.
                            </p>
                            <p className="message-text">
                                Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. Dignissim viverra at magna sed sapien urna adipiscing
                                nisl. Enim et et enim nibh ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. Sodales
                                nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. Dignissim dictum tristique fermentum semper urna in amet.
                            </p>
                            <p className="message-text">
                                Nulla pretium vivamus a integer sit enim lobortis magna. Volutpat arcu ac ullamcorper sed nunc.
                            </p >

                            <p className="message-text">
                                In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.
                            </p>
                        </div>
                    </div>
                </div>
                

                {/* Donation Section */}
                <div className="donation-section">
                    <div>
                        <h2>MAKE A DONATION TODAY TO SUPPORT US!</h2>
                        <button className="donate-button">Donate Now</button>
                    </div>
                    <div className='donate-image'>
                        <img src={donate} alt=""  />
                    </div>  
                </div>
      
                {/* Programs Section */}
                <div className="programs-section">
                    <h2>PROGRAMS</h2>
                    <div className="programs-carousel">
                        {programs.map((program) => (
                        <div className="program-card" key={program.id}>
                        <img src={program.image} alt={program.title} />
                        <p className="program-date">{program.date}</p>
                        <h3 className="program-title">{program.title}</h3>
                        <a href={program.link} className="learn-more">
                            Learn More
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="statements">
                <div>
                    <h1>OUR VISION</h1>
                    <p>To create a world where empowered youth lead inclusive and sustainable communities, fostering resilience and prosperity for all.</p>
                </div>
                <div>
                    <h1>OUR MISSION</h1>
                    <p>To inspire and empower communities by fostering youth leadership, promoting gender equality, and driving climate action for a sustainable and inclusive future.</p>
                </div>  
            </div>
            <div className="statements">
                <div>
                    <h1>OUR OBJECTIVES</h1>
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
                </div>
                <div>
                    <h1>OUR PILLARS OF ACTION</h1>
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

             <div className="partners-collaborators">
                <div className='part-collab'>
                    <h1>OUR PARTNERS AND COLLABORATORS</h1>
                </div>
                <PartCollab />
                <GallerySec />
                <LeaveUs />
            </div>       
        
        </div>
    )
}

export default Home;