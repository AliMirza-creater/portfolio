import type { LucideIcon } from '@lucide/vue';
import {
    AppWindow,
    BarChart3,
    Boxes,
    Braces,
    Code2,
    CodeXml,
    Database,
    Gauge,
    GitBranch,
    Globe,
    KanbanSquare,
    Layers,
    Layout,
    Palette,
    Plug2,
    Rocket,
    Server,
    ShoppingCart,
    Smartphone,
    Store,
    Terminal,
    Webhook,
    Workflow,
    Wrench,
} from '@lucide/vue';

export const profile = {
    name: '[YOUR NAME]',
    role: 'Full Stack Developer',
    tagline: 'Creating modern, scalable and user-friendly web applications.',
    email: 'hello@example.com',
    location: '[YOUR CITY], [YOUR COUNTRY]',
    github: 'https://github.com/[YOUR-USERNAME]',
    linkedin: 'https://linkedin.com/in/[YOUR-USERNAME]',
    twitter: 'https://twitter.com/[YOUR-USERNAME]',
};

export const stats = [
    { label: 'Projects Completed', value: 120, suffix: '+' },
    { label: 'Years of Experience', value: 8, suffix: '+' },
    { label: 'Technologies', value: 25, suffix: '+' },
    { label: 'Happy Clients', value: 40, suffix: '+' },
];

export type Skill = {
    name: string;
    description: string;
    icon: LucideIcon;
};

export type SkillCategory = {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        description: 'Interfaces that are fast, accessible and a joy to use.',
        icon: Layout,
        skills: [
            {
                name: 'Vue.js',
                description: 'Component-driven SPAs with Inertia and Pinia.',
                icon: Braces,
            },
            {
                name: 'React',
                description: 'Interactive UIs with hooks and modern tooling.',
                icon: CodeXml,
            },
            {
                name: 'TypeScript',
                description: 'Type-safe code across the full application.',
                icon: Code2,
            },
            {
                name: 'Tailwind CSS',
                description:
                    'Utility-first, consistent and responsive styling.',
                icon: Palette,
            },
        ],
    },
    {
        title: 'Backend',
        description: 'Robust APIs and business logic engineered to scale.',
        icon: Server,
        skills: [
            {
                name: 'Laravel',
                description: 'Clean, expressive PHP applications and APIs.',
                icon: Layers,
            },
            {
                name: 'PHP',
                description: 'Battle-tested server-side development.',
                icon: Code2,
            },
            {
                name: 'Node.js',
                description: 'Event-driven backends and micro-services.',
                icon: Terminal,
            },
            {
                name: 'REST APIs',
                description: 'Well-designed, documented and secure endpoints.',
                icon: Webhook,
            },
        ],
    },
    {
        title: 'Database',
        description: 'Data modelling and queries that stay fast as you grow.',
        icon: Database,
        skills: [
            {
                name: 'MySQL',
                description: 'Relational schemas and optimised queries.',
                icon: Database,
            },
            {
                name: 'PostgreSQL',
                description: 'Advanced relational features with confidence.',
                icon: Layers,
            },
            {
                name: 'Redis',
                description: 'Caching, queues and real-time data.',
                icon: Gauge,
            },
            {
                name: 'MongoDB',
                description: 'Flexible document stores for modern apps.',
                icon: Boxes,
            },
        ],
    },
    {
        title: 'Tools & Workflow',
        description: 'The pipeline that turns ideas into shipped products.',
        icon: Wrench,
        skills: [
            {
                name: 'Git & GitHub',
                description: 'Clean branching and collaborative workflows.',
                icon: GitBranch,
            },
            {
                name: 'Docker',
                description: 'Consistent environments from local to prod.',
                icon: Boxes,
            },
            {
                name: 'CI/CD',
                description: 'Automated testing and deployment pipelines.',
                icon: Workflow,
            },
            {
                name: 'Linux',
                description: 'Comfortable in the terminal and on servers.',
                icon: Terminal,
            },
        ],
    },
];

export type Service = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export const services: Service[] = [
    {
        title: 'Web Development',
        description:
            'Fast, accessible websites and web applications built with modern, maintainable code.',
        icon: Globe,
    },
    {
        title: 'Full Stack Development',
        description:
            'Complete products from database to UI — designed, built, tested and deployed end to end.',
        icon: Layers,
    },
    {
        title: 'Backend Development',
        description:
            'Robust APIs, services and business logic engineered for security, reliability and scale.',
        icon: Server,
    },
    {
        title: 'Frontend Development',
        description:
            'Polished, responsive interfaces that feel effortless across every device and screen size.',
        icon: AppWindow,
    },
    {
        title: 'API Development',
        description:
            'Clean, documented RESTful APIs with solid validation, rate limiting and security.',
        icon: Plug2,
    },
    {
        title: 'Responsive UI Development',
        description:
            'Design-driven, pixel-perfect UIs that adapt beautifully from mobile to large desktop.',
        icon: Smartphone,
    },
];

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

