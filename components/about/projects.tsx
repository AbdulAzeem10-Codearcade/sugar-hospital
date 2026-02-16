"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Mobile Health Clinics',
    description: 'Bringing healthcare to remote areas through fully-equipped mobile medical units.',
    location: 'Rural KPK',
    beneficiaries: '50,000+',
    year: '2023-Present',
    status: 'Active',
  },
  {
    title: 'Diabetes Care Program',
    description: 'Comprehensive diabetes management program including screening, treatment, and education.',
    location: 'Peshawar',
    beneficiaries: '10,000+',
    year: '2020-Present',
    status: 'Active',
  },
  {
    title: 'Maternal Health Initiative',
    description: 'Supporting maternal and child health through prenatal care, safe delivery, and postnatal support.',
    location: 'Multiple Districts',
    beneficiaries: '25,000+',
    year: '2021-Present',
    status: 'Active',
  },
  {
    title: 'Free Surgery Camp',
    description: 'Annual surgical camps providing free surgeries to patients who cannot afford treatment.',
    location: 'AIMS Hospital',
    beneficiaries: '5,000+',
    year: '2018-Present',
    status: 'Active',
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="projects" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Making Impact
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Projects of AIMS Pakistan
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white rounded-xl border border-[#E2E2E2] overflow-hidden hover:border-[#5F9ED1] hover:shadow-xl transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Header with status */}
              <div className="bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] p-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
                  {project.status}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-[#8A8A8A] mb-4">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5F9ED1]" />
                    <span className="text-[#3F4A7A]">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#5F9ED1]" />
                    <span className="text-[#3F4A7A]">{project.beneficiaries}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#5F9ED1]" />
                    <span className="text-[#3F4A7A]">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
