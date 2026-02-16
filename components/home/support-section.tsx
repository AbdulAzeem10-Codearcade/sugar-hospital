"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { CreditCard, Building2, Smartphone, ArrowRight } from 'lucide-react'

const donationMethods = [
  {
    title: 'Online Payment',
    description: 'Secure card payments via Visa or Mastercard',
    icon: CreditCard,
    href: '/support#donation',
  },
  {
    title: 'Bank Transfer',
    description: 'Direct transfer to our official accounts',
    icon: Building2,
    href: '/support#donation',
  },
  {
    title: 'Mobile Wallets',
    description: 'EasyPaisa, JazzCash, and more',
    icon: Smartphone,
    href: '/support#donation',
  },
]

export function SupportSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2">
              Support Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-6">
              Ways To Donate
            </h2>
            <p className="text-[#8A8A8A] mb-8 leading-relaxed">
              Your generous contribution helps us provide quality healthcare to those in need. 
              Every donation, big or small, makes a difference in someone&apos;s life. 
              Choose your preferred donation method below.
            </p>

            <div className="space-y-4 mb-8">
              {donationMethods.map((method, index) => (
                <Link
                  key={method.title}
                  href={method.href}
                  className="flex items-center gap-4 p-4 bg-[#F4F6F8] rounded-xl hover:bg-[#5F9ED1]/10 hover:border-[#5F9ED1] border border-transparent transition-all group"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#5F9ED1] group-hover:text-white transition-colors">
                    <method.icon className="w-6 h-6 text-[#5F9ED1] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#3F4A7A] group-hover:text-[#5F9ED1] transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-[#8A8A8A] text-sm">{method.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#5F9ED1] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#A34C55] hover:bg-[#8E3F47] text-white btn-hover-lift"
              >
                <Link href="/support#donation">
                  Donate Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent"
              >
                <Link href="/support#donation">
                  Give Zakat
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/aims-logo.png"
                    alt="AIMS Logo"
                    width={60}
                    height={60}
                    className="rounded-xl bg-white p-2"
                  />
                  <div>
                    <h3 className="font-bold text-xl">AIMS Pakistan</h3>
                    <p className="text-white/70 text-sm">Healthcare for All</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Zakat Eligible</p>
                    <p className="font-semibold">Yes - 100% Zakat Compliant</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Tax Deductible</p>
                    <p className="font-semibold">Yes - Get Tax Benefits</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/70 text-sm text-center">
                    &ldquo;Whoever saves a life, it is as if he has saved all of humanity.&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#A34C55] text-white px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="font-bold">100%</span>
                <span className="text-sm ml-1">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
