import React from "react";
import './CSS/ContactUs.css';

const ContactUs = () =>{
    return(
        <div className="contact-us">
            <h1>CONTACT US</h1>
            <hr style={{marginBottom:"4rem"}}/>

            <div className="contact-container">
                {/* Left Section - Form */}
                <div className="contact-form">
                    <h2>GET IN TOUCH WITH US!</h2>
                    <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="E-mail" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Submit Message</button>
                    </form>
                </div>

                {/* Right Section - Contact Info */}
                <div className="contact-info">
                    <h3>YOU CAN ALSO GET IN TOUCH WITH US THROUGH THE FOLLOWING MEANS</h3>
                    <p><strong>Phone:</strong> (+232) 346-122-95, (+1) 301-245-7892</p>
                    <p><strong>E-mail:</strong> info@ccisimpact.org</p>
                    <p><strong>Instagram:</strong> CCIS_Sustainability</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;