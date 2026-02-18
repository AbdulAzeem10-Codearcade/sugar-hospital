"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/hospital-exterior.jpg',
    alt: 'Sugar Hospital Exterior',
    category: 'Facilities',
  },
  {
    id: 2,
    src: '/images/gallery/consultation-room.jpg',
    alt: 'Consultation Room',
    category: 'Facilities',
  },
  {
    id: 3,
    src: '/images/gallery/lab-equipment.jpg',
    alt: 'Laboratory Equipment',
    category: 'Facilities',
  },
  {
    id: 4,
    src: '/images/gallery/community-camp.jpg',
    alt: 'Community Health Camp',
    category: 'Community',
  },
  {
    id: 5,
    src: '/images/gallery/patient-care.jpg',
    alt: 'Patient Care',
    category: 'Services',
  },
  {
    id: 6,
    src: '/images/gallery/medical-team.jpg',
    alt: 'Medical Team',
    category: 'Team',
  },
  {
    id: 7,
    src: '/images/gallery/pharmacy.jpg',
    alt: 'Hospital Pharmacy',
    category: 'Facilities',
  },
  {
    id: 8,
    src: '/images/gallery/waiting-area.jpg',
    alt: 'Waiting Area',
    category: 'Facilities',
  },
]

export function GallerySection() {
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
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Facilities
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Gallery
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Take a visual tour of our state-of-the-art facilities, dedicated team, and community outreach programs
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="text-4xl mb-2">🏥</div>
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs text-white/70 mt-1">{image.category}</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-semibold mb-1">{image.alt}</p>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#8A8A8A] text-sm">
            Click on any image to view in full screen
          </p>
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
            <div className="relative aspect-video bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].alt}</h3>
                <p className="text-white/80">{galleryImages[selectedImage].category}</p>
                <p className="text-sm text-white/60 mt-4">
                  Image placeholder - Upload actual photos to /public/images/gallery/
                </p>
              </div>
            </div>
            <div className="text-center mt-4 text-white/80 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
