import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ServicesHero } from '@/components/services/services-hero'
import { ClinicalServices } from '@/components/services/clinical-services'
import { DiagnosticServices } from '@/components/services/diagnostic-services'
import { DoctorsFees } from '@/components/services/doctors-fees'
import { LabTests } from '@/components/services/lab-tests'
import { PharmacySection } from '@/components/services/pharmacy-section'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ClinicalServices />
        <DiagnosticServices />
        <DoctorsFees />
        <LabTests />
        <PharmacySection />
      </main>
      <Footer />
    </div>
  )
}
