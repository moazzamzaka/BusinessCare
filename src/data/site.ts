/**
 * Single source of truth for every string on the site.
 *
 * NOTE: the brand, numbers and contact details below are
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
    label: 'How we work',
    href: '#how',
    panel: [
      { label: 'Deployment', blurb: 'Phases with a clear exit', href: '#how' },
      { label: 'Embedded engineers', blurb: 'On site, virtual, or both', href: '#how' },
      { label: 'Trust & security', blurb: 'Hosting, models and audit', href: '#platform' },
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
    kicker: 'Foundations',
    name: 'Data platforms',
    desc: 'One trusted set of numbers, in real time, for every team — the ground that decisions and agents run on.',
    href: '#services',
  },
  {
    n: '04',
    kicker: 'Strategy',
    name: 'AI strategy',
    desc: 'Where AI pays off, and in what order. Roadmaps a board can sign off, priced on your own numbers.',
    href: '#services',
  },
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
      links: ['AI agents', 'Generative AI', 'Data platforms'],
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
      { label: 'Data platforms', href: '#services' },
      { label: 'Strategy', href: '#services' },
      { label: 'Platform', href: '#platform' },
      { label: 'Trust and security', href: '#platform' },
    ],
  },
  {
    heading: 'How we work',
    links: [
      { label: 'Deployment', href: '#how' },
      { label: 'Embedded engineers', href: '#how' },
      { label: 'Talk to us', href: '#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#about' },
    ],
  },
];
