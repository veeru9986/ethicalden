import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export const mainMenuItems = [
  {
    path: '/what-we-do',
    title: 'what we do',
  },
  {
    path: '/who-are-we',
    title: 'who are we',
  },
  {
    path: '/training',
    title: 'training',
  },
];

export const socialMenuItems = [
  {
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/company/certisured/',
    name: 'LinkedIn',
  },
  {
    icon: <FaInstagram />,
    url: 'http://www.instagram.com/certisured',
    name: 'Instagram',
  },
  {
    icon: <FaFacebookF />,
    url: 'http://www.facebook.com/certisured',
    name: 'Instagram',
  },
  {
    icon: <FaTwitter />,
    url: 'http://www.twitter.com/certisured',
    name: 'Instagram',
  },
];

export const footerMenuItems = [
  {
    path: '/Boot-Camp-Ethical-Hacking',
    title: 'Bootcamp Ethical Hacking',
  },
  {
    path: '/webinar-career-planning-cyber-security',
    title: 'Webinar career planning cyber security',
  },
  {
    path: '/training/diploma-in-machine-learning',
    title: 'Diploma in Machine Learning',
  },
  {
    path: '/training/android-penetration-testing',
    title: 'Android penetration testing',
  },
  {
    path: '/training/cloud-security-practitioner',
    title: 'Cloud security practitioner',
  },
  {
    path: '/training/web-application-penetration-testing',
    title: 'Web application penetration testing',
  },
];
