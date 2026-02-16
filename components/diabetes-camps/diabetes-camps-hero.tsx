"use client"

import Link from 'next/link'
import { ChevronRight, Heart, Users, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Heart, title: 'Community Care', value: '250+ Camps' },
  { icon: Users, title: 'Lives Touched', value: '21,250+' },
  { icon: TrendingUp, title: 'Health Improved', value: '34%' },
]

export function DiabetesCampsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/70 text-sm mb-6 animate-fade-in-down">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">AIMS Diabetes Camps</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            AIMS Diabetes Camps
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 animate-fade-in-up delay-200">
            Bringing Care to Your Community
          </p>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in-up delay-300">
            Our diabetes camps are designed for communities where quality diabetes care is scarce, 
            and for individuals who cannot afford regular medical services. We focus on financially 
            constrained communities, minorities, and disaster-affected areas.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#5F9ED1] rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-white/80 text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
