"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Shield, Award, Users, FileCheck, Microscope, HeartHandshake } from 'lucide-react'

const policies = [
  {
    icon: Shield,
    title: 'Patient Safety First',
    description: 'We prioritize patient safety in every decision and procedure, following international standards.',
  },
  {
    icon: Award,
    title: 'Excellence in Care',
    description: 'Committed to delivering the highest quality healthcare with continuous improvement.',
  },
  {
    icon: Users,
    title: 'Patient-Centered Approach',
    description: 'Every patient is treated with dignity, respect, and personalized care tailored to their needs.',
  },
  {
    icon: FileCheck,
    title: 'Evidence-Based Practice',
    description: 'Our treatments and protocols are based on the latest scientific evidence and research.',
  },
  {
    icon: Microscope,
    title: 'Continuous Learning',
    description: 'We invest in ongoing training and education for our staff to stay at the forefront of medicine.',
  },
  {
    icon: HeartHandshake,
    title: 'Ethical Standards',
    description: 'We maintain the highest ethical standards in all our medical and business practices.',
  },
]

export function QualityPolicy() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="quality-policy" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Commitment
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Quality Policy
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our quality policy guides everything we do at AIMS Pakistan, ensuring we deliver 
            exceptional healthcare while maintaining the highest standards of safety and ethics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <div
              key={policy.title}
              className={`bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <policy.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                {policy.title}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
