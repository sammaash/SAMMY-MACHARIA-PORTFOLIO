import { useEffect, useState } from 'react'
import './App.css'
import { portfolioData } from './data/portfolio'
import { sammaAutomations } from './data/sammaAutomations'
import { legal } from './data/legal'

const DEMO_WHATSAPP_LINK =
  'https://wa.me/254723595334?text=Hi%20Sammy,%20I%27d%20like%20a%20demonstration%20of%20Samma%20Automations'

const DEMO_EMAIL_LINK =
  'mailto:hello@sammymacharia.com?subject=Samma%20Automations%20-%20demonstration%20request'

const DEFAULT_TITLE =
  'Sammy Macharia | AI Automation & Data Solutions for Small Businesses - Kenya & Global'

const PAGE_TITLES = {
  '#/samma-automations': 'Samma Automations | WhatsApp Enquiry Automation - Sammy Macharia',
  '#/privacy': 'Privacy Notice | Sammy Macharia',
  '#/terms': 'Website and Service Terms | Sammy Macharia',
}

function PromoVideo() {
  return (
    <main className="promo-page">
      <div className="promo-shell">
        <div className="promo-topbar">
          <span className="promo-brand">SAMMY MACHARIA</span>
          <span className="promo-status"><i /> 35 sec / vertical preview</span>
        </div>

        <section className="promo-scene promo-chat">
          <div className="chat-window">
            <div className="chat-heading"><span className="avatar">S</span><div><strong>Import Assistant</strong><small>Online now</small></div><span className="chat-menu">•••</span></div>
            <div className="chat-body">
              <div className="chat-scroll-content">
                <div className="chat-typing chat-typing-one"><i /><i /><i /> Customer is typing...</div>
                <div className="chat-message customer chat-step-one">Hi, I want to import a Toyota Harrier from Japan. Can you help me know the clearing cost?</div>
                <div className="chat-typing chat-typing-two"><i /><i /><i /> AI is replying...</div>
                <div className="chat-message assistant chat-step-two">Absolutely. 🚗 Please provide the vehicle model, year, engine capacity and purchase price.</div>
                <div className="chat-typing chat-typing-three"><i /><i /><i /> Customer is typing...</div>
                <div className="chat-message customer short chat-step-three">Toyota Harrier | 2021 | 2,000cc | ¥3.2M</div>
                <div className="chat-typing chat-typing-four"><i /><i /><i /> AI is preparing...</div>
                <div className="chat-message assistant chat-step-four">Perfect. I&apos;ve captured the details. ✅</div>
                <div className="chat-message assistant chat-step-five"><strong>Quotation request created.</strong></div>
                <div className="chat-message assistant chat-step-six">Would you like the quotation sent to WhatsApp or email?</div>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-scene promo-chat promo-chat-continue">
          <div className="chat-window">
            <div className="chat-heading"><span className="avatar">S</span><div><strong>Import Assistant</strong><small>Online now</small></div><span className="chat-menu">•••</span></div>
            <div className="chat-body">
              <div className="chat-scroll-content continue-scroll-content">
                <div className="chat-message customer continue-step-one">Toyota Harrier | 2021 | 2,000cc | ¥3.2M</div>
                <div className="chat-typing continue-typing-one"><i /><i /><i /> AI is checking the details...</div>
                <div className="chat-message assistant continue-step-two">Perfect. I&apos;ve captured the details. ✅</div>
                <div className="chat-message assistant continue-step-three"><strong>Quotation request created.</strong></div>
                <div className="chat-typing continue-typing-two"><i /><i /><i /> AI is preparing your next step...</div>
                <div className="chat-message assistant continue-step-four">Would you like the quotation sent to WhatsApp or email?</div>
                <div className="chat-typing continue-typing-three"><i /><i /><i /> Customer is typing...</div>
                <div className="chat-message customer continue-step-five">WhatsApp please.</div>
                <div className="chat-typing continue-typing-four"><i /><i /><i /> AI is sending...</div>
                <div className="chat-message assistant continue-step-six">Done. Your quotation has been sent to WhatsApp. ✅</div>
                <div className="chat-message customer continue-step-seven thanks-message">Thanks!</div>
                <div className="quotation-card"><span>QUOTATION REQUEST</span><strong>Toyota Harrier · 2021</strong><small>Structured and ready for your team</small></div>
              </div>
            </div>
          </div>
        </section>

        <a className="promo-back" href="#home">← Back to portfolio</a>
      </div>
    </main>
  )
}

