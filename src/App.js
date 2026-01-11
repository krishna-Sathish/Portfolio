import React from 'react'
import Header from './Components/Header'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certificates from './Components/Certificate'
const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Certificates/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
