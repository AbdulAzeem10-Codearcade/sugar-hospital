"use client"

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/10 rounded-full animate-float delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6 animate-fade-in-down">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            About AIMS Pakistan
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up delay-200">
            Abaseen Institute of Medical Sciences is dedicated to providing world-class healthcare, 
            advancing medical research, and nurturing the next generation of healthcare professionals. 
            Learn about our journey, mission, and commitment to excellence.
          </p>
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
