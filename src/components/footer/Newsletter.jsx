import React from 'react'
import SubHeading from '../subheading/SubHeading'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter"/>
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      </div>
      <div className="app__newsletter-form">
        <p className="p__opensans">And never miss the latest Updates</p>
        <div className="app__newsletter-form_email">
          <input type="email" placeholder="Email Address"/>
          <button type='button' className="custom__button">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
