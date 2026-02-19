import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology | XRPL RWA Platform',
  description: 'How we evaluate and rate tokenized real-world asset platforms on the XRP Ledger',
}

export default function MethodologyPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <header className="pb-6 sm:pb-8 border-b border-slate-200/80">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">Scoring Methodology</h1>
        <p className="text-slate-500 text-sm max-w-2xl">How we evaluate tokenized RWA platforms on the XRP Ledger.</p>
      </header>

      <section>
        <h2 className="section-label mb-4">Methodology overview</h2>
        <div className="card p-4 sm:p-6">
          <p className="text-slate-600 mb-6">We use a multi-factor scoring framework for tokenized RWA platforms.</p>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">A</div>
            <div>
              <h4 className="font-semibold text-slate-900">Composite Score (A–F)</h4>
              <p className="text-sm text-slate-500">Overall platform rating combining all dimensions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2 gap-4 sm:gap-6">
        <div className="min-w-0">
          <h2 className="section-label mb-4">Permissioning</h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[320px]">
              <thead>
                <tr className="table-header-row">
                  <th className="table-header-cell px-6 py-3">Classification</th>
                  <th className="table-header-cell px-6 py-3">Description</th>
                  <th className="table-header-cell px-6 py-3">Investor type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="px-6 py-3"><span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Public</span></td><td className="px-6 py-3 text-slate-600">No restrictions</td><td className="px-6 py-3 text-slate-600">Retail & Institutional</td></tr>
                <tr className="border-b border-slate-100"><td className="px-6 py-3"><span className="text-xs font-medium bg-ripple-blue/10 text-ripple-blue px-2 py-0.5 rounded">Accredited</span></td><td className="px-6 py-3 text-slate-600">Accredited verification required</td><td className="px-6 py-3 text-slate-600">Accredited</td></tr>
                <tr className="border-b border-slate-100"><td className="px-6 py-3"><span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Qualified</span></td><td className="px-6 py-3 text-slate-600">KYC/AML + suitability</td><td className="px-6 py-3 text-slate-600">Qualified purchasers</td></tr>
                <tr><td className="px-6 py-3"><span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded">Institutional</span></td><td className="px-6 py-3 text-slate-600">Institutions only</td><td className="px-6 py-3 text-slate-600">Institutions</td></tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="section-label mb-4">Risk dimensions</h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[320px]">
              <thead>
                <tr className="table-header-row">
                  <th className="table-header-cell px-6 py-3">Dimension</th>
                  <th className="table-header-cell px-6 py-3">Weight</th>
                  <th className="table-header-cell px-6 py-3">Key factors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="px-6 py-3 font-medium text-slate-900">Operational</td><td className="px-6 py-3 text-slate-600">25%</td><td className="px-6 py-3 text-slate-600">Custody, infrastructure, track record</td></tr>
                <tr className="border-b border-slate-100"><td className="px-6 py-3 font-medium text-slate-900">Regulatory</td><td className="px-6 py-3 text-slate-600">25%</td><td className="px-6 py-3 text-slate-600">Licensing, jurisdiction, compliance</td></tr>
                <tr className="border-b border-slate-100"><td className="px-6 py-3 font-medium text-slate-900">Liquidity</td><td className="px-6 py-3 text-slate-600">20%</td><td className="px-6 py-3 text-slate-600">Market depth, secondary access</td></tr>
                <tr className="border-b border-slate-100"><td className="px-6 py-3 font-medium text-slate-900">Counterparty</td><td className="px-6 py-3 text-slate-600">15%</td><td className="px-6 py-3 text-slate-600">Issuer credit, asset quality</td></tr>
                <tr><td className="px-6 py-3 font-medium text-slate-900">Smart contract</td><td className="px-6 py-3 text-slate-600">15%</td><td className="px-6 py-3 text-slate-600">Audits, vulnerabilities</td></tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Data sources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Public filings', desc: 'SEC EDGAR, financial statements' },
            { title: 'On-chain data', desc: 'XRPL Explorer, TrustLine data' },
            { title: 'Regulatory DBs', desc: 'FINRA BrokerCheck, registrations' },
            { title: 'Direct verification', desc: 'Primary source checks' },
          ].map((s) => (
            <div key={s.title} className="card p-4 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-ripple-blue/10 flex items-center justify-center text-ripple-blue font-bold text-sm shrink-0">i</div>
              <div className="min-w-0">
                <h4 className="font-medium text-slate-900">{s.title}</h4>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Update frequency</h2>
        <div className="flex flex-wrap gap-3">
          {['Real-time (on-chain)', 'Daily (price/TVL)', 'Weekly (risk)', 'Monthly (review)', 'Quarterly (deep)'].map((f) => (
            <div key={f} className="card rounded-xl px-4 py-3 min-w-[140px]">
              <div className="font-semibold text-ripple-blue text-sm">{f.split(' ')[0]}</div>
              <div className="text-xs text-slate-500 mt-0.5">{f.match(/\(([^)]+)\)/)?.[1] ?? f}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h3 className="font-semibold text-amber-800 mb-2">Disclaimer</h3>
          <p className="text-sm text-amber-700">Information is for informational purposes only and does not constitute investment advice. Tokenized RWAs involve significant risk. Consult a qualified financial advisor.</p>
        </div>
      </section>
    </div>
  )
}
