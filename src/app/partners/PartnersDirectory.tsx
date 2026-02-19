'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { partners } from '@/data/partners'

const CATEGORY_OPTIONS = [
  'All',
  'Real Estate',
  'Commodities',
  'DeFi & Yield',
  'Treasury',
  'Infrastructure',
  'TradFi',
  'Alternative',
  'APAC/LatAm',
]

const categoryBySlug: Record<string, string> = {
  'ctrl-alt-property': 'Real Estate',
  'ctrl-alt-diamonds': 'Commodities',
  'justoken': 'DeFi & Yield',
  'zeconomy-guggenheim': 'DeFi & Yield',
  'ondo-finance': 'Treasury',
  'archax': 'Infrastructure',
  'openeden': 'Infrastructure',
  'phillip-securities': 'TradFi',
  'marketnode': 'TradFi',
  'assnture': 'Alternative',
  'vert-capital': 'Alternative',
  'mercado-bitcoin': 'APAC/LatAm',
  'linklogis': 'APAC/LatAm',
}

export default function PartnersDirectory() {
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    if (category === 'All') return partners
    return partners.filter((p) => categoryBySlug[p.slug] === category)
  }, [category])

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Partner platforms</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {partners.length} platforms · {new Set(partners.map((p) => p.subType)).size} asset types
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <label className="text-sm font-medium text-slate-600 whitespace-nowrap">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 min-h-[44px] text-sm text-slate-900 focus:border-ripple-blue focus:outline-none focus:ring-2 focus:ring-ripple-blue/20 w-full sm:w-auto"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="card overflow-hidden -mx-4 sm:mx-0">
        <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full text-left min-w-[560px]">
            <thead>
              <tr className="table-header-row">
                <th className="table-header-cell px-4 py-3 sm:px-5 sm:py-3.5">Partner</th>
                <th className="table-header-cell px-4 py-3 sm:px-5 sm:py-3.5">Category</th>
                <th className="table-header-cell px-4 py-3 sm:px-5 sm:py-3.5">Jurisdiction</th>
                <th className="table-header-cell px-4 py-3 sm:px-5 sm:py-3.5 hidden lg:table-cell">Focus</th>
                <th className="table-header-cell px-4 py-3 sm:px-5 sm:py-3.5 w-20" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.slug}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70 transition-colors group"
                >
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <Link
                      href={`/partners/${p.slug}`}
                      className="font-semibold text-slate-900 hover:text-ripple-blue transition-colors block min-h-[44px] flex flex-col justify-center py-1"
                    >
                      {p.partner}
                    </Link>
                    <p className="text-sm text-slate-500 mt-0.5 line-clamp-1 lg:hidden max-w-[180px] sm:max-w-[200px]">
                      {p.description}
                    </p>
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <span className="text-xs font-medium text-ripple-blue bg-ripple-blue/10 px-2 py-1 rounded-lg">
                      {categoryBySlug[p.slug] ?? p.subType}
                    </span>
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4 text-sm text-slate-600">{p.jurisdiction}</td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4 text-sm text-slate-600 hidden lg:table-cell max-w-[240px]">
                    <span className="line-clamp-2">{p.description}</span>
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <Link
                      href={`/partners/${p.slug}`}
                      className="text-sm font-medium text-slate-400 group-hover:text-ripple-blue transition-colors inline-flex items-center min-h-[44px]"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="empty-state px-4 sm:px-5">No partners in this category.</div>
        )}
      </div>
    </div>
  )
}
