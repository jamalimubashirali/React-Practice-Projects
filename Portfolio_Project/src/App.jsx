import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="m-0 font-mono">
      <Header />
      <Services />
      <Resume />
      <Skills />
    </div>
  )
}

export default App;
