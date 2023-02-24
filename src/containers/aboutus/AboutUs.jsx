import React from 'react'
import "./aboutus.css"
import { images } from "../../constants"

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="about us G" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about us spoon" className='spoon__image' />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know more</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="About us Knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about us spoon" className='spoon__image' />
          <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type='button' className='custom__button'>Know more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
