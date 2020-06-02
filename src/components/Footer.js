import React from 'react';
import styles from "../components/footer.modules.css"
import { Link } from "gatsby"

// Social Media icons
import image1 from "../images/Youtube.png"
import image2 from "../images/Twitter.png"
import image3 from "../images/Facebook.png"
import image4 from "../images/Pinterest.png"
import image5 from "../images/Instagram.png"

import chevron from "../images/Interface - General - icn_cheveron_down - line.png"



const Footer = () => {



    return (

        <div className="shell mt-5">

            {/*  Top row in the Footer */}
            <div className="row one p-0 m-0" style={styles.top}>
                <div className="col"></div>
                <div className="col list">
                    <h5 className="name">Company</h5>
                    <Link to="" className="link">About</Link>
                    <Link to="" className="link">Contact Us</Link>
                    <Link to="" className="link">Careers</Link>
                </div>
                <div className="col list">
                    <h5 className="name">Account</h5>
                    <Link to="" className="link">Login</Link>
                    <Link to="" className="link">Create Account</Link>
                </div>
                <div className="col list">
                    <h5 className="name">Support</h5>
                    <Link to="" className="link">Help Center</Link>
                    <Link to="" className="link">Accessibility</Link>
                </div>
                <div className="col"></div>
            </div>

            {/*  Center row in the Footer */}
            <div className="row two ml-0" style={styles.middle}>
                <a href="https://www.youtube.com/"><img className="social" src={image1} alt="youtube" /></a>
                <a href="https://twitter.com/"><img className="social" src={image2} alt="twitter" /></a>
                <a href="https://www.facebook.com/"><img className="social" src={image3} alt="facebook" /></a>
                <a href="https://www.pinterest.com/"><img className="social" src={image4} alt="pinterest" /></a>
                <a href="https://www.instagram.com/"><img className="social" src={image5} alt="instagram" /></a>
            </div>

            {/*  Bottom row in the Footer */}
            <div className="row three justify-content-center p-0 m-0" style={styles.bottom}>
                <div className="col listLeft">
                    <p>English</p><img src={chevron} alt="chevron" className="chevron" />
                </div>
                <div className="col listCenter">
                    <p className="link mb-0 pl-2 pr-2">iFit.com. All Rights Reserved</p>
                    <Link to="" className="link pl-2 pr-2">Privacy Policy</Link>
                    <Link to="" className="link pl-2 pr-2">Terms of Use</Link>

                </div>
                <div className="col list">
                </div>
            </div>

        </div>

    )
}

export default Footer;