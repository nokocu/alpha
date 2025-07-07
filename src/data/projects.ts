export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: 'Planning' | 'In Progress' | 'Completed';
  repo: string;
  demo: string;
  image?: string;
}


export const projects: Project[] = [
    {
      id: 'alpha',
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing my projects and skills',
      tech: ['React', 'TypeScript', 'CSS', 'Git'],
      status: 'Completed',
      repo: '#',
      demo: '#'
    },
    {
      id: 'bravo',
      title: 'CursedApple - Deadlock Patchnotes Tracker',
      description: 'Real-time patch tracking and categorization for Valve\'s Deadlock',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      status: 'In Progress',
      repo: '#',
      demo: '#'
    },
    {
      id: 'charlie',
      title: 'Expensiveless - Expense Tracker',
      description: 'Full-stack expense management with categorization and reports',
      tech: ['Angular', '.NET', 'MS SQL', 'C#'],
      status: 'In Progress',
      repo: '#',
      demo: '#'
    },
    {
      id: 'delta',
      title: 'Mieszkanieo - Polish Real Estate Aggregator',
      description: 'Web scraping dashboard for Polish real estate listings',
      tech: ['Python', 'Selenium', 'JavaScript', 'SQL', 'Docker'],
      status: 'In Progress',
      repo: '#',
      demo: '#'
    },
    {
      id: 'echo',
      title: 'Project echo - Task Management System',
      description: 'Workflow management with BPMN concepts and team collaboration',
      tech: ['Angular', '.NET', 'MS SQL', 'BPMN'],
      status: 'Planning',
      repo: '#',
      demo: '#'
    },
    {
      id: 'foxtrot',
      title: 'Project foxtrot - Automated Testing Suite',
      description: 'Comprehensive UI testing automation with WebdriverIO',
      tech: ['JavaScript', 'WebdriverIO', 'Mocha', 'Git'],
      status: 'Planning',
      repo: '#',
      demo: '#'
    }
];