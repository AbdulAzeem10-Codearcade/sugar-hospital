"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Target, Eye, CheckCircle } from 'lucide-react'

export function VisionMission() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="vision-mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Vision */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A]">Our Vision</h2>
            </div>
            <p className="text-xl text-[#3F4A7A] font-medium leading-relaxed">
              To lead a comprehensive, quality assured and affordable diabetes institute
            </p>
          </div>

          {/* Mission */}
          <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A]">Our Mission</h2>
            </div>
            <p className="text-xl text-[#3F4A7A] font-medium leading-relaxed">
              Pool up resources for Diabetes and Non-Communicable Diseases, healthcare Development 
              with the help of the public and private sectors in KP and Pakistan
            </p>
          </div>

          {/* Objectives */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A]">Our Objectives</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Provide high quality medical treatment and develop curative strategies for those who cannot afford',
                'Provide affordable treatment of Diabetes and other NCDs',
                'Integrate medical research, training and education for professionals',
                'Implement community health awareness, disease prevention strategies advocacy campaigns for diabetes & NCDs and improve access to care',
                'Empower Patients & Engage the Public',
                'Advance Research & Build Partnerships',
                'Build a Strong, Sustainable Foundation',
              ].map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-[#5F9ED1] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[#3F4A7A] leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
