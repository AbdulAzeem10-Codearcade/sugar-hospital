"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Heart, Activity, Eye, Footprints, Smile, Users, Building2 } from 'lucide-react'

const donationItems = [
  { icon: Activity, name: 'Insulin', amount: 'Rs 1,500', color: 'bg-[#5F9ED1]' },
  { icon: Activity, name: 'Glucometer', amount: 'Rs 3,500', color: 'bg-[#A34C55]' },
  { icon: Activity, name: 'Blood Sugar Test', amount: 'Rs 2,500', color: 'bg-[#3F4A7A]' },
  { icon: Eye, name: 'Eye Care', amount: 'Rs 3,000', color: 'bg-[#5F9ED1]' },
  { icon: Footprints, name: 'Foot Care', amount: 'Rs 1,500', color: 'bg-[#A34C55]' },
  { icon: Smile, name: 'Dental Care', amount: 'Rs 3,000', color: 'bg-[#3F4A7A]' },
  { icon: Users, name: 'Children with Diabetes', amount: 'Rs 3,000', color: 'bg-[#5F9ED1]' },
  { icon: Building2, name: 'AIMS Medical Camp (One Camp)', amount: 'Rs 200,000', description: '(2 Lac PKR)', color: 'bg-[#A34C55]' },
]

export function DonationAmounts() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Make a Difference
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Suggested Donation Amounts
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your contribution helps us provide essential diabetes care and treatment to those in need
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {donationItems.map((item, index) => (
            <div
              key={item.name}
              className={`bg-white rounded-2xl p-6 hover:shadow-xl border-2 border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{item.name}</h3>
              <div className="text-2xl font-bold text-[#A34C55] mb-1">{item.amount}</div>
              {item.description && (
                <p className="text-sm text-[#8A8A8A]">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Every Contribution Counts</h3>
            <p className="text-white/90 mb-6">
              Whether you donate a small amount or sponsor an entire camp, your generosity directly impacts lives. 
              Choose any amount above or donate what you can afford.
            </p>
            <p className="text-white/80 text-sm">
              All donations are 100% Zakat compliant and tax deductible
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
