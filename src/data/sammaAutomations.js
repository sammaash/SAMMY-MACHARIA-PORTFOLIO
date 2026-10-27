// Samma Automations product content.
//
// IMPORTANT: capability status labels must match verified implementation
// evidence. "Working today" = verified on a deployed project (Cindy Bakes
// Delights website + AI assistant + enquiry capture).
// "In development & testing" = built/tested against a personal test number
// only (n8n + WhatsApp Cloud API workflow; quotation flow on a separate
// release branch). "Planned" = design intent only, not implemented.
// Update these labels if implementation status changes.

export const sammaAutomations = {
  brand: 'Samma Automations',
  brandLine: 'A product developed and offered by Sammy Macharia',

  // Homepage intro section
  intro: {
    eyebrow: 'Product',
    headline: 'Turn WhatsApp enquiries into organised customer conversations.',
    description:
      'Samma Automations is a WhatsApp automation product being developed to help small and medium-sized businesses respond more consistently and understand how their customer enquiries are handled.',
    statusNote: 'Currently in development and testing — available for demonstrations and early pilots.',
    highlights: [
      {
        title: 'Automated replies',
        text: 'Supported enquiries and FAQs answered automatically, so customers get a quick, consistent response.',
      },
      {
        title: 'Structured enquiries',
        text: 'Enquiry details are captured and stored in an organised record instead of scattered chats.',
      },
      {
        title: 'Human-ready handover',
        text: 'Designed so staff can step into a conversation when personal attention is needed.',
      },
    ],
    ctaPrimary: 'Explore Samma Automations',
    ctaSecondary: 'Request a demonstration',
  },

  // Dedicated product page
  page: {
    eyebrow: 'Product · By Sammy Macharia',
    headline: 'Turn WhatsApp enquiries into organised customer conversations.',
    lead:
      'Samma Automations helps businesses manage customer enquiries through WhatsApp automation, lead qualification, and human handover. The service is being developed to help small and medium-sized businesses respond more consistently and understand how their customer enquiries are handled.',
    statusBadge: 'In development and testing',
    statusDetail:
      'Samma Automations is not yet a production service. The core enquiry flow has been built and tested against a personal test number, and parts of the approach are already working on live client projects. Demonstrations and early pilots are available on request.',
    ctaPrimary: 'Request a demonstration',
    ctaSecondary: 'Email about Samma Automations',
  },

  workflow: {
    title: 'How it is designed to work',
    subtitle:
      'The intended workflow, with an honest note on where each step currently stands.',
    steps: [
      {
        title: 'A customer contacts the business on WhatsApp',
        text: 'The customer messages the business number, as they normally would. No special app or new habit is required on their side.',
        status: 'in-development',
      },
      {
        title: 'The automation responds and collects information',
        text: 'Supported enquiries and frequently asked questions receive an automatic reply, and the flow asks for the details the business needs.',
        status: 'in-development',
      },
      {
        title: 'Enquiries are qualified and organised',
        text: 'Enquiries can be tagged and structured — for example, separating a ready-to-order enquiry from a general question — and stored in a database record.',
        status: 'in-development',
      },
      {
        title: 'Staff take over when needed',
        text: 'Where a conversation needs a human, the design allows it to be handed to the relevant staff member with the collected context.',
        status: 'planned',
      },
      {
        title: 'Enquiry data supports operational insight',
        text: 'Because each enquiry is stored as a structured record, volumes, common questions and response times can be reviewed over time.',
        status: 'planned',
      },
    ],
  },

  capabilities: {
    title: 'What exists today, and what is still being built',
    subtitle:
      'An honest breakdown so you know exactly what you are evaluating. This page will be updated as features are completed and verified.',
    groups: [
      {
        id: 'live',
        label: 'Working today',
        note: 'Verified on live client work (for example, the Cindy Bakes Delights website and enquiry system).',
        items: [
          'A website AI assistant that answers business-specific questions and FAQs',
          'Structured enquiry capture with storage in a database',
          'Business-specific configuration — the assistant is set up around the business’s own content, services and catalogue',
        ],
      },
      {
        id: 'testing',
        label: 'In development and testing',
        note: 'Built and tested against a personal test number; not yet connected to a live business WhatsApp number.',
        items: [
          'WhatsApp enquiry automation — messages received and answered through the WhatsApp Business Platform (Cloud API)',
          'Enquiry qualification and tagging (intent and customer details captured with each conversation record)',
          'Quotation requests — a quotation flow is in active development on a separate release track',
        ],
      },
      {
        id: 'planned',
        label: 'Planned',
        note: 'Design intent only — not implemented yet, and not available in demonstrations.',
        items: [
          'Human handover to the relevant staff member with conversation context',
          'Enquiry volume and response-time analytics',
          'A shared team inbox and conversation-management portal',
        ],
      },
    ],
  },

  useCases: {
    title: 'Who it is being built for',
    subtitle: 'Examples of businesses the service is designed to help.',
    cases: [
      {
        icon: '🧁',
        title: 'Bakeries and food businesses',
        text: 'Customers ask about products, prices and delivery, and place order requests. The automation answers supported questions, captures the order details and keeps a record the owner can act on.',
      },
      {
        icon: '🛠️',
        title: 'Service businesses',
        text: 'Prospective customers make first contact with similar questions. The flow qualifies enquiries — collecting what the business needs to know — before staff spend time on them.',
      },
      {
        icon: '📊',
        title: 'Small businesses that need visibility',
        text: 'Enquiries scattered across personal chats are hard to review. Structured records make it possible to see enquiry volumes, common questions and how quickly they were handled.',
      },
    ],
  },

  caseStudy: {
    title: 'Cindy Bakes Delights — what exists, and what is illustrative',
    subtitle:
      'An honest look at a real project, with a clearly labelled illustrative example.',
    verifiedIntro:
      'Cindy Bakes Delights is a real Nairobi cake business I have built a live system for. The verified, publicly viewable work includes:',
    verified: [
      'A live business website (cindybakesdelights.co.ke) with an AI customer assistant',
      'A customer enquiry and order capture workflow, with enquiries saved to a database',
      'Business-specific configuration around the business’s own products and information',
    ],
    developmentNote:
      'The WhatsApp automation flow for this business has been built (using the WhatsApp Business Platform Cloud API and an n8n workflow connected to the existing assistant backend) and has been tested against a personal test number. It is not yet connected to the business’s live WhatsApp number, so I do not present WhatsApp-specific results as production facts.',
    illustrativeTitle: 'Illustrative example (synthetic data)',
    illustrativeNote:
      'The conversation below is illustrative and uses synthetic data. It is not a real customer conversation and does not represent measured results.',
    illustrativeChat: {
      contactName: 'Bakes Assistant (illustrative)',
      exchanges: [
        {
          type: 'customer',
          text: 'Hi! Do you deliver birthday cakes to Westlands, and how much is a 1kg chocolate cake?',
        },
        {
          type: 'assistant',
          text: 'Hello! Yes, we deliver to Westlands. A 1kg chocolate cake is KES 2,800, and delivery to Westlands is KES 300. Would you like to place an order?',
        },
        { type: 'customer', text: 'Yes, for Saturday. My name is Jane.' },
        {
          type: 'assistant',
          text: 'Thank you, Jane. I have noted: 1kg chocolate cake, delivery to Westlands on Saturday. Could you share a phone number and delivery time so the team can confirm your order?',
        },
      ],
    },
  },

  about: {
    title: 'About Samma Automations',
    paragraphs: [
      'Alongside client work, I am building Samma Automations, a WhatsApp enquiry automation product that I develop and offer myself. It turns the approach used in projects such as the Cindy Bakes Delights enquiry system — automated answers to supported questions, and structured enquiry capture — into a repeatable product for small and medium-sized businesses.',
      'Samma Automations is in development and testing, and demonstrations are available on request. You can read more on the Samma Automations page.',
    ],
    cta: 'Explore Samma Automations',
  },

  faq: [
    {
      question: 'Is Samma Automations live today?',
      answer:
        'Not yet as a finished service. The enquiry flow has been built and tested against a personal test number, and parts of the approach (website AI assistants, structured enquiry capture) already work on live client projects. Demonstrations and early pilots are available on request.',
    },
    {
      question: 'Does it use the official WhatsApp Business Platform?',
      answer:
        'Yes — the automation is being built on the WhatsApp Business Platform (Cloud API). Samma Automations is an independent project and is not affiliated with, endorsed by, or sponsored by Meta or WhatsApp.',
    },
    {
      question: 'Can I see a demonstration?',
      answer:
        'Yes. Message me on WhatsApp or email hello@sammymacharia.com and I will walk you through the current flow and what an early pilot would involve.',
    },
    {
      question: 'What happens to enquiries the automation cannot handle?',
      answer:
        'The design intent is that these are flagged for a human. Structured enquiry records already make it possible to see what came in; the automatic handover-to-staff step is planned and not yet implemented.',
    },
  ],
}
