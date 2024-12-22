import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch data on mount
    fetch('./data.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Set error state
        setLoading(false); // Stop loading on error
      });
  }, []); 

  // Conditional rendering based on loading or error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data)

  return (
    <div className="m-0 font-mono">
      <Header headerData = {
        {
          navLinks : data.navLinks,
          bioData : data.bioData,
          about : data.about,
          socailData : data.socials
        }
      }/>
      <Services services = {data.services}/>
      <Resume  education = {data.education} employment = {data.employment}/>
      <Skills skills = {data.skills}/>
      <Portfolio work = {data.work}/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
