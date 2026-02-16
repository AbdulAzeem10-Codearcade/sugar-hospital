import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { StudentAmbassadorHero } from '@/components/join/student-ambassador-hero'
import { StudentAmbassadorForm } from '@/components/join/student-ambassador-form'

export default function StudentAmbassadorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StudentAmbassadorHero />
        <StudentAmbassadorForm />
      </main>
      <Footer />
    </div>
  )
}
