import type { Metadata } from 'next'
import Link from 'next/link'
import { partners } from '@/data/partners'
import styles from './factsheets.module.css'

export const metadata: Metadata = {
  title: 'Fact Sheets | XRPL RWA Platform',
  description: 'One-page investment fact sheets for all XRPL RWA partner platforms',
}

export default function FactSheetsPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <div className="page-header">
        <h1 className="page-title">Partner Fact Sheets</h1>
        <p className="page-subtitle">
          Concise one-page investment summaries for each XRPL RWA partner platform.
          Key facts, investment highlights, risk profiles, and XRPL integration details at a glance.
        </p>
      </div>

      <div className="stats-grid" style={{ marginBottom: '3rem' }}>
        <div className="stat-item">
          <div className="stat-value">13</div>
          <div className="stat-label">Fact Sheets</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">8+</div>
          <div className="stat-label">Jurisdictions Covered</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">$2.5B+</div>
          <div className="stat-label">Total Assets Profiled</div>
        </div>
      </div>

      <div className={styles.factSheetGrid}>
        {partners.map((p) => {
          const isTangible = p.assetType === 'Tangible Asset'
          return (
            <Link key={p.slug} href={`/fact-sheets/${p.slug}`} className={styles.factSheetCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  {p.partner.includes('/') ? p.partner.split('/').map(n => n.trim()[0]).join('') : p.partner.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className={styles.cardName}>{p.partner}</h3>
                  <div className={styles.cardBadges}>
                    <span className={`badge ${isTangible ? 'badge-green' : 'badge-blue'}`} style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                      {p.subType}
                    </span>
                    <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                      {p.jurisdiction}
                    </span>
                  </div>
                </div>
              </div>
              <p className={styles.cardOverview}>{p.factSheet.overview}</p>
              <div className={styles.cardQuickFacts}>
                <div className={styles.quickFact}>
                  <span className={styles.quickLabel}>Min. Investment</span>
                  <span className={styles.quickValue}>{p.minInvestment}</span>
                </div>
                <div className={styles.quickFact}>
                  <span className={styles.quickLabel}>Permissioning</span>
                  <span className={styles.quickValue}>{p.permissioned}</span>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.viewLink}>View Full Fact Sheet →</span>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
