"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { FileText, Download, ExternalLink, Clock, MapPin, CreditCard, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const guides = [
  {
    icon: Clock,
    title: 'Your First Visit',
    description: 'What to expect during your first appointment at AIMS Pakistan.',
    downloadable: true,
  },
  {
    icon: MapPin,
    title: 'Hospital Navigation',
    description: 'Find your way around our facilities with our detailed maps.',
    downloadable: true,
  },
  {
    icon: CreditCard,
    title: 'Billing & Insurance',
    description: 'Understanding your bills, payment options, and insurance coverage.',
    downloadable: true,
  },
  {
    icon: Shield,
    title: 'Patient Rights',
    description: 'Learn about your rights and responsibilities as a patient.',
    downloadable: true,
  },
  {
    icon: FileText,
    title: 'Medical Records',
    description: 'How to request and access your medical records.',
    downloadable: false,
  },
  {
    icon: FileText,
    title: 'Preparing for Surgery',
    description: 'Important information for patients scheduled for surgery.',
    downloadable: true,
  },
]

const faqs = [
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring your valid ID, insurance card (if applicable), previous medical records, and a list of current medications.',
  },
  {
    question: 'How do I get my test results?',
    answer: 'Test results can be collected from our laboratory reception or viewed online through our patient portal.',
  },
  {
    question: 'What are the visiting hours?',
    answer: 'General visiting hours are from 10:00 AM to 8:00 PM. ICU visiting is limited to specific times.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, free parking is available for patients and visitors in our dedicated parking area.',
  },
]

export function PatientGuides() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="guides" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Resources
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Patient Information Guides
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Helpful resources and guides to assist you during your healthcare journey.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide, index) => (
            <div
              key={guide.title}
              className={`bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#5F9ED1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#5F9ED1] transition-colors">
                <guide.icon className="w-6 h-6 text-[#5F9ED1] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                {guide.title}
              </h3>
              <p className="text-[#8A8A8A] text-sm mb-4">{guide.description}</p>
              {guide.downloadable ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#5F9ED1] text-[#5F9ED1] hover:bg-[#5F9ED1] hover:text-white bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#E2E2E2] text-[#3F4A7A] hover:bg-[#F4F6F8] bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-[#3F4A7A] mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 border border-[#E2E2E2]">
                <h4 className="font-semibold text-[#3F4A7A] mb-2">{faq.question}</h4>
                <p className="text-[#8A8A8A] text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
