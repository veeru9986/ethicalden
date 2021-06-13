import { nanoid } from 'nanoid';
import img1 from '../images/Processor security.png';
import img2 from '../images/Group 23.png';
import img3 from '../images/Page 1.png';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = [
  {
    id: 0,
    title: 'SECURity EXperts',
    icon: img1,
    description:
      'With the best hand-picked Ethical Hackers on our side, threats and risks pertaining to the cyber world is something we are very good at defending. ',
  },
  {
    id: 1,
    icon: img2,
    title: 'EDuCATION EXPERTS',
    description:
      'Our top-notch trainers and mentors teach for fun. Their unique way of educating and making people understand makes studies very easy. ',
  },
  {
    id: 2,
    icon: img3,
    title: 'Digital marketing',
    description:
      'With a bunch of experienced growth hackers, Ethical Den can help you hack the maximum reach one can achieve in the digital world!.',
  },
];

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
// SERVICES

export const servicesData = [
  {
    id: 0,
    num: '01',
    title: 'Cyber Security Services',
    top: true,
    delay: '100',
    info: 'Our unique and reliable security assessment includes almost all digital infrastructure auditing. From network auditing to cloud security management, we have got all covered.',
  },
  {
    id: 1,
    num: '02',
    title: 'Web Development',
    bottom: true,
    delay: '200',

    info: 'Our expertise in creating a good fully responsive website with attractiveness and decency being the top priority. Any web-application integration and construction can be handled by us.',
  },
  {
    id: 2,
    num: '03',
    left: true,
    delay: '300',

    title: 'Digital Marketing',
    info: 'Our digital marketing service is a wholesome package consisting of various ingredients. We help companies to achieve an effective presence in the digital realm with our unique approach.',
  },
  {
    id: 3,
    num: '04',
    right: true,
    delay: '400',

    title: 'Search Engine Optimization',
    info: 'After the successful creation of a website, Google should display your website whenever your product is searched. With our deep understanding of the Google algorithm, we can rank you higher!',
  },
  {
    id: 4,
    num: '05',
    title: 'UI/UX Development',
    top: true,
    delay: '500',

    info: 'We provide a graphic designing service with full UX and UI support. Our graphic design service covers up social media posts, web designing, logo designing, etc. ',
  },
  {
    id: 5,
    num: '06',
    title: 'Education',
    bottom: true,
    delay: '600',

    info: 'We have mentors who are best and highly reputed in their respective domains. We provide training and certifications on emerging technologies such as Ethical Hacking, UX, and UI, Artificial Intelligence, etc',
  },
  {
    id: 6,
    num: '07',
    title: 'Artifical Intelligence',
    left: true,
    delay: '700',

    info: 'As AI is going to be the future,  we are well-curated with a bunch of industry experts who are best in Data Science and Artificial intelligence. They are well versed in creating futuristic solutions. ',
  },
  {
    id: 7,
    num: '08',
    title: 'Mobile app Development',
    right: true,
    delay: '800',

    info: 'Our hard-working and dedicated bunch of developers with the help of the graphics team can create smooth and decent mobile applications which meet industry standards.  ',
  },
];
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
