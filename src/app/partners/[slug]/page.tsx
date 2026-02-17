import { notFound } from 'next/navigation'
import Link from 'next/link'
import { partners, getPartnerBySlug, getAllPartnerSlugs } from '@/data/partners'
import type { Metadata } from 'next'
import styles from './partner.module.css'

export function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const partner = getPartnerBySlug(params.slug)
  if (!partner) return { title: 'Not Found' }
  return {
    title: `${partner.partner} | XRPL RWA Platform | Institutional Deep-Dive`,
    description: `Institutional investment analysis: ${partner.partner} - ${partner.description}`,
  }
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = getPartnerBySlug(params.slug)
  if (!partner) notFound()

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.partnerHeader}>
          <div>
            <h1 className={styles.partnerName}>{partner.partner}</h1>
            <div className={styles.partnerBadges}>
              <span className="badge badge-xrpl">XRPL Integrated</span>
              <span className="badge badge-asset">{partner.subType}</span>
              <span className="badge badge-asset">{partner.assetType}</span>
              <span className="badge badge-jurisdiction">{partner.jurisdiction}</span>
            </div>
          </div>
          <div className={styles.partnerMeta}>
            <div className={styles.metaLabel}>Partner Since</div>
            <div className={styles.metaValue}>{partner.partnerSince}</div>
            <div className={styles.metaLabel} style={{ marginTop: '0.5rem' }}>Status</div>
            <div className={styles.metaValue} style={{ color: 'var(--accent-green)' }}>● {partner.status}</div>
          </div>
        </header>

        <section className="section" id="overview">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>1</span>Executive Summary</h2>
          <div className="glass-card">
            <div className={styles.executiveSummary}>
              {partner.executiveSummary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="metrics">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>2</span>Key Investment Metrics</h2>
          <div className="glass-card">
            <div className={styles.metricsGrid}>
              {partner.metrics.map((m) => (
                <div key={m.label} className={styles.metricItem}>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                  {m.sublabel && <div className={styles.metricSublabel}>{m.sublabel}</div>}
                </div>
              ))}
            </div>
            <div className={styles.permissionGauge}>
              <div className={styles.gaugeLabel}>Permissioning</div>
              <div className={styles.gaugeBar}>
                <div className={styles.gaugeFill} style={{ width: `${partner.permissionedPct}%` }} />
              </div>
              <div className={styles.gaugeLabel} style={{ color: 'var(--accent-green)' }}>{partner.permissioned}</div>
            </div>
          </div>
        </section>

        <section className="section" id="deep-dive">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>3</span>Asset Deep-Dive</h2>
          <div className={styles.deepDiveGrid}>
            {partner.deepDive.map((dd) => (
              <div key={dd.title} className={`glass-card ${styles.deepDiveCard}`}>
                <h3>{dd.icon} {dd.title}</h3>
                {dd.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                <ul>
                  {dd.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>4</span>Technical Architecture: XRPL Integration</h2>
          <div className="glass-card">
            <div className={styles.techArchitecture}>
              {partner.techLayers.map((layer) => (
                <div key={layer.title} className={styles.techLayer}>
                  <div className={styles.techLayerTitle}>{layer.title}</div>
                  <ul className={styles.techFeatures}>
                    {layer.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="highlight-box">
              <h4>XRPL Integration</h4>
              <p>This partner leverages XRPL&apos;s native tokenization with Authorized TrustLines for compliance, ensuring that only verified investors can hold and transfer tokens. All transactions settle in 4 seconds with full on-chain auditability.</p>
            </div>
          </div>
        </section>

        <section className="section" id="risks">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>5</span>Risk Factors</h2>
          <div className={styles.riskMatrix}>
            {partner.risks.map((r) => (
              <div key={r.title} className={`glass-card ${styles.riskItem}`}>
                <div className={styles.riskHeader}>
                  <span className={styles.riskTitle}>{r.title}</span>
                  <span className={`${styles.riskLevel} ${styles[r.level]}`}>{r.level}</span>
                </div>
                <p className={styles.riskDescription}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>6</span>Regulatory Framework</h2>
          <div className={styles.regulatoryGrid}>
            {partner.regulatory.map((r) => (
              <div key={r.region} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{r.flag}</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{r.region}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{r.body}</p>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {r.items.map((item) => (
                    <li key={item} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', padding: '0.3rem 0', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--ripple-cyan)' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link href="/partners" style={{ padding: '0.75rem 1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, color: 'var(--text-secondary)', fontWeight: 500 }}>
            ← All Partners
          </Link>
          <Link href={`/fact-sheets/${partner.slug}`} style={{ padding: '0.75rem 1.5rem', background: 'rgba(0, 133, 255, 0.1)', border: '1px solid var(--ripple-blue)', borderRadius: 8, color: 'var(--ripple-cyan)', fontWeight: 500 }}>
            📑 View Fact Sheet
          </Link>
        </div>
      </div>
    </main>
  )
}
