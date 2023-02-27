import React from 'react'
import "./award.css"

const Award = (props) => {
  return (
    <div className="app__award flex__center">
      <div className="app__award-image">
        <img src={props.image} alt="" />
      </div>
      <div className="app__award-content">
        <p className="p__cormorant">{props.title}</p>
        <p className="p__opensans">{props.subTitle}</p>
      </div>
    </div>
  )
}

export default Award
