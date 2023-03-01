import React from 'react'
import { FooterOverlay, Newsletter } from '../../components'
import "./footer.css"

const Footer = () => {
  return (
    <div className="app__footer app__bg">
      <div className="app__footer-newsletter">
        <Newsletter />
      </div>
      <div className="app__footer-footer_overlay section__padding">
        <FooterOverlay />
      </div>
    </div>
  )
}

export default Footer
