import ComparisonSection from '@/components/sections/ComparisonSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import HireExpertsSection from '@/components/sections/HireExpertsSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SwitchingSection from '@/components/sections/SwitchingSection'
import TechSectionClient from '@/components/sections/TechSectionClient'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import WorkingProcessSection from '@/components/sections/WorkingProcessSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WorkingProcessSection />
      <WhyUsSection />
      <SwitchingSection />
      <ComparisonSection />
      <HireExpertsSection />
      <TechSectionClient />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}