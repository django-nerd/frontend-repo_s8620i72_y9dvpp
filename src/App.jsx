import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Production from './pages/Production'
import Bottling from './pages/Bottling'
import Wholesale from './pages/Wholesale'
import Retail from './pages/Retail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-olive-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/production" element={<Production />} />
        <Route path="/bottling" element={<Bottling />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
