import { sammaCompetency as product } from '../../data/sammaCompetency'

export function SammaCompetencyCard({ detailed = false }) {
  return (
    <article className="consultancy-card">
      <div className="consultancy-heading">
        <img className="consultancy-logo" src={product.logo} alt="" width="80" height="80" />
        <div>
          <p className="section-eyebrow">Featured business / Parent company</p>
          {detailed ? <h1>{product.name} <VerificationIcon /></h1> : <h2>{product.name} <VerificationIcon /></h2>}
          <p className="consultancy-business-no">Business No. {product.businessNo}</p>
        </div>
      </div>
      <span className="consultancy-badge" tabIndex={0} title="BRS Certificate BN-RRSK3Q6L - Verified 02 Nov 2026">
        {product.verificationBadge}
        <span className="consultancy-tooltip" role="tooltip">BRS Certificate BN-RRSK3Q6L - Verified 02 Nov 2026</span>
      </span>
      <p className="consultancy-tagline">{product.tagline}</p>
      <p>{product.description}</p>
      <div className="consultancy-tags" aria-label="Categories">
        {product.category.map((category) => <span key={category}>{category}</span>)}
      </div>
      <div className="samma-highlights">
        {product.offerings.map((offering) => (
          <section className="samma-highlight" key={offering.name}>
            <h3>{offering.name}</h3>
            <p>{offering.description}</p>
          </section>
        ))}
      </div>
      {detailed && (
        <>
          <h2>Automation solutions</h2>
          <ul className="consultancy-features">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <h2>Technology</h2>
          <p>{product.techStack.join(' · ')}</p>
          <section id="verification" className="consultancy-verification">
            <h2>Business registration</h2>
            <dl>
              <dt>Legal name</dt><dd>{product.name}</dd>
              <dt>Business number</dt><dd>{product.businessNo}</dd>
              <dt>Registered</dt><dd>{product.registrationDate}</dd>
              <dt>Owner</dt><dd>{product.owner}</dd>
              <dt>Location</dt><dd>{product.location}, {product.street}</dd>
              <dt>Postal address</dt><dd>{product.postalAddress}</dd>
            </dl>
            <p>BRS registration and Meta business verification are separate credentials; the registration certificate documents BRS registration.</p>
          </section>
        </>
      )}
      <div className="hero-ctas consultancy-actions">
        <a className="btn btn-primary" href={detailed ? '#verification' : '/products/samma-competency-consultancy'}>{product.cta.primary}</a>
        {product.certificateAvailable ? (
          <a className="btn btn-secondary" href={product.certificateUrl} target="_blank" rel="noopener noreferrer">Download Certificate</a>
        ) : (
          <span className="consultancy-certificate-pending" role="status">Certificate download pending public-safe PDF</span>
        )}
        <a className="btn btn-secondary" href={product.cta.links.demo} target="_blank" rel="noopener noreferrer">{product.cta.secondary}</a>
      </div>
      <p className="consultancy-validation">Validate via BRS SMS: Send BRS to 21546</p>
    </article>
  )
}

function VerificationIcon() {
  return (
    <svg className="consultancy-check" viewBox="0 0 24 24" role="img" aria-label="Meta Verified Business">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="m6.5 12 3.5 3.5 7.5-7.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
