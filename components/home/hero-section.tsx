"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Play, Phone, Users, X } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Quality Healthcare for Everyone",
    subtitle: "Abaseen Institute of Medical Sciences",
    description: "Providing world-class medical services, research, and education to communities across Pakistan. Your health is our priority.",
    image: "/images/hero-1.jpg",
  },
  {
    id: 2,
    title: "Advanced Medical Research",
    subtitle: "Pioneering Healthcare Solutions",
    description: "Our dedicated team of researchers and doctors work tirelessly to bring innovative treatments and better healthcare outcomes.",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    title: "Serving Communities",
    subtitle: "With Compassion and Care",
    description: "From urban centers to remote areas, we extend our medical services to ensure no one is left behind in their healthcare journey.",
    image: "/images/hero-3.jpg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 500)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[700px] py-12 lg:py-0">
          {/* Content */}
          <div className={`text-white transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-[#5F9ED1] rounded-full animate-pulse" />
              <span className="text-sm font-medium">{slides[currentSlide].subtitle}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up text-balance">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white btn-hover-lift px-8"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3F4A7A] bg-transparent px-8"
              >
                <Link href="/join/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Join Us
                </Link>
              </Button>
            </div>

            {/* Video Button */}
            <div className="mt-10 flex items-center gap-4 animate-fade-in-up delay-400">
              <button 
                onClick={() => setShowVideo(true)}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 hover:bg-[#A34C55] hover:border-[#A34C55] transition-all animate-pulse-glow cursor-pointer"
                aria-label="Watch our story video"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </button>
              <span className="text-white/80 text-sm">Watch our story</span>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Main image container */}
              <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl animate-scale-in">
                <Image
                  src="/images/dghrc-logo.png"
                  alt="AIMS Pakistan"
                  fill
                  className="object-contain p-12 bg-white"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5F9ED1] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs">Care</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#A34C55] rounded-2xl flex items-center justify-center shadow-xl animate-float delay-500">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs">Doctors</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-xl animate-float delay-300">
                <div className="text-center text-[#3F4A7A]">
                  <p className="text-xl font-bold">100K+</p>
                  <p className="text-[10px]">Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-[#5F9ED1]'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#5F9ED1] transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/uehCUM11mxM?autoplay=1"
                title="AIMS Pakistan Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
