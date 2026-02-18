import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { QuickAccessSection } from '@/components/home/quick-access-section'
import { ServicesSection } from '@/components/home/services-section'
import { StatsSection } from '@/components/home/stats-section'
import { FacilityGallery } from '@/components/home/facility-gallery'
import { SuccessStoriesSection } from '@/components/home/success-stories-section'
import { PartnersSection } from '@/components/home/partners-section'
import { SupportSection } from '@/components/home/support-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickAccessSection />
        <ServicesSection />
        <StatsSection />
        <FacilityGallery />
        <SuccessStoriesSection />
        <PartnersSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  )
}
