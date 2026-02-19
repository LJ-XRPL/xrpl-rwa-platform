import type { Metadata } from 'next'
import PartnersDirectory from './PartnersDirectory'

export const metadata: Metadata = {
  title: 'Partners | XRPL RWA Platform',
  description: 'Complete directory of all partner platforms on the XRPL RWA Investor Relations Platform',
}

export default function PartnersPage() {
  return <PartnersDirectory />
}
