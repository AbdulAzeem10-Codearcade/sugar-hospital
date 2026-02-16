"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Users, Briefcase, DollarSign, Stethoscope, User } from 'lucide-react'

const boardMembers = [
  { name: 'Dr. Zia ul Hasan', position: 'President (Founder)', icon: Users, description: 'Sitara-e-Imtiaz 2019' },
  { name: 'Asadullah Khan', position: 'Vice President', icon: Briefcase },
  { name: 'Ayaz Mujahid', position: 'General Secretary', icon: User },
  { name: 'Faisal Inam', position: 'Director Finance', icon: DollarSign },
  { name: 'Abdul Jalil Khan', position: 'Director Medical', icon: Stethoscope },
  { name: 'Muhammad Jawad', position: 'Member', icon: User },
  { name: 'Saba Tanveer', position: 'Member', icon: User },
]

const management = [
  { title: 'Medical Director', department: 'Clinical Operations' },
  { title: 'Manager Operations', department: 'Hospital Management' },
  { title: 'Manager Finance', department: 'Financial Management' },
  { title: 'Manager Projects', department: 'Project Development' },
  { title: 'Assistant Ops Manager Network', department: 'Network Coordination' },
]

export function Leadership() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Board Members */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
                Our Leaders
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
                Board Members - AIMS Pakistan
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3F4A7A] mb-1">{member.name}</h3>
                  <p className="text-[#5F9ED1] font-medium text-sm mb-2">{member.position}</p>
                  {member.description && (
                    <p className="text-[#8A8A8A] text-sm">{member.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Management Team */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
                Management - SGH BOD
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {management.map((role, index) => (
                <div
                  key={role.title}
                  className="bg-white rounded-xl p-6 border-2 border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{role.title}</h3>
                  <p className="text-[#8A8A8A] text-sm">{role.department}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Presence */}
          <div className={`mt-16 bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">International Network</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">AIMS USA</h4>
                <a href="https://abaseen.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  abaseen.org
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">AIMS UK</h4>
                <a href="https://abaseen.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  abaseen.org
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">AIMS Middle East</h4>
                <a href="https://aimsme.ae" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  aimsme.ae
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
