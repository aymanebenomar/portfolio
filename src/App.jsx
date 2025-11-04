import React from 'react'
import Hero from './sections/hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'


const App = () => {
  return (
	<>
	<Navbar />
	<Hero />
	<About />
	<Skills />
	<Experience />
	<Projects />
	<Footer />
	</>
  )
}

export default App