import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { VolunteerHero } from '@/components/join/volunteer-hero'
import { VolunteerForm } from '@/components/join/volunteer-form'

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <VolunteerHero />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  )
}
