"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Building2, Users, Globe } from 'lucide-react'

const locations = [
  {
    name: 'AIMS Sugar Hospital',
    address: 'A-6 B/3, Opposite Edhi Homes, Phase 5, Hayatabad, Peshawar',
    type: 'Main Hospital',
    services: 'Full medical services, laboratory, pharmacy',
  },
]

const campLocations = [
  { district: 'Peshawar', camps: '80+' },
  { district: 'Mardan', camps: '40+' },
  { district: 'Swat', camps: '30+' },
  { district: 'Charsadda', camps: '25+' },
  { district: 'Nowshera', camps: '20+' },
  { district: 'Dir', camps: '15+' },
  { district: 'Malakand', camps: '15+' },
  { district: 'Buner', camps: '10+' },
  { district: 'Kohat', camps: '10+' },
  { district: 'Hangu', camps: '5+' },
]

const partnerships = [
  { name: 'Hilton Pharma', type: 'Pharmaceutical Partner' },
  { name: 'National Bank of Pakistan', type: 'Banking Partner' },
  { name: 'Martin Dow', type: 'Healthcare Partner' },
  { name: 'Getz Pharma', type: 'Pharmaceutical Partner' },
  { name: 'Sanofi', type: 'Pharmaceutical Partner' },
  { name: 'Novo Nordisk', type: 'Diabetes Care Partner' },
]

export function OurNetwork() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="network" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Reach
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Network
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Serving communities across Khyber Pakhtunkhwa through our hospital and extensive outreach programs.
          </p>
        </div>

        {/* Main Hospital */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 border-2 border-[#5F9ED1] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#5F9ED1] rounded-2xl flex items-center justify-center shrink-0">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[#3F4A7A]">{locations[0].name}</h3>
                  <span className="px-3 py-1 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs rounded-full font-semibold">
                    {locations[0].type}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#8A8A8A] mb-2">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <p>{locations[0].address}</p>
                </div>
                <p className="text-[#8A8A8A]">
                  <span className="font-semibold text-[#3F4A7A]">Services: </span>
                  {locations[0].services}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[#3F4A7A] font-medium">Open Now</span>
                  </div>
                  <span className="text-[#8A8A8A]">Mon-Sat: 8AM - 8PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Camps Coverage */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#3F4A7A] mb-2">Community Camps Coverage</h3>
            <p className="text-[#8A8A8A]">We've conducted 250+ camps across 10+ districts in KP</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {campLocations.map((location, index) => (
              <div
                key={location.district}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 border border-[#E2E2E2] hover:border-[#5F9ED1]"
                style={{ transitionDelay: `${(index + 5) * 50}ms` }}
              >
                <MapPin className="w-6 h-6 text-[#5F9ED1] mx-auto mb-2" />
                <div className="font-semibold text-[#3F4A7A]">{location.district}</div>
                <div className="text-sm text-[#8A8A8A]">{location.camps} camps</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#3F4A7A] mb-2">Our Partners</h3>
            <p className="text-[#8A8A8A]">Working together to provide better healthcare</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-5 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${(index + 15) * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5F9ED1]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#5F9ED1]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#3F4A7A]">{partner.name}</div>
                    <div className="text-xs text-[#8A8A8A]">{partner.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-12 bg-gradient-to-r from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">160,000+</div>
              <div className="text-white/80 text-sm">People Screened</div>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-white/80 text-sm">Districts Covered</div>
            </div>
            <div>
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">250+</div>
              <div className="text-white/80 text-sm">Community Camps</div>
            </div>
            <div>
              <Globe className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">9</div>
              <div className="text-white/80 text-sm">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
