'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/partners', label: 'Assets', icon: CreditCardIcon },
  { href: '/fact-sheets', label: 'Fact Sheets', icon: DocumentIcon },
  { href: '/methodology', label: 'Methodology', icon: ChartIcon },
  { href: '/about', label: 'About', icon: InfoIcon },
]

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}
function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )
}
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    if (sidebarOpen) {
      document.addEventListener('keydown', onEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar: on mobile slides in from left; on lg+ static */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] max-w-[85vw] flex flex-col bg-surface-sidebar border-r border-slate-200 transition-transform duration-200 ease-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!sidebarOpen}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-ripple-blue flex items-center justify-center text-white font-bold text-sm shrink-0">
              XR
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-slate-900 tracking-tight truncate">XRPL RWA</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">Investor platform</span>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 px-3 mb-2">Menu</div>
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-slate-600 hover:bg-surface-sidebarHover hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Footer - connection / powered by */}
        <div className="p-4 border-t border-slate-200">
          <div className="rounded-lg bg-white border border-slate-200 px-3 py-2.5 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Powered by</div>
            <div className="text-xs font-medium text-slate-700">XRP Ledger</div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-100">
        {/* Top header */}
        <header className="h-14 sm:h-16 min-h-[3.5rem] sm:min-h-[4rem] bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 sticky top-0 z-30">
          <button
            type="button"
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors -ml-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 lg:flex-none" />
          <div className="flex items-center gap-0 sm:gap-1">
            <button type="button" className="hidden sm:flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Help">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button type="button" className="hidden sm:flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Settings">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button type="button" className="hidden sm:flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Notifications">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-9 h-9 rounded-full bg-ripple-blue flex items-center justify-center text-white text-sm font-semibold ml-1 shrink-0">U</div>
          </div>
        </header>

        {/* Page content - full width */}
        <main className="flex-1 overflow-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-6 min-w-0">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}
    </div>
  )
}
