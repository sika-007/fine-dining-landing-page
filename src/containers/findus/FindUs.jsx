import React from 'react'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import "./findus.css"

const Findus = () => {
  return (
    <div className="app__findus app__bg section__padding">
      <div className="app__findus-content">
        <div className="app__findus-content_heading">
          <SubHeading title="Contant"/>
          <h1 className="headtext__cormorant">Find Us</h1>
        </div>
        <div className="app__findus-content_info">
          <div className="app__findus-content_info-address"><p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath CW9 7SG</p>
          </div>
          <div className="app__findus-content_info-opening">
            <p className="p__cormorant">Opening Hours</p>
            <p className="p__opensans">Mon - Fri: 10:00 AM - 11:00 PM</p>
            <p className="p__opensans">Sat - Sun: 10:00 AM - 01:00 AM</p>
          </div>
        </div>
        <div className="app__fiindus-content_btn">
          <button type='button' className="custom__button">Come Visit</button>
        </div>
      </div>
      <div className="app__findus-image flex__center">
        <img src={images.findus} alt="find Us" />
      </div>
    </div>
  )
}

export default Findus
