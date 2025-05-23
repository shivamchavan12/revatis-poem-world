import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import the Header
import Footer from "./components/Footer"; // Import the Footer
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./assets/styles.css"; // Import global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PoemDetail from "./pages/PoemDetail";

function App() {
  return (
    <Router>
      <Header /> {/* Navbar is persistent across pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/poems/:id" element={<PoemDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
