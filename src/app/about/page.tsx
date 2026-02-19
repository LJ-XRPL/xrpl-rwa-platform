import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About XRPL Tokenization | XRPL RWA Platform',
  description: 'Understanding the XRP Ledger infrastructure for real-world asset tokenization',
}

export default function AboutPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <header className="pb-6 sm:pb-8 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">About XRPL Tokenization</h1>
            <a href="https://xrpl.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-ripple-blue hover:underline mt-1 min-h-[44px] items-center">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn more
            </a>
          </div>
        </div>
        <p className="text-slate-600 text-sm mt-3 max-w-2xl">Understanding the XRP Ledger&apos;s infrastructure for real-world asset tokenization.</p>
      </header>

      <section>
        <h2 className="section-label mb-4">What is the XRP Ledger?</h2>
        <div className="card p-4 sm:p-6 lg:p-8">
          <p className="text-slate-600 mb-6">
            The XRP Ledger (XRPL) is a decentralized, permissionless blockchain that has been operating reliably since
            2012. It is designed specifically for payments and has processed over $30 billion in transactions without any
            major security incidents.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { value: '10+', label: 'Years in Production' },
              { value: '4s', label: 'Settlement Time' },
              { value: '$0.0002', label: 'Avg. Transaction Cost' },
              { value: '1,500+', label: 'TPS Capacity' },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-ripple-blue">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-600">
            Unlike general-purpose blockchains, XRPL was built from the ground up for financial infrastructure. Its
            unique consensus mechanism achieves finality in 4-5 seconds while maintaining decentralization and low
            energy consumption—making it exceptionally suited for institutional RWA applications.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Why XRPL for Real-World Assets?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '📊', title: 'Native DEX', desc: 'Built-in order-book DEX enabling instant asset exchange without bridging.' },
            { icon: '🔗', title: 'TrustLines', desc: 'Native asset tracking with transparent, on-chain visibility.' },
            { icon: '⚖️', title: 'Compliance Hooks', desc: 'Authorized TrustLines, Clawback, and Freeze for regulation.' },
            { icon: '⚡', title: 'Low Fees', desc: 'Transaction costs average $0.0002 USD equivalent.' },
            { icon: '🌉', title: 'Cross-Chain Bridges', desc: 'Bridges to Ethereum, Bitcoin, and other chains via ILP.' },
            { icon: '💱', title: 'AMM', desc: 'Integrated AMM for automated liquidity provision.' },
          ].map((f) => (
            <div key={f.title} className="card p-5 card-hover transition-shadow">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Ripple&apos;s Role</h2>
          <p className="text-slate-600 mb-4">Ripple Labs Inc. has been instrumental in developing the XRP Ledger. Ripple provides:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong className="text-slate-800">RippleNet</strong> — Cross-border payments used by 300+ institutions</li>
            <li><strong className="text-slate-800">RLUSD</strong> — Regulated stablecoin backed 1:1 by USD</li>
            <li><strong className="text-slate-800">Ripple Custody</strong> — Institutional-grade digital asset custody</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">RLUSD &amp; Ripple Custody</h2>
          <p className="text-slate-600">RLUSD is Ripple&apos;s regulated stablecoin: full reserve backing, NY DFS guidance, native XRPL. Ripple Custody offers multi-sig security, SOC 1/2 Type 2, and compliance features.</p>
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">Regulatory landscape</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { region: 'United States', desc: 'SEC classification; Reg S and D exemptions.', badge: 'Securities focus' },
            { region: 'European Union', desc: 'MiCA framework in force.', badge: 'MiCA' },
            { region: 'Singapore', desc: 'MAS sandbox and payment services framework.', badge: 'Pro-innovation' },
            { region: 'United Kingdom', desc: 'FCA registration for crypto businesses.', badge: 'Evolving' },
            { region: 'UAE (Abu Dhabi & Dubai)', desc: 'ADGM (Abu Dhabi), VARA/Dubai for virtual assets.', badge: 'Pro-innovation' },
            { region: 'Japan', desc: 'PSA regulates exchanges; FSA approval.', badge: 'Structured' },
          ].map((r) => (
            <div key={r.region} className="card p-4">
              <div className="font-medium text-slate-900 mb-1">{r.region}</div>
              <p className="text-sm text-slate-600 mb-2">{r.desc}</p>
              <span className="text-xs font-medium text-ripple-blue bg-ripple-blue/10 px-2 py-0.5 rounded-lg">{r.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label mb-4">XRPL RWA milestones</h2>
        <div className="card p-6">
          <ul className="space-y-4">
            {[
              { year: '2012', title: 'XRP Ledger launches' },
              { year: '2017', title: 'TrustLines feature' },
              { year: '2023', title: 'AMM & Clawback' },
              { year: '2024', title: 'RLUSD announced; Hooks; Archax abrdn fund on XRPL' },
              { year: '2025', title: 'Institutional RWA growth' },
            ].map((m) => (
              <li key={m.year} className="flex gap-4 items-baseline">
                <span className="text-sm font-semibold text-ripple-blue w-12 shrink-0">{m.year}</span>
                <span className="text-slate-700">{m.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
