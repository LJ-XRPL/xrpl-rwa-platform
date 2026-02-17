import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About XRPL Tokenization | XRPL RWA Platform',
  description: 'Understanding the XRP Ledger infrastructure for real-world asset tokenization',
}

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <div className="page-header">
        <h1 className="page-title">About XRPL Tokenization</h1>
        <p className="page-subtitle">Understanding the XRP Ledger&apos;s infrastructure for real-world asset tokenization</p>
      </div>

      <section className="section">
        <div className="glass-card">
          <h2 className="card-title">What is the XRP Ledger?</h2>
          <p>
            The XRP Ledger (XRPL) is a decentralized, permissionless blockchain that has been operating reliably since
            2012. It is designed specifically for payments and has processed over $30 billion in transactions without any
            major security incidents.
          </p>
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-value">10+</div><div className="stat-label">Years in Production</div></div>
            <div className="stat-item"><div className="stat-value">4s</div><div className="stat-label">Settlement Time</div></div>
            <div className="stat-item"><div className="stat-value">$0.0002</div><div className="stat-label">Avg. Transaction Cost</div></div>
            <div className="stat-item"><div className="stat-value">1,500+</div><div className="stat-label">TPS Capacity</div></div>
          </div>
          <p>
            Unlike general-purpose blockchains, XRPL was built from the ground up for financial infrastructure. Its
            unique consensus mechanism achieves finality in 4-5 seconds while maintaining decentralization and low
            energy consumption—making it exceptionally suited for institutional RWA applications.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why XRPL for Real-World Assets?</h2>
        <div className="feature-grid">
          {[
            { icon: '📊', title: 'Native Decentralized Exchange', desc: 'XRPL includes a built-in order-book DEX enabling instant asset exchange without bridging to external DEXs.' },
            { icon: '🔗', title: 'TrustLines', desc: 'Native asset tracking system where users explicitly trust issuers with transparent, on-chain visibility.' },
            { icon: '⚖️', title: 'Compliance Hooks', desc: 'Protocol-level features like Authorized TrustLines, Clawback, and Freeze for regulatory compliance.' },
            { icon: '⚡', title: 'Low Fees & High Efficiency', desc: 'Transaction costs average $0.0002 USD equivalent with minimal energy consumption.' },
            { icon: '🌉', title: 'Cross-Chain Bridges', desc: 'The XRP Ledger bridges to Ethereum, Bitcoin, and other chains via protocols like ILP.' },
            { icon: '💱', title: 'Automated Market Maker', desc: 'Integrated AMM enables automated liquidity provision for RWA tokens.' },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="glass-card">
          <h2 className="card-title">Ripple&apos;s Role in the Ecosystem</h2>
          <p>Ripple Labs Inc. is a technology company that has been instrumental in developing the XRP Ledger. While XRPL is decentralized, Ripple provides key infrastructure:</p>
          <ul>
            <li><strong>RippleNet</strong> — Enterprise blockchain solutions for cross-border payments used by 300+ institutions</li>
            <li><strong>RLUSD</strong> — Regulated stablecoin backed 1:1 by USD deposits</li>
            <li><strong>Ripple Custody</strong> — Institutional-grade digital asset custody solution</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="glass-card">
          <h2 className="card-title"><span className="badge badge-blue">Stablecoin</span> RLUSD Integration</h2>
          <p>RLUSD is Ripple&apos;s regulated stablecoin, issued by Ripple and designed to meet institutional standards.</p>
          <ul>
            <li><strong>Full Reserve Backing</strong> — 1:1 backed by USD deposits at FDIC-insured banks</li>
            <li><strong>Regulatory Compliance</strong> — Issued in accordance with NY DFS guidance</li>
            <li><strong>Native XRPL Integration</strong> — Built directly on XRPL with immediate settlement</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="glass-card">
          <h2 className="card-title"><span className="badge badge-cyan">Custody</span> Ripple Custody Overview</h2>
          <p>Ripple Custody provides institutional-grade digital asset storage with security and compliance controls.</p>
          <ul>
            <li><strong>Multi-Sig Security</strong> — MPC-based key management with HSM backup</li>
            <li><strong>Regulatory Alignment</strong> — SOC 1 Type 2 and SOC 2 Type 2 certified</li>
            <li><strong>Compliance Features</strong> — Transaction limits, geo-restrictions, whitelisting</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key XRPL Features for Tokenization</h2>
        <div className="feature-grid">
          {[
            { icon: '✓', title: 'Authorized TrustLines', desc: 'Issuers must explicitly authorize each holder. Essential for KYC/AML compliance.' },
            { icon: '↩️', title: 'Clawback', desc: 'Issuers can recover tokens from holders in cases of regulatory requirement.' },
            { icon: '🔒', title: 'Freeze', desc: 'Ability to freeze accounts or entire tokenized assets for compliance.' },
            { icon: '🧩', title: 'AMM', desc: 'On-chain liquidity pools for automated trading.' },
            { icon: '🌐', title: 'Cross-Chain Bridges', desc: 'XLS-38d bridge standard enables secure asset transfer.' },
            { icon: '📋', title: 'Hooks', desc: 'Smart contracts on XRPL for programmable RWA logic.' },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Regulatory Landscape by Jurisdiction</h2>
        <div className="feature-grid">
          {[
            { flag: '🇺🇸', region: 'United States', desc: 'SEC classification applies. Regulation S and D provide exemptions.', badge: 'Securities Focus', badgeClass: 'badge-blue' },
            { flag: '🇪🇺', region: 'European Union', desc: 'MiCA provides clear framework, in force since December 2024.', badge: 'MiCA Compliant', badgeClass: 'badge-green' },
            { flag: '🇸🇬', region: 'Singapore', desc: 'MAS regulatory sandbox and payment services framework.', badge: 'Pro-Innovation', badgeClass: 'badge-green' },
            { flag: '🇬🇧', region: 'United Kingdom', desc: 'FCA registration for crypto businesses.', badge: 'Evolving', badgeClass: 'badge-blue' },
            { flag: '🇦🇪', region: 'UAE (Dubai/VAD)', desc: 'VARA provides dedicated framework for virtual assets.', badge: 'Pro-Innovation', badgeClass: 'badge-green' },
            { flag: '🇯🇵', region: 'Japan', desc: 'PSA regulates crypto exchanges, FSA approval required.', badge: 'Structured', badgeClass: 'badge-blue' },
          ].map((r) => (
            <div key={r.region} className="feature-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{r.flag}</span>
                <strong style={{ color: 'var(--ripple-cyan)' }}>{r.region}</strong>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{r.desc}</p>
              <span className={`badge ${r.badgeClass}`}>{r.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">XRPL RWA Milestones</h2>
        <div className="glass-card">
          <div style={{ position: 'relative', paddingLeft: '2rem', margin: '2rem 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--ripple-blue), var(--ripple-cyan))' }} />
            {[
              { year: '2012', title: 'XRP Ledger Launches', desc: 'XRPL begins operations with novel consensus protocol' },
              { year: '2017', title: 'TrustLines Feature Added', desc: 'Native compliance framework enables regulated token issuance' },
              { year: '2020', title: 'Flare Networks Launch', desc: 'First major RWA tokenization experiments on XRPL' },
              { year: '2023', title: 'AMM & Clawback Features', desc: 'Protocol upgrades enhance DeFi and compliance capabilities' },
              { year: '2024', title: 'RLUSD Stablecoin Announced', desc: 'Ripple announces regulated stablecoin for institutional RWA ecosystem' },
              { year: '2024', title: 'Hooks Smart Contracts', desc: 'Smart contract capability added to XRPL' },
              { year: '2025', title: 'Institutional RWA Growth', desc: 'Major institutions launch tokenized asset platforms on XRPL' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: '2rem', paddingLeft: '1.5rem' }}>
                <div style={{ position: 'absolute', left: '-2rem', top: '0.25rem', width: 12, height: 12, background: 'var(--ripple-cyan)', borderRadius: '50%', transform: 'translateX(-5px)' }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--ripple-cyan)', fontWeight: 600, marginBottom: '0.25rem' }}>{item.year}</div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{item.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
