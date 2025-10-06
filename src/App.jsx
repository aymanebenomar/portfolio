import React from 'react'
import Hero from './sections/hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'


const App = () => {
  return (
	<>
	<Navbar />
	<Hero />
	<About />
	<Skills />
	<Experience />
	<Projects />
	</>
  )
}

export default App