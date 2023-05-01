import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Hello from "./components/Hello/Hello";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import './App.css';

function MainContent() {
  return (
    <div className="main-content">
      <Hello />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

function BlogPage() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainContent />
              <Footer />
            </>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
