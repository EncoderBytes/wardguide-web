import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Feature from "../components/Sections/Feature";
import About from "../components/Sections/About";
import Testimonial from "../components/Sections/Testimonial";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <About />
      <Feature />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}


