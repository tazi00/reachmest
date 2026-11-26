export type ServiceItem = {
  id: number
  iconName: string
  label: string
  heading: string
  description: string
  tags: string[]
}

export type GlobalFinding = {
  id: number
  stat: string
  label: string
  description: string
  publisher: string
}

export type RegionalFinding = {
  id: number
  region: string
  flag: string
  stat: string
  label: string
  description: string
  publisher: string
}

export const serviceItems: ServiceItem[] = [
  {
    id: 1,
    iconName: 'Megaphone',
    label: 'Digital Marketing',
    heading: 'Full-Funnel Digital Marketing',
    description:
      'Dedicated digital marketing specialists who plan, execute and optimise campaigns across every channel — SEO, paid, social, email and content — aligned to your business goals.',
    tags: ['SEO', 'Paid Media', 'Content', 'Email'],
  },
  {
    id: 2,
    iconName: 'Search',
    label: 'SEO Services',
    heading: 'Search Engine Optimisation',
    description:
      'Fine-tune your site for peak organic performance with dedicated SEO specialists covering technical audits, content strategy, link building and ongoing rank monitoring.',
    tags: ['Technical SEO', 'On-Page', 'Link Building', 'Audits'],
  },
  {
    id: 3,
    iconName: 'BarChart2',
    label: 'Performance Marketing',
    heading: 'Performance & Paid Media',
    description:
      'AI-powered paid advertising across Google, Meta and programmatic channels. Dedicated specialists manage budgets, creatives and bid strategies to maximise ROAS.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic', 'ROAS'],
  },
  {
    id: 4,
    iconName: 'Share2',
    label: 'Social Media Marketing',
    heading: 'Social Media Management',
    description:
      'Dedicated social media experts craft platform-specific content, manage communities and run targeted paid campaigns to build brand awareness and drive engagement.',
    tags: ['Content Creation', 'Community', 'Paid Social', 'Analytics'],
  },
  {
    id: 5,
    iconName: 'TrendingUp',
    label: 'CRO',
    heading: 'Conversion Rate Optimisation',
    description:
      'Dedicated CRO specialists analyse user behaviour, run A/B tests and redesign conversion flows to turn more of your existing traffic into qualified leads and customers.',
    tags: ['A/B Testing', 'UX Analysis', 'Funnel Optimisation', 'Heatmaps'],
  },
  {
    id: 6,
    iconName: 'Zap',
    label: 'Marketing Automation',
    heading: 'Marketing Automation & AI',
    description:
      'Automate lead nurturing, email sequences and cross-channel workflows with dedicated automation specialists who build, integrate and optimise your MarTech stack.',
    tags: ['HubSpot', 'Make', 'n8n', 'AI Workflows'],
  },
  {
    id: 7,
    iconName: 'Globe',
    label: 'Web Development',
    heading: 'Web Development',
    description:
      'Dedicated front-end and full-stack developers build fast, accessible and conversion-optimised websites using React, Next.js and modern web standards.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 8,
    iconName: 'Smartphone',
    label: 'Application Development',
    heading: 'Mobile & Application Development',
    description:
      'From native iOS and Android to cross-platform React Native and Flutter apps — dedicated developers build, test and ship reliable digital products.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    id: 9,
    iconName: 'Box',
    label: 'SaaS Development',
    heading: 'SaaS & Product Development',
    description:
      'Dedicated SaaS engineers design scalable multi-tenant architectures, build subscription billing flows and iterate on product features to accelerate your roadmap.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
]

