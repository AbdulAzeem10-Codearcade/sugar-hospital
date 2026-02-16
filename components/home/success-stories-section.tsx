"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react'

const stories = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    condition: 'Cardiac Patient',
    story: 'The doctors at AIMS Pakistan saved my life. After my heart surgery, I received exceptional care and support throughout my recovery. I am forever grateful for their dedication.',
    image: '/images/patient-1.jpg',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    condition: 'Diabetic Patient',
    story: 'Managing diabetes seemed impossible until I found AIMS Pakistan. Their comprehensive care program and dedicated team helped me take control of my health and live a fulfilling life.',
    image: '/images/patient-2.jpg',
  },
  {
    id: 3,
    name: 'Mohammad Ali',
    condition: 'Orthopedic Patient',
    story: 'After my accident, I thought I would never walk again. The orthopedic team at AIMS performed a miracle. Today, I walk without any assistance. Thank you, AIMS!',
    image: '/images/patient-3.jpg',
  },
]

export function SuccessStoriesSection() {
  const [currentStory, setCurrentStory] = useState(0)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Testimonials
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Success Stories
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className={`border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white self-start md:self-auto transition-all duration-700 delay-200 bg-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link href="/patients#stories">
              View All Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Stories Carousel */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F6F8] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#5F9ED1]/20 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#5F9ED1]/30 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#5F9ED1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {stories[currentStory].name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A34C55] rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <div className="bg-[#F4F6F8] rounded-2xl p-8">
                <p className="text-lg text-[#3F4A7A] leading-relaxed mb-6 italic">
                  &ldquo;{stories[currentStory].story}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5F9ED1] rounded-full flex items-center justify-center text-white font-bold">
                    {stories[currentStory].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3F4A7A]">{stories[currentStory].name}</h4>
                    <p className="text-[#8A8A8A] text-sm">{stories[currentStory].condition}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentStory
                          ? 'bg-[#5F9ED1] w-8'
                          : 'bg-[#E2E2E2] hover:bg-[#5F9ED1]/50'
                      }`}
                      aria-label={`Go to story ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full border border-[#E2E2E2] flex items-center justify-center hover:bg-[#5F9ED1] hover:text-white hover:border-[#5F9ED1] transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 rounded-full border border-[#E2E2E2] flex items-center justify-center hover:bg-[#5F9ED1] hover:text-white hover:border-[#5F9ED1] transition-colors"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
