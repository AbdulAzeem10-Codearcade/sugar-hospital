"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const boardMembers = [
  { 
    name: 'Dr. Zia ul Hasan', 
    position: 'President (Founder)', 
    description: 'Sitara-e-Imtiaz 2019',
    image: '/images/Directors/Profile-Dr-Zia-Picture-Date-AIMS-Sugar-Hospital-Dr Zia pic.jpg'
  },
  { 
    name: 'Asadullah Khan', 
    position: 'Vice President',
    image: '/images/Directors/Asadullah Khan Director.jpg'
  },
  { 
    name: 'Ayaz Mujahid', 
    position: 'General Secretary',
    image: '/images/Directors/Ayaz Mujahid.jpeg'
  },
  { 
    name: 'Faisal Inam', 
    position: 'Director Finance',
    image: '/images/Directors/Faisal INam.jpeg'
  },
  { 
    name: 'Dr. Abdul Jalil Khan', 
    position: 'Director Medical',
    image: '/images/Directors/Dr Abdul Jalil Direcot.jpg'
  },
  { 
    name: 'Dr. Muhammad Jawad', 
    position: 'Member',
    image: '/images/Directors/Dr Muhammad Jawad.jpeg'
  },
  { 
    name: 'Saba Tanveer', 
    position: 'Member',
    image: '/images/Directors/Saba Tanveer.jpg'
  },
]

const management = [
  { 
    name: 'Prof. Dr. Rooh-ul-Muqim', 
    title: 'Medical Director', 
    department: 'Clinical Operations',
    image: '/images/Doctors/Dr Rooh ul Muqim.jpg'
  },
  { 
    name: 'Mr. Salman Zaman', 
    title: 'Manager Ops', 
    department: 'Hospital Management',
    image: '/placeholder-user.jpg'
  },
  { 
    name: 'Mr. Raza Khattak', 
    title: 'Manager Finance', 
    department: 'Financial Management',
    image: '/placeholder-user.jpg'
  },
  { 
    name: 'Mrs. Saba Tanveer', 
    title: 'Manager Projects', 
    department: 'Project Development',
    image: '/images/Directors/Saba Tanveer.jpg'
  },
  { 
    name: 'Mr. Muhammad Akhtar', 
    title: 'Assistant Manager Ops', 
    department: 'Operations Support',
    image: '/placeholder-user.jpg'
  },
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
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#5F9ED1] shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#3F4A7A] mb-1 text-center">{member.name}</h3>
                  <p className="text-[#5F9ED1] font-medium text-sm mb-2 text-center">{member.position}</p>
                  {member.description && (
                    <p className="text-[#8A8A8A] text-sm text-center">{member.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Management Team */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
                Management
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {management.map((role, index) => (
                <div
                  key={role.name}
                  className="bg-white rounded-xl p-6 border-2 border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#5F9ED1]">
                    <Image
                      src={role.image}
                      alt={role.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#3F4A7A] mb-1 text-center">{role.name}</h3>
                  <p className="text-[#5F9ED1] font-medium text-sm mb-2 text-center">{role.title}</p>
                  <p className="text-[#8A8A8A] text-sm text-center">{role.department}</p>
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
