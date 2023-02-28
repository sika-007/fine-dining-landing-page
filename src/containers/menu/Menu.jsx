import React from 'react'
import { images, data } from "../../constants"
import { SubHeading, Menucomp } from "../../components"  
import "./menu.css"

const Menu = () => {

  const wineElements = data.wines.map((wine, index) => (
    <Menucomp key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
  ))

  const cocktailElements = data.cocktails.map((cocktail, index) => (
    <Menucomp key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
  ))

  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className="app__menu-title">
        <SubHeading title="Menu that fits you palatte"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__menu-menu">
        <div className="app__menu-menu_wine flex__center">
          <p className='app__menu-menu_heading'>Wine & Beer</p>
          <div className='app__menu-menu_items'>
            {wineElements}
          </div>
        </div>
        <div className="app__menu-menu_img flex__center">
          <img src={images.menu} alt="cocktail" />
        </div>
        <div className="app__menu-menu_cocktails flex__center">
          <p className='app__menu-menu_heading'>Cocktails</p>
          <div className='app__menu-menu_items'>
            {cocktailElements}
          </div>
        </div>
      </div>
      <div style={{marginTop: "15px"}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default Menu
