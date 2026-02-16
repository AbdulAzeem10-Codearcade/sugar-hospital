import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SupportHero } from '@/components/support/support-hero'
import { DonationDetails } from '@/components/support/donation-details'
import { DonationAmounts } from '@/components/support/donation-amounts'
import { SponsorPatient } from '@/components/support/sponsor-patient'
import { FundraisingCampaigns } from '@/components/support/fundraising-campaigns'
import { CorporatePartnerships } from '@/components/support/corporate-partnerships'

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SupportHero />
        <DonationDetails />
        <DonationAmounts />
        <SponsorPatient />
        <FundraisingCampaigns />
        <CorporatePartnerships />
      </main>
      <Footer />
    </div>
  )
}
