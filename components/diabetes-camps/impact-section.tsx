"use client"

import { useScrollReveal, useCountUp } from '@/hooks/use-scroll-reveal'
import { Calendar, Users, TrendingUp, Heart } from 'lucide-react'

const stats = [
  { icon: Calendar, value: 250, suffix: '+', label: 'Full-Scale Camps', sublabel: 'Since 2015' },
  { icon: Users, value: 21250, suffix: '+', label: 'Individuals Screened', sublabel: 'And treated' },
  { icon: TrendingUp, value: 34, suffix: '%', label: 'Health Improvement', sublabel: 'In glycemic levels' },
  { icon: Heart, value: 64, suffix: '%', label: 'Type-2 Diabetes', sublabel: 'Among patients' },
]

function StatCard({ icon: Icon, value, suffix, label, sublabel }: { icon: any; value: number; suffix: string; label: string; sublabel: string }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <div ref={ref} className="bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl font-bold text-[#3F4A7A] mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-semibold text-[#3F4A7A] mb-1">{label}</div>
      <div className="text-sm text-[#8A8A8A]">{sublabel}</div>
    </div>
  )
}

const demographics = [
  { label: 'Female patients', value: '64.07%', color: 'bg-[#5F9ED1]' },
  { label: 'Male patients', value: '35.93%', color: 'bg-[#3F4A7A]' },
]

const ageGroups = [
  { label: 'Ages 25-54', percentage: 50 },
  { label: 'Ages 55+', percentage: 35 },
  { label: 'Ages 7-24', percentage: 15 },
]

const diabetesTypes = [
  { label: 'Type-2 Diabetes', value: '64%', color: 'bg-[#5F9ED1]' },
  { label: 'Non-diabetic', value: '28%', color: 'bg-[#3F4A7A]' },
  { label: 'Type-1 Diabetes', value: '8%', color: 'bg-[#A34C55]' },
]

export function ImpactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Making a Difference
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Impact
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Since 2015, we have been transforming lives through our comprehensive diabetes care camps.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Demographics & Distribution */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gender Distribution */}
          <div className={`bg-white rounded-xl p-8 border border-[#E2E2E2] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-6">Gender Distribution</h3>
            <div className="space-y-4">
              {demographics.map((demo) => (
                <div key={demo.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#3F4A7A] font-medium">{demo.label}</span>
                    <span className="text-[#5F9ED1] font-bold">{demo.value}</span>
                  </div>
                  <div className="h-3 bg-[#F4F6F8] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${demo.color} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? demo.value : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Groups */}
          <div className={`bg-white rounded-xl p-8 border border-[#E2E2E2] transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-6">Age Distribution</h3>
            <div className="space-y-4">
              {ageGroups.map((group, index) => (
                <div key={group.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#3F4A7A] font-medium">{group.label}</span>
                    <span className="text-[#5F9ED1] font-bold">{group.percentage}%</span>
                  </div>
                  <div className="h-3 bg-[#F4F6F8] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${group.percentage}%` : '0%', transitionDelay: `${index * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diabetes Types */}
          <div className={`bg-white rounded-xl p-8 border border-[#E2E2E2] transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-6">Patient Categories</h3>
            <div className="space-y-4">
              {diabetesTypes.map((type) => (
                <div key={type.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#3F4A7A] font-medium">{type.label}</span>
                    <span className="text-[#5F9ED1] font-bold">{type.value}</span>
                  </div>
                  <div className="h-3 bg-[#F4F6F8] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${type.color} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? type.value : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS Program */}
        <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-4">Family-Based Treatment Supporter Program</h3>
          <p className="text-white/90 leading-relaxed">
            Our DOTS observation therapy trains each patient's family member to monitor diet control, 
            exercise, and medication regime. After three months, HbA1c is repeated to track the patient's 
            response to AIMS community-based diabetes care. This approach has resulted in{' '}
            <span className="font-bold text-white">34% improvement in glycemic levels</span> through 
            proper nutrition guidance and medications.
          </p>
        </div>
      </div>
    </section>
  )
}
