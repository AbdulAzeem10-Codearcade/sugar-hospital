"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const stories = [
  {
    id: 1,
    name: 'Fatima Bibi',
    age: 38,
    condition: 'Type 2 Diabetes Management',
    story: 'Managing diabetes was overwhelming until I joined the diabetes care program at AIMS. The doctors and nutritionists created a personalized plan that has transformed my health. My blood sugar is now under control, and I feel healthier than ever.',
    location: 'Mardan',
    image: '/images/patients/Fatima BiBi.jpg',
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    age: 52,
    condition: 'Diabetic Foot Care',
    story: 'I was suffering from diabetic foot complications and feared amputation. The podiatry team at AIMS provided exceptional care and saved my foot. Their expertise in diabetic foot care is truly remarkable. I can walk pain-free now.',
    location: 'Peshawar',
    image: '/images/patients/Ahmed khan.jpg',
  },
  {
    id: 3,
    name: 'Ayesha Gul',
    age: 28,
    condition: 'Gestational Diabetes',
    story: 'My pregnancy was complicated by gestational diabetes, and I was scared. The maternity and diabetes team at AIMS provided exceptional care throughout my journey. They monitored me closely and ensured a safe delivery. My baby and I are healthy.',
    location: 'Nowshera',
    image: '/images/patients/Ayesha gul.jpg',
  },
  {
    id: 4,
    name: 'Muhammad Imran',
    age: 45,
    condition: 'Type 1 Diabetes',
    story: 'Living with Type 1 diabetes was challenging until I found AIMS Pakistan. The endocrinology team helped me understand insulin management and lifestyle changes. Their continuous support has given me confidence to live a normal, active life.',
    location: 'Swat',
    image: '/images/patients/Muhammad imran.jpg',
  },
]

export function PatientStories() {
  const [currentStory, setCurrentStory] = useState(0)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section ref={ref} id="stories" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Testimonials
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Patient Success Stories
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Real stories from real patients whose lives were transformed at AIMS Pakistan.
          </p>
        </div>

        {/* Featured Story */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 md:p-12 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <Quote className="w-12 h-12 text-white/30 mb-6" />
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{stories[currentStory].story}&rdquo;
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white/30 shrink-0">
                    <Image
                      src={stories[currentStory].image}
                      alt={stories[currentStory].name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      quality={75}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{stories[currentStory].name}</h4>
                    <p className="text-white/70 text-sm">
                      {stories[currentStory].age} years | {stories[currentStory].location}
                    </p>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mt-2">
                      {stories[currentStory].condition}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStory
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Cards Preview */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setCurrentStory(index)}
              className={`text-left p-4 rounded-xl border transition-all ${
                index === currentStory
                  ? 'bg-[#5F9ED1]/10 border-[#5F9ED1]'
                  : 'bg-[#F4F6F8] border-transparent hover:border-[#E2E2E2]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  index === currentStory ? 'bg-[#5F9ED1]' : 'bg-[#3F4A7A]'
                }`}>
                  {story.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[#3F4A7A] text-sm">{story.name}</p>
                  <p className="text-[#8A8A8A] text-xs">{story.condition}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
