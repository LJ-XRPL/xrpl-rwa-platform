import type { Metadata } from 'next'
import Link from 'next/link'
import { partners } from '@/data/partners'

export const metadata: Metadata = {
  title: 'Fact Sheets | XRPL RWA Platform',
  description: 'One-page investment fact sheets for all XRPL RWA partner platforms',
}

export default function FactSheetsPage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="pb-4 sm:pb-6 border-b border-slate-200/80">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">Partner Fact Sheets</h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          One-page investment summaries: key facts, highlights, risk profile, and XRPL integration for each partner.
        </p>
      </header>

      <section>
        <h2 className="section-label mb-4">Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { value: '13', label: 'Fact sheets', desc: 'One-pagers' },
            { value: '9', label: 'Jurisdictions', desc: 'Regions' },
            { value: '$2.5B+', label: 'Assets profiled', desc: 'Combined' },
          ].map((s) => (
            <div key={s.label} className="metric-card">
              <div className="metric-card-label">{s.label}</div>
              <div className="metric-card-value">{s.value}</div>
              <div className="metric-card-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">All fact sheets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {partners.map((p) => {
          const isTangible = p.assetType === 'Tangible Asset'
          const initials = p.partner.includes('/') ? p.partner.split('/').map((n) => n.trim()[0]).join('') : p.partner.slice(0, 2).toUpperCase()
          return (
            <Link
              key={p.slug}
              href={`/fact-sheets/${p.slug}`}
              className="block card p-5 card-hover transition-all duration-200 min-h-[44px] active:opacity-90"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-ripple-blue/10 border border-ripple-blue/30 flex items-center justify-center text-ripple-blue font-bold text-sm">
                  {initials}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{p.partner}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${isTangible ? 'bg-emerald-100 text-emerald-700' : 'bg-ripple-blue/10 text-ripple-blue'}`}>{p.subType}</span>
                    <span className="text-xs font-medium text-slate-500">{p.jurisdiction}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4">{p.factSheet.overview}</p>
              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl mb-3">
                <div><div className="text-xs text-slate-500">Min. investment</div><div className="text-sm font-medium text-slate-900">{p.minInvestment}</div></div>
                <div><div className="text-xs text-slate-500">Permissioning</div><div className="text-sm font-medium text-slate-900">{p.permissioned}</div></div>
              </div>
              <span className="text-sm font-medium text-ripple-blue">View fact sheet →</span>
            </Link>
          )
        })}
      </div>
      </section>
    </div>
  )
}
