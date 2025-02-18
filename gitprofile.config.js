// gitprofile.config.js

const config = {
  github: {
    username: 'sercadi', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sergio-castro-díaz',
    twitter: 'sercadi_smash',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'sercadi',
    dev: 'sercadi',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'sercadi.github.io',
    phone: '',
    email: 'sergiocastrodiaz2016@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ZoHceFDpJFV40myuvuHCXxHjRdADVZ0N/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'TypeScript',
    'CSS',
    'Markdown',
    'Kubernetes',
  ],
  experiences: [
    {
      company: 'ABBAS TELECOM SL',
      position: 'Administrador de Sistemas',
      from: 'Marzo 2022',
      to: 'Junio 2022',
      companyLink: '',
    },
    {
      company: 'I.E.S Fidiana',
      position: 'Desarrollador de Aplicaciones Web',
      from: 'Marzo 2020',
      to: 'Junio 2020',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'I.E.S Trassierra',
      degree: 'CE Entornos de Ciberseguridad de la Información',
      from: '2023',
      to: '2023',
    },
    {
      institution: 'CES Lope de Vega',
      degree: 'Ciclo Superior - Administrador de Sistemas Operativos en Red',
      from: '2020',
      to: '2022',
    },
      {
      institution: 'I.E.S Fidiana',
      degree: 'Ciclo Medio - Sistemas Microinformáticos y Redes',
      from: '2017',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/sercadi/perfil"
      target="_blank"
      rel="noreferrer"
    >GithubProfile</a> and ❤️`,
};

export default config;
