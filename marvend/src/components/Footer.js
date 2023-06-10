import "./FooterStyles.css";
import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:
                "#fff", marginRight: "2rem"}} />
                <div>
                    <p>A2 Lake View Home</p>
                    <p>Jabi, Abuja.</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone 
                size={20} 
                style={{color:
                "#fff", marginRight: "2rem"}} 
                />
                +234 708 655 9484, +234 915 123 1193
                </h4>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk 
                size={20} 
                style={{color:"#fff", 
                marginRight: "2rem"}} 
                />
                m.ovigwe@gmail.com
                </h4>
            </div>
        </div>

        <div className="right">
            <h4>About the company</h4>
            <p>coding, building algorithm, 
                designing UI, Webpress design, 
                App design...</p>

            <div className="social">
            <FaFacebook 
                size={30} 
                style={{color:"#fff", 
                marginRight: "1rem"}} 
                />
                  <FaTwitter 
                size={30} 
                style={{color:"#fff", 
                marginRight: "1rem"}} 
                />
                  <FaLinkedin
                size={30} 
                style={{color:"#fff", 
                marginRight: "1rem"}} 
                />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer

