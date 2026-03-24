export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
};

export const profile = {
  name: 'Troy Prince',
  title: 'AI Engineer and Autonomous Agent Builder',
  location: 'New York, New York',
  email: 'troyprince@outlook.com',
  linkedin: 'https://www.linkedin.com/in/troyprince1243',
  intro:
    'I work at the frontier of AI, building autonomous agents for coding, QA, and business operations that help teams move faster with more leverage.',
  summary: [
    'My work sits at the intersection of software engineering, technical architecture, and applied AI. I focus on turning large-model capability into reliable systems that can reason, act, and create value inside real workflows.',
    'Today, that means building and shaping autonomous agents for coding, QA, and business operations. I care less about AI as a demo and more about AI as an operational advantage: systems that are observable, maintainable, and genuinely useful to the teams depending on them.',
  ],
  principles: [
    'Build agent systems that are useful, testable, and trustworthy.',
    'Stay close to the workflow, not just the model.',
    'Design for durable operational value, not just a compelling demo.',
  ],
};

export const highlights = [
  'Staff Engineer at AI One, working on cutting-edge AI systems and applied agent workflows.',
  'Focused on autonomous agents for coding, QA, and business operations.',
  'Bridges software engineering, architecture, delivery, and operational AI adoption.',
  'University of Notre Dame computer science graduate and former teaching assistant.',
];

export const specialties = [
  'Autonomous agents',
  'AI engineering',
  'Coding agents',
  'QA automation',
  'Business operations AI',
  'LLM workflows',
  'Technical architecture',
  'JavaScript and TypeScript',
  'Angular',
  'Kubernetes',
  'Salesforce',
  'Microsoft stack',
  'DevOps',
  'Web accessibility',
];

export const roles: Role[] = [
  {
    company: 'AI One',
    title: 'Staff Engineer',
    period: 'Aug 2025 - Present',
    location: 'New York, New York',
    summary:
      'Building cutting-edge AI systems with an emphasis on autonomous agents, applied reasoning, and workflows that improve engineering, QA, and operational execution.',
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
  'I am not open to work. This site is here to share what I am building and how I think about AI systems, autonomous agents, and practical operational leverage.';
