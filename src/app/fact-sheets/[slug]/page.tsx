import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPartnerBySlug, getAllPartnerSlugs } from '@/data/partners'
import type { Metadata } from 'next'
import styles from './factsheet.module.css'

export function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const partner = getPartnerBySlug(params.slug)
  if (!partner) return { title: 'Not Found' }
  return {
    title: `${partner.partner} Fact Sheet | XRPL RWA Platform`,
    description: `Investment fact sheet for ${partner.partner}: ${partner.factSheet.overview}`,
  }
}

export default function FactSheetPage({ params }: { params: { slug: string } }) {
  const partner = getPartnerBySlug(params.slug)
  if (!partner) notFound()

  const fs = partner.factSheet
  const isTangible = partner.assetType === 'Tangible Asset'

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sheetHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.headerBadge}>XRPL RWA FACT SHEET</div>
            <h1 className={styles.sheetTitle}>{partner.partner}</h1>
            <div className={styles.headerBadges}>
              <span className={`badge ${isTangible ? 'badge-green' : 'badge-blue'}`}>{partner.assetType}</span>
              <span className="badge badge-cyan">{partner.subType}</span>
              <span className="badge badge-jurisdiction">{partner.jurisdiction}</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              {partner.status}
            </div>
            <div className={styles.partnerSince}>Partner since {partner.partnerSince}</div>
          </div>
        </div>

        {/* Overview */}
        <section className={styles.overviewSection}>
          <p className={styles.overviewText}>{fs.overview}</p>
        </section>

        {/* Key Facts Table */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>📋</span>
            Key Facts at a Glance
          </h2>
          <div className={styles.keyFactsGrid}>
            {fs.keyFacts.map((fact) => (
              <div key={fact.label} className={styles.keyFactItem}>
                <div className={styles.keyFactLabel}>{fact.label}</div>
                <div className={styles.keyFactValue}>{fact.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Highlights */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>✨</span>
            Investment Highlights
          </h2>
          <div className={styles.highlightsList}>
            {fs.investmentHighlights.map((h, i) => (
              <div key={i} className={styles.highlightItem}>
                <div className={styles.highlightNumber}>{i + 1}</div>
                <p>{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column: Risk Profile + XRPL Integration */}
        <div className={styles.twoColumn}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚠️</span>
              Risk Profile
            </h2>
            <div className="glass-card" style={{ marginBottom: 0 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{fs.riskProfile}</p>
              <div className={styles.riskIndicators}>
                {partner.risks.slice(0, 4).map((r) => (
                  <div key={r.title} className={styles.riskIndicator}>
                    <span className={styles.riskName}>{r.title}</span>
                    <span className={`${styles.riskBadge} ${styles[r.level]}`}>{r.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔗</span>
              XRPL Integration
            </h2>
            <div className="glass-card" style={{ marginBottom: 0 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{fs.xrplIntegration}</p>
              <div className={styles.xrplFeatures}>
                {partner.techLayers[1]?.features.slice(0, 4).map((f) => (
                  <div key={f} className={styles.xrplFeature}>
                    <span style={{ color: 'var(--accent-green)' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Regulatory + Competitive */}
        <div className={styles.twoColumn}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🏛️</span>
              Regulatory Status
            </h2>
            <div className="glass-card" style={{ marginBottom: 0 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{fs.regulatoryStatus}</p>
              {partner.regulatory.length > 0 && (
                <div className={styles.regBadges}>
                  <span className="badge badge-jurisdiction">{partner.regulatory[0].flag} {partner.regulatory[0].region}</span>
                  {partner.regulatory[0].items.slice(0, 2).map((item) => (
                    <span key={item} className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{item}</span>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🏆</span>
              Competitive Position
            </h2>
            <div className="glass-card" style={{ marginBottom: 0 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{fs.competitivePosition}</p>
              {partner.highlights.length > 0 && (
                <div className={styles.competitiveHighlights}>
                  {partner.highlights.map((h) => (
                    <div key={h} className={styles.competitiveItem}>→ {h}</div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className={styles.sheetFooter}>
          <div className={styles.footerDisclaimer}>
            This fact sheet is for informational purposes only and does not constitute investment advice.
            Data subject to change. Consult a qualified financial advisor before investing.
          </div>
          <div className={styles.footerLinks}>
            <Link href="/fact-sheets" className={styles.footerLink}>
              ← All Fact Sheets
            </Link>
            <Link href={`/partners/${partner.slug}`} className={styles.footerLinkPrimary}>
              View Full Deep-Dive →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
