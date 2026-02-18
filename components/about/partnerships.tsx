"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Handshake, Building, Heart } from 'lucide-react'

const partners = [
  { name: 'Hilton Pharma', category: 'Pharmaceutical', logo: '/images/Partners/Hilton Pharma partner.png' },
  { name: 'National Bank Ltd', category: 'Banking', logo: '/images/Partners/National Bank Ltd Partner.png' },
  { name: 'Aitemad Banking', category: 'Financial Services', logo: '/images/Partners/images.jpeg' },
  { name: 'Martin Dow', category: 'Pharmaceutical', logo: '/images/Partners/Martin Dow Partner.png' },
  { name: 'Merker', category: 'Healthcare', logo: '/images/Partners/MERKER.png' },
  { name: 'Al-Khidmat', category: 'Charitable Organization', logo: '/images/Partners/Al khidmat Partner.png' },
  { name: 'Meethi Zindagi', category: 'Diabetes Awareness', logo: '/images/Partners/meethi zindagi partner.jpg' },
  { name: 'Khyber Medical University', category: 'Academic', logo: '/images/Partners/kmu logo.jpeg' },
  { name: 'CCL Pharma', category: 'Pharmaceutical', logo: '/images/Partners/CCL-logo.png' },
  { name: 'Edhi Foundation', category: 'Charitable Organization', logo: '/images/Partners/Edhi partner.png' },
  { name: 'Life for a Child', category: 'International NGO', logo: '/images/Partners/Life for a Child Partner.png' },
]

export function Partnerships() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Our Partners
            </h2>
            <p className="text-[#8A8A8A] max-w-3xl mx-auto">
              Working together with leading organizations to provide better healthcare and support to our community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 50}ms` }}
              >
                {partner.logo ? (
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                      quality={95}
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                    {partner.category === 'Pharmaceutical' || partner.category === 'Healthcare' ? (
                      <Heart className="w-8 h-8 text-white" />
                    ) : partner.category === 'Banking' || partner.category === 'Financial Services' ? (
                      <Building className="w-8 h-8 text-white" />
                    ) : (
                      <Handshake className="w-8 h-8 text-white" />
                    )}
                  </div>
                )}
                <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{partner.name}</h3>
                <p className="text-[#8A8A8A] text-sm">{partner.category}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
            <p className="text-white/90 mb-6">
              Join us in our mission to provide quality diabetes care to those who need it most
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#5F9ED1] font-semibold py-3 px-8 rounded-xl hover:scale-105 transition-transform"
            >
              Contact Us for Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
