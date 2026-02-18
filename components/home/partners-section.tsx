"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const partners = [
  { name: 'Hilton Pharma', logo: '/images/Partners/Hilton Pharma partner.png' },
  { name: 'National Bank Ltd', logo: '/images/Partners/National Bank Ltd Partner.png' },
  { name: 'Martin Dow', logo: '/images/Partners/Martin Dow Partner.png' },
  { name: 'Al-Khidmat', logo: '/images/Partners/Al khidmat Partner.png' },
  { name: 'Meethi Zindagi', logo: '/images/Partners/meethi zindagi partner.jpg' },
  { name: 'KMU', logo: '/images/Partners/kmu logo.jpeg' },
  { name: 'Edhi Foundation', logo: '/images/Partners/Edhi partner.png' },
  { name: 'Life for a Child', logo: '/images/Partners/Life for a Child Partner.png' },
]

export function PartnersSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Trusted By
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Partners
          </h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="relative w-32 h-32">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="128px"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
