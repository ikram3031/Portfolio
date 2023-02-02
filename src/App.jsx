
import { BrowserRouter, Routes, Route, Link, redirect } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App