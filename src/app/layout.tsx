import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'XRPL Real-World Asset Ecosystem | Investor Relations',
  description: 'Institutional-grade tokenization infrastructure powering the next generation of real-world asset investments on the XRP Ledger.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