export type Project = {
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
    icon: LucideIcon;
    gradient: string;
    liveUrl: string;
    sourceUrl: string;
};

export const projectFilters: Array<{
    label: string;
    value: 'all' | ProjectCategory;
}> = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' },
];

export const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description:
            'A complete storefront with carts, payments, inventory and an admin dashboard for managing products and orders.',
        category: 'fullstack',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
        icon: ShoppingCart,
        gradient: 'from-indigo-500/20 to-violet-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Analytics Dashboard',
        description:
            'A real-time dashboard visualising user behaviour with charts, filters and exportable reports.',
        category: 'frontend',
        technologies: ['Vue.js', 'Tailwind CSS', 'Chart.js'],
        icon: BarChart3,
        gradient: 'from-teal-500/20 to-emerald-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'REST API Service',
        description:
            'A scalable, versioned API with authentication, caching, rate limiting and comprehensive documentation.',
        category: 'backend',
        technologies: ['Laravel', 'PHP', 'PostgreSQL', 'Redis'],
        icon: Webhook,
        gradient: 'from-sky-500/20 to-blue-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Task Management App',
        description:
            'A collaborative workspace with boards, real-time updates, notifications and team permissions.',
        category: 'fullstack',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
        icon: KanbanSquare,
        gradient: 'from-rose-500/20 to-pink-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Marketing Landing Page',
        description:
            'A high-converting landing page with buttery-smooth scroll animations and a perfect Lighthouse score.',
        category: 'frontend',
        technologies: ['Vue.js', 'Tailwind CSS', 'GSAP'],
        icon: Rocket,
        gradient: 'from-amber-500/20 to-orange-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'SaaS Subscription Portal',
        description:
            'Self-serve billing, plans, usage metrics and an onboarding flow that reduced churn significantly.',
        category: 'fullstack',
        technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'Stripe'],
        icon: Store,
        gradient: 'from-fuchsia-500/20 to-purple-500/20',
        liveUrl: '#',
        sourceUrl: '#',
    },
];

export type Experience = {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        role: 'Senior Full Stack Developer',
        company: 'TechNova Solutions',
        period: '2022 — Present',
        description:
            'Leading the development of a multi-tenant SaaS platform, mentoring a team of five and driving architecture decisions.',
        technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
    },
    {
        role: 'Full Stack Developer',
        company: 'CloudWorks',
        period: '2019 — 2022',
        description:
            'Shipped customer-facing web products across e-commerce and fintech, owning features from database to deployment.',
        technologies: ['PHP', 'Node.js', 'MySQL', 'Docker'],
    },
    {
        role: 'Backend Developer',
        company: 'DataFlow Inc.',
        period: '2017 — 2019',
        description:
            'Designed and maintained internal APIs powering data pipelines, improving response times by over 40%.',
        technologies: ['Laravel', 'Redis', 'RabbitMQ'],
    },
    {
        role: 'Junior Web Developer',
        company: 'PixelCraft Studio',
        period: '2015 — 2017',
        description:
            'Built marketing sites and interactive experiences for clients across retail, media and education.',
        technologies: ['PHP', 'JavaScript', 'CSS'],
    },
];

export type Testimonial = {
    name: string;
    role: string;
    quote: string;
    rating: number;
};

export const testimonials: Testimonial[] = [
    {
        name: '[CLIENT NAME]',
        role: 'Product Manager, TechNova',
        quote: 'Rare to find a developer who cares as much about the product as the code. Communication was effortless and the results exceeded every expectation.',
        rating: 5,
    },
    {
        name: '[CLIENT NAME]',
        role: 'Founder, CloudWorks',
        quote: 'From first sketch to production launch the process was flawless. Fast, thoughtful and always one step ahead of the brief.',
        rating: 5,
    },
    {
        name: '[CLIENT NAME]',
        role: 'CTO, DataFlow Inc.',
        quote: 'The architecture work fundamentally improved our codebase. Performance, maintainability and team velocity all went up.',
        rating: 5,
    },
    {
        name: '[CLIENT NAME]',
        role: 'Design Director, PixelCraft',
        quote: 'Every pixel landed exactly where it should. The attention to detail and the smooth interactions made the project feel premium.',
        rating: 5,
    },
];

export const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Contact', target: 'contact' },
];

export const heroTechBadges = [
    { label: 'Vue.js', icon: Braces },
    { label: 'Laravel', icon: Layers },
    { label: 'TypeScript', icon: CodeXml },
    { label: 'MySQL', icon: Database },
    { label: 'Tailwind', icon: Palette },
    { label: 'Node.js', icon: Terminal },
];

export const expertiseHighlights = [
    'End-to-end product development',
    'Clean, maintainable architecture',
    'Performance & accessibility first',
    'Design-driven collaboration',
];
