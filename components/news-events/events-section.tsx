"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'

const events = [
  {
    date: 'November 9, 2025',
    title: 'Jwand Khog De Cricket Fundraising Tournament',
    location: 'Cricket Ground, Peshawar',
    description: 'Join us for an exciting cricket tournament fundraiser supporting diabetes care initiatives. "Jwand Khog De" (Life is Sweet) campaign brings together sports and healthcare awareness to raise funds for underprivileged diabetic patients.',
    image: '/images/events/jwandkhogde.jpeg',
    category: 'Fundraising'
  },
  {
    date: 'November 15, 2025',
    title: 'Life is Sweet - Diabetes Awareness Campaign',
    location: 'Multiple Locations, KP',
    description: 'A comprehensive diabetes awareness and screening campaign across Khyber Pakhtunkhwa. Free health screenings, educational sessions, and community engagement activities to promote diabetes prevention and management.',
    image: '/images/events/lifeissweet.jpeg',
    category: 'Awareness Campaign'
  },
  {
    date: 'February 4, 2026',
    title: 'KMU Medical Conference on Diabetes & Endocrinology',
    location: 'Khyber Medical University, Peshawar',
    attendees: '200+ Healthcare Professionals',
    description: 'Annual medical conference in collaboration with Khyber Medical University featuring latest research, treatment protocols, and innovations in diabetes care and endocrine disorders. CME credits available.',
    image: '/images/events/kmuconference.jpeg',
    category: 'Medical Conference'
  },
  {
    date: '2024',
    title: 'Mega Health Screening Camp',
    location: 'Community Centers, KP',
    attendees: '1000+ Screened',
    description: 'Large-scale community health screening initiative providing free diabetes testing, blood pressure monitoring, and health consultations. Part of our ongoing commitment to preventive healthcare and early detection.',
    image: '/images/events/Megahealthscreening.jpeg',
    category: 'Health Camp'
  },
  {
    date: '2024',
    title: 'IKMUN - International Khyber Model United Nations',
    location: 'Peshawar',
    description: 'Sugar Hospital proudly sponsored IKMUN 2024, supporting youth leadership and global health discussions. Our participation emphasized the importance of healthcare accessibility and diabetes awareness in international forums.',
    image: '/images/events/IKMUN.jpeg',
    category: 'Sponsorship'
  },
  {
    date: 'Ongoing',
    title: 'Baitak School Network Health Initiative',
    location: 'Schools across KP',
    description: 'Collaborative health education program with Baitak School Network, conducting diabetes awareness sessions, health screenings, and nutritional guidance for students and staff. Building healthy habits from an early age.',
    image: '/images/events/Baitakschoolnetworkevent.jpeg',
    category: 'Education Program'
  }
]

export function EventsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Impact
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Recent Events & Initiatives
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden hover:shadow-xl border border-[#E2E2E2] hover:border-[#A34C55] transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
                <div className="absolute top-4 right-4 bg-[#A34C55] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#A34C55] mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-lg">{event.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#3F4A7A] mb-3 group-hover:text-[#A34C55] transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-[#8A8A8A] mb-4 line-clamp-3">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                    <MapPin className="w-4 h-4 text-[#5F9ED1]" />
                    <span>{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                      <Users className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{event.attendees}</span>
                    </div>
                  )}
                </div>

                <Button size="sm" variant="outline" className="border-[#A34C55] text-[#A34C55] hover:bg-[#A34C55] hover:text-white bg-transparent w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button asChild size="lg" className="bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white">
            <Link href="/contact">
              Contact for Event Information
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
