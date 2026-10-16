/**
 * Single source of truth for every string on the site.
 *
 * NOTE: the brand, numbers, testimonials and contact details below are
 * PLACEHOLDERS written for layout purposes. Swap them for your real content.
 */

export const meta = {
  name: 'BusinessCare',
  tagline: 'Enterprise AI, embedded until the results show up.',
  title: 'BusinessCare · Enterprise AI, from first decision to production',
  description:
    'BusinessCare builds and runs AI agents inside your business — embedded with your teams, accountable for outcomes that show up in your numbers.',
  url: 'https://moazzamzaka.github.io/BusinessCare',
  email: 'hello@businesscare.example',
  phone: '+1 555 0100',
  legal: '© 2026 BusinessCare Ltd. All rights reserved.',
  social: 'https://www.linkedin.com/',
  socialLabel: 'Follow BusinessCare',
};

export const cta = {
  primary: { label: 'Talk to us', href: '#contact' },
  secondary: { label: 'See how we work', href: '#how' },
};

/** Top-level navigation. Each item can carry a mega-dropdown of anchors. */
export const nav: {
  label: string;
  href: string;
  panel?: { label: string; blurb: string; href: string }[];
}[] = [
  {
    label: 'What we do',
    href: '#services',
    panel: [
      { label: 'AI agents', blurb: 'Workflows that run end to end', href: '#services' },
      { label: 'Generative AI', blurb: 'Answers from everything you know', href: '#services' },
      { label: 'Machine learning', blurb: 'Forecasts, scoring and quality models', href: '#services' },
      { label: 'Data platforms', blurb: 'The foundation decisions run on', href: '#services' },
      { label: 'Strategy', blurb: 'Where AI pays off, and in what order', href: '#services' },
    ],
  },
  {
    label: 'Platform',
    href: '#platform',
    panel: [
      { label: 'Knowledge', blurb: 'A working model of your business', href: '#platform' },
      { label: 'Agents', blurb: 'Software that reads, decides and acts', href: '#platform' },
      { label: 'Governance', blurb: 'Controls your risk team can inspect', href: '#platform' },
      { label: 'Improvement', blurb: 'Every outcome sharpens the next', href: '#platform' },
    ],
  },
  {
    label: 'Industries',
    href: '#industries',
    panel: [
      { label: 'Healthcare & life sciences', blurb: 'Patient operations and flow', href: '#industries' },
      { label: 'Banking & insurance', blurb: 'Service, risk and compliance', href: '#industries' },
      { label: 'Telecommunications', blurb: 'Network and service operations', href: '#industries' },
      { label: 'Transport & logistics', blurb: 'Fleet, freight and forecasting', href: '#industries' },
      { label: 'Energy & manufacturing', blurb: 'Maintenance and risk modelling', href: '#industries' },
      { label: 'Public sector', blurb: 'Citizen services at scale', href: '#industries' },
      { label: 'Retail & consumer', blurb: 'Demand, pricing and search', href: '#industries' },
      { label: 'Professional services', blurb: 'Delivery and back office', href: '#industries' },
    ],
  },
  {
    label: 'How we work',
    href: '#how',
    panel: [
      { label: 'Deployment', blurb: 'Phases with a clear exit', href: '#how' },
      { label: 'Embedded engineers', blurb: 'On site, virtual, or both', href: '#how' },
      { label: 'Trust & security', blurb: 'Hosting, models and audit', href: '#trust' },
    ],
  },
];

export const hero = {
  eyebrow: 'Three years · 10+ systems in production',
  titleLines: ['Give your operations', 'AI that actually ships.'],
  lede:
    'We take AI from the first roadmap to production, with engineers embedded in your teams — on site or virtually — and stay accountable for the outcome.',
};

/** The numbered service list. */
export const services = [
  {
    n: '01',
    kicker: 'Agents',
    name: 'AI agents',
    desc: 'Workflows that run end to end across the systems you already own. Paperwork, approvals and requests, handled.',
    href: '#services',
  },
  {
    n: '02',
    kicker: 'Answers',
    name: 'Generative AI',
    desc: 'Answers in seconds, drawn from everything your business knows — your documents, your rules, your history.',
    href: '#services',
  },
  {
    n: '03',
    kicker: 'Forecasts',
    name: 'Machine learning',
    desc: 'Forecasting, scoring and quality models that see what is coming, then help you act on it.',
    href: '#services',
  },
  {
    n: '04',
    kicker: 'Foundations',
    name: 'Data platforms',
    desc: 'One trusted set of numbers, in real time, for every team — the ground that decisions and agents run on.',
    href: '#services',
  },
  {
    n: '05',
    kicker: 'Strategy',
    name: 'AI strategy',
    desc: 'Where AI pays off, and in what order. Roadmaps a board can sign off, priced on your own numbers.',
    href: '#services',
  },
];

