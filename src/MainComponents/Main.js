import Intro from '../MainComponents/Intro/Intro'
import AboutMe from './AboutMe/AboutMe'
import './Main.css'

import React from 'react'
import Projects from './MyProjects/Projects'
import Contact from './Contact/Contact'

function Main() {
  return (
    <main>
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Main
