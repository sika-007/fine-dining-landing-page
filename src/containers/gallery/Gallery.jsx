import React from 'react'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import "./gallery.css"

const Gallery = () => {

  return (
    <div className='app__gallery app__bg section__padding flex__center'>
      <div className="app__gallery-content">
        <div className="app__gallery-content_heading">
          <SubHeading title="Instagram"/>
          <h1 className="headtext__cormorant">Photo Gallery</h1>
        </div>
        <div className="app__gallery-content_text">
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        </div>
        <div className="app__gallery-btn">
          <button type="button" className='custom__button'>View More</button>
        </div>
      </div>
      <div className="app__gallery-images">
        <img src={images.gallery01} alt="gallery 01" />
        <img src={images.gallery02} alt="gallery 02" />
        <img src={images.gallery03} alt="gallery 03" />
        <img src={images.gallery04} alt="gallery 04" />
      </div>
    </div>
  )
}

export default Gallery
