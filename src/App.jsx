import React from "react";
// import Navbar from "./sections/navbar";
// import Hero from "./sections/Hero";
import {Header} from "./components/Header/Header";
import {Hero} from "./components/Hero/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className=" mx-auto lg:px-20 md:px-10 sm:px-5 px-4">
      {/* <Navbar />
      <Hero /> */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
