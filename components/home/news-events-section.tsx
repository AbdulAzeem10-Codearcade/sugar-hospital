"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'AIMS Pakistan Launches New Cardiac Care Unit',
    excerpt: 'State-of-the-art cardiac care facility now available to serve patients with advanced heart conditions.',
    date: 'January 20, 2026',
    category: 'Announcement',
  },
  {
    id: 2,
    title: 'Free Medical Camp in Rural Areas',
    excerpt: 'AIMS extends its healthcare services to underserved communities through monthly free medical camps.',
    date: 'January 15, 2026',
    category: 'Community',
  },
  {
    id: 3,
    title: 'Medical Research Breakthrough',
    excerpt: 'Our research team publishes groundbreaking findings on diabetes management in Pakistani populations.',
    date: 'January 10, 2026',
    category: 'Research',
  },
]

const events = [
  {
    id: 1,
    title: 'Fundraising Gala Dinner',
    date: 'February 15, 2026',
    location: 'Peshawar, Pakistan',
    time: '7:00 PM',
  },
  {
    id: 2,
    title: 'Health Awareness Seminar',
    date: 'February 20, 2026',
    location: 'AIMS Auditorium',
    time: '10:00 AM',
  },
  {
    id: 3,
    title: 'Blood Donation Drive',
    date: 'February 25, 2026',
    location: 'AIMS Campus',
    time: '9:00 AM',
  },
]

export function NewsEventsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Stay Updated
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            News & Events
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#3F4A7A]">Latest News</h3>
              <Link href="/about#news" className="text-[#5F9ED1] text-sm font-medium hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {news.map((item, index) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300 card-shine"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.category === 'Announcement' 
                          ? 'bg-[#5F9ED1]/10 text-[#5F9ED1]'
                          : item.category === 'Community'
                          ? 'bg-[#A34C55]/10 text-[#A34C55]'
                          : 'bg-[#3F4A7A]/10 text-[#3F4A7A]'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#3F4A7A] mb-1 hover:text-[#5F9ED1] transition-colors cursor-pointer">
                        {item.title}
                      </h4>
                      <p className="text-[#8A8A8A] text-sm line-clamp-2 mb-2">
                        {item.excerpt}
                      </p>
                      <time className="text-[#8A8A8A] text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#3F4A7A]">Upcoming Events</h3>
              <Link href="/about#events" className="text-[#5F9ED1] text-sm font-medium hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <article
                  key={event.id}
                  className="bg-white rounded-xl p-5 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-medium">{event.date.split(' ')[0]}</span>
                      <span className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-[#8A8A8A] text-xs">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                    <button className="self-center w-8 h-8 rounded-full border border-[#E2E2E2] flex items-center justify-center group-hover:bg-[#5F9ED1] group-hover:text-white group-hover:border-[#5F9ED1] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
