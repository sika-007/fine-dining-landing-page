import React from 'react'
import "./menucomp.css"

const Menucomp = (props) => {
  return (
    <div className='app__menucomp'>
      <div className='app__menucomp-head'>
        <div className='app__menucomp-name'>
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>{props.title}</p>
        </div>
        <div className="app__menucomp-dash" />
        <div className="app__menucomp-price">
          <p className="p__cormorant">{props.price}</p>
        </div>
      </div>
      <div className="app__menucomp-sub">-
        <p className="p__opensans" style={{ color: "#AAA" }}>{props.tags}</p>
      </div>
    </div>
  )
}

export default Menucomp