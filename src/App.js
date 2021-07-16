import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./compponents/Navbar/Index";
import HeroSection from "./compponents/HeroSection/Index";
import About from "./compponents/About/Index";
import Sidebar from "./compponents/Sidebar/Index";
import { HomeObjOne } from "./compponents/About/Data";
import Destination from "./compponents/Destination/Index";
import { DestinationObjOne } from "./compponents/Destination/Data";
import Testimonial from "./compponents/Testimonial/Index";
import { TestimonialObjOne } from "./compponents/Testimonial/Data";
import Footer from "./compponents/Footer/Index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...HomeObjOne} />
      <Destination {...DestinationObjOne} />
      <Testimonial {...TestimonialObjOne} />
      <Footer />
    </Router>
  );
}

export default App;
