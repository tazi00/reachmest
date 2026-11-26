import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection'
import ServicesOfferedSection from '@/components/sections/services/ServicesOfferedSection'
import GlobalInsightsSection from '@/components/sections/services/GlobalInsightsSection'
import RegionalInsightsSection from '@/components/sections/services/RegionalInsightsSection'
import ServicesFAQSection from '@/components/sections/services/ServicesFAQSection'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Dedicated Services | Reachmest',
  description:
    'Dedicated digital marketing, SEO, performance marketing, CRO, automation and software development specialists — built around your business goals.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesOfferedSection />
      <GlobalInsightsSection />
      <RegionalInsightsSection />
      <ServicesFAQSection />
      <CTASection />
    </main>
  )
}
