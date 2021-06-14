/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anna Lebid Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anna',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Anna.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lovethisplace-app.jpg',
    title: 'LoveThisPlace App',
    info: '',
    info2: '',
    url: 'lovethisplace.netlify.app/',
    repo: 'https://github.com/AnnettLebid/lovethisplace-app', 
  },
  {
    id: nanoid(),
    img: 'movie-app.jpg',
    title: 'Movies App',
    info: '',
    info2: '',
    url: 'annettlebid.github.io/movie-app/',
    repo: 'https://github.com/AnnettLebid/movie-app', 
  },
  {
    id: nanoid(),
    img: 'stock-exchange-project.jpg',
    title: 'Stock Exchange data website',
    info: '',
    info2: '',
    url: 'js-stock-exchange.herokuapp.com/',
    repo: 'https://github.com/AnnettLebid/js-project-stock-exchange', 
  },
  {
    id: nanoid(),
    img: 'micro-blogging-app.jpg',
    title: 'Microblogging Web App',
    info: '',
    info2: '',
    url: 'my-project-735fe.web.app/',
    repo: 'https://github.com/AnnettLebid/react-micro-blogging', 
  },
  {
    id: nanoid(),
    img: 'todo-app.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://todo-app-anna-lebid.herokuapp.com/',
    repo: 'https://github.com/AnnettLebid/react-planner-app', 
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
