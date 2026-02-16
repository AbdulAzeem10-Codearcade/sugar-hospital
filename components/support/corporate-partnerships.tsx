"use client"

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Building, Handshake, Award, ArrowRight } from 'lucide-react'

export function CorporatePartnerships() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="partnerships" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Corporate Partnerships
            </h2>
            <p className={`text-[#8A8A8A] text-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Partner with us to fulfill your CSR objectives while making a meaningful impact on community health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Building, title: 'CSR Programs', description: 'Align with our mission for your corporate social responsibility' },
              { icon: Handshake, title: 'Strategic Partnerships', description: 'Long-term collaborations for sustainable impact' },
              { icon: Award, title: 'Recognition', description: 'Visibility and acknowledgment for your contribution' },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#5F9ED1]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-8 h-8 text-[#5F9ED1]" />
                </div>
                <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{benefit.title}</h3>
                <p className="text-[#8A8A8A] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold mb-3">Interested in Partnering?</h3>
            <p className="text-white/90 mb-6">
              Let's discuss how we can work together to create lasting change in diabetes care
            </p>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#5F9ED1] bg-transparent">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
