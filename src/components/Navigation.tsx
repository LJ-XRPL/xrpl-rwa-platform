'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/partners', label: 'Partners' },
    { href: '/fact-sheets', label: 'Fact Sheets' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="logo-area">
          <div className="logo-placeholder">XR</div>
          <div className="logo-text">XRPL <span>RWA</span></div>
        </Link>
        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mobile-nav-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--glass-border)',
            borderRadius: 8,
            padding: '0.5rem',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <nav className="mobile-nav" style={{
          padding: '1rem 0',
          borderTop: '1px solid var(--glass-border)',
          marginTop: '1rem',
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: pathname === link.href ? 'var(--ripple-cyan)' : 'var(--text-secondary)',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
