/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import logo from '../images/Layer 2.png';
import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  servicesData,
} from '../mock/data';
import Navbar from './Navbar/Navbar';
import HeroBackground from './HeroBackground/HeroBackground';
import HeroTopics from './HeroTopics/HeroTopics';
import OurServices from './OurServices/OurServices';
import RecentWorks from './RecentWorks/RecentWorks';
import ReviewsByOurClient from './ReviewsByOurClient/Reviews';
import SoftwareCompany from './SoftwareCompany/index';
import Clients from './Clients/Client';

function App() {
  const [hero, setHero] = useState([]);
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  // eslint-disable-next-line no-shadow
  const [services, setServices] = useState([]);

  useEffect(() => {
    setHero([...heroData]);
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setServices([...servicesData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, services }}>
      <Navbar Logo={logo} />
      <HeroBackground />
      <HeroTopics data={hero} />
      <SoftwareCompany />

      <OurServices data={services} />
      {/* <RecentWorks /> */}
      <ReviewsByOurClient />
      <Clients />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
