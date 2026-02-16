import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PatientsHero } from '@/components/patients/patients-hero'
import { AppointmentForm } from '@/components/patients/appointment-form'
import { FindDoctor } from '@/components/patients/find-doctor'
import { FindLabTest } from '@/components/patients/find-lab-test'
import { FinancialAssistance } from '@/components/patients/financial-assistance'
import { OurNetwork } from '@/components/patients/our-network'
import { PatientStories } from '@/components/patients/patient-stories'

export default function PatientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PatientsHero />
        <AppointmentForm />
        <FindDoctor />
        <FindLabTest />
        <FinancialAssistance />
        <OurNetwork />
        <PatientStories />
      </main>
      <Footer />
    </div>
  )
}
