export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type SkiResortStat = {
  resort: string;
  days?: number;
  verticalFeet?: number;
};

export type SkiYearStat = {
  year: string;
  days?: number;
  verticalFeet?: number;
};

export const profile = {
  name: 'Troy Prince',
  title: 'AI Engineer and Autonomous Agent Builder',
  location: 'New York, New York',
  email: 'troyprince@outlook.com',
  linkedin: 'https://www.linkedin.com/in/troyprince1243',
  intro:
    'I build practical AI systems and autonomous agents for coding, QA, and business operations, with a software engineering foundation shaped by years in high-performance fintech.',
  summary: [
    'My work sits at the intersection of software engineering, technical architecture, and applied AI. I care about turning model capability into reliable systems that can reason, act, and create value inside real workflows.',
    'That perspective was shaped over years building in demanding financial environments, where performance, correctness, and trust mattered every day. Now I bring that same discipline to AI: building agents and workflows that are useful in practice, not just impressive in a demo.',
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
  'From fintech software engineering to applied AI systems and agentic products.',
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

export const weekender = {
  label: 'Business',
  title: 'Weekender Calendars',
  period: '2022 - Present',
  summary:
    'Since 2022, I have been building Weekender Calendars, a calendar business focused on practical planning tools that feel cleaner, more intentional, and more useful than the default options.',
  links: [
    {
      label: 'Visit Weekender Calendars',
      href: 'https://www.weekendercalendars.com',
    },
  ] satisfies LinkItem[],
};

export const skiing = {
  label: 'Outside Work',
  title: 'Ski trips, tracked for years',
  summary:
    'I keep a detailed Slopes history spanning 115 unique ski days from January 24, 2020 through March 7, 2026, with 1,541,265 vertical feet logged and counting across Telluride, Jackson Hole, Park City, Aspen, Killington, Chamonix, Whistler, and more.',
  links: [
    {
      label: 'See the ski log',
      href: '/#/slopes',
    },
  ] satisfies LinkItem[],
};

export const skiStats = {
  totalDays: 115,
  totalResorts: 32,
  totalRuns: 1119,
  totalVerticalFeet: 1541265,
  totalVerticalMiles: 291.9,
  peakMonth: 'February',
  peakMonthDays: 59,
  dateRange: {
    start: 'January 24, 2020',
    end: 'March 7, 2026',
  },
  topResorts: [
    { resort: 'Jackson Hole Mountain Resort', verticalFeet: 180229, days: 11 },
    { resort: 'Telluride Ski Resort', verticalFeet: 164355, days: 13 },
    { resort: 'Park City', verticalFeet: 123398, days: 9 },
    { resort: 'Steamboat Ski Resort', verticalFeet: 112794, days: 7 },
    { resort: 'Aspen Mountain', verticalFeet: 111252, days: 7 },
    { resort: 'Aspen Snowmass', verticalFeet: 90108, days: 6 },
  ] satisfies SkiResortStat[],
  yearlyVertical: [
    { year: '2020', verticalFeet: 153474, days: 11 },
    { year: '2021', verticalFeet: 148774, days: 13 },
    { year: '2022', verticalFeet: 142898, days: 11 },
    { year: '2023', verticalFeet: 258401, days: 15 },
    { year: '2024', verticalFeet: 352190, days: 27 },
    { year: '2025', verticalFeet: 297329, days: 25 },
    { year: '2026', verticalFeet: 188198, days: 13 },
  ] satisfies SkiYearStat[],
  highlights: [
    '1,541,265 vertical feet logged and counting.',
    '115 unique ski days across 1,119 runs.',
    '32 distinct resorts across North America and Europe.',
    'The strongest vert seasons show up in 2024 and 2025.',
  ],
  topDay: {
    date: 'January 3, 2026',
    resort: 'Hunter Mountain',
    verticalFeet: 40135,
  },
  rawDataHref: '/slopes-manifest.json',
};

export const footerBlurb =
  'New York is home. I love exploring neighborhoods, finding great places to eat and go out, biking around the city, and saying yes to the kind of spontaneous plans that turn into a real adventure.';
