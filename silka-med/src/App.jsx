import React from 'react'
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>
        
        <div id='about'>
          <About/>
        </div>
      </main>

    </>
  )
}

export default App