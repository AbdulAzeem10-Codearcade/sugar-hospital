"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Leaf, Droplets, Sun, Recycle, Building, Heart } from 'lucide-react'

const initiatives = [
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Our facilities are powered by renewable solar energy, reducing our carbon footprint.',
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Comprehensive medical waste management and recycling programs throughout our facilities.',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced water treatment and conservation systems to minimize water usage.',
  },
  {
    icon: Leaf,
    title: 'Green Spaces',
    description: 'Therapeutic gardens and green spaces for patient healing and environmental balance.',
  },
  {
    icon: Building,
    title: 'Eco-Friendly Infrastructure',
    description: 'Energy-efficient buildings designed with sustainable materials and practices.',
  },
  {
    icon: Heart,
    title: 'Community Health',
    description: 'Environmental health programs educating communities about sustainable living.',
  },
]

export function Sustainability() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="sustainability" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Environmental Responsibility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-6">
              Healthcare Environment & Sustainability
            </h2>
            <p className="text-[#8A8A8A] leading-relaxed mb-6">
              At AIMS Pakistan, we believe that a healthy environment is essential for healthy communities. 
              We are committed to sustainable practices that protect our planet while providing excellent healthcare.
            </p>
            <p className="text-[#8A8A8A] leading-relaxed">
              Our sustainability initiatives focus on reducing environmental impact, conserving resources, 
              and creating healing environments that benefit both our patients and the planet.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.title}
                className="bg-[#F4F6F8] rounded-xl p-5 hover:bg-[#5F9ED1]/10 transition-colors group"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-[#5F9ED1] transition-colors">
                  <initiative.icon className="w-6 h-6 text-[#5F9ED1] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-[#3F4A7A] mb-1 group-hover:text-[#5F9ED1] transition-colors">
                  {initiative.title}
                </h4>
                <p className="text-[#8A8A8A] text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
