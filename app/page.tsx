import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { QuickAccessSection } from '@/components/home/quick-access-section'
import { ServicesSection } from '@/components/home/services-section'
import { StatsSection } from '@/components/home/stats-section'
import { SuccessStoriesSection } from '@/components/home/success-stories-section'
import { NewsEventsSection } from '@/components/home/news-events-section'
import { SupportSection } from '@/components/home/support-section'
import { NewsletterSection } from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickAccessSection />
        <ServicesSection />
        <StatsSection />
        <SuccessStoriesSection />
        <NewsEventsSection />
        <SupportSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
