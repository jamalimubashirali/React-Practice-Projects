import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="m-0 font-mono">
      <Header />
      <Services />
      <Resume />
    </div>
  )
}

export default App;
