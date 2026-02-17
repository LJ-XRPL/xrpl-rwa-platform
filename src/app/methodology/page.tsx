import type { Metadata } from 'next'
import styles from './methodology.module.css'

export const metadata: Metadata = {
  title: 'Methodology | XRPL RWA Platform',
  description: 'How we evaluate and rate tokenized real-world asset platforms on the XRP Ledger',
}

export default function MethodologyPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <div className="page-header">
        <h1 className="page-title">Scoring Methodology</h1>
        <p className="page-subtitle">How we evaluate and rate tokenized real-world asset platforms on the XRP Ledger</p>
      </div>

      <section className="section">
        <div className="glass-card">
          <h2 className="card-title">Methodology Overview</h2>
          <p>Our platform employs a comprehensive, multi-factor scoring framework designed to evaluate tokenized RWA platforms on the XRP Ledger.</p>
          <div className={styles.scoreDisplay}>
            <div className={`${styles.scoreCircle} ${styles.high}`}>A</div>
            <div className={styles.scoreInfo}>
              <h4>Composite Score (A-F)</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Overall platform rating combining all evaluation dimensions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><span className="badge badge-blue">Access</span> Permissioning Methodology</h2>
        <div className="glass-card">
          <h3 className="card-subtitle">Platform Access Classification</h3>
          <table className={styles.criteriaTable}>
            <thead>
              <tr><th>Classification</th><th>Description</th><th>Investor Type</th></tr>
            </thead>
            <tbody>
              <tr><td><span className="badge badge-green">Public</span></td><td>No restrictions; anyone can participate</td><td>Retail & Institutional</td></tr>
              <tr><td><span className="badge badge-blue">Accredited</span></td><td>Verification of accredited investor status required</td><td>Accredited Investors</td></tr>
              <tr><td><span className="badge badge-yellow">Qualified</span></td><td>KYC/AML plus additional suitability checks</td><td>Qualified Purchasers</td></tr>
              <tr><td><span className="badge badge-red">Institutional</span></td><td>Limited to institutional investors only</td><td>Institutions Only</td></tr>
            </tbody>
          </table>
        </div>
        <div className="feature-grid" style={{ marginTop: '1.5rem' }}>
          <div className="feature-card"><h3 className="feature-title">KYC/AML Requirements</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Evaluation of identity verification procedures and compliance with local regulations.</p></div>
          <div className="feature-card"><h3 className="feature-title">Accreditation Verification</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Assessment of how platforms verify accredited investor status.</p></div>
          <div className="feature-card"><h3 className="feature-title">Geographic Restrictions</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Analysis of prohibited jurisdictions and sanctions compliance.</p></div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><span className="badge badge-cyan">Risk</span> Risk Scoring Framework</h2>
        <div className="glass-card">
          <h3 className="card-subtitle">Risk Dimensions</h3>
          <table className={styles.criteriaTable}>
            <thead>
              <tr><th>Risk Dimension</th><th>Weight</th><th>Key Factors</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Operational Risk</strong></td><td>25%</td><td>Custody arrangements, technology infrastructure, track record</td></tr>
              <tr><td><strong>Regulatory Risk</strong></td><td>25%</td><td>Licensing, jurisdiction, compliance framework, legal clarity</td></tr>
              <tr><td><strong>Liquidity Risk</strong></td><td>20%</td><td>Market depth, secondary market access, redemption terms</td></tr>
              <tr><td><strong>Counterparty Risk</strong></td><td>15%</td><td>Issuer creditworthiness, underlying asset quality</td></tr>
              <tr><td><strong>Smart Contract Risk</strong></td><td>15%</td><td>Code audits, vulnerability history, upgrade mechanisms</td></tr>
            </tbody>
          </table>
        </div>
        <div className="glass-card">
          <h3 className="card-subtitle">Risk Level Matrix</h3>
          <div className={styles.riskMatrix}>
            <div className={`${styles.riskCell} ${styles.low}`}>1<br /><small>Very Low</small></div>
            <div className={`${styles.riskCell} ${styles.lowMed}`}>2<br /><small>Low</small></div>
            <div className={`${styles.riskCell} ${styles.med}`}>3<br /><small>Medium</small></div>
            <div className={`${styles.riskCell} ${styles.medHigh}`}>4<br /><small>High</small></div>
            <div className={`${styles.riskCell} ${styles.highRisk}`}>5<br /><small>Very High</small></div>
          </div>
          <ul>
            <li><span className="badge badge-green">Low Risk</span> — Aggregate score 1.0 - 2.0</li>
            <li><span className="badge badge-yellow">Moderate Risk</span> — Aggregate score 2.1 - 3.0</li>
            <li><span className="badge badge-red">Elevated Risk</span> — Aggregate score 3.1 - 5.0</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><span className="badge badge-green">Suitability</span> Investor Suitability Criteria</h2>
        <div className="glass-card">
          <h3 className="card-subtitle">Suitability Assessment Framework</h3>
          <table className={styles.criteriaTable}>
            <thead>
              <tr><th>Profile</th><th>Net Worth / Income</th><th>Experience</th><th>Risk Tolerance</th></tr>
            </thead>
            <tbody>
              <tr><td><span className="badge badge-blue">Retail</span></td><td>Standard</td><td>Basic</td><td>Conservative</td></tr>
              <tr><td><span className="badge badge-cyan">Accredited</span></td><td>$200K+ income / $1M+ net worth</td><td>Intermediate</td><td>Moderate</td></tr>
              <tr><td><span className="badge badge-yellow">Qualified</span></td><td>$5M+ investable assets</td><td>Advanced</td><td>Aggressive</td></tr>
              <tr><td><span className="badge badge-red">Institutional</span></td><td>$25M+ AUM</td><td>Expert</td><td>Custom</td></tr>
            </tbody>
          </table>
        </div>
        <div className="feature-grid" style={{ marginTop: '1.5rem' }}>
          <div className="feature-card"><h3 className="feature-title">Investment Experience</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Prior experience with digital assets and alternative investments.</p></div>
          <div className="feature-card"><h3 className="feature-title">Liquidity Needs</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Assessment of exit timelines and lock-up periods.</p></div>
          <div className="feature-card"><h3 className="feature-title">Tax Considerations</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Platform tax reporting and capital gains treatment.</p></div>
          <div className="feature-card"><h3 className="feature-title">Currency Exposure</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Settlement currency options and FX risk analysis.</p></div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><span className="badge badge-blue">Data</span> Data Sources & Update Frequency</h2>
        <div className="glass-card">
          <h3 className="card-subtitle">Primary Data Sources</h3>
          {[
            { icon: '📄', title: 'Public Filings & Disclosures', desc: 'SEC EDGAR, financial statements, prospectuses' },
            { icon: '🌐', title: 'On-Chain Data', desc: 'XRPL Explorer, transaction history, TrustLine data' },
            { icon: '🏛️', title: 'Regulatory Databases', desc: 'FINRA BrokerCheck, state registrations' },
            { icon: '📰', title: 'News & Media Monitoring', desc: 'Press releases, industry publications' },
            { icon: '💬', title: 'Direct Platform Verification', desc: 'Primary source verification' },
          ].map((s) => (
            <div key={s.title} className={styles.dataSource}>
              <div className={styles.dataSourceIcon}>{s.icon}</div>
              <div className={styles.dataSourceInfo}>
                <h4>{s.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card">
          <h3 className="card-subtitle">Update Frequency</h3>
          <div className={styles.updateGrid}>
            {[
              { freq: 'Real-Time', label: 'On-Chain Metrics' },
              { freq: 'Daily', label: 'Price & TVL' },
              { freq: 'Weekly', label: 'Risk Scores' },
              { freq: 'Monthly', label: 'Full Review' },
              { freq: 'Quarterly', label: 'Deep Analysis' },
            ].map((u) => (
              <div key={u.label} className={styles.updateItem}>
                <div className={styles.updateFrequency}>{u.freq}</div>
                <div className={styles.updateLabel}>{u.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="glass-card" style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }}>
          <h3 className="card-subtitle" style={{ color: '#FFD700' }}>Important Disclaimer</h3>
          <p style={{ fontSize: '0.9rem' }}>
            The information provided is for informational purposes only and does not constitute investment advice.
            Past performance is not indicative of future results. Tokenized RWAs involve significant risk including
            potential loss of principal. Investors should consult qualified financial advisors before making investment
            decisions.
          </p>
        </div>
      </section>
    </main>
  )
}
