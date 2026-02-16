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
  ArrowRight
} from 'lucide-react'

const services = [
  {
    title: 'Clinical Services',
    description: 'Comprehensive clinical care including diagnostics, treatment, and follow-up care from our expert medical team.',
    icon: Stethoscope,
    href: '/services#clinical',
  },
  {
    title: 'Laboratory Services',
    description: 'State-of-the-art laboratory facilities offering accurate and timely diagnostic testing.',
    icon: FlaskConical,
    href: '/patients#find-test',
  },
  {
    title: 'Pharmacy',
    description: 'Well-stocked pharmacy with genuine medications and professional pharmaceutical guidance.',
    icon: Pill,
    href: '/services#pharmacy',
  },
  {
    title: 'Diagnostic Imaging',
    description: 'Advanced imaging services including X-ray, ultrasound, CT scan, and MRI.',
    icon: Microscope,
    href: '/services#diagnostic',
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response and critical care capabilities.',
    icon: HeartPulse,
    href: '/contact',
  },
  {
    title: 'Specialized Care',
    description: 'Expert care in specialized fields including cardiology, neurology, and more.',
    icon: Brain,
    href: '/patients#find-doctor',
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              What We Offer
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our Services & Facilities
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className={`border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white self-start md:self-auto transition-all duration-700 delay-200 bg-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-xl transition-all duration-500 card-3d ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="card-3d-inner">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#3F4A7A] mb-3 group-hover:text-[#5F9ED1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#5F9ED1] text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
