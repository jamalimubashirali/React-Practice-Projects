import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="m-0 font-mono">
      <Header />
      <Services />
      <Resume />
      <Skills />
      <Portfolio />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App;
