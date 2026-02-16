import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactInfo } from '@/components/contact/contact-info'
import { ContactMethods } from '@/components/contact/contact-methods'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactInfo />
        <ContactMethods />
      </main>
      <Footer />
    </div>
  )
}
