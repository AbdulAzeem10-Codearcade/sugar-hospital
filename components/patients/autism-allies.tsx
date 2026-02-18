"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Brain, Heart, Ear, GraduationCap, Users, Activity, MessageCircle, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    category: 'Counseling and Psychotherapy Services',
    icon: Brain,
    color: 'bg-[#5F9ED1]',
    items: [
      'Screening and Assessment of Depression and Anxiety',
      'Marital Counseling',
      'Trauma Counseling',
      'Family Counseling',
      'Drug Rehabilitation',
      'Cognitive Behavior Therapy (CBT)',
      'Intelligence Testing',
      'Career Guidance',
    ],
  },
  {
    category: 'Autism Services',
    icon: Heart,
    color: 'bg-[#A34C55]',
    items: [
      'Screening and Assessment',
      'ABA Therapy',
      'Speech Therapy',
      'Occupational Therapy',
      'Physiotherapy',
    ],
  },
  {
    category: 'Speech Therapy Services',
    icon: MessageCircle,
    color: 'bg-[#3F4A7A]',
    items: [
      'Hearing Impairment',
      'Assistive Devices',
      'Hearing Aids',
      'Cochlear Implants',
      'Language Disorders',
      'Receptive Language Disorder',
      'Expressive Language Disorder',
      'Speech Disorders',
      'Stammering',
      'Stuttering',
    ],
  },
  {
    category: 'Inclusive Education and Day Care Services',
    icon: GraduationCap,
    color: 'bg-[#5F9ED1]',
    items: [
      'Learning Disabilities Support',
      'Enhancing Academic Skills',
      'Practicing Quranic Teaching',
      'Providing Specialized Care for Extended Hours',
      'Structured Activities',
    ],
  },
]

export function AutismAllies() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="autism-allies" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Specialized Care
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Centre for Psychological Services – Autism Allies
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive psychological and developmental support services for children and families
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.category}
              className={`bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3F4A7A] leading-tight">{service.category}</h3>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mt-2 shrink-0" />
                    <span className="text-[#8A8A8A] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto">
            <Stethoscope className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Need More Information?</h3>
            <p className="text-white/90 mb-6">
              Contact us to learn more about our psychological services and autism support programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#5F9ED1] hover:bg-white/90"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#5F9ED1] bg-transparent"
              >
                <a href="tel:03011155713">
                  Call 0301-1155713
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