function LogisticsStoryVideo() {
  return (
    <main className="story-video-page">
      <div className="story-video">
        <div className="story-topbar"><strong>SAMMY MACHARIA</strong><span><i /> 20 SEC STORY</span></div>

        <section className="story-scene story-intro">
          <div className="story-kicker">CAR IMPORT QUOTATION</div>
          <h1>Importing a car?<br /><em>Get a quotation faster.</em></h1>
          <div className="conversation-columns">
            <div className="conversation-column ai-column">
              <div className="conversation-label">AI AUTOMATED REPLIES <span>LEFT</span></div>
              <div className="conversation-panel ai-panel">
                <div className="conversation-panel-head"><span className="wa-avatar">S</span><div><strong>AI Logistics Assistant</strong><small>online 24/7</small></div><b>●</b></div>
                <div className="conversation-body">
                  <div className="reply-typing reply-typing-one"><i /><i /><i /> AI is replying...</div>
                  <div className="reply-bubble reply-one">Hi! I can prepare a car import quotation. Please share your name and phone number.</div>
                  <div className="reply-typing reply-typing-two"><i /><i /><i /> AI is preparing...</div>
                  <div className="reply-bubble reply-two">Thanks, James. Please send the logbook, ID and vehicle details so I can calculate the charges.</div>
                  <div className="invoice-mini"><div><strong>QUOTATION #SM-0248</strong><span>SENT ✓</span></div><p>Car import clearance · Toyota Harrier</p><b>KES 185,000</b></div>
                </div>
              </div>
            </div>
            <div className="conversation-column client-column">
              <div className="conversation-label">CLIENT ENQUIRIES <span>RIGHT</span></div>
              <div className="conversation-panel client-panel">
                <div className="conversation-panel-head"><span className="wa-avatar client-avatar">C</span><div><strong>Import Partner Ltd.</strong><small>WhatsApp</small></div><b>⋮</b></div>
                <div className="conversation-body">
                  <div className="client-typing client-typing-one"><i /><i /><i /> typing...</div>
                  <div className="client-bubble client-one">Hi, I&apos;m importing a Toyota Harrier. How much will clearance cost?</div>
                  <div className="client-typing client-typing-two"><i /><i /><i /> typing...</div>
                  <div className="client-bubble client-two">James Mwangi · 0722 456 789. Where should I send the documents?</div>
                  <div className="client-typing client-typing-three"><i /><i /><i /> typing...</div>
                  <div className="client-bubble client-three">Logbook, ID and vehicle details attached.</div>
                  <div className="sent-badge">✓ Automated quotation received</div>
                </div>
              </div>
            </div>
          </div>
          <div className="conversation-footer"><span>CLIENT ASKS</span><b>→</b><span>DOCUMENTS</span><b>→</b><span>QUOTATION SENT</span></div>
          <a className="story-cta" href="https://wa.me/254723595334?text=Hi%20Sammy,%20I%20want%20to%20automate%20my%20business">AUTOMATE YOUR WHATSAPP ENQUIRIES <b>↗</b></a>
        </section>
      </div>
    </main>
  )
}

