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
    title: `${partner.partner} | XRPL RWA Platform`,
    description: `${partner.partner} - ${partner.description}`,
  }
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = getPartnerBySlug(params.slug)
  if (!partner) notFound()

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200/80">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">{partner.partner}</h1>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium bg-slate-800 text-white px-2 py-0.5 rounded-lg">XRPL</span>
            <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg">{partner.subType}</span>
            <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg">{partner.assetType}</span>
            <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg">{partner.jurisdiction}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500 uppercase tracking-wider">Partner since</div>
          <div className="font-semibold text-slate-900">{partner.partnerSince}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-2">Status</div>
          <div className="font-semibold text-emerald-600 flex items-center justify-end gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {partner.status}
          </div>
        </div>
      </header>

      <section id="overview">
        <h2 className="section-label mb-4">Executive summary</h2>
        <div className="card p-4 sm:p-6">
          {partner.executiveSummary.map((p, i) => (
            <p key={i} className="text-slate-600 mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      <section id="metrics">
        <h2 className="section-label mb-4">Key investment metrics</h2>
        <div className="card p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {partner.metrics.map((m) => (
              <div key={m.label} className="text-center p-3 bg-slate-50 rounded-xl">
                <div className="text-lg font-bold text-ripple-blue">{m.value}</div>
                <div className="text-xs text-slate-500 uppercase">{m.label}</div>
                {m.sublabel && <div className="text-xs text-slate-400 mt-0.5">{m.sublabel}</div>}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
            <span className="text-sm font-medium text-slate-600">Permissioning</span>
            <div className="flex-1 max-w-xs h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-ripple-blue rounded-full" style={{ width: `${partner.permissionedPct}%` }} />
            </div>
            <span className="text-sm font-medium text-emerald-600">{partner.permissioned}</span>
          </div>
        </div>
      </section>

      <section id="deep-dive">
        <h2 className="section-label mb-4">Asset deep-dive</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {partner.deepDive.map((dd) => (
            <div key={dd.title} className="card p-5">
              <h3 className="font-semibold text-slate-900 mb-3">{dd.icon} {dd.title}</h3>
              {dd.paragraphs.map((p, i) => <p key={i} className="text-sm text-slate-600 mb-2">{p}</p>)}
              <ul className="list-none space-y-1 text-sm text-slate-600">
                {dd.bullets.map((b) => <li key={b} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-ripple-blue">{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Technical architecture</h2>
        <div className="card p-4 sm:p-6">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {partner.techLayers.map((layer) => (
              <div key={layer.title} className="p-4 border border-slate-200 rounded-xl">
                <div className="font-medium text-ripple-blue mb-2">{layer.title}</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  {layer.features.map((f) => <li key={f} className="flex gap-2"><span className="text-emerald-500">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-l-4 border-ripple-blue pl-4 py-2 bg-ripple-blue/5 rounded-r">
            <h4 className="text-sm font-semibold text-ripple-blue mb-1">XRPL Integration</h4>
            <p className="text-sm text-slate-600">Authorized TrustLines for compliance; 4-second settlement; full on-chain auditability.</p>
          </div>
        </div>
      </section>

      <section id="risks">
        <h2 className="section-label mb-4">Risk factors</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {partner.risks.map((r) => (
            <div key={r.title} className="card p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-900">{r.title}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  r.level === 'low' ? 'bg-emerald-100 text-emerald-700' :
                  r.level === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>{r.level}</span>
              </div>
              <p className="text-sm text-slate-600">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Regulatory framework</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {partner.regulatory.map((r) => (
            <div key={r.region} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{r.flag}</span>
                <div>
                  <h4 className="font-semibold text-slate-900">{r.region}</h4>
                  <p className="text-sm text-slate-600">{r.body}</p>
                </div>
              </div>
              <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc">
                {r.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <nav className="flex gap-3 flex-wrap pt-4 border-t border-slate-200/80">
        <Link href="/partners" className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-ripple-blue hover:text-ripple-blue transition-colors">
          ← All partners
        </Link>
        <Link href={`/fact-sheets/${partner.slug}`} className="px-4 py-2 rounded-xl bg-ripple-blue/10 border border-ripple-blue/30 text-ripple-blue font-medium text-sm hover:bg-ripple-blue/20 transition-colors">
          View fact sheet
        </Link>
      </nav>
    </div>
  )
}
