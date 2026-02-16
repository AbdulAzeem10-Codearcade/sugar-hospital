"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Heart, Users, DollarSign, ArrowRight } from 'lucide-react'

export function SponsorPatient() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="sponsor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Make a Direct Impact
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Sponsor a Patient
          </h2>
          <p className={`text-[#8A8A8A] text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your sponsorship can cover medical treatment, medications, and ongoing care for patients who cannot afford it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Heart, title: 'Full Treatment', amount: 'PKR 50,000', description: 'Complete diabetes care package' },
            { icon: Users, title: 'Monthly Support', amount: 'PKR 10,000', description: 'Ongoing medication and monitoring' },
            { icon: DollarSign, title: 'Custom Amount', amount: 'Your Choice', description: 'Any amount makes a difference' },
          ].map((option, index) => (
            <div
              key={option.title}
              className={`bg-[#F4F6F8] rounded-xl p-8 hover:shadow-lg border border-transparent hover:border-[#A34C55] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#A34C55] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3F4A7A] mb-2 text-center">{option.title}</h3>
              <div className="text-2xl font-bold text-[#A34C55] mb-2 text-center">{option.amount}</div>
              <p className="text-[#8A8A8A] text-sm text-center">{option.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button asChild size="lg" className="bg-[#A34C55] hover:bg-[#8E3F47] text-white">
            <Link href="/contact">
              Sponsor Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
