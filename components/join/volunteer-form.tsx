"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Users, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function VolunteerForm() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Application Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Apply Now
            </h2>
            <p className="text-[#8A8A8A]">
              Fill out our volunteer or internship application form
            </p>
          </div>

          {/* Application Options */}
          <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Volunteer Program</h3>
              <p className="text-white/90 mb-6">
                Join our mission to provide healthcare to everyone. Make a difference through volunteering.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-[#5F9ED1] hover:bg-white/90"
              >
                <a href="https://forms.gle/oKmprdvfG6J7saDm7" target="_blank" rel="noopener noreferrer">
                  Apply for Volunteer
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Internship Program</h3>
              <p className="text-white/90 mb-6">
                Learn and grow with our medical internship programs. Gain valuable experience.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-[#A34C55] hover:bg-white/90"
              >
                <a href="https://forms.gle/oKmprdvfG6J7saDm7" target="_blank" rel="noopener noreferrer">
                  Apply for Internship
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Information */}
          <div className={`bg-[#F4F6F8] rounded-2xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-4">What to Expect</h3>
            <div className="space-y-3 text-[#8A8A8A]">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mt-2 shrink-0" />
                <p>Fill out the application form with your details and motivation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mt-2 shrink-0" />
                <p>Our team will review your application within 5-7 business days</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mt-2 shrink-0" />
                <p>Selected candidates will be contacted for an interview</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mt-2 shrink-0" />
                <p>Start making a difference in your community</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl p-8 border border-[#5F9ED1]/20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-3">Questions About Programs?</h3>
            <p className="text-[#8A8A8A] mb-4">
              For inquiries about volunteer or internship opportunities, please contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:03011155713" className="text-[#5F9ED1] font-semibold hover:underline">
                0301-1155713
              </a>
              <span className="hidden sm:inline text-[#8A8A8A]">|</span>
              <a href="mailto:admin@sugarhospital.com" className="text-[#5F9ED1] font-semibold hover:underline">
                admin@sugarhospital.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
