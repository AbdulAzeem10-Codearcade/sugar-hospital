import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NewsEventsHero } from '@/components/news-events/news-events-hero'
import { NewsSection } from '@/components/news-events/news-section'
import { EventsSection } from '@/components/news-events/events-section'

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsEventsHero />
        <NewsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}
