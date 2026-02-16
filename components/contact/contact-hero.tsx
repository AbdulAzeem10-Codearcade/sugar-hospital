"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Phone, Mail } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="relative py-20 bg-linear-to-br from-[#3F4A7A] via-[#3F4A7A]/95 to-[#5F9ED1]/80 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/70 text-sm mb-6 animate-fade-in-down">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Contact Us</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 font-medium mb-4 animate-fade-in-up delay-200">
            We're here to help and answer any questions you might have
          </p>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in-up delay-300">
            Whether you need to book an appointment, inquire about our services, or make a donation, 
            our team is ready to assist you.
          </p>
        </div>

        {/* Quick Contact Icons */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up delay-400">
            <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-4">
              <Image src="/images/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} />
            </div>
            <div className="text-white/80 text-sm mb-1">WhatsApp</div>
            <div className="text-white font-semibold">0301-1155713</div>
            <div className="text-white/60 text-xs mt-1">Appointments</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up delay-500">
            <div className="w-12 h-12 bg-[#5F9ED1] rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-white/80 text-sm mb-1">Phone</div>
            <div className="text-white font-semibold">091-5892728</div>
            <div className="text-white/60 text-xs mt-1">Enquiry & Complaints</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up delay-600">
            <div className="w-12 h-12 bg-[#A34C55] rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-white/80 text-sm mb-1">Email</div>
            <div className="text-white font-semibold text-sm">admin@sugarhospital.com</div>
            <div className="text-white/60 text-xs mt-1">Complaints</div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
