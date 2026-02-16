"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'AIMS Pakistan Opens New Cardiac Care Unit',
    excerpt: 'State-of-the-art cardiac care facility now available with advanced diagnostic and treatment capabilities.',
    date: 'January 20, 2026',
    category: 'Announcement',
  },
  {
    id: 2,
    title: 'Free Medical Camp in Swat District',
    excerpt: 'AIMS medical team provides free healthcare services to over 2,000 patients in rural Swat.',
    date: 'January 15, 2026',
    category: 'Community',
  },
  {
    id: 3,
    title: 'Research Publication on Diabetes Management',
    excerpt: 'Our research team publishes findings on effective diabetes management strategies for Pakistani populations.',
    date: 'January 10, 2026',
    category: 'Research',
  },
  {
    id: 4,
    title: 'New Partnership with International Health Organization',
    excerpt: 'AIMS partners with leading international health organizations to enhance healthcare delivery.',
    date: 'January 5, 2026',
    category: 'Partnership',
  },
  {
    id: 5,
    title: 'AIMS Celebrates 25 Years of Service',
    excerpt: 'Marking a quarter century of dedicated healthcare service to communities across Pakistan.',
    date: 'December 28, 2025',
    category: 'Milestone',
  },
]

export function LatestNews() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="news" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Stay Informed
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Latest News
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(0, 3).map((item, index) => (
            <article
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-xl transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#5F9ED1]/20 to-[#3F4A7A]/20 relative">
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  item.category === 'Announcement' 
                    ? 'bg-[#5F9ED1] text-white'
                    : item.category === 'Community'
                    ? 'bg-[#A34C55] text-white'
                    : 'bg-[#3F4A7A] text-white'
                }`}>
                  {item.category}
                </span>
              </div>
              
              <div className="p-6">
                <time className="text-[#8A8A8A] text-sm flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center text-[#5F9ED1] text-sm font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* More news list */}
        <div className={`mt-8 bg-white rounded-xl p-6 border border-[#E2E2E2] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-semibold text-[#3F4A7A] mb-4">More Updates</h3>
          <div className="space-y-3">
            {newsItems.slice(3).map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between py-3 border-b border-[#E2E2E2] last:border-0 hover:bg-[#F4F6F8] -mx-4 px-4 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#8A8A8A] text-sm shrink-0">{item.date}</span>
                  <h4 className="text-[#3F4A7A] font-medium hover:text-[#5F9ED1] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A8A8A] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
