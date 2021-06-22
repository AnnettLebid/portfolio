import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio | Anna Lebid ',
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anna',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Anna.png',
  paragraphOne: `After years as an Electromechanical Engineer
  I discovered my passion for programming.
  I love to make things that make a difference 
  and I believe that new technologies can help us 
  create a better world.`,
  paragraphTwo: `Thanks to my engineering background I
  am putting great attention to details and 
  I am used to working with different development teams.`,
  paragraphThree: `I love to learn and code. I like good design 
  and I want to build good user experience.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lovethisplace-app.jpg',
    title: 'LoveThisPlace App',
    info: `LoveThisPlace App allows users to create a card
    with an image and description of the place they love. It is possible to
    create, delete, edit and like the place.`,
    info2: `Built with React, Redux, Node.js and Material-UI.
    Hosted by Heroku and Netlify.`,
    url: 'https://lovethisplace.netlify.app/',
    repo: 'https://github.com/AnnettLebid/lovethisplace-app',
  },
  {
    id: nanoid(),
    img: 'movie-app.jpg',
    title: 'Movies App',
    info: `With Movies App a user can search movies and select favorite movies.`,
    info2: `Built with React, Bootstrap and The Open Movie Database - OMDb API.
    Hosted on Github Pages.`,
    url: 'https://annettlebid.github.io/movie-app/',
    repo: 'https://github.com/AnnettLebid/movie-app',
  },
  {
    id: nanoid(),
    img: 'stock-exchange-project.jpg',
    title: 'Stock Exchange data website',
    info: `A multipage Stock Exchange data website. 
    Users are able to search NASDAQ stock exchange companies by symbol, 
    see the real time stock price and more detailed company profile. 
    The company profile allow to have a good overview 
    of any company details as well as a graph with historical company's price.`,
    info2: `This is a vanilla JavaScript project that makes use of Object Oriented Programming by way of JavaScript classes. 
    Hosted by Heroku.`,
    url: 'https://js-stock-exchange.herokuapp.com/',
    repo: 'https://github.com/AnnettLebid/js-project-stock-exchange',
  },
  {
    id: nanoid(),
    img: 'micro-blogging-app.jpg',
    title: 'Microblogging Web App',
    info: `A fully functional micro blogging Web App. 
    Created according to Figma design.`,
    info2: `Built with React and hosted by Firebase.`,
    url: 'https://my-project-735fe.web.app/',
    repo: 'https://github.com/AnnettLebid/react-micro-blogging',
  },
  {
    id: nanoid(),
    img: 'todo-app.jpg',
    title: 'To-do App',
    info: `With this app user can create tasks, delete and prioritize them.`,
    info2: `Built with React and React-Bootstrap, hosted by Heroku.`,
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
      url: 'https://www.linkedin.com/in/anna-lebed-904b55178/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AnnettLebid',
    },
  ],
};
