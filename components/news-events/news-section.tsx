"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
  {
    date: 'Feb 10, 2024',
    title: 'New Diabetes Care Unit Inaugurated',
    excerpt: 'State-of-the-art facility to serve 100+ patients daily with advanced diagnostic equipment',
    category: 'Facility',
  },
  {
    date: 'Feb 5, 2024',
    title: 'Community Camp Reaches 250th Milestone',
    excerpt: 'AIMS Pakistan celebrates screening and treating over 21,250 individuals across 250 camps',
    category: 'Achievement',
  },
  {
    date: 'Jan 28, 2024',
    title: 'Research Paper Published in International Journal',
    excerpt: 'Our study on community-based diabetes management featured in Journal of Diabetes Research',
    category: 'Research',
  },
  {
    date: 'Jan 15, 2024',
    title: 'Partnership with Local Universities Announced',
    excerpt: 'Collaboration to provide internship opportunities and advance diabetes research',
    category: 'Partnership',
  },
]

export function NewsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Stay Informed
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Latest News
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs font-medium rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#3F4A7A] mb-2 hover:text-[#5F9ED1] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#8A8A8A] mb-4">{item.excerpt}</p>
              <button className="text-[#5F9ED1] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
