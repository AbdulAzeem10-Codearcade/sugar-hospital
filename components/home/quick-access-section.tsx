"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Phone, Users, GraduationCap, Heart, Calendar, Stethoscope } from 'lucide-react'

const quickLinks = [
  {
    title: 'Contact Us',
    description: 'Get in touch with our team for inquiries and support',
    icon: Phone,
    href: '/contact',
    color: 'bg-[#5F9ED1]',
  },
  {
    title: 'Volunteer',
    description: 'Join our mission to provide healthcare to everyone',
    icon: Users,
    href: '/join/volunteer',
    color: 'bg-[#A34C55]',
  },
  {
    title: 'Internship',
    description: 'Learn and grow with our medical internship programs',
    icon: GraduationCap,
    href: '/join/volunteer',
    color: 'bg-[#3F4A7A]',
  },
  {
    title: 'Donate Now',
    description: 'Support our cause and help save lives',
    icon: Heart,
    href: '/support#donation',
    color: 'bg-[#A34C55]',
  },
  {
    title: 'Book Appointment',
    description: 'Schedule a consultation with our specialists',
    icon: Calendar,
    href: '/contact',
    color: 'bg-[#5F9ED1]',
  },
  {
    title: 'Find a Doctor',
    description: 'Search our team of qualified healthcare professionals',
    icon: Stethoscope,
    href: '/contact',
    color: 'bg-[#3F4A7A]',
  },
]

export function QuickAccessSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 bg-white relative -mt-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Quick Access
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Easy access to our most popular services and programs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className={`group bg-white border border-[#E2E2E2] rounded-xl p-6 hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 card-shine ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <link.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                {link.title}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
