"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Award, Shield, FileCheck, Building, CheckCircle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const accreditations = [
  {
    icon: Shield,
    title: 'Social Welfare Registration',
    description: 'Registered under Voluntary Social Welfare Agencies (Registration & Control) Ordinance Pakistan, 1961',
    number: 'Registration No. 2289',
  },
  {
    icon: FileCheck,
    title: 'PCP Certificate',
    description: 'Certificate of Philanthropy Centre of Pakistan, registered with Economic Affairs Division Islamabad',
    number: 'Certified',
  },
  {
    icon: Building,
    title: 'FBR Tax Exemption',
    description: 'Certified Tax Exempted by the Federal Board of Revenue Pakistan',
    number: 'Non-Profit Status',
  },
  {
    icon: CheckCircle,
    title: 'ISO 9001 Certified',
    description: 'Sugar Hospital is ISO 9001 Certified for quality management systems',
    number: 'Quality Assured',
  },
  {
    icon: Shield,
    title: 'HCC Registration',
    description: 'Registered under Health Care Commission KP',
    number: 'Licensed Healthcare Facility',
  },
  {
    icon: CheckCircle,
    title: 'Shariah Compliant',
    description: 'Operations and financial management comply with Islamic principles',
    number: 'Certified Compliant',
  },
]

export function Awards() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="awards" className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Recognition & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Awards & Accreditations
            </h2>
          </div>

          {/* Sitara-e-Imtiaz */}
          <div className={`bg-gradient-to-r from-[#A34C55] to-[#8E3F47] rounded-2xl p-8 text-white mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Sitara-e-Imtiaz</h3>
                <p className="text-xl text-white/90 mb-2">Dr. Zia ul Hasan - 2019</p>
                <p className="text-white/80">
                  Awarded by the Government of Pakistan in recognition of tireless philanthropic efforts 
                  and exceptional service to the people of Pakistan in healthcare and diabetes care.
                </p>
              </div>
            </div>
          </div>

          {/* Accreditations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((item, index) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-6 hover:shadow-lg border border-[#E2E2E2] hover:border-[#5F9ED1] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{item.title}</h3>
                <p className="text-[#8A8A8A] text-sm mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-block px-3 py-1 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs font-medium rounded-full">
                    {item.number}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent h-8"
                    asChild
                  >
                    <a href={`/pdfs/certifications/${item.title.toLowerCase().replace(/\s+/g, '-')}.pdf`} download>
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Governance */}
          <div className={`mt-12 bg-white rounded-2xl p-8 border-2 border-[#5F9ED1] transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#3F4A7A] mb-4 text-center">Governance</h3>
            <p className="text-[#8A8A8A] text-center leading-relaxed">
              The organization is governed under <span className="font-semibold text-[#3F4A7A]">The Khyber Pakhtunkhwa Establishment Act, 2015</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