function EnterpriseStatusVideo() {
  return (
    <main className="enterprise-video-page">
      <div className="enterprise-video">
        <div className="enterprise-progress"><i /><i /><i /><i /></div>
        <div className="enterprise-topbar"><strong>SAMMY MACHARIA</strong><span>STATUS STORY / 25 SEC</span></div>

        <section className="enterprise-scene enterprise-automation">
          <div className="enterprise-eyebrow">WHATSAPP REPLIES, AUTOMATED</div>
          <h1>Reply faster.<br /><em>Quote with confidence.</em></h1>
          <div className="whatsapp-demo">
            <div className="whatsapp-demo-head"><span className="wa-avatar">S</span><div><strong>Kenya Import Assistant</strong><small>online 24/7</small></div><b>●</b></div>
            <div className="whatsapp-demo-body"><div className="wa-client">Hi, I&apos;m importing a Toyota Harrier. How much is clearance?</div><div className="wa-ai">I can help. Please share the year, engine capacity and purchase price.</div><div className="wa-client">2021 · 2,000cc · ¥3.2M</div><div className="wa-ai">Perfect. I&apos;ve captured the details and prepared your quote. ✅</div></div>
          </div>
          <p className="enterprise-caption">Your customers get a clear response, even when your team is busy at the port.</p>
        </section>

        <section className="enterprise-scene enterprise-docs">
          <div className="enterprise-eyebrow">QUOTATION GENERATION</div>
          <h2>From WhatsApp details<br /><em>to a Kenyan-ready quote.</em></h2>
          <div className="document-stack"><div className="quote-document"><div><span>KENYA IMPORT QUOTATION</span><b>#QT-0248</b></div><strong>Vehicle clearance estimate</strong><p>Toyota Harrier · 2021 · 2,000cc</p><hr /><div className="quote-total"><span>Estimated KRA / clearing charges</span><b>KES 185,000</b></div><small>Ready to send via WhatsApp or email</small></div><div className="document-badge">✓ AUTO-GENERATED</div></div>
          <a href="https://wa.me/254723595334?text=Hi%20Sammy,%20I%20want%20to%20automate%20my%20WhatsApp%20replies%20and%20quotes" className="enterprise-button">AUTOMATE YOUR QUOTES <b>↗</b></a>
        </section>
      </div>
    </main>
  )
}

