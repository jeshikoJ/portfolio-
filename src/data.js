export const profile = {
  name: 'Jeshiko J',
  firstName: 'Jeshiko',
  watermark: 'JESHIKO',
  role: 'FULL-STACK DEVELOPER',
  tagline: 'Full-Stack Developer | Python, Django & Cloud Infrastructure',
  blurb:
    'Results-driven Full-Stack Developer specializing in building robust, scalable web applications. Expert in Python, Django, and modern frontend technologies, with hands-on experience in cloud infrastructure and CI/CD pipelines.',
  email: 'chandranjeshiko@gmail.com',
  phone: '+91 73958 81571',
  location: 'Kanyakumari, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/JeshikoJ',
  github: '#',
  resume: '/assets/Jeshiko_J_Resume.pdf',
  photo: '/assets/jeshiko.jpg',
  // Replace with your real Formspree endpoint — see README "Contact form" section.
  formEndpoint: 'https://formspree.io/f/REPLACE_ME',
};

export const specializations = [
  { id: '01', label: 'Full-Stack Development' },
  { id: '02', label: 'REST API Design' },
  { id: '03', label: 'Cloud Infrastructure (AWS)' },
  { id: '04', label: 'CI/CD & DevOps' },
];

export const experiences = [
  {
    id: 'crescent',
    title: 'Software Development Intern',
    org: 'Crescent Infotech',
    type: 'Internship',
    tag: 'Current',
    description: [
      'Architected and developed 3+ intelligent software prototypes leveraging machine learning and data processing, reducing manual data handling time by 30%.',
      'Spearheaded end-to-end software development workflows across 2 major project cycles, significantly improving delivery speed and maintaining high code quality standards.',
      'Collaborated within an agile team of 5 developers to build, test, and deploy robust data-driven solutions.',
    ],
  },
];

export const techStacks = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    title: 'Web & Frameworks',
    items: ['HTML5', 'CSS3', 'Django', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];

export const certifications = [
  { name: 'Web Development', issuer: 'NoviTech' },
  { name: 'Data Science using Python', issuer: 'VEI' },
  { name: 'Python Full Stack', issuer: 'E-MAX' },
  { name: 'Interaction Design & Prototyping', issuer: 'Feather' },
  { name: 'Cloud DevOps', issuer: 'SLA' },
];

export const project = {
  year: '2026',
  title: 'E-Commerce Web Application',
  subtitle: 'Full-stack online storefront with Django + MongoDB',
  description:
    'Developed a comprehensive e-commerce platform featuring a scalable Django backend and a responsive user interface. Engineered with clean architecture principles to ensure long-term maintainability and performance in a production environment.',
  features: [
    'Product listing & catalog browsing',
    'Shopping cart & checkout flow',
    'User authentication & accounts',
    'Order management',
    '10+ responsive front-end pages',
  ],
  architecture:
    'Django + MongoDB backend handling 3 core data models (products, orders, users), following MVC architecture for maintainable, scalable code.',
  metrics: [
    { value: '5+', label: 'Core modules' },
    { value: '10+', label: 'Responsive pages' },
    { value: '3', label: 'Data models' },
  ],
  stack: ['HTML', 'CSS', 'JavaScript', 'Django', 'MongoDB'],
  links: {
    demo: '#',
    code: '#',
  },
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