/** Logo marquee — neutral placeholder wordmarks. */
export const clients = [
  'NORTHWIND', 'MERIDIAN', 'AXIOM HEALTH', 'BLUEPORT', 'LANDMARK',
  'HELIOS', 'COREBANK', 'VERTEX', 'ATLAS GRID', 'HARBOURLINE',
  'NOVA RETAIL', 'CIVICWORKS', 'PINNACLE', 'ORBITEL', 'STONEBRIDGE',
];

/** Interactive showcase rows. */
export const showcase = {
  heading: 'Every floor of the business, switched on.',
  lede:
    'The right AI on every floor, from the back office to the loading dock — working through the night while your people sleep.',
  rows: [
    {
      n: '01',
      kicker: 'Finance and back office',
      name: 'Back-office agents',
      desc: 'Paperwork, approvals and HR questions, handled.',
      stat: 'HR answers in under two minutes',
      hue: 232,
    },
    {
      n: '02',
      kicker: 'Customer service',
      name: 'Voice and chat agents',
      desc: 'Requests resolved end to end, in any language.',
      stat: '65% lower service spend in year one',
      hue: 210,
    },
    {
      n: '03',
      kicker: 'Risk and compliance',
      name: 'Compliance agents',
      desc: 'Thorough checks without the backlog.',
      stat: '72% less manual policy review',
      hue: 262,
    },
    {
      n: '04',
      kicker: 'Knowledge and insight',
      name: 'Generative AI',
      desc: 'Answers in seconds, from your own documents.',
      stat: '80% less time spent finding information',
      hue: 288,
    },
    {
      n: '05',
      kicker: 'IT and data',
      name: 'Data platforms',
      desc: 'The same numbers for every team, in real time.',
      stat: '3× faster analytics across regions',
      hue: 180,
    },
    {
      n: '06',
      kicker: 'Operations and planning',
      name: 'Forecasting models',
      desc: 'See what is coming, then act on it.',
      stat: '86% forecast accuracy in production',
      hue: 42,
    },
  ],
};

/** Layered platform diagram. */
export const core = {
  heading: 'Four layers under every agent.',
  lede:
    'We build each agent on the same four layers — in your cloud or on premises: a working model of your business, the agents themselves, controls your risk team can inspect, and learning from every outcome.',
  top: {
    label: 'People and customers',
    items: ['Email', 'Chat', 'Voice', 'Messaging', 'Portals', 'Teams'],
  },
  layers: [
    {
      key: 'Governance',
      color: 'var(--signal)',
      desc: 'Permissions, approvals, an audit trail, the choice of model and a spending limit for each agent.',
    },
    {
      key: 'Agents',
      color: 'var(--peri)',
      desc: 'Agents that read, decide and act in your systems.',
      chips: ['Document readers', 'Planners', 'Tool callers', 'Voice and chat', 'Reviewers'],
    },
    {
      key: 'Knowledge',
      color: 'var(--indigo)',
      desc: 'A working model of your business that every agent shares.',
      chips: ['Business ontology', 'Documents', 'Rules and policies', 'Permissions', 'Memory'],
    },
    {
      key: 'Improvement',
      color: 'var(--amber)',
      desc: 'Outcomes and corrections become evaluation suites, targeted fixes and regression checks.',
    },
  ],
  bottom: {
    label: 'Your systems',
    items: ['ERP', 'CRM', 'Service desk', 'HR', 'Core banking', 'Data warehouse', 'Data lake', 'Legacy screens'],
  },
};

/** Plan / Build / Operate band. */
export const pillars = {
  heading: 'From the first decision to production, one team.',
  lede:
    'Strategists, engineers and researchers from one firm, so the plan your board signs off is the one that gets built and run.',
  items: [
    {
      name: 'Plan',
      desc:
        'Roadmaps a board can sign off, business cases on your own numbers, the choice of model and vendor, and governance a regulator can follow.',
      links: ['AI strategy'],
    },
    {
      name: 'Build',
      desc:
        'Agents for work that runs across systems, generative AI for answers from what you know, models for forecasts and scores, and the data platforms underneath.',
      links: ['AI agents', 'Generative AI', 'Machine learning', 'Data platforms'],
    },
    {
      name: 'Operate',
      desc:
        'Forward-deployed engineers join your team, take one workflow to production and stay accountable for the target — then run it with you or for you.',
      links: ['How we deploy'],
    },
  ],
};

