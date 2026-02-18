import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProfessionalsHero } from '@/components/professionals/professionals-hero'
import { ConferencePresentations } from '@/components/professionals/conference-presentations'
import { QualityPolicy } from '@/components/about/quality-policy'
import { Awards } from '@/components/about/awards'
import { PublicationsContent } from '@/components/about/publications-content'

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProfessionalsHero />
        <ConferencePresentations />
        <QualityPolicy />
        <Awards />
        <PublicationsContent />
      </main>
      <Footer />
    </div>
  )
}
