import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/navbar'
import ProductCategory from './pages/ProductCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/category/:categoryName' element={<ProductCategory /> } />
      </Routes>
    </>
  )
}

export default App
