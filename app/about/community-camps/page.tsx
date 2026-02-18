import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { DiabetesCampsHero } from '@/components/diabetes-camps/diabetes-camps-hero'
import { CampServicesSection } from '@/components/diabetes-camps/camp-services-section'
import { CampProcessSection } from '@/components/diabetes-camps/camp-process-section'
import { WhyItMattersSection } from '@/components/diabetes-camps/why-it-matters-section'
import { CampGallery } from '@/components/diabetes-camps/camp-gallery'
import { ImpactSection } from '@/components/diabetes-camps/impact-section'
import { TeamSection } from '@/components/diabetes-camps/team-section'
import { InspirationSection } from '@/components/diabetes-camps/inspiration-section'

export default function DiabetesCampsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DiabetesCampsHero />
        <CampServicesSection />
        <CampProcessSection />
        <WhyItMattersSection />
        <CampGallery />
        <ImpactSection />
        <TeamSection />
        <InspirationSection />
      </main>
      <Footer />
    </div>
  )
}
