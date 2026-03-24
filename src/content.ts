export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
};

export const profile = {
  name: 'Troy Prince',
  title: 'Software and AI Engineer',
  location: 'New York, New York',
  email: 'troyprince@outlook.com',
  linkedin: 'https://www.linkedin.com/in/troyprince1243',
  intro:
    'I build software that helps teams move faster, learn continuously, and create better experiences for the people who use their products every day.',
  summary: [
    'I care deeply about learning, collaboration, and impact. Those three threads show up consistently across my work as a software engineer and technical architect guiding digital transformation.',
    'My background spans front-end engineering, AI-focused problem solving, the Microsoft ecosystem, Salesforce, DevOps, proof-of-concept development, and accessibility. I am most energized when I can translate fast-moving technology into practical, maintainable solutions that improve how a business serves its employees and customers.',
  ],
  principles: [
    'Learn the platform deeply before reaching for complexity.',
    'Work shoulder-to-shoulder with teammates and clients.',
    'Design for maintainability, not just a successful demo.',
  ],
};

export const highlights = [
  'Staff Engineer at AI One, solving complex, cutting-edge AI challenges.',
  'Experience across AI, finance, consulting, and enterprise delivery.',
  'Grounded in front-end engineering, architecture, accessibility, and DevOps.',
  'University of Notre Dame computer science graduate and former teaching assistant.',
];

export const specialties = [
  'Angular',
  'JavaScript and TypeScript',
  'AI engineering',
  'Technical architecture',
  'Kubernetes',
  'Salesforce',
  'Microsoft stack',
  'Web accessibility',
  'DevOps',
  'Proof-of-concept delivery',
];

export const roles: Role[] = [
  {
    company: 'AI One',
    title: 'Staff Engineer',
    period: 'Aug 2025 - Present',
    location: 'New York, New York',
    summary:
      'Solving complex, cutting-edge challenges to enable efficient, accurate, and impactful results from artificial intelligence.',
  },
  {
    company: 'Adaptive Financial Consulting',
    title: 'Software Engineer',
    period: 'Jan 2022 - Aug 2025',
    location: 'New York, New York',
    summary:
      'Built software in high-performance financial environments, continuing a path of thoughtful front-end engineering and delivery in demanding client contexts.',
  },
  {
    company: 'Lab49',
    title: 'Associate Web UI Developer',
    period: 'Jun 2021 - Dec 2021',
    location: 'New York, New York',
    summary:
      'Focused on web UI development in a product-minded consulting environment, sharpening implementation quality and user-experience instincts.',
  },
  {
    company: 'Avanade',
    title: 'Software Engineering Consultant',
    period: 'May 2017 - Jun 2021',
    location: 'Chicago and New York',
    summary:
      'Designed, developed, and reviewed front-end and back-end solutions, researched architecture best practices, and collaborated across global teams while growing deep experience in enterprise delivery.',
  },
  {
    company: 'Morningstar',
    title: 'Technology Intern',
    period: 'Aug 2016 - Dec 2016',
    location: 'London, United Kingdom',
    summary:
      'Worked part time in Morningstar’s London office during a semester abroad, gaining early hands-on experience in the industry.',
  },
  {
    company: 'Spring Lake Beach Dept',
    title: 'Lifeguard',
    period: 'May 2012 - Aug 2016',
    location: 'Spring Lake, New Jersey',
    summary:
      'Built calm decision making, public communication, teamwork, and leadership skills through years of responsibility on the beach patrol.',
  },
];

export const education = {
  school: 'University of Notre Dame',
  degree: 'Bachelor of Science in Computer Science',
  period: '2014 - 2018',
  note: 'Also served as an undergraduate teaching assistant for Data Structures from January 2017 through May 2018.',
};

export const footerBlurb =
  'This first draft pulls from your LinkedIn export and earlier site assets so the foundation is current, but still easy to refine.';
