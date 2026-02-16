"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Heart, Users, FileText, Phone, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: Heart,
    title: 'Free Diabetes Care',
    description: 'Comprehensive free care for Type-1 and Type-2 diabetes patients who cannot afford treatment.',
    eligibility: 'Income-based assessment',
    coverage: 'Medications, consultations, lab tests',
  },
  {
    icon: Users,
    title: 'Zakat Fund Support',
    description: 'Financial assistance through our Zakat fund for eligible patients requiring medical care.',
    eligibility: 'Zakat-eligible patients',
    coverage: 'Treatment costs, medications',
  },
  {
    icon: FileText,
    title: 'Community Camp Services',
    description: 'Free screening, consultation, and medications through our community outreach camps.',
    eligibility: 'All community members',
    coverage: 'Screening, basic treatment',
  },
]

export function FinancialAssistance() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="financial-assistance" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Support Available
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Financial Assistance Programme
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We believe quality healthcare should be accessible to everyone. Our financial assistance programs help patients who cannot afford medical care.
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-lg border border-transparent hover:border-[#A34C55] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#A34C55] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3F4A7A] mb-3">{program.title}</h3>
              <p className="text-[#8A8A8A] mb-4">{program.description}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-[#3F4A7A]">Eligibility: </span>
                  <span className="text-[#8A8A8A]">{program.eligibility}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#3F4A7A]">Coverage: </span>
                  <span className="text-[#8A8A8A]">{program.coverage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className={`bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 md:p-12 text-white mb-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-white/80">Patients Receiving Free Care</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">PKR 22.86M</div>
              <div className="text-white/80">Annual Welfare Budget</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Zakat Compliant</div>
            </div>
          </div>
        </div>

        {/* How to Apply */}
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-[#3F4A7A] mb-4">How to Apply for Assistance</h3>
          <p className="text-[#8A8A8A] mb-6">
            To apply for financial assistance, please contact our welfare department. Our team will assess your eligibility and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#A34C55] hover:bg-[#8E3F47] text-white"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Welfare Department
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent"
            >
              <Link href="/support#donation">
                Support Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
