"use client"

import Link from 'next/link'
import { useCountUp } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const stats = [
  {
    value: 160000,
    suffix: '+',
    label: 'Community Screened',
    description: 'Through camps in KP',
  },
  {
    value: 80000,
    suffix: '+',
    label: 'Registered Patients',
    description: 'At Sugar Hospital',
  },
  {
    value: 250,
    suffix: '+',
    label: 'Health Camps',
    description: 'Since 2015',
  },
  {
    value: 2500,
    suffix: '+',
    label: 'Free Care Patients',
    description: 'Type-1 & Type-2',
  },
]

function StatItem({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 stats-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/90 text-lg font-medium">{label}</div>
      <div className="text-white/60 text-sm">{description}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3F4A7A] via-[#3F4A7A] to-[#5F9ED1]">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Your Support Transforms Lives
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            At AIMS Pakistan, your donations directly impact lives. Contribute generously, as the hope for patients depends on your Zakat, Sadqa, and donations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#A34C55] hover:bg-[#8E3F47] text-white btn-hover-lift"
          >
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float delay-500" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/10 rounded-full animate-float delay-300" />
    </section>
  )
}
