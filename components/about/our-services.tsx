"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Microscope, 
  HeartPulse, 
  Brain,
  Bone,
  Baby,
  Eye,
  Activity,
  ArrowRight
} from 'lucide-react'

const services = [
  { icon: Stethoscope, name: 'General Medicine', href: '/patients#find-doctor' },
  { icon: HeartPulse, name: 'Cardiology', href: '/patients#find-doctor' },
  { icon: Brain, name: 'Neurology', href: '/patients#find-doctor' },
  { icon: Bone, name: 'Orthopedics', href: '/patients#find-doctor' },
  { icon: Baby, name: 'Pediatrics', href: '/patients#find-doctor' },
  { icon: Eye, name: 'Ophthalmology', href: '/patients#find-doctor' },
  { icon: FlaskConical, name: 'Laboratory Services', href: '/patients#find-test' },
  { icon: Microscope, name: 'Diagnostic Imaging', href: '/patients#find-test' },
  { icon: Pill, name: 'Pharmacy', href: '/patients' },
  { icon: Activity, name: 'Emergency Care', href: '/patients' },
]

export function OurServices() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="services" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive Care
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Services
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We offer a comprehensive range of healthcare services to meet all your medical needs.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="flex flex-col items-center p-4 rounded-xl bg-[#F4F6F8] hover:bg-[#5F9ED1]/10 hover:border-[#5F9ED1] border border-transparent transition-all group"
              style={{ transitionDelay: `${(index + 4) * 50}ms` }}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-[#5F9ED1] transition-colors">
                <service.icon className="w-6 h-6 text-[#5F9ED1] group-hover:text-white transition-colors" />
              </div>
              <span className="text-[#3F4A7A] text-sm font-medium text-center group-hover:text-[#5F9ED1] transition-colors">
                {service.name}
              </span>
            </Link>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            asChild
            size="lg"
            className="bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white btn-hover-lift"
          >
            <Link href="/patients">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