export const embed = {
  heading: 'Engineers embedded in your teams, on site or virtually.',
  body:
    'Forward-deployed engineers and a deployment lead join your team, working in your tools, your stand-ups and your hours. They pick one workflow, measure it, build it and stay accountable for the result.',
  modes: [
    { name: 'On site', desc: 'Engineers at your desks for discovery, the build and go-live.' },
    { name: 'Virtually embedded', desc: 'In your chat channels, stand-ups and repositories, under identities you issue.' },
    { name: 'Hybrid', desc: 'A lead on site, the squad embedded virtually, scaled up and down as the work demands.' },
  ],
};

export const industries = [
  { name: 'Healthcare & life sciences', items: ['Patient service across channels', 'Hospital command centre', 'Voice of the patient'], hue: 190 },
  { name: 'Banking & insurance', items: ['Service and sales agents', 'Regulatory compliance checks', 'Product knowledge'], hue: 262 },
  { name: 'Telecommunications', items: ['Incident triage and auto-resolution', 'Network lifecycle analysis', 'Quality audit of calls'], hue: 215 },
  { name: 'Transport & logistics', items: ['Agentic accounts payable', 'Workforce onboarding and identity', 'Demand and capacity forecasting'], hue: 168 },
  { name: 'Energy & manufacturing', items: ['Predictive maintenance', 'Risk modelling', 'Field support with conversational AI'], hue: 36 },
  { name: 'Public sector', items: ['Open-source intelligence', 'Health and city data platforms', 'Video analytics for safer cities'], hue: 300 },
  { name: 'Retail & consumer', items: ['Product search and recommendations', 'Demand and promotion modelling', 'Pricing optimisation'], hue: 24 },
  { name: 'Professional services', items: ['Delivery operations', 'Financial sustainability', 'Proposal and knowledge reuse'], hue: 232 },
];

export const testimonials = [
  {
    quote:
      'The team stepped into problems well beyond the brief and fixed them regardless of ownership. Ten months on, the agents they built are still running the workflow.',
    name: 'Sample quote — replace me',
    role: 'Chief Technology Officer, placeholder client',
    org: 'MERIDIAN',
  },
  {
    quote:
      'They were candid about what AI could and could not do, then built the part that mattered. Our analysts now spend their time deciding rather than assembling.',
    name: 'Sample quote — replace me',
    role: 'Head of Data, placeholder client',
    org: 'BLUEPORT',
  },
  {
    quote:
      'One team took us from a board paper to a system in production, with the controls our auditors asked for built in from the first week.',
    name: 'Sample quote — replace me',
    role: 'Digital Director, placeholder client',
    org: 'ORBITEL',
  },
];

export const partners = [
  { name: 'Cloud Partner', sub: 'Advanced tier services' },
  { name: 'Data & AI Partner', sub: 'Certified solutions' },
  { name: 'Compute Partner', sub: 'Verified consultancy' },
  { name: 'CRM Partner', sub: 'Consulting partner' },
  { name: 'ISO/IEC 27001', sub: 'Certified' },
];

export const closing = {
  heading: 'Bring us the work that is heaviest.',
  lede:
    'A strategist and an engineer will look at how it runs today and tell you plainly what kind of AI fits, what it takes and what it will return.',
  primary: { label: 'Talk to us', href: '#contact' },
  secondary: { label: 'Check a workflow first', href: '#how' },
};

export const footer = [
  {
    heading: 'What we do',
    links: [
      { label: 'AI agents', href: '#services' },
      { label: 'Generative AI', href: '#services' },
      { label: 'Machine learning', href: '#services' },
      { label: 'Data platforms', href: '#services' },
      { label: 'Strategy', href: '#services' },
      { label: 'Platform', href: '#platform' },
      { label: 'Trust and security', href: '#trust' },
    ],
  },
  {
    heading: 'How we work',
    links: [
      { label: 'Deployment', href: '#how' },
      { label: 'Embedded engineers', href: '#how' },
      { label: 'Industries', href: '#industries' },
      { label: 'Partners', href: '#trust' },
      { label: 'Talk to us', href: '#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Clients', href: '#voices' },
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#about' },
    ],
  },
];
