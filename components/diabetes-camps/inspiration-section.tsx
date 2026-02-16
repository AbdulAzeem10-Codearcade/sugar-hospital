"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Heart, ArrowRight, BookOpen } from 'lucide-react'

export function InspirationSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Quote */}
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              "Indeed, Allah does not change the condition of a people until they change what is in themselves."
            </h2>
            <p className="text-xl text-white/80 font-medium">
              Quran 13:11
            </p>
          </div>

          {/* Message */}
          <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#A34C55] rounded-xl flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">A Word from Us</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              At our camps, we combine faith, compassion, and expertise to empower communities, 
              improve lives, and spread awareness about diabetes care. Every screening, consultation, 
              and piece of advice is a step toward healthier futures. Together, we can make a lasting 
              difference in the lives of those who need it most.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              asChild
              size="lg"
              className="bg-[#A34C55] hover:bg-[#8E3F47] text-white btn-hover-lift"
            >
              <Link href="/contact">
                Support Our Camps
                <Heart className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3F4A7A] bg-transparent"
            >
              <Link href="/about">
                Learn More About AIMS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float delay-500" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-white/10 rounded-full animate-float delay-300" />
    </section>
  )
}
