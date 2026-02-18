import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AboutHero } from '@/components/about/about-hero'
import { VisionMission } from '@/components/about/vision-mission'
import { OurStory } from '@/components/about/our-story'
import { Leadership } from '@/components/about/leadership'
import { AuditReports } from '@/components/about/audit-reports'
import { FactsStats } from '@/components/about/facts-stats'
import { Partnerships } from '@/components/about/partnerships'
import { Testimonials } from '@/components/about/testimonials'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <VisionMission />
        <OurStory />
        <Leadership />
        <AuditReports />
        <FactsStats />
        <Partnerships />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
