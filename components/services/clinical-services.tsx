"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby,
  Stethoscope,
  Activity,
  Syringe,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary care and treatment for a wide range of medical conditions',
  },
  {
    icon: Activity,
    title: 'Endocrinology & Diabetes',
    description: 'Specialized diabetes and hormonal disorder management',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services including diabetic retinopathy screening',
  },
  {
    icon: Syringe,
    title: 'Diabetic Foot Care',
    description: 'Prevention and treatment of diabetes-related foot complications',
  },
  {
    icon: Heart,
    title: 'Dermatology',
    description: 'Skin care and treatment of diabetes-related skin conditions',
  },
  {
    icon: Brain,
    title: 'Gynaecology',
    description: 'Women\'s health care including gestational diabetes management',
  },
  {
    icon: Bone,
    title: 'General Surgery',
    description: 'Surgical procedures including diabetes-related complications',
  },
  {
    icon: Baby,
    title: 'Dental Care',
    description: 'Comprehensive dental services with focus on diabetic patients',
  },
]

export function ClinicalServices() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="clinical" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Expert Care
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Clinical Services
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our multidisciplinary team provides comprehensive clinical care across various specialties
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-[#F4F6F8] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2">{service.title}</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            asChild
            size="lg"
            className="bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
          >
            <Link href="/contact">
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
