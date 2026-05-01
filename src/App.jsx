import React from 'react'
import { BiHome } from 'react-icons/bi'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div>
       <Navbar />
      <Routes>
       
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}
