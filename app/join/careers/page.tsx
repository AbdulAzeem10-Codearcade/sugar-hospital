import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CareersHero } from '@/components/join/careers-hero'
import { CareersForm } from '@/components/join/careers-form'

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CareersHero />
        <CareersForm />
      </main>
      <Footer />
    </div>
  )
}
