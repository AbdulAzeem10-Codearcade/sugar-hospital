"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const facilityImages = [
  {
    src: '/images/Sugar hospital building images/SUgar Hospital Picture.jpg',
    title: 'Sugar Hospital Main Building',
    category: 'Facility'
  },
  {
    src: '/images/Sugar hospital building images/SGH image.jpg',
    title: 'Hospital Exterior',
    category: 'Facility'
  },
  {
    src: '/images/Sugar Hospital Staff/AIMS-Sugar-Hospital-Patients-Hallway.jpg',
    title: 'Patient Hallway',
    category: 'Facility'
  },
  {
    src: '/images/Sugar Hospital Staff/AIMS-Sugar-Hospital-Patient1A.jpg',
    title: 'Patient Care',
    category: 'Services'
  },
  {
    src: '/images/Sugar hospital building images/old building .jpeg',
    title: 'Hospital Campus',
    category: 'Facility'
  }
]

export function FacilityGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? facilityImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === facilityImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Facilities
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            State-of-the-Art Healthcare
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Explore our modern facilities and advanced medical equipment
          </p>
        </div>

        {/* Main Gallery */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-2xl">
            <Image
              src={facilityImages[currentIndex].src}
              alt={facilityImages[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-[#3F4A7A] transition-all hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-[#3F4A7A] transition-all hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="inline-block px-3 py-1 bg-[#5F9ED1] text-white text-xs font-semibold rounded-full mb-2">
                {facilityImages[currentIndex].category}
              </span>
              <h3 className="text-white text-xl font-bold">
                {facilityImages[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {facilityImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-[#5F9ED1] scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-[#8A8A8A] text-sm">
            {currentIndex + 1} / {facilityImages.length}
          </div>
        </div>
      </div>
    </section>
  )
}
