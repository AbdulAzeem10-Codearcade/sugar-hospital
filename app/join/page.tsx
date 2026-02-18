import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { JoinHero } from '@/components/join/join-hero'
import { PartnershipSection } from '@/components/join/partnership-section'

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <JoinHero />
        <PartnershipSection />
      </main>
      <Footer />
    </div>
  )
}
