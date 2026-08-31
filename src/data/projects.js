export const projects = [
  {
    id: 'trackngo',
    name: 'TrackNGo',
    tagline: 'Smart Bus Tracking & Booking Platform',
    description:
      'TrackNGo is a system designed to digitize private bus operations and improve the experience for passengers, drivers, and administrators.',
    featured: false,
    theme: 'software',
    technologies: [
      'React Native',
      'React',
      'Spring Boot',
      'MySQL',
      'Google Maps API',
      'PayHere',
      'Firebase Cloud Messaging',
      'Twilio',
    ],
    features: [
      'Passenger mobile application',
      'Driver mobile application',
      'Admin dashboard',
      'Live bus tracking',
      'ETA information',
      'Seat booking',
      'Payment integration',
      'Driver booking management',
      'Earnings tracking',
      'Fleet monitoring',
      'Complaint management',
    ],
    details: {
      problem:
        'Private bus operations are largely manual — passengers have no reliable way to know where a bus is or book a seat in advance, and operators lack visibility into their fleet, drivers, and earnings.',
      solution:
        'A three-sided platform connecting passengers, drivers, and administrators: passengers track buses live and book seats from a mobile app, drivers manage their trips and earnings from their own app, and admins monitor the fleet and handle complaints from a web dashboard.',
      contribution: 'Primarily contributed to the Driver App, developing key features and integrating frontend functionality with backend services, while also contributing to the Passenger App and Admin Dashboard.',
      challenges: 'Navigating a large, multi-role system while integrating frontend features with backend APIs and ensuring consistent functionality across the Driver, Passenger, and Admin platforms.',
    },
    links: {
      github: 'https://github.com/dinithrathnayaka23/TrackNGo.git',
      demo: null,
    },
    image: 'trackngo.png',
  },
  {
    id: 'flavors-of-jan',
    name: 'Flavors Of Jan',
    tagline: 'Personal Recipe & Cooking Journal',
    description:
      'A personal cooking journal and recipe management platform that brings together organized recipe collections, intelligent ingredient-based discovery, and AI-assisted recipe exploration.',
    featured: false,
    theme: 'software-alt',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Recipe CRUD',
      'Ingredient-based recipe recommendations',
      'AI-assisted recipe discovery',
      'Interactive flipbook recipe viewer',
      'Personal recipe management',
    ],
    details: {
      problem:
        'Recipes collected from different places — notes, screenshots, memory — are hard to organize, and finding something to cook based on what you already have takes effort.',
      solution:
        'A personal recipe journal that keeps every recipe in one place, recommends dishes based on available ingredients, and presents recipes through an interactive flipbook-style viewer instead of a plain list.',
      challenges: 'Bringing multiple features together while designing a smooth recipe discovery experience and integrating AI-assisted functionality into the platform.',
    },
    links: {
      github: 'https://github.com/JananiPitawala0510/FlavorsOfJan.git',
      demo: null,
    },
    image: 'FlavorsOfJan.png',
  },
  {
    id: 'battery-vitals',
    name: 'Battery Vitals',
    tagline: 'Battery Testing & Health evaluating System',
    description:
      'A hardware system designed to monitor and evaluate rechargeable batteries.',
    featured: false,
    theme: 'hardware',
    technologies: ['ESP32', 'INA219', 'ADS1115', 'DS18B20', 'TP4056', 'TP5100', 'IP2312', 'XL4015'],
    features: [
      'Voltage measurement',
      'Current measurement',
      'Temperature monitoring',
      'Battery health / SOH estimation',
      'Support for multiple battery types',
      'Multi-battery charging capability',
    ],
    details: {
      problem:
        'Rechargeable batteries degrade in ways that are hard to see from the outside — there is no easy, low-cost way to measure their real health over repeated use.',
      solution:
        'An ESP32-based rig that measures voltage, current, and temperature across multiple batteries in parallel, estimates state-of-health, and supports charging different battery types through dedicated charge controller ICs.',
      contribution: 'Implemented the INA219 current sensing module to accurately measure battery current and integrated the lead-acid battery module into the system, enabling real-time monitoring and evaluation of its electrical parameters.',
      challenges: 'Integrating multiple hardware components and sensors while ensuring accurate real-time measurements across different battery types and charging configurations.',
    },
    links: {
      github: 'https://lnkd.in/p/g4s2MVN2',
    },
    image: 'batteryV.jpg',
  },
  {
  id: 'InkWell',
  name: 'InkWell',
  tagline: 'Fully functional blog management platform',
  description:
    'A full-stack blog management platform that enables users to create, manage, and organize blog content through an intuitive interface.',
  featured: false,
  theme: 'software',
  technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  features: [
    'User authentication',
    'Create and publish blog posts',
    'Edit and delete posts',
    'Blog post management',
    'Category and content organization',
    'Responsive user interface',
  ],
  details: {
    problem:
      'Managing and publishing blog content can become difficult without a centralized platform for organizing posts and handling content efficiently.',

    solution:
      'InkWell provides a complete blog management system where users can create, edit, organize, and manage blog posts through a structured and user-friendly platform.',

    challenges:
      'Worked with PHP and MySQL to connect the frontend with backend functionality, manage database operations, and implement a complete CRUD workflow for blog content.',
  },

  links: {
    github: 'https://github.com/JananiPitawala0510/BloggApp.git',
    demo: 'https://lnkd.in/p/gAGaYgdP',
  },

  image: 'inkWell.png',
},
/*
{
  id: 'SecurePulse',
  name: 'SecurePulse (In Progress)',
  tagline: 'Real-time security monitoring & threat detection platform',
  description:
    'An in-progress security monitoring platform designed to collect, analyze, and detect suspicious application activity while helping administrators investigate and respond to potential security incidents.',
  featured: false,
  theme: 'security',
  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Spring Boot',
    'Spring Security',
    'MongoDB',
    'WebSockets',
  ],
  features: [
    'Security event collection and monitoring',
    'Rule-based threat detection',
    'Real-time security alerts',
    'Incident investigation and management',
    'Role-based access control',
    'Security analytics dashboard',
    'Anomaly detection',
    'AI-assisted incident analysis',
  ],
  details: {
    problem:
      'Security events can be difficult to monitor and investigate when they are scattered across applications and systems, making it harder to identify suspicious patterns and respond to potential threats quickly.',

    solution:
      'SecurePulse is being developed as a centralized platform that collects security events, analyzes activity using detection rules and anomaly detection, generates real-time alerts, and provides tools for investigating and managing security incidents.',

    challenges:
      'Currently exploring event-driven architecture, security monitoring, real-time data processing, and intelligent threat detection while designing a scalable system that can handle large volumes of security events.',
  },

  links: {
    github: null,
    demo: null,
  },

  image: null,
},*/
]
