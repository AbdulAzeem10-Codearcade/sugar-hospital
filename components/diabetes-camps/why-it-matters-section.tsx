"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { AlertCircle, TrendingUp, Users, MapPin } from 'lucide-react'

const facts = [
  {
    icon: Users,
    stat: '33 Million+',
    label: 'Adults with diabetes in Pakistan',
    source: 'International Diabetes Federation (IDF) 2023',
  },
  {
    icon: TrendingUp,
    stat: '16-18%',
    label: 'Prevalence in Khyber Pakhtunkhwa',
    source: 'Among adult population',
  },
]

const complications = [
  'Vision loss and eye complications',
  'Kidney disease and failure',
  'Diabetic foot ulcers',
  'Cardiovascular problems',
  'Nerve damage (neuropathy)',
  'Increased infection risk',
]

export function WhyItMattersSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The Challenge
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why These Camps Matter?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Statistics */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Diabetes in Pakistan</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Diabetes is a growing health challenge in Pakistan. Early detection, regular monitoring, 
                and proper education are crucial to prevent serious complications.
              </p>
              <div className="space-y-6">
                {facts.map((fact, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                        <fact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">{fact.stat}</div>
                        <div className="text-white/90 font-medium mb-1">{fact.label}</div>
                        <div className="text-white/60 text-sm">{fact.source}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Complications */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-[#F4F6F8] rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#A34C55] rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3F4A7A]">Preventable Complications</h3>
              </div>
              <p className="text-[#8A8A8A] mb-6 leading-relaxed">
                Without proper care and monitoring, diabetes can lead to serious health complications:
              </p>
              <ul className="space-y-3">
                {complications.map((complication, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#5F9ED1] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#3F4A7A]">{complication}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-[#5F9ED1]">
                <p className="text-[#3F4A7A] font-medium">
                  Our camps make quality diabetes care accessible to those who need it most, 
                  helping prevent these complications through early detection and proper management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
