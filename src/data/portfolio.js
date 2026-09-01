export const portfolioData = {
  // Hero section
  hero: {
    headline: 'Turning business problems and data into practical digital solutions.',
    subheading:
      'I build AI-powered customer experiences, business websites, interactive data stories and analytical solutions that help businesses work smarter.',
    cta_primary: 'View My Work',
    cta_secondary: 'Let\'s Work Together',
  },

  // Services - Four pillars
  services: [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description:
        'Automate repetitive customer enquiries and turn conversations into qualified leads and business actions.',
      icon: '🤖',
    },
    {
      id: 'data-storytelling',
      title: 'Data Storytelling',
      description:
        'Transform spreadsheets and business data into interactive dashboards and stories that help decision-makers see what matters.',
      icon: '📊',
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Machine Learning',
      description:
        'Use data to uncover patterns, predict outcomes and support better business decisions.',
      icon: '📈',
    },
    {
      id: 'digital-solutions',
      title: 'Digital Solutions',
      description:
        'Build professional websites, databases and digital systems around the needs of the business.',
      icon: '💻',
    },
  ],

  // Featured work - Cindy Bakes
  featuredProject: {
    id: 'cindy-bakes',
    title: 'Cindy Bakes Delights',
    tagline: 'AI-powered business website and customer enquiry system',
    description:
      'An AI-powered business website and customer enquiry/order system built for a cake business.',
    businessProblem:
      'Customers needed quick answers and an easy way to enquire and order without manual back-and-forth communication.',
    solution:
      'Built a complete digital system combining a responsive business website, AI customer assistant, structured order capture, and database integration.',
    businessValue:
      'Automated customer interaction and structured order capture, reducing manual enquiry handling.',
    highlights: [
      'Responsive business website',
      'AI customer assistant',
      'Customer enquiry workflow',
      'Order capture system',
      'Database integration',
      'OpenAI API integration',
      'Deployment',
      'Persistent database storage',
    ],
    technologies: ['React', 'Node.js', 'OpenAI API', 'Database'],
    demonstrates: ['AI Automation', 'Digital Solutions', 'Database Integration', 'Deployment'],
    liveDemo: 'https://cindybakesdelights.vercel.app',
    github: 'https://github.com/sammaash/cindy-bakes-website',
  },

  // Data & ML Projects
  dataProjects: [
    {
      id: 'mortality-prediction',
      title: 'Under-5 Mortality Risk Prediction',
      description:
        'A machine-learning and data analytics project that identifies patterns and high-risk categories associated with under-5 mortality to support targeted intervention and resource allocation.',
      businessValue:
        'Enables targeted public health interventions by identifying high-risk populations and geographical areas.',
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'Data Visualization', 'Predictive Modelling'],
      github: 'https://github.com/sammaash/mortality',
      liveDemo: null,
    },
    {
      id: 'recommendation-system',
      title: 'Customer Segmentation & Recommendation System',
      description:
        'A machine-learning system that segments customers based on purchasing behaviour and preferences and generates personalized product recommendations.',
      businessValue:
        'Increases customer lifetime value through personalized product recommendations and targeted marketing.',
      skills: [
        'Machine Learning',
        'Customer Segmentation',
        'Cluster Analysis',
        'Recommendation Systems',
        'Python',
      ],
      github: 'https://github.com/LynnsBaraka/recommendation-system',
      liveDemo: null,
    },
    {
      id: 'churn-prediction',
      title: 'Customer Churn Prediction',
      description:
        'A predictive analytics solution designed to identify customers at risk of churn and support data-driven customer retention strategies.',
      businessValue:
        'Helps businesses prioritize retention efforts and reduce customer attrition through early intervention.',
      skills: ['Machine Learning', 'Predictive Analytics', 'Customer Analytics', 'Python', 'Data Analysis'],
      github: 'https://github.com/sammaash/ECOMMERCE-CHURN-RATE-PREDICTOR',
      liveDemo: 'https://your-churn-demo-url.streamlit.app',
    },
  ],

  // Data Storytelling
  dataStorytelling: {
    headline: "Don't just show the data. Tell the story.",
    subheading:
      'I turn raw business data into interactive visual stories that help decision-makers understand performance, identify trends and focus on what matters.',
    categories: [
      'Executive Dashboards',
      'Financial Performance',
      'Sales & Operations',
      'Customer Analytics',
      'KPI Reporting',
    ],
    status: 'Interactive dashboards coming soon',
  },

  // AI Assistant Showcase
  aiAssistant: {
    headline: 'Turn your website into an AI customer assistant.',
    description:
      'Your website already contains valuable information. Instead of making customers search through pages, an AI assistant lets them ask questions naturally and receive relevant answers.',
    example: {
      exchanges: [
        {
          type: 'customer',
          text: 'What services do you offer?',
        },
        {
          type: 'assistant',
          text: 'We offer digital solutions, AI automation, data analytics, and data storytelling. Would you like me to explain any of them?',
        },
        {
          type: 'customer',
          text: "What's included in your AI Automation service?",
        },
        {
          type: 'assistant',
          text: 'AI Automation includes customer enquiry assistants, FAQ chatbots, website knowledge assistants, lead capture, customer qualification, and business workflow automation.',
        },
        {
          type: 'customer',
          text: "I'd like to enquire about this service.",
        },
        {
          type: 'assistant',
          text: 'Great! I can help connect you. May I have your name and preferred contact method?',
        },
      ],
    },
    progression: ['QUESTION', 'ANSWER', 'LEAD', 'QUALIFICATION', 'BUSINESS ACTION'],
  },

  // About
  about: {
    headline: 'Practical business solutions through AI, data and digital transformation.',
    bio: 'I help businesses solve real problems through digital innovation, artificial intelligence and data-driven insights. My focus is on building practical, deployable solutions that generate measurable business value.',
    capabilities: [
      'AI Automation',
      'Data Analytics',
      'Machine Learning',
      'Data Storytelling',
      'Web Development',
      'Business Automation',
      'Digital Solutions',
    ],
    stats: [
      { value: '4+', label: 'Service Areas' },
      { value: '10+', label: 'Projects' },
      { value: '3+', label: 'Years Experience' },
    ],
  },

  // Contact
  contact: {
    headline: "Have a business problem you'd like to solve?",
    subheading: "Let's talk.",
    email: 'your.email@example.com',
    phone: '+254723595334',
    linkedin: 'https://www.linkedin.com/in/sammy-macharia-03805114a/',
    github: 'https://github.com/sammaash',
  },
}