function SammaAutomationsPage() {
  const goHome = () => {
    window.location.hash = 'home'
  }

  const stepStatus = {
    'in-development': { label: 'In development & testing', className: 'chip-testing' },
    planned: { label: 'Planned', className: 'chip-planned' },
  }

  return (
    <main className="samma-page">
      <div className="container case-study-container">
        <button className="back-link" onClick={goHome}>← Back to portfolio</button>

        <p className="samma-eyebrow">{sammaAutomations.page.eyebrow}</p>
        <h1>{sammaAutomations.page.headline}</h1>
        <p className="case-study-lead">{sammaAutomations.page.lead}</p>

        <div className="samma-status">
          <span className="status-badge status-testing">{sammaAutomations.page.statusBadge}</span>
          <p>{sammaAutomations.page.statusDetail}</p>
        </div>

        <div className="case-study-actions">
          <a className="btn btn-primary" href={DEMO_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            {sammaAutomations.page.ctaPrimary}
          </a>
          <a className="btn btn-secondary" href={DEMO_EMAIL_LINK}>
            {sammaAutomations.page.ctaSecondary}
          </a>
        </div>

        {/* Intended workflow */}
        <section className="samma-block">
          <h2>{sammaAutomations.workflow.title}</h2>
          <p className="samma-block-subtitle">{sammaAutomations.workflow.subtitle}</p>
          <ol className="sa-steps">
            {sammaAutomations.workflow.steps.map((step, idx) => {
              const status = stepStatus[step.status]
              return (
                <li className="sa-step" key={step.title}>
                  <span className="sa-step-num" aria-hidden="true">{idx + 1}</span>
                  <div className="sa-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <span className={`sa-step-chip ${status.className}`}>{status.label}</span>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* Capabilities by implementation status */}
        <section className="samma-block">
          <h2>{sammaAutomations.capabilities.title}</h2>
          <p className="samma-block-subtitle">{sammaAutomations.capabilities.subtitle}</p>
          <div className="sa-cap-groups">
            {sammaAutomations.capabilities.groups.map((group) => (
              <article className={`sa-cap-group cap-${group.id}`} key={group.id}>
                <h3>{group.label}</h3>
                <p className="sa-cap-note">{group.note}</p>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="samma-block">
          <h2>{sammaAutomations.useCases.title}</h2>
          <p className="samma-block-subtitle">{sammaAutomations.useCases.subtitle}</p>
          <div className="sa-usecases">
            {sammaAutomations.useCases.cases.map((useCase) => (
              <article className="sa-usecase" key={useCase.title}>
                <span className="sa-usecase-icon" aria-hidden="true">{useCase.icon}</span>
                <h3>{useCase.title}</h3>
                <p>{useCase.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Real project vs illustrative example */}
        <section className="samma-block">
          <h2>{sammaAutomations.caseStudy.title}</h2>
          <p className="samma-block-subtitle">{sammaAutomations.caseStudy.subtitle}</p>
          <div className="sa-verified">
            <h3>Verified, publicly viewable</h3>
            <p>{sammaAutomations.caseStudy.verifiedIntro}</p>
            <ul>
              {sammaAutomations.caseStudy.verified.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>{sammaAutomations.caseStudy.developmentNote}</p>
          </div>

          <div className="sa-illustrative">
            <h3>{sammaAutomations.caseStudy.illustrativeTitle}</h3>
            <p>{sammaAutomations.caseStudy.illustrativeNote}</p>
            <div className="sa-chat">
              <div className="chat-window">
                <div className="chat-header">
                  <h3>{sammaAutomations.caseStudy.illustrativeChat.contactName}</h3>
                </div>
                <div className="chat-messages">
                  {sammaAutomations.caseStudy.illustrativeChat.exchanges.map((exchange, idx) => (
                    <div key={idx} className={`message message-${exchange.type}`}>
                      <div className="message-content"><p>{exchange.text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="samma-block">
          <h2>Samma Automations — common questions</h2>
          <div className="faq-list samma-faq">
            {sammaAutomations.faq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="samma-cta">
          <h2>See it for yourself</h2>
          <p>
            Ask for a demonstration of the current Samma Automations flow, or send an email with your questions.
          </p>
          <div className="case-study-actions">
            <a className="btn btn-primary" href={DEMO_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Request a demonstration
            </a>
            <a className="btn btn-secondary" href={DEMO_EMAIL_LINK}>Email hello@sammymacharia.com</a>
          </div>
        </section>
      </div>
    </main>
  )
}

function LegalPage({ content, crossLink }) {
  return (
    <main className="legal-page">
      <div className="container case-study-container">
        <button className="back-link" onClick={() => { window.location.hash = 'home' }}>← Back to portfolio</button>
        <h1>{content.title}</h1>
        <p className="case-study-lead">{content.lead}</p>
        <p className="legal-updated">{legal.operator.lastUpdated}</p>
        <div className="legal-sections">
          {content.sections.map((section) => (
            <section className="legal-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            </section>
          ))}
        </div>
        <p className="legal-operator">
          Operated by {legal.operator.name}, {legal.operator.location}. Contact:{' '}
          <a href={`mailto:${legal.operator.email}`}>{legal.operator.email}</a>
        </p>
        <div className="legal-cross-links">{crossLink}</div>
      </div>
    </main>
  )
}

function PrivacyPage() {
  return (
    <LegalPage
      content={legal.privacy}
      crossLink={
        <button className="text-link" onClick={() => { window.location.hash = '/terms' }}>
          View the Website and Service Terms →
        </button>
      }
    />
  )
}

function TermsPage() {
  return (
    <LegalPage
      content={legal.terms}
      crossLink={
        <button className="text-link" onClick={() => { window.location.hash = '/privacy' }}>
          View the Privacy Notice →
        </button>
      }
    />
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [route, setRoute] = useState(() => window.location.hash)

  const caseStudyId = route.startsWith('#/work/') ? route.replace('#/work/', '') : null

  const projects = [portfolioData.featuredProject, ...portfolioData.dataProjects]
  const activeProject = projects.find((project) => project.id === caseStudyId)

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    if (PAGE_TITLES[route]) {
      document.title = PAGE_TITLES[route]
    } else if (activeProject) {
      document.title = `${activeProject.title} | Sammy Macharia`
    } else {
      document.title = DEFAULT_TITLE
    }
  }, [route, activeProject])

  if (route === '#/promo') {
    return <PromoVideo />
  }

  if (route === '#/logistics-story') {
    return <LogisticsStoryVideo />
  }

  if (route === '#/enterprise-status') {
    return <EnterpriseStatusVideo />
  }

  if (route === '#/samma-automations') {
    return <SammaAutomationsPage />
  }

  if (route === '#/privacy') {
    return <PrivacyPage />
  }

  if (route === '#/terms') {
    return <TermsPage />
  }

  const openCaseStudy = (projectId) => {
    window.location.hash = `/work/${projectId}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backToWork = () => {
    window.location.hash = 'featured'
  }

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToSammaAutomations = () => {
    setMobileMenuOpen(false)
    window.location.hash = '/samma-automations'
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const goToLegalPage = (pageHash) => {
    window.location.hash = pageHash
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (activeProject) {
    return (
      <main className="case-study-page">
        <div className="container case-study-container">
          <button className="back-link" onClick={backToWork}>← Back to Work</button>
          <p className="case-study-category">{activeProject.category}</p>
          <h1>{activeProject.title}</h1>
          <p className="case-study-lead">{activeProject.description}</p>

          <div className="case-study-grid">
            <article><h2>Business Problem</h2><p>{activeProject.businessProblem}</p></article>
            <article><h2>Objective</h2><p>{activeProject.caseStudy.objective}</p></article>
            <article><h2>Solution / Approach</h2><p>{activeProject.solution}</p></article>
            <article><h2>Process / Methodology</h2><p>{activeProject.caseStudy.process}</p></article>
            <article><h2>Key Findings or Results</h2><p>{activeProject.caseStudy.findings}</p></article>
            <article><h2>Business Value</h2><p>{activeProject.businessValue}</p></article>
            <article><h2>Technology / Tools</h2><div className="tag-list">{(activeProject.technologies || activeProject.skills).map((tool) => <span key={tool} className="tag">{tool}</span>)}</div></article>
            <article><h2>Limitations</h2><p>{activeProject.caseStudy.limitations}</p></article>
          </div>

          <div className="case-study-actions">
            {activeProject.demoAvailable ? (
              <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a>
            ) : (
              <span className="btn btn-disabled" aria-disabled="true">Demo coming soon</span>
            )}
            <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="source-link">View Source on GitHub</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      {/* Header/Navigation */}
      <header className="header" id="home">
        <div className="header-inner">
          <div className="logo">
            <div>
              <span className="logo-text">SAMMY MACHARIA</span>
              <span className="logo-specialties">AI Automation · Data Analytics · Data Storytelling</span>
            </div>
          </div>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('featured')} className="nav-link">
              Work
            </button>
            <button onClick={goToSammaAutomations} className="nav-link">
              Samma Automations
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">{portfolioData.hero.headline}</h1>
            <ul className="hero-bullets">
              {portfolioData.hero.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="hero-ctas">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('featured')}
              >
                {portfolioData.hero.cta_primary}
              </button>
              <a
                className="btn btn-secondary"
                href="https://wa.me/254723595334?text=Hi%20Sammy,%20I%20want%20a%20free%2015-min%20audit%20for%20my%20business"
              >
                {portfolioData.hero.cta_secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Samma Automations intro */}
      <section className="samma-intro" id="samma-intro">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">{sammaAutomations.intro.eyebrow}</p>
            <h2>{sammaAutomations.intro.headline}</h2>
            <p className="section-subtitle">{sammaAutomations.intro.description}</p>
          </div>

          <div className="samma-highlights">
            {sammaAutomations.intro.highlights.map((highlight) => (
              <div className="samma-highlight" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>

          <p className="samma-status-note">{sammaAutomations.intro.statusNote}</p>

          <div className="hero-ctas samma-intro-ctas">
            <button className="btn btn-primary" onClick={goToSammaAutomations}>
              {sammaAutomations.intro.ctaPrimary}
            </button>
            <a className="btn btn-secondary" href={DEMO_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              {sammaAutomations.intro.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>What Services Does Sammy Macharia Offer for Small Businesses in Kenya and Globally?</h2>
            <p className="section-subtitle">Four practical ways to save time, capture leads and make clearer decisions</p>
          </div>

          <div className="services-grid">
            {portfolioData.services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - Cindy Bakes */}
      <section className="featured-project" id="featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p className="section-subtitle">Practical solutions in action</p>
          </div>

          <div className="project-showcase">
            <div className="project-content">
              <h3 className="project-title">{portfolioData.featuredProject.title}</h3>
              <p className="project-tagline">{portfolioData.featuredProject.tagline}</p>

              <div className="project-case-study">
                <div className="case-study-item">
                  <h4>Business Problem</h4>
                  <p>{portfolioData.featuredProject.businessProblem}</p>
                </div>

                <div className="case-study-item">
                  <h4>Solution</h4>
                  <p>{portfolioData.featuredProject.solution}</p>
                </div>

                <div className="case-study-item">
                  <h4>Business Value</h4>
                  <p>{portfolioData.featuredProject.businessValue}</p>
                </div>

                <blockquote className="project-testimonial">
                  <p>"{portfolioData.featuredProject.testimonial.quote}"</p>
                  <cite>— {portfolioData.featuredProject.testimonial.attribution}</cite>
                </blockquote>
              </div>

              <div className="project-highlights">
                <h4>Key Features</h4>
                <ul>
                  {portfolioData.featuredProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="metrics" aria-label="Project results">
                {portfolioData.featuredProject.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>

              <div className="project-demonstrates">
                <h4>Demonstrates</h4>
                <div className="tag-list">
                  {portfolioData.featuredProject.demonstrates.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-ctas">
                <button className="btn btn-primary" onClick={() => openCaseStudy(portfolioData.featuredProject.id)}>View Case Study</button>
                {portfolioData.featuredProject.demoAvailable ? <a href={portfolioData.featuredProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a> : <span className="btn btn-secondary btn-disabled">Demo coming soon</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & ML Projects */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Data & Machine Learning</h2>
            <p className="section-subtitle">
              Turning data into insights and predictions
            </p>
          </div>

          <div className="projects-grid">
            {portfolioData.dataProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="project-detail">
                  <strong>Business Problem:</strong>
                  <p>{project.businessProblem}</p>
                </div>

                <div className="project-detail">
                  <strong>Solution:</strong>
                  <p>{project.solution}</p>
                </div>

                <div className="project-value">
                  <strong>Business Value:</strong>
                  <p>{project.businessValue}</p>
                </div>

                <div className="project-skills">
                  <div className="skill-tags">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <button className="link-btn link-btn-primary" onClick={() => openCaseStudy(project.id)}>View Case Study</button>
                  {project.demoAvailable ? <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="link-btn">Live Demo</a> : <span className="link-btn btn-disabled">Demo coming soon</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Storytelling Section */}
      <section className="data-storytelling" id="data-storytelling">
        <div className="container">
          <div className="section-header">
            <h2>{portfolioData.dataStorytelling.headline}</h2>
            <p className="section-subtitle">{portfolioData.dataStorytelling.subheading}</p>
          </div>

          <div className="storytelling-content">
            <div className="dashboard-preview">
              <div className="dashboard-placeholder">
                <p className="placeholder-text">📊</p>
                <p className="placeholder-detail">
                  {portfolioData.dataStorytelling.distinction}
                </p>
              </div>
            </div>

            <div className="dashboard-categories">
              <h3>Dashboard Categories</h3>
              <div className="categories-list">
                {portfolioData.dataStorytelling.categories.map((category, idx) => (
                  <div key={idx} className="category-item">
                    <span className="category-icon">📈</span>
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Showcase */}
      <section className="ai-assistant" id="ai-assistant">
        <div className="container">
          <div className="section-header">
            <h2>{portfolioData.aiAssistant.headline}</h2>
            <p className="section-subtitle">{portfolioData.aiAssistant.description}</p>
          </div>

          <div className="assistant-showcase">
            <div className="conversation-example">
              <div className="chat-window">
                <div className="chat-header">
                  <h3>AI Assistant Example</h3>
                </div>
                <div className="chat-messages">
                  {portfolioData.aiAssistant.example.exchanges.map((exchange, idx) => (
                    <div key={idx} className={`message message-${exchange.type}`}>
                      <div className="message-content">
                        <p>{exchange.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="assistant-progression">
              <h3>The Conversion Journey</h3>
              <div className="progression-flow">
                {portfolioData.aiAssistant.progression.map((step, idx) => (
                  <div key={idx}>
                    <div className="progression-step">{step}</div>
                    {idx < portfolioData.aiAssistant.progression.length - 1 && (
                      <div className="progression-arrow">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="assistant-applications">
                Cindy Bakes is the proof of concept. The same approach can be adapted for {portfolioData.aiAssistant.applications.join(', ')}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2>{portfolioData.about.headline}</h2>
          </div>

          <div className="about-content">
            {portfolioData.about.paragraphs.map((paragraph) => <p className="about-bio" key={paragraph}>{paragraph}</p>)}

            <div className="about-samma">
              <h3>{sammaAutomations.about.title}</h3>
              {sammaAutomations.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <button className="text-link" onClick={goToSammaAutomations}>
                {sammaAutomations.about.cta} →
              </button>
            </div>

            <div className="capabilities-section">
              <h3>What problems I solve</h3>
              <ul className="about-problems">
                {portfolioData.about.problems.map((problem) => <li key={problem}>{problem}</li>)}
              </ul>
              <h3>Why work with me</h3>
              <p className="about-why">{portfolioData.about.whyWorkWithMe}</p>
              <h3>Core Capabilities</h3>
              <div className="capabilities-grid">
                {portfolioData.about.capabilities.map((capability, idx) => (
                  <div key={idx} className="capability-item">
                    ✓ {capability}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>{portfolioData.contact.headline}</h2>
            <p className="section-subtitle">{portfolioData.contact.subheading}</p>
          </div>

          <div className="contact-content">
            <div className="contact-ctas">
              <a
                className="btn btn-primary"
                href="https://wa.me/254723595334?text=Hi%20Sammy,%20I%20want%20a%20free%2015-min%20audit%20for%20my%20business"
              >
                Book Free Audit on WhatsApp
              </a>
              <a className="btn btn-secondary" href="mailto:hello@sammymacharia.com">
                Email me: hello@sammymacharia.com
              </a>
            </div>
            <p className="contact-note">
              Interested in <strong>Samma Automations</strong>, the WhatsApp enquiry automation product?{' '}
              <button className="text-link" onClick={goToSammaAutomations}>
                Read about it and request a demonstration →
              </button>
            </p>
            <div className="contact-info">
              <a href={`mailto:${portfolioData.contact.email}`} className="contact-link">
                <span className="contact-icon">✉</span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{portfolioData.contact.email}</p>
                </div>
              </a>

              <a href={`tel:${portfolioData.contact.phone}`} className="contact-link">
                <span className="contact-icon">☎</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">{portfolioData.contact.phone}</p>
                </div>
              </a>

              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">🔗</span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">View Profile</p>
                </div>
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💻</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">View Work</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container faq-content">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">Clear answers about AI automation, data and digital systems</p>
          </div>
          <div className="faq-list">
            {portfolioData.faq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sammy Macharia. All rights reserved.</p>
          <p className="footer-subtitle">Practical digital, AI and data solutions for businesses · Samma Automations, a WhatsApp automation product in development by Sammy Macharia</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <button className="footer-link" onClick={goToSammaAutomations}>Samma Automations</button>
            <button className="footer-link" onClick={() => scrollToSection('featured')}>Work</button>
            <button className="footer-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="footer-link" onClick={() => scrollToSection('contact')}>Contact</button>
            <button className="footer-link" onClick={() => goToLegalPage('/privacy')}>Privacy Notice</button>
            <button className="footer-link" onClick={() => goToLegalPage('/terms')}>Terms</button>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default App
