'use client'

import dynamic from 'next/dynamic'

const TechSection = dynamic(() => import('./TechSection'), { ssr: false })

export default function TechSectionClient() {
  return <TechSection />
}
