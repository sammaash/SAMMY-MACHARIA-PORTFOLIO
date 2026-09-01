import { useState } from 'react'
import './App.css'
import { portfolioData } from './data/portfolio'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Header/Navigation */}
      <header className="header" id="home">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Digital Solutions</span>
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
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('featured')} className="nav-link">
              Featured Work
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('data-storytelling')} className="nav-link">
              Data Storytelling
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link cta-nav">
              Get In Touch
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">{portfolioData.hero.headline}</h1>
            <p className="hero-subheading">{portfolioData.hero.subheading}</p>
            <div className="hero-ctas">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('featured')}
              >
                {portfolioData.hero.cta_primary}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                {portfolioData.hero.cta_secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p className="section-subtitle">Four core areas of expertise</p>
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
                  <h4>Problem</h4>
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
              </div>

              <div className="project-highlights">
                <h4>Key Features</h4>
                <ul>
                  {portfolioData.featuredProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
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
                <a
                  href={portfolioData.featuredProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo →
                </a>
                <a
                  href={portfolioData.featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View GitHub
                </a>
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
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>

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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    View GitHub →
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      Live Demo →
                    </a>
                  )}
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
                <p className="placeholder-message">{portfolioData.dataStorytelling.status}</p>
                <p className="placeholder-detail">
                  Tableau and Power BI dashboards with synthetic data coming soon
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
            <p className="about-bio">{portfolioData.about.bio}</p>

            <div className="capabilities-section">
              <h3>Core Capabilities</h3>
              <div className="capabilities-grid">
                {portfolioData.about.capabilities.map((capability, idx) => (
                  <div key={idx} className="capability-item">
                    ✓ {capability}
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                {portfolioData.about.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026. Digital Solutions Portfolio. All rights reserved.</p>
          <p className="footer-subtitle">Professional digital, AI and analytics solutions</p>
        </div>
      </footer>
    </>
  )
}

export default App
