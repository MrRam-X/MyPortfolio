import React from "react";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
