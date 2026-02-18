"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Building, Heart, Users, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Building, Heart, Users, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const partners = [
  { name: 'Hilton Pharma', category: 'Pharmaceutical Partner', logo: '/images/Partners/Hilton Pharma partner.png' },
  { name: 'National Bank Ltd', category: 'Banking Partner', logo: '/images/Partners/National Bank Ltd Partner.png' },
  { name: 'Aitemad Banking', category: 'Financial Services', logo: '/images/Partners/images.jpeg' },
  { name: 'Martin Dow', category: 'Pharmaceutical Partner', logo: '/images/Partners/Martin Dow Partner.png' },
  { name: 'Merker', category: 'Healthcare Partner', logo: '/images/Partners/MERKER.png' },
  { name: 'Al-Khidmat', category: 'Charitable Organization', logo: '/images/Partners/Al khidmat Partner.png' },
  { name: 'Meethi Zindagi', category: 'Diabetes Awareness', logo: '/images/Partners/meethi zindagi partner.jpg' },
  { name: 'Khyber Medical University', category: 'Academic Partner', logo: '/images/Partners/kmu logo.jpeg' },
  { name: 'CCL Pharma', category: 'Pharmaceutical Partner', logo: '/images/Partners/CCL-logo.png' },
  { name: 'Edhi Foundation', category: 'Charitable Organization', logo: '/images/Partners/Edhi partner.png' },
  { name: 'Life for a Child', category: 'International NGO', logo: '/images/Partners/Life for a Child Partner.png' },
]

const partnershipTypes = [
  {
    icon: Building,
    title: 'Corporate Partnership',
    description: 'Partner with us to make a lasting impact on diabetes care in Pakistan',
  },
  {
    icon: Heart,
    title: 'Healthcare Collaboration',
    description: 'Join our network of healthcare providers and institutions',
  },
  {
    icon: Users,
    title: 'Community Partnership',
    description: 'Work together to organize health camps and awareness programs',
  },
]

export function PartnershipSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Collaborate With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-[#8A8A8A] max-w-3xl mx-auto">
              Join hands with Sugar Hospital to create meaningful change in diabetes care and community health
            </p>
          </div>

          {/* Partnership Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnershipTypes.map((type, index) => (
              <div
                key={type.title}
                className={`bg-[#F4F6F8] rounded-xl p-6 text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{type.title}</h3>
                <p className="text-[#8A8A8A] text-sm">{type.description}</p>
              </div>
            ))}
          </div>

          {/* Current Partners */}
          <div className={`mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#3F4A7A] mb-6 text-center">Our Current Partners</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`bg-white rounded-xl p-6 hover:shadow-lg border-2 border-[#E2E2E2] hover:border-[#5F9ED1] transition-all duration-500 text-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 50}ms` }}
                >
                  {/* Logo */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="128px"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#3F4A7A] mb-1">{partner.name}</h3>
                  <p className="text-[#8A8A8A] text-sm">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className={`bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white text-center transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Interested in Partnership?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We welcome partnerships from organizations that share our vision of providing quality diabetes care to all. 
              Contact us to explore collaboration opportunities.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#5F9ED1] hover:bg-white/90 font-semibold"
              asChild
            >
              <a href="mailto:admin@sugarhospital.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us for Partnership
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
