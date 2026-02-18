"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const campImages = [
  {
    src: '/images/camp pictures/Swabi camp 1 dec 25.jpg',
    title: 'Swabi Community Camp',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Swabi Camp 2 dec 25.jpg',
    title: 'Swabi Health Screening',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Swabi Camp 3 dec 25.jpg',
    title: 'Community Health Services',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Swabi CAmp 4 dec 25.jpg',
    title: 'Medical Consultation',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Swabi Camp 5 dec 25.jpg',
    title: 'Community Engagement',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Swabi Camp 6 dec 25.jpg',
    title: 'Health Education Session',
    location: 'Swabi, KP'
  },
  {
    src: '/images/camp pictures/Church Camp.jpg',
    title: 'Church Community Outreach',
    location: 'Peshawar'
  },
  {
    src: '/images/camp pictures/hindu temple camp.jpg',
    title: 'Hindu Temple Health Camp',
    location: 'Peshawar'
  },
  {
    src: '/images/camp pictures/Mander camp.jpg',
    title: 'Mander Community Camp',
    location: 'Mander, KP'
  },
  {
    src: '/images/camp pictures/IMG-20251218-WA0020.jpg',
    title: 'Mobile Health Unit',
    location: 'Rural KP'
  },
  {
    src: '/images/camp pictures/IMG-20251218-WA0021.jpg',
    title: 'Patient Consultation',
    location: 'Community Camp'
  },
  {
    src: '/images/camp pictures/IMG-20251218-WA0023.jpg',
    title: 'Health Screening Services',
    location: 'Community Outreach'
  }
]

export function CampGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? campImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === campImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Outreach
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Community Camp Gallery
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Bringing healthcare to communities across Khyber Pakhtunkhwa
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {campImages.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                <p className="text-white/80 text-xs">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full">
            <div className="relative aspect-video">
              <Image
                src={campImages[selectedImage].src}
                alt={campImages[selectedImage].title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={85}
                priority
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold mb-1">{campImages[selectedImage].title}</h3>
              <p className="text-white/80">{campImages[selectedImage].location}</p>
              <p className="text-white/60 text-sm mt-2">
                {selectedImage + 1} / {campImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
