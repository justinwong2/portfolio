export interface Experience {
  id: string;
  num: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  writeup: string;
  tags: string[];
  companyUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    num: '01',
    company: 'Ng Teng Fong General Hospital',
    role: 'Data Science Intern',
    period: 'May 2026 - Present',
    location: 'Singapore',
    description: 'Building AI Agents to speed up clinician workflows.',
    writeup: `Public Hospital in Singapore

Responsbilities:
- WIP
`,
    tags: ['AWS', 'Agents'],
    companyUrl: 'http://ntfgh.com.sg/',
  },
  {
    id: 'exp-2',
    num: '02',
    company: 'Precix',
    role: 'Data Science and Operations Intern',
    period: 'May 2025 - Dec 2025',
    location: 'Singapore',
    description: 'Developed features for a SaaS platform serving enterprise clients in the fintech space.',
    writeup: `Healthtech Startup focused on orthopedics and knee health diagnosis.

Responsibilities:
- Built an end-to-end ML Pipeline for knee health detection, built with React, FastAPI, Supabase and Docker containerisation, deployed on Fly.io.
- Developed a PWA for medical device's using Astro, Svelte, and DaisyUI, integrating with RESTful backend APIs (ElysiaJS).
- Streamlined clinical report workflows with n8n automation, saving 30 minutes per report.
- Collaborated in an Agile environment with daily standups, weekly sprint planning and reviews.
`,
    tags: ['ML', 'PWA'],
    companyUrl: 'https://www.precix.io/',
  },
  
];
