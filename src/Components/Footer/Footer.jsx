import React from 'react'
import "./footer.css"
import Rounded from "../Assests/rounded-logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="upper-footer">
            <div>
                <h1>Company</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Our Work</p>
                <p>Blog</p>
                <p>Gallery</p>
                <p>Contact Us</p>
                <p>Make a Donation</p>
            </div>

            <div>
                <h1>Our Work</h1>
                <p>Programs</p>
                <p>Events</p>
                <p>Impact</p>
                <p>Success Story</p>
                <p>Gallery</p>
            </div>

            <div>
                <h1>About Us</h1>
                <p>Our Story</p>
                <p>Vision & Mission</p>
                <p>Message from Founder</p>
                <p>Our Team</p>
                <p>Objectives</p>
                <p>Objectives</p>
                <p>Partnership & Sponsors</p>
            </div>

            <div>
                <img src={Rounded} alt=""  />
                <p>Phone: (+232) 346-122-95<br />
                (+1) 301-245-7892</p>
                <p>Email: info@ccisimpact.org</p>
                <p>Instagram: CCIS_Sustainability</p>
            </div>
        </div>
        {/* <div>
            <Link to="/admin"><button>Admin</button></Link>
        </div> */}
        <div className="lower-footer">
            <p>Copyright 2025 CCIS All Rights Reserved </p>
            <p>Privacy policy</p>
            <p>Terms of Service and Agreement</p>
        </div>
    </div>
    
  )
}

export default Footer