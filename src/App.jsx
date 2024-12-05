import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import ProductsAndServices from "./Pages/ProductsAndServices/ProductsAndServices";
import Careers from "./Pages/Careers/Careers";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products-and-services" element={<ProductsAndServices />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

