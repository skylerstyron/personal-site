import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Skyler Styron | JS Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Just a place that I can put show my projects', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Skyler Styron.',
  subtitle: 'Front-End JavaScript Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a web developer with a creative eye for Branding & Marketing. My main focus is creating web functionality and interactions that boost user engagement and conversions.',
  paragraphTwo: 'In my free time I enjoy hiking, skateboarding, and film photography.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// WEB DESIGNS DATA
export const webDesignsData = [
  {
    id: nanoid(),
    img: 'project-HH.jpg',
    title: 'Harvest House',
    info: 'Harvest House is a Beer Garden and Music Venue located in Denton, TX. This was a web design project that I was contracted to build.',
    info2: 'Site built with Squarespace.',
    url: 'https://dentonharvesthouse.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-STS.jpg',
    title: 'Styron Tile Service',
    info: 'Styron Tile Service is a tile and flooring installer. I was contracted to build a site that would function as a gallery for work samples.',
    info2: 'Site built with Squarespace.',
    url: 'https://styrontileservice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Utah-Film-2742-31.jpg',
    title: 'Coming Soon',
    info: 'Check back for updates on my personal projects.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project-Ai-Helpers.jpg',
  //   title: 'React Search',
  //   info: 'Simple search app using random generated images.',
  //   info2: '',
  //   url: 'https://skylerstyron.github.io/Ai-Helpers/',
  //   repo: 'https://github.com/skylerstyron/Ai-Helpers', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Get in touch',
  email: 'skylerstyron@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/DevSkyler',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/skyler-styron/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/skylerstyron',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/skylerstyrondev',
    },
  ],
};
