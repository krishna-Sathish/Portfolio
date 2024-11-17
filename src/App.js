import React from 'react'
import Header from './Components/Header'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Resume/>
    </div>
  )
}

export default App
