"use client"

import Link from 'next/link'
import { ChevronRight, Briefcase } from 'lucide-react'

export function CareersHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex items-center gap-2 text-white/70 text-sm mb-6 animate-fade-in-down">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/join" className="hover:text-white transition-colors">Join Us</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Careers</span>
        </nav>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Careers
            </h1>
          </div>
          <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up delay-200">
            Join our team of dedicated healthcare professionals making a difference in diabetes care and community health
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
