import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPartnerBySlug, getAllPartnerSlugs } from '@/data/partners'
import type { Metadata } from 'next'

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
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200/80">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-ripple-blue uppercase tracking-wider mb-2">XRPL RWA Fact Sheet</div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">{partner.partner}</h1>
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${isTangible ? 'bg-emerald-100 text-emerald-700' : 'bg-ripple-blue/10 text-ripple-blue'}`}>{partner.assetType}</span>
            <span className="text-xs font-medium bg-ripple-cyan/10 text-ripple-cyan px-2 py-0.5 rounded-lg">{partner.subType}</span>
            <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg">{partner.jurisdiction}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-emerald-600 font-medium justify-end">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {partner.status}
          </div>
          <div className="text-sm text-slate-500 mt-1">Partner since {partner.partnerSince}</div>
        </div>
      </header>

      <section>
        <div className="bg-ripple-blue/5 border-l-4 border-ripple-blue rounded-r-card p-4 sm:p-6 shadow-card">
          <p className="text-slate-700 leading-relaxed">{fs.overview}</p>
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Key facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fs.keyFacts.map((fact) => (
            <div key={fact.label} className="flex justify-between items-center card rounded-xl px-4 py-3">
              <span className="text-xs text-slate-500 uppercase">{fact.label}</span>
              <span className="text-sm font-semibold text-ripple-blue text-right">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Investment highlights</h2>
        <div className="space-y-3">
          {fs.investmentHighlights.map((h, i) => (
            <div key={i} className="flex gap-3 card rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-ripple-blue text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
              <p className="text-slate-600 text-sm">{h}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="section-label mb-4">Risk profile</h2>
          <p className="text-sm text-slate-600 mb-4">{fs.riskProfile}</p>
          <div className="space-y-2 pt-4 border-t border-slate-200">
            {partner.risks.slice(0, 4).map((r) => (
              <div key={r.title} className="flex justify-between items-center">
                <span className="text-sm text-slate-600">{r.title}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  r.level === 'low' ? 'bg-emerald-100 text-emerald-700' :
                  r.level === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>{r.level}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h2 className="section-label mb-4">XRPL integration</h2>
          <p className="text-sm text-slate-600 mb-4">{fs.xrplIntegration}</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {partner.techLayers[1]?.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2"><span className="text-emerald-500">✓</span>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="section-label mb-4">Regulatory status</h2>
          <p className="text-sm text-slate-600 mb-4">{fs.regulatoryStatus}</p>
          {partner.regulatory.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">{partner.regulatory[0].flag} {partner.regulatory[0].region}</span>
              {partner.regulatory[0].items.slice(0, 2).map((item) => (
                <span key={item} className="text-xs font-medium bg-ripple-blue/10 text-ripple-blue px-2 py-0.5 rounded">{item}</span>
              ))}
            </div>
          )}
        </div>
        <div className="card p-5">
          <h2 className="section-label mb-4">Competitive position</h2>
          <p className="text-sm text-slate-600 mb-4">{fs.competitivePosition}</p>
          {partner.highlights.length > 0 && (
            <ul className="space-y-1 text-sm text-ripple-blue font-medium">
              {partner.highlights.map((h) => <li key={h}>→ {h}</li>)}
            </ul>
          )}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <p className="text-sm text-amber-800">This fact sheet is for informational purposes only and does not constitute investment advice. Data subject to change. Consult a qualified financial advisor before investing.</p>
      </div>

      <nav className="flex gap-3 flex-wrap pt-4 border-t border-slate-200/80">
        <Link href="/fact-sheets" className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-ripple-blue hover:text-ripple-blue transition-colors">
          ← All fact sheets
        </Link>
        <Link href={`/partners/${partner.slug}`} className="px-4 py-2 rounded-xl bg-ripple-blue text-white font-medium text-sm hover:bg-ripple-blue/90 transition-colors">
          View full deep-dive →
        </Link>
      </nav>
    </div>
  )
}
