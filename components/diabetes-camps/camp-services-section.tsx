"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { 
  Droplet, 
  Scale, 
  HeartPulse, 
  Smile, 
  Eye, 
  Footprints,
  FlaskConical,
  Stethoscope,
  Pill,
  Activity
} from 'lucide-react'

const services = [
  { icon: Droplet, title: 'Random Blood Sugar Test', description: 'Immediate glucose level monitoring' },
  { icon: Scale, title: 'Height, Weight & BMI Check', description: 'Complete body metrics assessment' },
  { icon: HeartPulse, title: 'Blood Pressure Check', description: 'Cardiovascular health monitoring' },
  { icon: Smile, title: 'Dental Screening', description: 'Oral health examination' },
  { icon: Eye, title: 'Eye Screening', description: 'Diabetes-related eye issue detection' },
  { icon: Footprints, title: 'Diabetic Foot & Wound Screening', description: 'Foot complication prevention' },
  { icon: FlaskConical, title: 'HbA1c Test', description: 'Long-term glucose control assessment' },
  { icon: Stethoscope, title: "Doctor's Consultation", description: 'Expert medical diagnosis' },
  { icon: Pill, title: 'Medicines', description: 'Anti-diabetic, antihypertensive & insulin' },
  { icon: Activity, title: 'Nutritional Advice', description: 'Personalized dietary guidance' },
]

export function CampServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive Care
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Services We Offer
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            At each camp, patients receive a comprehensive set of services designed to provide 
            complete diabetes care and management support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-[#F4F6F8] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-[#3F4A7A] mb-2">
                {service.title}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl p-8 border border-[#5F9ED1]/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#3F4A7A] text-center text-lg">
            <span className="font-semibold">Long-term Commitment:</span> Rather than a one-time visit, 
            we conduct <span className="font-bold text-[#5F9ED1]">10-12 consecutive camps</span> in each 
            community, providing Diabetes Self-Management Education and ensuring lasting impact.
          </p>
        </div>
      </div>
    </section>
  )
}
