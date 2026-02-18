"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Calendar, MapPin, Users, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const conferences = [
  {
    year: '2026',
    date: 'February 4th & 5th',
    title: '6th International Health Conference',
    location: 'Peshawar, Pakistan',
    status: 'Completed',
    description: 'Successfully hosted the 6th International Health Conference focusing on diabetes care and public health initiatives.',
    attendees: '500+',
    presentations: '45+',
  },
  {
    year: '2025',
    date: 'April 9th & 10th',
    title: '5th International Public Health Conference',
    location: 'Peshawar, Pakistan',
    status: 'Upcoming',
    description: 'Join us for the 5th International Public Health Conference featuring leading experts in diabetes research and treatment.',
    attendees: 'Expected 600+',
    presentations: 'Expected 50+',
  },
  {
    year: '2024',
    date: 'March 15th & 16th',
    title: '4th International Diabetes Summit',
    location: 'Islamabad, Pakistan',
    status: 'Completed',
    description: 'Comprehensive conference on diabetes management, research, and community health programs.',
    attendees: '450+',
    presentations: '40+',
  },
  {
    year: '2023',
    date: 'November 20th & 21st',
    title: '3rd National Health Symposium',
    location: 'Peshawar, Pakistan',
    status: 'Completed',
    description: 'National symposium addressing diabetes prevention and treatment strategies in Pakistan.',
    attendees: '350+',
    presentations: '35+',
  },
]

export function ConferencePresentations() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="conferences" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Academic Excellence
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Conference Presentations
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our commitment to advancing medical knowledge through international conferences and research presentations
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {conferences.map((conference, index) => (
            <div
              key={conference.title}
              className={`bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Year Badge */}
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{conference.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[#3F4A7A]">{conference.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      conference.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {conference.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#8A8A8A]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{conference.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{conference.location}</span>
                    </div>
                  </div>

                  <p className="text-[#8A8A8A] mb-4 leading-relaxed">
                    {conference.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#5F9ED1]" />
                      <div>
                        <p className="text-xs text-[#8A8A8A]">Attendees</p>
                        <p className="font-semibold text-[#3F4A7A]">{conference.attendees}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-[#5F9ED1]" />
                      <div>
                        <p className="text-xs text-[#8A8A8A]">Presentations</p>
                        <p className="font-semibold text-[#3F4A7A]">{conference.presentations}</p>
                      </div>
                    </div>
                  </div>

                  {conference.status === 'Completed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent"
                      asChild
                    >
                      <a href={`/pdfs/conferences/conference-${conference.year}.pdf`} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download Proceedings
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`mt-12 bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-3">Interested in Presenting?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We welcome submissions from healthcare professionals and researchers. Contact us to learn about upcoming conference opportunities.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#5F9ED1] hover:bg-white/90"
            asChild
          >
            <a href="mailto:admin@sugarhospital.com">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
