import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"

function App() {

  return (
   <div className="app">
    <Navbar/>
    <Router>
      <Routes>
        <Route/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
