'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { partners } from '@/data/partners'
import styles from './home.module.css'

export default function HomePage() {
  const [assetType, setAssetType] = useState('all')
  const [subtype, setSubtype] = useState('all')
  const [jurisdiction, setJurisdiction] = useState('all')
  const [segment, setSegment] = useState('all')

  const filteredPartners = useMemo(() => {
    return partners.filter((p) => {
      const matchAsset = assetType === 'all' || p.assetType === assetType
      const matchSub = subtype === 'all' || p.subType === subtype
      const matchJur = jurisdiction === 'all' || p.jurisdiction === jurisdiction
      const matchSeg =
        segment === 'all' ||
        (segment === 'Institutional' && p.investorSegments === 'Institutional') ||
        (segment === 'Retail' && p.investorSegments.includes('Retail'))
      return matchAsset && matchSub && matchJur && matchSeg
    })
  }, [assetType, subtype, jurisdiction, segment])

  const geoDistribution = useMemo(() => {
    const counts: Record<string, number> = {}
    partners.forEach((p) => {
      counts[p.jurisdiction] = (counts[p.jurisdiction] || 0) + 1
    })
    return Object.entries(counts).sort((a, b) => b[1] - a[1])
  }, [])

  const maxGeo = geoDistribution.length > 0 ? geoDistribution[0][1] : 1

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>XRPL Real-World Asset Ecosystem</h1>
          <p className={styles.heroSubtitle}>
            Institutional-grade tokenization infrastructure powering the next generation of real-world asset
            investments. Secure, compliant, and accessible across 8+ jurisdictions.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>13</div>
              <div className={styles.statLabel}>Products</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>8+</div>
              <div className={styles.statLabel}>Jurisdictions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>$2.5B+</div>
              <div className={styles.statLabel}>Tokenized Assets</div>
            </div>
          </div>
        </section>

        <section className={styles.dashboard}>
          <div className={styles.dashboardCard}>
            <h3 className={styles.dashCardTitle}>Total Partners</h3>
            <div className={styles.totalCount}>13</div>
            <div className={styles.totalLabel}>Active RWA Partners</div>
          </div>

          <div className={styles.dashboardCard}>
            <h3 className={styles.dashCardTitle}>Geographic Distribution</h3>
            <div className={styles.distributionList}>
              {geoDistribution.map(([jur, count]) => (
                <div key={jur} className={styles.distributionItem}>
                  <span className={styles.distributionLabel}>{jur}</span>
                  <div className={styles.distributionBar}>
                    <div
                      className={styles.distributionFill}
                      style={{ width: `${(count / maxGeo) * 100}%` }}
                    />
                  </div>
                  <span className={styles.distributionValue}>{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dashboardCard}>
            <h3 className={styles.dashCardTitle}>Asset Type Breakdown</h3>
            <div className={styles.assetBreakdown}>
              <div className={styles.assetTypeRow}>
                <span className={styles.assetTypeLabel}>Financial</span>
                <span className={`${styles.assetTypeBadge} ${styles.financial}`}>Financial</span>
                <span className={styles.assetTypeCount}>10</span>
              </div>
              <div className={styles.assetTypeRow}>
                <span className={styles.assetTypeLabel}>Tangible</span>
                <span className={`${styles.assetTypeBadge} ${styles.tangible}`}>Tangible</span>
                <span className={styles.assetTypeCount}>3</span>
              </div>
            </div>
          </div>

          <div className={styles.dashboardCard}>
            <h3 className={styles.dashCardTitle}>Permissioning Spectrum</h3>
            <div className={styles.permissionSpectrum}>
              <div className={styles.permissionBar}>
                <div className={styles.permissionFill} style={{ width: '76%' }} />
              </div>
              <div className={styles.permissionLabels}>
                <span>Retail</span>
                <span>Accredited</span>
                <span>Institutional</span>
              </div>
              <div className={styles.permissionAvg}>
                Average: <strong>76% Permissioned</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <label>Asset Type</label>
            <select value={assetType} onChange={(e) => setAssetType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Financial Asset">Financial Asset</option>
              <option value="Tangible Asset">Tangible Asset</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Sub-Type</label>
            <select value={subtype} onChange={(e) => setSubtype(e.target.value)}>
              <option value="all">All Sub-Types</option>
              <option value="MMF">MMF</option>
              <option value="Property">Property</option>
              <option value="Precious Metals">Precious Metals</option>
              <option value="Energy">Energy</option>
              <option value="DCP">DCP</option>
              <option value="Private Credit">Private Credit</option>
              <option value="Sukuk">Sukuk</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Jurisdiction</label>
            <select value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)}>
              <option value="all">All Jurisdictions</option>
              <option value="UAE (Dubai)">UAE (Dubai)</option>
              <option value="US (Reg D)">US (Reg D)</option>
              <option value="UK">UK</option>
              <option value="BVI">BVI</option>
              <option value="Singapore">Singapore</option>
              <option value="APAC">APAC</option>
              <option value="ADGM">ADGM</option>
              <option value="Brazil">Brazil</option>
              <option value="Argentina">Argentina</option>
              <option value="SG/HK & worldwide">SG/HK & worldwide</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Investor Segment</label>
            <select value={segment} onChange={(e) => setSegment(e.target.value)}>
              <option value="all">All Segments</option>
              <option value="Institutional">Institutional Only</option>
              <option value="Retail">Institutional & Retail</option>
            </select>
          </div>
          <div className={styles.filterResults}>
            Showing <span>{filteredPartners.length}</span> products
          </div>
        </section>

        <section className={styles.assetsGrid}>
          {filteredPartners.map((p, i) => {
            const isTangible = p.assetType === 'Tangible Asset'
            const initials = p.partner.includes('/')
              ? p.partner.split('/').map((n) => n.trim()[0]).join('').slice(0, 2)
              : p.partner.slice(0, 2).toUpperCase()

            return (
              <Link
                key={`${p.slug}-${i}`}
                href={`/partners/${p.slug}`}
                className={styles.assetCard}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.partnerInfo}>
                    <div className={styles.partnerLogo}>{initials}</div>
                    <div className={styles.partnerName}>{p.partner}</div>
                  </div>
                </div>
                <div className={styles.cardBadges}>
                  <span className={`${styles.badgeType} ${isTangible ? styles.tangibleBadge : ''}`}>
                    {p.assetType}
                  </span>
                  <span className={styles.badgeSubtype}>{p.subType}</span>
                  <span className={styles.badgeJurisdiction}>{p.jurisdiction}</span>
                </div>
                <p className={styles.cardDescription}>{p.description}</p>
                <div className={styles.cardMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Min Investment</div>
                    <div className={styles.metricValue}>{p.minInvestment}</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Investors</div>
                    <div className={styles.metricValue}>{p.investorSegments}</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Permissioning</div>
                    <div className={styles.metricValue}>{p.permissioned}</div>
                  </div>
                </div>
                <div className={styles.cardSecondary}>
                  <span className={styles.secondaryLabel}>Secondary:</span>
                  <span className={styles.secondaryValue}>{p.secondaryTrading}</span>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </main>
  )
}
