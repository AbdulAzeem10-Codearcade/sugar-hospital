"use client"

import { useScrollReveal, useCountUp } from '@/hooks/use-scroll-reveal'
import { Users, Heart, TrendingUp, DollarSign, Activity, MapPin } from 'lucide-react'

function StatCard({ value, suffix, label, sublabel, icon: Icon }: { value: number; suffix: string; label: string; sublabel: string; icon: any }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <div ref={ref} className="bg-white rounded-xl p-8 hover:shadow-lg border border-[#E2E2E2] hover:border-[#5F9ED1] transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-[#3F4A7A] mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-semibold text-[#3F4A7A] mb-1">{label}</div>
      <div className="text-sm text-[#8A8A8A]">{sublabel}</div>
    </div>
  )
}

export function FactsStats() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="statistics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Facts & Statistics
            </h2>
            <p className="text-[#8A8A8A] max-w-3xl mx-auto">
              Since inception, AIMS Pakistan has been making a significant impact in diabetes care across Khyber Pakhtunkhwa
            </p>
          </div>

          {/* Main Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={160000} 
                suffix="+" 
                label="Community Screened" 
                sublabel="Through camps in KP"
                icon={Users}
              />
            </div>
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={80000} 
                suffix="+" 
                label="Registered Patients" 
                sublabel="At Sugar General Hospital"
                icon={Activity}
              />
            </div>
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={2000} 
                suffix="+" 
                label="Type-2 Patients" 
                sublabel="On free diabetes care"
                icon={Heart}
              />
            </div>
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={500} 
                suffix="+" 
                label="Type-1 Patients" 
                sublabel="On free insulin & care"
                icon={Heart}
              />
            </div>
            <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={10} 
                suffix="+" 
                label="Districts Covered" 
                sublabel="Network across KP"
                icon={MapPin}
              />
            </div>
            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <StatCard 
                value={250} 
                suffix="+" 
                label="Health Camps" 
                sublabel="Since 2015"
                icon={TrendingUp}
              />
            </div>
          </div>

          {/* Welfare Programs */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Type-2 Welfare */}
            <div className="bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Type-2 Diabetes Welfare</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>2,000+ patients enrolled</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free medications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free laboratory tests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free consultations</span>
                </div>
              </div>
            </div>

            {/* Type-1 Welfare */}
            <div className="bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Type-1 Diabetes Welfare</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>500+ patients enrolled</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free insulin supply</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free glucometer & strips</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free labs & consultations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Requirements */}
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-xl p-8 border-2 border-[#5F9ED1] shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#5F9ED1] rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3F4A7A]">Welfare Budget</h3>
                  <p className="text-[#8A8A8A] text-sm">2026-2027 Target</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#5F9ED1] mb-2">
                PKR 22.86M
              </div>
              <p className="text-[#8A8A8A]">
                Needed to provide free care including medications, labs, and consultations
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#A34C55] shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#A34C55] rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3F4A7A]">Camp Budget</h3>
                  <p className="text-[#8A8A8A] text-sm">Annual Target</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#A34C55] mb-2">
                PKR 10.8M
              </div>
              <p className="text-[#8A8A8A]">
                Each camp provides free meds and HbA1c for 100 confirmed diabetic cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
