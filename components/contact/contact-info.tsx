"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    items: [
      { label: 'Appointments & WhatsApp', value: '0301-1155713' },
      { label: 'Enquiry & Complaints', value: '091-5892728' },
    ],
  },
  {
    icon: Mail,
    title: 'Email Address',
    items: [
      { label: 'Complaints & General Inquiries', value: 'admin@sugarhospital.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Location',
    items: [
      { label: 'Address', value: 'A-6 B/3, Opposite Edhi Homes, Phase 5, Hayatabad, Peshawar' },
    ],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    items: [
      { label: 'Monday - Saturday', value: '8:00 AM - 8:00 PM' },
      { label: 'Sunday', value: 'Closed' },
    ],
  },
]

export function ContactInfo() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Contact Information
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How to Reach Us
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Choose the most convenient way to contact us. We're here to help with appointments, 
            inquiries, donations, and any other assistance you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contactDetails.map((detail, index) => (
            <div
              key={detail.title}
              className={`bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <detail.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3F4A7A] mb-4">{detail.title}</h3>
                  <div className="space-y-3">
                    {detail.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-sm text-[#8A8A8A] mb-1">{item.label}</div>
                        {detail.title === 'Email Address' ? (
                          <a 
                            href={`mailto:${item.value}`}
                            className="text-base font-semibold text-[#5F9ED1] hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : detail.title === 'Phone Numbers' ? (
                          <a 
                            href={`tel:${item.value.replace(/\s/g, '')}`}
                            className="text-base font-semibold text-[#3F4A7A] hover:text-[#5F9ED1] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-base font-semibold text-[#3F4A7A]">{item.value}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
