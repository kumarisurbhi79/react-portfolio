import {Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"

import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Project"
import Stats from "./Stats"
import Contact from "./Contact"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
</div>
  )
}

export default App