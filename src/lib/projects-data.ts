export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'ui-ux';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface Skill {
  category: string;
  technologies: {
    name: string;
    level: number;
    icon: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced shopping features',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, secure checkout, user authentication, order management, and real-time inventory tracking.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fffde19c-fc40-4a03-b6d5-8413ffdaf944.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    category: 'fullstack',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A comprehensive task management application featuring real-time collaboration, drag-and-drop kanban boards, team management, time tracking, and detailed project analytics.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/beba2ab3-174d-4d92-a74b-753695e1fd4c.png',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'fullstack',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather application with beautiful visualizations',
    longDescription: 'A weather dashboard that provides detailed weather information with interactive charts, forecasts, and location-based weather alerts using advanced weather APIs.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0204f91e-0b73-4dbc-a058-237723aed433.png',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '4',
    title: 'Social Media App',
    description: 'Modern social networking platform with real-time messaging',
    longDescription: 'A social media platform featuring user profiles, post sharing, real-time messaging, stories, and advanced content recommendation algorithms.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f0368d8-9d6b-46d5-944d-dd6fb9daa324.png',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    category: 'mobile',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Creative portfolio with stunning animations and interactions',
    longDescription: 'A creative portfolio website showcasing web development projects with advanced animations, parallax effects, and interactive elements to demonstrate technical skills.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9737810c-859f-4b0f-8619-ba4fddce3271.png',
    technologies: ['Next.js', 'Framer Motion', 'Three.js', 'GSAP'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '6',
    title: 'Design System',
    description: 'Comprehensive UI component library and design system',
    longDescription: 'A complete design system with reusable components, design tokens, documentation, and tools for maintaining consistent user interfaces across multiple projects.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16861c4f-8a8c-48c8-b185-ee1ef6b6bea6.png',
    technologies: ['React', 'Storybook', 'Styled Components', 'TypeScript'],
    category: 'ui-ux',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Frontend Development',
    description: 'Modern, responsive web applications with cutting-edge technologies',
    icon: '🎨',
    features: [
      'React/Next.js Applications',
      'Responsive Design',
      'Performance Optimization',
      'Modern UI/UX Implementation',
      'Cross-browser Compatibility'
    ],
    price: 'From $2,500'
  },
  {
    id: '2',
    title: 'Full-Stack Development',
    description: 'Complete web applications from database to deployment',
    icon: '⚡',
    features: [
      'API Development',
      'Database Design',
      'Authentication Systems',
      'Third-party Integrations',
      'Cloud Deployment'
    ],
    price: 'From $5,000'
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers',
    icon: '🎯',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Usability Testing',
      'Brand Identity'
    ],
    price: 'From $1,500'
  },
  {
    id: '4',
    title: 'Consulting & Optimization',
    description: 'Expert advice to improve your existing web applications',
    icon: '🚀',
    features: [
      'Performance Audits',
      'Code Reviews',
      'Architecture Planning',
      'SEO Optimization',
      'Technical Consulting'
    ],
    price: 'From $150/hour'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 88, icon: '🔷' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 90, icon: '💚' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'MongoDB', level: 82, icon: '🍃' },
      { name: 'GraphQL', level: 80, icon: '📊' }
    ]
  },
  {
    category: 'Tools & Others',
    technologies: [
      { name: 'Git', level: 95, icon: '📝' },
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'AWS', level: 80, icon: '☁️' },
      { name: 'Figma', level: 88, icon: '🎨' },
      { name: 'Testing', level: 85, icon: '🧪' }
    ]
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Outstanding work! The website exceeded our expectations with its modern design and smooth performance.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63183028-a252-4c2f-a3cc-3da777dde962.png',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Startup Founder',
    content: 'Delivered a high-quality e-commerce platform that helped us increase sales by 300% in the first month.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/746a9f7f-087a-441f-9eb6-28623b52f500.png',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'Marketing Director',
    content: 'Professional, reliable, and creative. The UI/UX design perfectly captured our brand identity.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c63ac2f2-e869-47fe-b343-723bddc1a120.png',
    rating: 5
  }
];