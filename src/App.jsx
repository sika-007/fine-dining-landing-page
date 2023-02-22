import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './containers'
import { Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