export const globalFindings: GlobalFinding[] = [
  {
    id: 1,
    stat: '72%',
    label: 'Employer Talent Shortage',
    description:
      'of employers surveyed across 41 countries reported difficulty filling roles — highlighting why dedicated specialist capacity matters.',
    publisher: 'ManpowerGroup • 2026 Global Talent Shortage Survey',
  },
  {
    id: 2,
    stat: '20%',
    label: 'AI Skills Gap',
    description:
      'of employers identified AI model and application development among the hardest-to-find skills globally.',
    publisher: 'ManpowerGroup • 2026 Global Talent Shortage Survey',
  },
  {
    id: 3,
    stat: '51%',
    label: 'CMOs Seeking Agency Partners',
    description:
      'of marketing organisations surveyed were seeking partnerships with digital marketing and SEO agencies for external expertise.',
    publisher: 'Capgemini Research Institute • CMO Playbook, 2025',
  },
  {
    id: 4,
    stat: '26%',
    label: 'Vendor Satisfaction Rate',
    description:
      'Only 26% of organisations were satisfied with the value and returns provided by external vendors — underscoring the need for transparent, accountable engagements.',
    publisher: 'Capgemini Research Institute • CMO Playbook, 2025',
  },
  {
    id: 5,
    stat: '35%',
    label: 'Remote Developer Workforce',
    description:
      '34.8% of developer survey respondents reported working fully remotely, reinforcing global distributed-team delivery as standard practice.',
    publisher: 'Stack Overflow • Developer Survey 2026',
  },
  {
    id: 6,
    stat: '15%',
    label: 'Independent Developers',
    description:
      '14.9% of surveyed developers identified as independent contractors or freelancers — showing a meaningful pool of specialist talent outside permanent employment.',
    publisher: 'Stack Overflow • Developer Survey 2026',
  },
  {
    id: 7,
    stat: '70%',
    label: 'Skills Projected to Change by 2030',
    description:
      'of the skills used in most jobs are projected to change by 2030, driven by AI — reinforcing access to continuously updated specialist expertise.',
    publisher: 'LinkedIn • Work Change Report, 2025',
  },
  {
    id: 8,
    stat: '45+',
    label: 'GenAI Enrolments Per Minute',
    description:
      'generative-AI course enrolments per minute were recorded globally — up from 25 per minute in 2025 — signalling fast-changing requirements for AI-capable specialists.',
    publisher: 'Coursera • 2026 Global Skills Report',
  },
]

export const regionalFindings: RegionalFinding[] = [
  {
    id: 1,
    region: 'United States',
    flag: '🇺🇸',
    stat: '69%',
    label: 'US Employer Talent Shortage',
    description:
      'of US employers surveyed reported difficulty filling positions in 2026.',
    publisher: 'ManpowerGroup • 2026',
  },
  {
    id: 2,
    region: 'United States',
    flag: '🇺🇸',
    stat: '+10%',
    label: 'US Developer Job Growth',
    description:
      'projected growth in software developer, QA analyst and tester employment between 2025 and 2035.',
    publisher: 'US Bureau of Labor Statistics',
  },
  {
    id: 3,
    region: 'United Kingdom',
    flag: '🇬🇧',
    stat: '73%',
    label: 'UK Employer Talent Shortage',
    description:
      'of UK employers surveyed reported difficulty filling roles in 2026.',
    publisher: 'ManpowerGroup • 2026',
  },
  {
    id: 4,
    region: 'United Kingdom',
    flag: '🇬🇧',
    stat: '69K',
    label: 'Additional UK Programmers Needed',
    description:
      'additional programmers and software development professionals projected to be needed in the UK between 2025 and 2035.',
    publisher: 'Skills England • Digital & Technologies Skills Assessment, 2026',
  },
  {
    id: 5,
    region: 'European Union',
    flag: '🇪🇺',
    stat: '57.5%',
    label: 'EU ICT Recruitment Difficulty',
    description:
      'of EU enterprises that recruited or tried to recruit ICT specialists reported difficulties filling vacancies.',
    publisher: 'Eurostat • ICT Specialists Recruitment, 2024',
  },
  {
    id: 6,
    region: 'European Union',
    flag: '🇪🇺',
    stat: '10.45M',
    label: 'EU ICT Specialists Employed',
    description:
      'ICT specialists were employed across the EU in 2025, accounting for 5.0% of total employment.',
    publisher: 'Eurostat • ICT Specialists, 2026',
  },
  {
    id: 7,
    region: 'Australia',
    flag: '🇦🇺',
    stat: '27%',
    label: 'AU Occupations in Shortage',
    description:
      'of occupations assessed in Australia were classified as nationally in shortage in the 2026 Occupation Shortage List.',
    publisher: 'Jobs and Skills Australia • 2026',
  },
  {
    id: 8,
    region: 'New Zealand',
    flag: '🇳🇿',
    stat: '82%',
    label: 'NZ Tech Capability Gaps',
    description:
      'of organisations in New Zealand technology research reported capability gaps in their teams.',
    publisher: 'Hays NZ • Technology Snapshot FY26/27',
  },
  {
    id: 9,
    region: 'UAE',
    flag: '🇦🇪',
    stat: '~10%',
    label: 'UAE Tech Roles Requiring AI Skills',
    description:
      'of UAE technology, media and telecommunications job postings required AI skills in 2026.',
    publisher: 'PwC • 2026 AI Jobs Barometer: UAE',
  },
]
