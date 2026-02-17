import type { Metadata } from 'next'
import Link from 'next/link'
import { partners } from '@/data/partners'

export const metadata: Metadata = {
  title: 'Partners | XRPL RWA Platform',
  description: 'Complete directory of all partner platforms on the XRPL RWA Investor Relations Platform',
}

const categories = [
  {
    title: 'Real Estate Platforms',
    icon: '🏢',
    slugs: ['ctrl-alt-property'],
    badge: 'Real Estate',
    badgeClass: 'badge-orange',
  },
  {
    title: 'Commodities & Luxury Assets',
    icon: '💎',
    slugs: ['ctrl-alt-diamonds'],
    badge: 'Commodities',
    badgeClass: 'badge-pink',
  },
  {
    title: 'DeFi & Yield Platforms',
    icon: '📈',
    slugs: ['justoken', 'zeconomy-guggenheim'],
    badge: 'DeFi',
    badgeClass: 'badge-cyan',
  },
  {
    title: 'Stablecoin & Treasury Platforms',
    icon: '💵',
    slugs: ['ondo-finance'],
    badge: 'Stablecoin',
    badgeClass: 'badge-green',
  },
  {
    title: 'Custody & Infrastructure',
    icon: '🔐',
    slugs: ['archax', 'openeden'],
    badge: 'Infrastructure',
    badgeClass: 'badge-purple',
  },
  {
    title: 'Traditional Finance Partners',
    icon: '🏦',
    slugs: ['phillip-securities', 'marketnode'],
    badge: 'TradFi',
    badgeClass: 'badge-dark',
  },
  {
    title: 'Alternative Assets',
    icon: '🎨',
    slugs: ['assnture', 'vert-capital'],
    badge: 'Alternative',
    badgeClass: 'badge-yellow',
  },
  {
    title: 'Asia-Pacific & LatAm Platforms',
    icon: '🌏',
    slugs: ['mercado-bitcoin', 'linklogis'],
    badge: 'APAC/LatAm',
    badgeClass: 'badge-blue',
  },
]

export default function PartnersPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <div className="page-header">
        <h1 className="page-title">Platform Navigation</h1>
        <p className="page-subtitle">Complete directory of all pages and partner platforms on the XRPL RWA Investor Relations Platform</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', transition: 'all 0.2s' }}>
          <span>🏠</span> Main Landing
        </Link>
        <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
          <span>ℹ️</span> About XRPL
        </Link>
        <Link href="/methodology" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
          <span>📋</span> Methodology
        </Link>
        <Link href="/fact-sheets" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
          <span>📑</span> Fact Sheets
        </Link>
      </div>

      <div className="stats-grid" style={{ marginBottom: '3rem' }}>
        <div className="stat-item"><div className="stat-value">17</div><div className="stat-label">Total Pages</div></div>
        <div className="stat-item"><div className="stat-value">13</div><div className="stat-label">Partner Platforms</div></div>
        <div className="stat-item"><div className="stat-value">8</div><div className="stat-label">Asset Classes</div></div>
        <div className="stat-item"><div className="stat-value">5</div><div className="stat-label">Core Pages</div></div>
      </div>

      {categories.map((cat) => (
        <section key={cat.title} className="section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, var(--ripple-blue), var(--ripple-cyan))', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              {cat.icon}
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{cat.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {cat.slugs.map((slug) => {
              const p = partners.find((pp) => pp.slug === slug)
              if (!p) return null
              return (
                <Link key={slug} href={`/partners/${slug}`} className="glass-card" style={{ display: 'block', textDecoration: 'none', padding: '1.5rem', transition: 'transform 0.2s, border-color 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{p.partner}</span>
                    <span className={`badge ${cat.badgeClass}`}>{cat.badge}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{p.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>📍 {p.jurisdiction}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>💰 {p.subType}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}
