import React from 'react'
import "./laurels.css"
import { images, data } from "../../constants"
import { SubHeading, Award } from '../../components'
import { nanoid } from 'nanoid'

const Laurels = () => {

  const awards = data.awards.map(awardObj => (
    <Award 
      key={nanoid()}
      title={awardObj.title}
      image={awardObj.imgUrl}
      subTitle={awardObj.subtitle}
    />
  ))

  return (
    <div className="app__laurels app__bg app__wrapper section__padding">
      <div className="app__laurels-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__laurels-content" id='awards'>
        <div className="app__laurels-content_heading">
          <SubHeading title="Awards & recognition"/>
          <h1 className="headtext__cormorant">Our Laurels</h1>
        </div>
        <div className="app__laurels-content_awards">
          {awards}
        </div>
      </div>
      <div className="app__laurels-image">
          <img src={images.laurels} alt="laurel food" />
      </div>
    </div>
  )
}

export default Laurels
