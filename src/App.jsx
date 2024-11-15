import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'

function App() {
  let cards = data.map(card => {
    return <Card 
    key = {card.id}
    {...card}
    />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
      
      
    </>
  )
}

export default App
