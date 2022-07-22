import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CanvasWrap from './components/smoker3f'
import DrawerComp from './components/DrawerComp'
import Identities from './components/Identities'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <CanvasWrap className="z-0" />
      <BrowserRouter>
        <DrawerComp>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/identities" element={<Identities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </DrawerComp>
      </BrowserRouter>
    </>
  )
}
export default App
