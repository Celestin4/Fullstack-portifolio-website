import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Hello from "./components/Hello/Hello"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
