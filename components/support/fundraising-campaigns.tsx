"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { TrendingUp, Target, Users } from 'lucide-react'

export function FundraisingCampaigns() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="campaigns" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Fundraising Campaigns
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Join our active campaigns to support specific initiatives and projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, title: 'Diabetes Awareness Month', goal: 'PKR 500,000', raised: '65%' },
            { icon: Target, title: 'New Equipment Fund', goal: 'PKR 1,000,000', raised: '42%' },
            { icon: Users, title: 'Community Camps 2026', goal: 'PKR 60,000,000', raised: '23%' },
          ].map((campaign, index) => (
            <div
              key={campaign.title}
              className={`bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-xl flex items-center justify-center mb-4">
                <campaign.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{campaign.title}</h3>
              <p className="text-sm text-[#8A8A8A] mb-4">Goal: {campaign.goal}</p>
              <div className="w-full bg-[#E2E2E2] rounded-full h-2 mb-2">
                <div className="bg-[#A34C55] h-2 rounded-full" style={{ width: campaign.raised }} />
              </div>
              <p className="text-sm font-semibold text-[#A34C55]">{campaign.raised} Raised</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
