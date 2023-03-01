import React from 'react'
import "./footeroverlay.css"
import { images } from '../../constants'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

const FooterOverlay = () => {
  return (
    <div className='app__footer-overlay'>
      <div className="app__footer-overlay_content">
        <div className="app__footer-overlay_content_contact">
          <div className="app__footer-overlay_content_contact-heading">
            <p className="p__cormorant">Contact Us</p>
          </div>
          <div className="app__footer-overlay_content_contact-text">
            <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='p__opensans'>+1 212-344-1230</p>
            <p className='p__opensans'>+1 212-555-1230</p>
          </div>
        </div>
        <div className="app__footer-overlay_content_gericht">
          <div className="app__footer-overlay_content_gericht-heading">
            <h1 className="headtext__cormorant">GER&Iacute;CHT</h1>
          </div>
          <div className="app__footer-overlay_content_gericht-content">
            <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={images.spoon} alt="spoon" />
            <div className="app__footer-overlay_content_gericht-content-icons">
              <BsFacebook color='white' className='social-icon'/>
              <BsTwitter color="white" className='social-icon'/>
              <BsInstagram color="white" className='social-icon'/>
            </div>
          </div>
        </div>
        <div className="app__footer-overlay_content_workhours">
          <div className="app__footer-overlay_content_workhours-heading">
            <p className="p__cormorant">Working Hours</p>
          </div>
          <div className="app__footer-overlay_content_workhours-text">
            <p className="p__opensans">Monday-Friday: 08:00 am -12:00 am</p>
            <p className="p__opensans">Saturday-Sunday: 07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <div className="app__footer-overlay_text">
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterOverlay
