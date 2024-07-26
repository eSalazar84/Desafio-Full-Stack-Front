import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>

    </>
  )
}

export default App
