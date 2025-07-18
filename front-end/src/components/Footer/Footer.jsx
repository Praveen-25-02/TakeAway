import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">  
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt distinctio vel possimus, et cumque commodi exercitationem sunt consequatur odit itaque, iste dolorum quisquam tempore magnam sit quis dignissimos earum ipsa?</p>
                <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>123456789</li>
                <li>emailid@noq.com</li>
            </ul>
            </div>
            <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Policy</li>
            </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024@ No-Q.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer