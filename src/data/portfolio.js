export const portfolioData = {
  // Hero section
  hero: {
    headline: 'I turn business problems and data into practical digital solutions.',
    subheading:
      'I build AI customer assistants, interactive data experiences, business websites and analytical solutions that help businesses work smarter.',
    cta_primary: 'View My Work',
    cta_secondary: 'Let\'s Work Together',
  },

  // Services - Four pillars
  services: [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description:
        'Automate repetitive customer enquiries, answer common questions and turn conversations into structured business leads.',
      icon: '🤖',
    },
    {
      id: 'data-storytelling',
      title: 'Data Storytelling',
      description:
        'Turn business data into interactive dashboards and visual stories that help decision-makers understand what is happening and what matters.',
      icon: '📊',
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Machine Learning',
      description:
        'Use data to uncover patterns, identify risks, predict outcomes and support better decisions.',
      icon: '📈',
    },
    {
      id: 'digital-solutions',
      title: 'Digital Solutions',
      description:
        'Build professional websites, databases and digital systems around real business needs.',
      icon: '💻',
    },
  ],

  // Featured work - Cindy Bakes
  featuredProject: {
    id: 'cindy-bakes',
    title: 'Cindy Bakes Delights',
    category: 'AI Automation / Digital Solutions',
    tagline: 'AI-powered business website and customer enquiry system',
    description:
      'An AI-powered business website and customer enquiry/order system built for a cake business.',
    businessProblem:
      'Customers needed quick answers and an easy way to enquire and order without manual back-and-forth communication.',
    solution:
      'Built a complete digital system combining a responsive business website, AI customer assistant, structured order capture, database integration, and Railway deployment.',
    businessValue:
      'Automated customer interaction and structured order capture, reducing manual enquiry handling.',
    highlights: [
      'Responsive business website',
      'AI customer assistant',
      'Customer enquiry workflow',
      'Order capture',
      'Database integration',
      'OpenAI integration',
      'Railway deployment',
      'Persistent database storage',
    ],
    technologies: ['React', 'Node.js', 'OpenAI API', 'Database', 'Railway'],
    demonstrates: ['AI Automation', 'Digital Solutions', 'Database Integration', 'Deployment'],
    liveDemo: 'https://cindybakesdelights.vercel.app',
    demoAvailable: true,
    github: 'https://github.com/sammaash/cindy-bakes-website',
    caseStudy: {
      objective: 'Make it easier for customers to get answers, make an enquiry and move toward an order without relying on manual back-and-forth.',
      process: 'Mapped the enquiry journey, designed a responsive customer-facing site, connected an AI assistant to the business information, and structured the enquiry and order workflow around persistent storage.',
      findings: 'The delivered system combines a business website, AI customer assistant, customer enquiry workflow, order capture, backend API and database-backed storage.',
      limitations: 'The effectiveness of the assistant and enquiry flow should be evaluated with real customer usage and operational feedback.',
    },
  },

  // Data & ML Projects
  dataProjects: [
    {
      id: 'mortality-prediction',
      title: 'Under-5 Mortality Risk Prediction',
      category: 'Data Analytics / Machine Learning',
      businessProblem:
        'Decision-makers need to identify high-risk groups and patterns that can guide targeted public-health interventions.',
      description:
        'A machine-learning and data analytics project that identifies patterns and high-risk categories associated with under-5 mortality to support targeted intervention and resource allocation.',
      solution:
        'Explores mortality patterns and applies machine-learning approaches to classify risk categories from the available data.',
      businessValue:
        'Enables targeted public health interventions by identifying high-risk populations and geographical areas.',
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'Data Visualization', 'Predictive Modelling'],
      github: 'https://github.com/sammaash/mortality',
      liveDemo: 'https://mortality-ratess.streamlit.app',
      demoAvailable: true,
      caseStudy: {
        objective: 'Identify high-risk populations, classify mortality-risk categories and examine mortality trends to support focused intervention planning.',
        process: 'Combined health, mortality, cause-of-death and economic datasets; explored regional, age, gender and cause patterns; then evaluated K-Means clustering and classification models alongside time-series analysis.',
        findings: 'The project reports three risk clusters. Its analysis identifies the highest rates in Sub-Saharan Africa and Southeast Asia, and highlights respiratory infections, diarrhoeal disease, preterm birth and neonatal conditions among leading causes.',
        limitations: 'The analysis uses historical, aggregated datasets. It should inform, not replace, local public-health expertise and validation with current data.',
      },
    },
    {
      id: 'recommendation-system',
      title: 'Customer Segmentation & Recommendation System',
      category: 'Data Analytics / Machine Learning',
      businessProblem:
        'Transaction data does not on its own show which customer groups need different commercial attention or what they may want next.',
      description:
        'A machine-learning system that segments customers based on purchasing behaviour and preferences and generates personalized product recommendations.',
      solution:
        'Builds customer-level behavioural profiles, names meaningful segments, and ranks transparent product recommendations from observed purchase history.',
      businessValue:
        'Increases customer lifetime value through personalized product recommendations and targeted marketing.',
      skills: [
        'Machine Learning',
        'Customer Segmentation',
        'Cluster Analysis',
        'Recommendation Systems',
        'Python',
      ],
      github: 'https://github.com/sammaash/CUSTOMER_SEGMENTATION',
      liveDemo: 'https://customersegmentation-ycmk6biwwukrznjdm3jkmm.streamlit.app/',
      demoAvailable: true,
      caseStudy: {
        objective: 'Turn transaction data into practical customer groups and explainable next-product recommendations for commercial decision-making.',
        process: 'Aggregated 2,823 transaction lines into 92 customer-level profiles using RFM-style and purchase-breadth features. Candidate K values from 2 to 7 were evaluated after feature transformation and standardization before segment profiling and recommendation ranking.',
        findings: 'The strongest tested silhouette score was 0.301 at four clusters. The application presents business-labelled segments and ranks products not yet purchased using popularity among behavioural peers.',
        limitations: 'The Kaggle data is historical sample data. Recommendations represent observed purchase patterns, not individual intent, and require production-data validation before use.',
      },
    },
    {
      id: 'churn-prediction',
      title: 'Customer Churn Prediction',
      category: 'Predictive Analytics / Machine Learning',
      businessProblem:
        'Retention teams need a way to identify customers that may require attention before they disengage.',
      description:
        'A predictive analytics solution designed to identify customers at risk of churn and support data-driven customer retention strategies.',
      solution:
        'Uses observed customer behaviours to surface risk indicators in an interactive dashboard for retention prioritization.',
      businessValue:
        'Helps businesses prioritize retention efforts and reduce customer attrition through early intervention.',
      skills: ['Machine Learning', 'Predictive Analytics', 'Customer Analytics', 'Python', 'Data Analysis'],
      github: 'https://github.com/sammaash/ECOMMERCE-CHURN-RATE-PREDICTOR',
      liveDemo: 'https://ecommerce-churn-rate-predictor-mr6q6mkvmfgusmrwq7q5xd.streamlit.app/',
      demoAvailable: true,
      caseStudy: {
        objective: 'Provide a clear view of customer churn risk so retention effort can be prioritized.',
        process: 'Created a lightweight Streamlit dashboard around a Random Forest classifier, with customer-segment and category churn views designed for non-technical discussion.',
        findings: 'The public demo uses synthetic e-commerce data and is intended to show the decision-support workflow rather than claim production model performance.',
        limitations: 'No production metric or business impact is presented because the dashboard uses synthetic data. A live model would require validated historical labels, monitoring and governance.',
      },
    },
  ],

  // Data Storytelling
  dataStorytelling: {
    headline: "Don't just show the data. Tell the story.",
    subheading:
      'I turn business data into interactive visual stories that help decision-makers understand performance, identify trends and focus on what matters.',
    categories: [
      'Executive Dashboards',
      'Financial Performance',
      'Sales & Operations',
      'Customer Analytics',
      'KPI Reporting',
    ],
    status: 'Data storytelling projects coming soon',
    distinction:
      'A dashboard reports measures. Business storytelling gives those measures context, focus and a clear decision to consider.',
  },

  // AI Assistant Showcase
  aiAssistant: {
    headline: 'Turn your website into an AI customer assistant.',
    description:
      'Many businesses already have the answers their customers need on their website. An interactive assistant lets customers ask questions naturally instead of searching through multiple pages.',
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
    progression: ['CUSTOMER QUESTION', 'AI ANSWER', 'FOLLOW-UP QUESTIONS', 'LEAD CAPTURE', 'BUSINESS ACTION'],
    applications: ['Service businesses', 'Professional firms', 'Hospitality', 'E-commerce', 'Organizations with extensive FAQ content'],
  },

  // About
  about: {
    headline: 'Practical business solutions through AI, data and digital tools.',
    bio: "I'm a technology and data practitioner focused on applying AI, analytics and digital tools to practical business problems. I work with businesses that need clearer customer experiences, more useful data and systems built around how their teams actually work.",
    capabilities: [
      'AI Automation',
      'Data Analytics',
      'Machine Learning',
      'Data Storytelling',
      'Web Development',
      'Business Automation',
      'Digital Solutions',
    ],
  },

  // Contact
  contact: {
    headline: "Have a business problem you'd like to solve?",
    subheading: "Let's talk.",
    email: 'hello@sammymacharia.com',
    phone: '+254723595334',
    linkedin: 'https://www.linkedin.com/in/sammy-macharia-03805114a/',
    github: 'https://github.com/sammaash',
  },
}
