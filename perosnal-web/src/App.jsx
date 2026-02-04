import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-slate-950 w-full min-h-screen">
      <Navbar />

      <Hero />

      <Projects />
    </main>
  )
}

export default App
