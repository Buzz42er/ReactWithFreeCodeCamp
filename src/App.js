import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'

const App = () => {
  return (
    <div className='appConteiner'>
      <Nav/>
      <Hero></Hero>
      <Card/>
    </div>
  )
}

export default App
