import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Skyler Styron | JS Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Just a place that I can show my projects', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  // title: "Hey, I'm",
  name: 'Skyler Styron.',
  subtitle: 'Full-Stack Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Full stack developer with a creative eye for branding and marketing. My current role mostly focuses on creating web functionality and interactions that boost user engagement, as well as crafting seamless web experiences.',
  paragraphTwo:
    'Always up for a challenge and thriving in enironments that force me to think outside the box and push my limits(?)',
  paragraphThree:
    "Work hard, play hard. While I do enjoy spending hours learing new tech and building things, I'm always looking for a reason to get outside. Hiking, skateboarding, tennis, cycling, the lake, etc.. You name it, i'm probably about it.",
  resume: '', // if no resume, the button will not show up
};

// WEB DESIGNS DATA
export const webDesignsData = [
  {
    id: nanoid(),
    img: 'Harvest-House.jpeg',
    title: 'Harvest House',
    info: 'Harvest House is a beer garden and music venue located in Denton, TX. I pitched the idea of a site re-design that aligned with the branding of the venue.',
    info2: 'Site built with Squarespace.',
    url: 'https://dentonharvesthouse.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-STS.jpg',
    title: 'Styron Tile Service',
    info: 'Styron Tile Service is a tile and flooring installer. The scope of this project was to build a site that would function as a gallery for work samples.',
    info2: 'Site built with Squarespace.',
    url: 'https://styrontileservice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'backsideskatemag.jpeg',
    title: 'Responsive landing page',
    info: 'Responsive landing page using Bootstrap and a sign up form through MailChimp.',
    info2: '',
    url: 'https://skylerstyron.github.io/skatemagstartup/',
    repo: 'https://github.com/skylerstyron/skatemagstartup', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'deadpanprogram.jpeg',
    title: 'deadpanprogram',
    info: 'Landing page for a new brand.',
    info2: 'Built with Next.js',
    url: 'https://deadpanprogram.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'The Bearded Archer.jpeg',
    title: 'The Bearded Archer',
    info: 'Landing page for a brand.',
    info2: 'Built with Next.js',
    url: 'https://thebeardedarcher.com',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'Utah-Film-2742-31.jpg',
    title: "There's more",
    info: 'Slowly uploading some personal projects.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
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
