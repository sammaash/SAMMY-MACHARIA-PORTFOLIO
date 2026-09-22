import { useEffect, useState } from 'react'
import './App.css'
import { portfolioData } from './data/portfolio'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [caseStudyId, setCaseStudyId] = useState(() => window.location.hash.replace('#/work/', ''))

  const projects = [portfolioData.featuredProject, ...portfolioData.dataProjects]
  const activeProject = projects.find((project) => project.id === caseStudyId)

  useEffect(() => {
    const updateRoute = () => setCaseStudyId(window.location.hash.replace('#/work/', ''))
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

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
          <p className="footer-subtitle">Practical digital, AI and data solutions for businesses</p>
        </div>
      </footer>
    </>
  )
}

export default App
