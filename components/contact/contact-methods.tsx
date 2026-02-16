"use client"

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Phone, Mail, Calendar, Heart, FlaskConical } from 'lucide-react'

const contactMethods = [
  {
    icon: '/images/whatsapp-icon.svg',
    title: 'WhatsApp',
    description: 'Get instant responses for appointments',
    action: 'Chat Now',
    color: 'bg-[#25D366]',
    numbers: ['0301-1155713'],
    isImage: true,
  },
  {
    icon: Phone,
    title: 'Phone Call',
    description: 'Speak directly with our team',
    action: 'Call Now',
    color: 'bg-[#5F9ED1]',
    numbers: ['0301-1155713', '091-5892728'],
    isImage: false,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send complaints or detailed inquiries',
    action: 'Email Us',
    color: 'bg-[#A34C55]',
    email: 'admin@sugarhospital.com',
    isImage: false,
  },
]

const services = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule your visit with our specialists',
    contact: '0301-1155713',
  },
  {
    icon: FlaskConical,
    title: 'Lab Services & Tests',
    description: 'Inquire about lab tests and results',
    contact: '0301-1155713',
  },
  {
    icon: Heart,
    title: 'Enquiry & Complaints',
    description: 'General inquiries or file a complaint',
    contact: '091-5892728',
    email: 'admin@sugarhospital.com',
  },
]

export function ContactMethods() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const handleWhatsAppClick = (number: string) => {
    const cleanNumber = number.replace(/[-\s]/g, '')
    const whatsappUrl = `https://wa.me/92${cleanNumber.startsWith('0') ? cleanNumber.slice(1) : cleanNumber}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:${number}`
  }

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        {/* Contact Methods */}
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Choose Your Method
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Contact Methods
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className={`bg-white rounded-2xl p-8 hover:shadow-xl border border-[#E2E2E2] hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {method.isImage ? (
                  <Image src={method.icon as string} alt={method.title} width={32} height={32} />
                ) : (
                  <method.icon className="w-8 h-8 text-white" />
                )}
              </div>
              <h3 className="text-xl font-bold text-[#3F4A7A] mb-3">{method.title}</h3>
              <p className="text-[#8A8A8A] mb-6">{method.description}</p>
              
              {method.numbers && (
                <div className="space-y-2">
                  {method.numbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => method.title === 'WhatsApp' ? handleWhatsAppClick(number) : handlePhoneClick(number)}
                      className={`w-full ${method.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-xl transition-all hover:scale-105`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              )}
              
              {method.email && (
                <button
                  onClick={() => handleEmailClick(method.email!)}
                  className={`w-full ${method.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-xl transition-all hover:scale-105`}
                >
                  {method.email}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Services Quick Contact */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Quick Contact for Services
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Need specific assistance? Contact us directly for these services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3F4A7A] mb-2">{service.title}</h3>
              <p className="text-[#8A8A8A] text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#5F9ED1] font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>{service.contact}</span>
                </div>
                {service.email && (
                  <div className="flex items-center gap-2 text-[#5F9ED1] font-semibold">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{service.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Note */}
        <div className={`mt-12 bg-gradient-to-r from-[#A34C55] to-[#8E3F47] rounded-2xl p-8 text-white text-center max-w-4xl mx-auto transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-3">Appointments & Emergency Contact</h3>
          <p className="text-white/90 mb-4">
            For appointments or urgent medical assistance, please call or WhatsApp
          </p>
          <a
            href="tel:03011155713"
            className="inline-flex items-center gap-2 bg-white text-[#A34C55] font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            0301-1155713
          </a>
        </div>
      </div>
    </section>
  )
}
