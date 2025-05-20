
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/Header"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Team from "@/pages/Team"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/*" element={<Services />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </Router>
  )
}

export default App
