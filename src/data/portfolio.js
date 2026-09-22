export const portfolioData = {
  // Hero section
  hero: {
    headline: 'I turn business problems and data into practical digital solutions.',
    subheading: '',
    bullets: [
      'AI assistants that answer customers 24/7',
      'Dashboards that tell you what to do, not just what happened',
      'Websites that capture leads, not just look good',
    ],
    cta_primary: 'View My Work',
    cta_secondary: 'Let\'s Work Together',
  },

  // Services - Four pillars
  services: [
    {
      id: 'ai-automation',
      title: 'What is AI Automation for Small Businesses and How Does It Work?',
      description:
        'AI Automation answers repetitive customer questions 24/7, captures enquiries as structured leads, and connects to WhatsApp and your database automatically. Instead of manually replying to "What are your prices?" 20 times a day, an AI assistant trained on your business content answers instantly and asks for the customer\'s name and contact to create an order.',
      icon: '🤖',
    },
    {
      id: 'data-storytelling',
      title: 'How Do You Turn Business Data Into Interactive Dashboards That Tell a Story?',
      description:
        'A dashboard reports measures. Data storytelling gives those measures context, focus, and a clear decision. I build interactive dashboards in Python that help Nairobi and global business owners understand performance, identify trends, and focus on what matters - from Executive Dashboards to Financial Performance and Sales & Operations.',
      icon: '📊',
    },
    {
      id: 'data-analytics',
      title: 'How Can Data Analytics and Machine Learning Predict Customer Churn and Risk?',
      description:
        'I use Python, machine learning, and predictive analytics to uncover patterns in your business data, identify customers at risk of churn, segment customers by buying behaviour, and predict outcomes to support better decisions. Projects include Under-5 Mortality Risk Prediction, Customer Segmentation & Recommendation System, and Customer Churn Prediction.',
      icon: '📈',
    },
    {
      id: 'digital-solutions',
      title: 'Who Builds Professional Business Websites With AI and Database Integration in Kenya?',
      description:
        'I build professional, responsive business websites that are more than brochures - they are digital systems built around how your team actually works. Each website includes database integration, enquiry workflows, OpenAI integration, and deployment on Railway with persistent storage, like the system built for Cindy Bakes Delights in Nairobi.',
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
      'Cut manual WhatsApp replies by 80%. Owner handles 30+ enquiries/day without extra staff. Every enquiry auto-saved to database with zero monthly chatbot fees.',
    metrics: [
      '⏱️ 3 hrs/day saved',
      '💬 30+ enquiries/day automated',
      '💰 Built in 2 weeks - No monthly fees',
    ],
    testimonial: {
      quote: 'Before Sammy, I spent 3 hours daily replying to customers. Now orders come in structured while I bake.',
      attribution: 'Cindy, Cindy Bakes Delights',
    },
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
    liveDemo: 'https://cindybakesdelights.co.ke/',
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
    headline: 'Who is Sammy Macharia? AI Automation and Data Specialist in Nairobi, Kenya',
    paragraphs: [
      'I help small businesses turn repetitive work, scattered data and underperforming websites into practical digital systems that save time and support better decisions.',
      'My work combines AI automation, data analytics, data storytelling and web development. I build customer assistants, lead-capture workflows, interactive dashboards and database-backed websites around the way a business actually operates.',
      'Based in Nairobi, Kenya, I work with local and global businesses on focused projects typically priced between $300 and $600, starting with a clear business problem and a practical path to measurable value.',
    ],
    problems: [
      'Customers ask the same questions repeatedly and enquiries are missed.',
      'Your website looks good but does not capture or organize leads.',
      'Business data exists, but it is difficult to interpret or act on.',
      'Your team spends time on manual processes that could be automated.',
    ],
    whyWorkWithMe: 'You get a focused solution tied to a real business outcome, clear communication throughout the project, and tools your team can understand and use after launch.',
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
    headline: 'Get a Free 15-Min Business Audit',
    subheading:
      "I'll review your website/data and show you 3 places AI automation can save you time and capture more leads. No pitch, just practical ideas.",
    email: 'hello@sammymacharia.com',
    phone: '+254723595334',
    linkedin: 'https://www.linkedin.com/in/sammy-macharia-03805114a/',
    github: 'https://github.com/sammaash',
  },

  faq: [
    {
      question: 'What does AI automation do for a small business?',
      answer: 'AI automation answers repetitive customer questions 24/7, captures enquiries as structured leads, and can connect conversations to WhatsApp, email or a database. It gives the owner more time while keeping customer response fast and consistent.',
    },
    {
      question: 'How much does a small business AI automation project cost?',
      answer: 'Focused projects typically cost $300-$600, depending on the workflow, integrations and data involved. A free 15-minute business audit helps identify the highest-value starting point before any proposal.',
    },
    {
      question: 'Can you automate WhatsApp orders and customer enquiries?',
      answer: 'Yes. I can design an enquiry flow that answers common questions, asks for customer details, captures order information and stores each enquiry in a structured database.',
    },
    {
      question: 'What kind of dashboards do you build?',
      answer: 'I build interactive Python dashboards for executive reporting, financial performance, sales and operations, customer analytics and KPI tracking. The goal is to make the next business decision clearer, not just display charts.',
    },
    {
      question: 'Do you work with businesses outside Nairobi or Kenya?',
      answer: 'Yes. I am based in Nairobi and work with businesses in Kenya and globally through remote collaboration.',
    },
    {
      question: 'Can you connect a website to a database?',
      answer: 'Yes. Websites can include enquiry workflows, persistent database storage, AI integrations and deployment configured around the business process.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'A focused website or automation workflow can often be delivered in two to four weeks, depending on the scope, content and integrations required.',
    },
    {
      question: 'How do we start working together?',
      answer: 'Book a free 15-minute business audit on WhatsApp or email hello@sammymacharia.com. We will discuss the current process, where time or leads are being lost, and the most practical next step.',
    },
  ],
}
