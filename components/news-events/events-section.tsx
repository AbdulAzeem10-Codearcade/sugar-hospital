"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'

const events = [
  {
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Diabetes Awareness Seminar',
    location: 'Sugar Hospital Main Auditorium',
    attendees: '200+ Expected',
    description: 'Educational seminar on diabetes prevention and management for healthcare professionals',
  },
  {
    date: 'March 22, 2024',
    time: '8:00 AM - 2:00 PM',
    title: 'Community Health Camp - District Peshawar',
    location: 'Community Center, Peshawar',
    attendees: '300+ Expected',
    description: 'Free diabetes screening, consultation, and medication distribution',
  },
  {
    date: 'April 5, 2024',
    time: '10:00 AM - 4:00 PM',
    title: 'Medical Conference on Endocrinology',
    location: 'Sugar Hospital Conference Hall',
    attendees: '150+ Professionals',
    description: 'Latest research and treatment approaches in diabetes and endocrine disorders',
  },
]

export function EventsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Join Us
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Upcoming Events
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 hover:shadow-lg border border-[#E2E2E2] hover:border-[#A34C55] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-48 shrink-0">
                  <div className="bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-1">{event.date.split(' ')[1].replace(',', '')}</div>
                    <div className="text-sm opacity-90">{event.date.split(' ')[0]} {event.date.split(' ')[2]}</div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3F4A7A] mb-3">{event.title}</h3>
                  <p className="text-[#8A8A8A] mb-4">{event.description}</p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                      <Clock className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                      <MapPin className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                      <Users className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="border-[#A34C55] text-[#A34C55] hover:bg-[#A34C55] hover:text-white bg-transparent">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
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
