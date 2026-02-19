'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { partners } from '@/data/partners'

const JURISDICTIONS = ['United States', 'United Kingdom', 'UAE', 'Singapore', 'APAC', 'Brazil', 'Argentina', 'BVI']

export default function HomePage() {
  const [tab, setTab] = useState<'all' | 'Financial Asset' | 'Tangible Asset'>('all')
  const [jurisdiction, setJurisdiction] = useState('all')
  const [segment, setSegment] = useState('all')

  const filteredPartners = useMemo(() => {
    return partners.filter((p) => {
      const matchTab = tab === 'all' || p.assetType === tab
      const matchJur = jurisdiction === 'all' || p.jurisdiction === jurisdiction
      const matchSeg =
        segment === 'all' ||
        (segment === 'Institutional' && p.investorSegments === 'Institutional') ||
        (segment === 'Retail' && p.investorSegments.includes('Retail'))
      return matchTab && matchJur && matchSeg
    })
  }, [tab, jurisdiction, segment])

  const geoCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    partners.forEach((p) => {
      counts[p.jurisdiction] = (counts[p.jurisdiction] || 0) + 1
    })
    return Object.entries(counts).sort((a, b) => b[1] - a[1])
  }, [])

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Page header */}
      <header className="pb-4 sm:pb-6 border-b border-slate-200/80">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">Assets</h1>
        <p className="text-slate-500 text-sm mb-4 sm:mb-6">Browse and filter tokenized real-world assets on the XRPL.</p>

        {/* Toolbar: tabs + filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="inline-flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1 w-full sm:w-fit max-w-full">
            {(['all', 'Financial Asset', 'Tangible Asset'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pill ${tab === t ? 'pill-active' : 'hover:text-slate-900'}`}
              >
                {t === 'all' ? 'All' : t === 'Financial Asset' ? 'Financial' : 'Tangible'}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-600">Jurisdiction</label>
              <select
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 min-h-[44px] text-sm text-slate-900 focus:border-ripple-blue focus:outline-none focus:ring-2 focus:ring-ripple-blue/20 transition-shadow w-full sm:w-auto"
              >
                <option value="all">All</option>
                {JURISDICTIONS.map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-600">Investor segment</label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 min-h-[44px] text-sm text-slate-900 focus:border-ripple-blue focus:outline-none focus:ring-2 focus:ring-ripple-blue/20 transition-shadow w-full sm:w-auto"
              >
                <option value="all">All</option>
                <option value="Institutional">Institutional only</option>
                <option value="Retail">Institutional & Retail</option>
              </select>
            </div>
            <span className="text-sm text-slate-500 sm:ml-auto">
              Showing <span className="font-semibold text-slate-700">{filteredPartners.length}</span> products
            </span>
          </div>
        </div>
      </header>

      {/* Overview stats */}
      <section>
        <h2 className="section-label mb-4">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '13', label: 'Total partners', desc: `${partners.length} products` },
          { value: String(geoCounts.length), label: 'Jurisdictions', desc: 'Regions' },
          { value: '$2.5B+', label: 'Tokenized assets', desc: 'Combined' },
          { value: '10 / 3', label: 'Financial / Tangible', desc: 'Asset types' },
        ].map((stat) => (
          <div key={stat.label} className="metric-card">
            <div className="metric-card-label">{stat.label}</div>
            <div className="metric-card-value">{stat.value}</div>
            <div className="metric-card-desc">{stat.desc}</div>
          </div>
        ))}
      </div>
      </section>

      {/* Geographic distribution */}
      <section>
      <h2 className="section-label mb-4">Geographic distribution</h2>
      <div className="card p-4 sm:p-6">
        <div className="space-y-3">
          {geoCounts.map(([jur, count]) => (
            <div key={jur} className="flex items-center gap-2 sm:gap-3">
              <span className="text-sm text-slate-700 w-24 sm:w-40 shrink-0 truncate">{jur}</span>
              <div className="flex-1 min-w-0 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-ripple-blue to-ripple-cyan rounded-full transition-all duration-500"
                  style={{ width: `${(count / (geoCounts[0]?.[1] ?? 1)) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-slate-900 w-6 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Assets table */}
      <section>
      <h2 className="section-label mb-4">All assets</h2>
      <div className="card overflow-hidden -mx-4 sm:mx-0">
        <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full text-left min-w-[640px]">
            <thead>
              <tr className="table-header-row">
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4">Partner</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4">Asset type</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4">Jurisdiction</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4 hidden md:table-cell">Min. investment</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4 hidden md:table-cell">Investors</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4">Status</th>
                <th className="table-header-cell px-4 py-3 sm:px-6 sm:py-4 w-20" />
              </tr>
            </thead>
            <tbody>
              {filteredPartners.map((p) => (
                <tr
                  key={p.slug}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Link href={`/partners/${p.slug}`} className="font-medium text-slate-900 hover:text-ripple-blue transition-colors block min-h-[44px] flex flex-col justify-center">
                      {p.partner}
                    </Link>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <span className="text-sm text-slate-700">{p.subType}</span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600">{p.jurisdiction}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-700 hidden md:table-cell">{p.minInvestment}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600 hidden md:table-cell">{p.investorSegments}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30 shrink-0" />
                      <span className="text-sm text-slate-700">{p.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Link
                      href={`/partners/${p.slug}`}
                      className="text-sm font-medium text-ripple-blue hover:underline inline-flex items-center min-h-[44px]"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredPartners.length === 0 && (
          <div className="empty-state px-4 sm:px-6">No assets match the selected filters.</div>
        )}
      </div>
      </section>

      <p className="text-xs text-slate-500 max-w-3xl pt-2">
        Past performance is not indicative of future results. Tokenized real-world assets involve significant risks.
        This platform does not provide investment advice. Investors should consult qualified financial advisors.
      </p>
    </div>
  )
}
