"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { 
  ClipboardList, 
  Syringe, 
  FlaskConical, 
  Activity,
  Smile,
  Eye,
  Footprints,
  Stethoscope,
  Apple,
  ClipboardCheck,
  Pill,
  Share2
} from 'lucide-react'

const teamMembers = [
  { icon: ClipboardList, role: 'Registration Officer', description: 'Patient intake & data management' },
  { icon: Syringe, role: 'Nurse', description: 'Blood sugar testing & patient care' },
  { icon: FlaskConical, role: 'Lab Technician & Assistants', description: 'HbA1c testing & analysis' },
  { icon: Activity, role: 'Health Technicians', description: 'Vital signs monitoring' },
  { icon: Smile, role: 'Dentist', description: 'Oral health screening' },
  { icon: Eye, role: 'Ophthalmologist', description: 'Eye examination specialist' },
  { icon: Footprints, role: 'Footcare Specialist', description: 'Diabetic foot screening' },
  { icon: Stethoscope, role: 'Medical Officer (Doctor)', description: 'Diagnosis & treatment' },
  { icon: Apple, role: 'Nutritionist', description: 'Dietary guidance & planning' },
  { icon: ClipboardCheck, role: 'MEAL Officer', description: 'Monitoring & evaluation' },
  { icon: Pill, role: 'Pharmacist', description: 'Medication dispensing' },
  { icon: Share2, role: 'Social Media Officer', description: 'Community outreach' },
]

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Expert Care
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Dedicated Team
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our multidisciplinary team ensures every patient receives high-quality, comprehensive care at each camp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.role}
              className={`group bg-[#F4F6F8] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <member.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                {member.role}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl px-8 py-6 border border-[#5F9ED1]/20">
            <p className="text-[#3F4A7A] text-lg">
              <span className="font-bold text-[#5F9ED1]">12 specialized roles</span> working together 
              to provide comprehensive diabetes care in every camp
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
