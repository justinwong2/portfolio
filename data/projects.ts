export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  writeup: string;
  tags: string[];
  year: string;
  role: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    num: '01',
    title: 'Portfolio',
    subtitle: 'Personal website with brutalist design',
    description: 'A Swiss Brutalist portfolio featuring a guestbook with OAuth authentication, built with Next.js 14 and Vercel Postgres.',
    writeup: `This portfolio represents my approach to web development: intentional, minimal, and functional. Built with Next.js 14 using the App Router, it features a message board where visitors can leave post-it style notes after authenticating via OAuth.

The design follows Swiss Brutalist principles—no rounded corners, no gradients, no shadows. Just clean typography, intentional spacing, and a forest-inspired color palette.

Key technical decisions:
- Server Components for optimal performance
- Drizzle ORM with Vercel Postgres
- CSS Modules for scoped styling
- NextAuth.js for authentication`,
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    year: '2026',
    role: 'Design & Development',
    githubUrl: 'https://github.com/justin/portfolio',
    demoUrl: 'https://justin.sg',
  },
  {
    id: 'cli-toolkit',
    num: '02',
    title: 'CLI Toolkit',
    subtitle: 'Developer productivity tools',
    description: 'A collection of command-line utilities for automating repetitive development tasks, built with Rust for speed and reliability.',
    writeup: `A suite of CLI tools designed to streamline common development workflows. Built in Rust for maximum performance and cross-platform compatibility.

Features include:
- Git workflow automation
- Code scaffolding generators
- Environment variable management
- Database migration helpers

The toolkit emphasizes composability—each tool does one thing well and can be piped together for complex operations.`,
    tags: ['Rust', 'CLI', 'DevTools'],
    year: '2025',
    role: 'Development',
    githubUrl: 'https://github.com/justin/cli-toolkit',
  },
  {
    id: 'data-viz',
    num: '03',
    title: 'DataViz Engine',
    subtitle: 'Real-time analytics dashboard',
    description: 'An interactive data visualization platform with customizable widgets, real-time updates, and export capabilities.',
    writeup: `A comprehensive analytics dashboard built for monitoring key business metrics in real-time. Features include customizable chart widgets, drill-down capabilities, and automated report generation.

Technical highlights:
- WebSocket connections for live data
- D3.js for custom visualizations
- React Query for state management
- PDF export with server-side rendering`,
    tags: ['React', 'D3.js', 'WebSockets'],
    year: '2025',
    role: 'Frontend Lead',
    demoUrl: 'https://dataviz-demo.example.com',
  },
  {
    id: 'auth-service',
    num: '04',
    title: 'Auth Service',
    subtitle: 'Multi-tenant authentication',
    description: 'A scalable authentication microservice supporting OAuth, SAML, and passwordless login for enterprise applications.',
    writeup: `An authentication service designed for multi-tenant SaaS applications. Supports multiple identity providers and authentication methods while maintaining strict security standards.

Security features:
- JWT with short-lived access tokens
- Refresh token rotation
- Rate limiting and brute force protection
- Comprehensive audit logging`,
    tags: ['Node.js', 'OAuth', 'Security'],
    year: '2024',
    role: 'Backend Development',
    githubUrl: 'https://github.com/justin/auth-service',
  },
  {
    id: 'mobile-app',
    num: '05',
    title: 'TaskFlow',
    subtitle: 'Mobile task management',
    description: 'A minimalist task management app with offline support, calendar integration, and smart notifications.',
    writeup: `A task management application focused on simplicity and reliability. Built with React Native for cross-platform support, featuring offline-first architecture and intelligent reminders.

Key features:
- Offline support with conflict resolution
- Calendar integration (Google, Apple)
- Smart notification scheduling
- Widget support for iOS and Android`,
    tags: ['React Native', 'SQLite', 'Mobile'],
    year: '2024',
    role: 'Full Stack',
    demoUrl: 'https://taskflow.app',
  },
  {
    id: 'ml-pipeline',
    num: '06',
    title: 'ML Pipeline',
    subtitle: 'Automated model training',
    description: 'An end-to-end machine learning pipeline for training, evaluating, and deploying models with minimal configuration.',
    writeup: `A streamlined ML operations pipeline that automates the journey from data preprocessing to model deployment. Designed for teams transitioning from notebooks to production systems.

Pipeline stages:
- Automated data validation
- Hyperparameter optimization
- Model versioning and comparison
- One-click deployment to Kubernetes`,
    tags: ['Python', 'MLOps', 'Kubernetes'],
    year: '2024',
    role: 'ML Engineering',
    githubUrl: 'https://github.com/justin/ml-pipeline',
  },
];
