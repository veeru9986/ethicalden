import React, { useState, useEffect } from 'react';
// import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';
import logo from '../images/Layer 2.png';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import Navbar from './Navbar/Navbar';
import HeroBackground from './HeroBackground/HeroBackground';
import HeroTopics from './HeroTopics/HeroTopics';
import OurServices from './OurServices/OurServices';
import RecentWorks from './RecentWorks/RecentWorks';
import ReviewsByOurClient from './ReviewsByOurClient/Reviews';
import Teams from './Teams/Teams';
import Clients from './Clients/Client';

function App() {
  const [hero, setHero] = useState([]);
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero([...heroData]);
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Navbar Logo={logo} />
      <HeroBackground />
      <HeroTopics data={hero} />
      <OurServices />
      <RecentWorks />
      <ReviewsByOurClient />
      <Teams />
      <Clients />
    </PortfolioProvider>
  );
}

export default App;
