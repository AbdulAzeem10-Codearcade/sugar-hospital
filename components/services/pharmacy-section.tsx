"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Pill, Clock, Shield, DollarSign, Users, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Open daily from 8:00 AM to 10:00 PM for your convenience',
  },
  {
    icon: Shield,
    title: 'Genuine Medications',
    description: 'Only authentic, quality-assured pharmaceutical products',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive prices and financial assistance programs',
  },
  {
    icon: Users,
    title: 'Expert Pharmacists',
    description: 'Professional guidance on medication usage and interactions',
  },
]

export function PharmacySection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="pharmacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Pharmaceutical Services
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Pharmacy
            </h2>
            <p className={`text-[#8A8A8A] text-lg mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our well-stocked pharmacy provides genuine medications with professional pharmaceutical 
              guidance. We ensure you have access to all prescribed medications at affordable prices.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#5F9ED1]/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-[#5F9ED1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3F4A7A] mb-1">{feature.title}</h3>
                    <p className="text-[#8A8A8A] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button
                asChild
                size="lg"
                className="bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
              >
                <Link href="/contact">
                  Contact Pharmacy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Pill className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Medication Range</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Anti-diabetic medications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Insulin and supplies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Cardiovascular medications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>General prescription drugs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Over-the-counter medicines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Community Camps Link */}
        <div className={`mt-16 bg-[#F4F6F8] rounded-2xl p-8 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#3F4A7A] mb-2">Community Outreach Camps</h3>
              <p className="text-[#8A8A8A]">
                Learn about our mobile health camps bringing diabetes care to underserved communities
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent shrink-0"
            >
              <Link href="/about/community-camps">
                View Camps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
