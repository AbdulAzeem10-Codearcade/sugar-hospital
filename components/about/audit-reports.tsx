"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { FileText, Download, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const auditReports = [
  {
    year: '2025',
    title: 'Annual Audit Report 2025',
    description: 'Comprehensive financial audit and compliance report for fiscal year 2025',
    date: 'January 2026',
    status: 'Latest',
  },
  {
    year: '2024',
    title: 'Annual Audit Report 2024',
    description: 'Comprehensive financial audit and compliance report for fiscal year 2024',
    date: 'January 2025',
    status: 'Available',
  },
  {
    year: '2023',
    title: 'Annual Audit Report 2023',
    description: 'Comprehensive financial audit and compliance report for fiscal year 2023',
    date: 'January 2024',
    status: 'Available',
  },
]

export function AuditReports() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="audit-reports" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Transparency & Accountability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Audit Reports
            </h2>
            <p className="text-[#8A8A8A] max-w-2xl mx-auto">
              Access our annual audit reports demonstrating our commitment to financial transparency and responsible stewardship
            </p>
          </div>

          <div className="space-y-6">
            {auditReports.map((report, index) => (
              <div
                key={report.year}
                className={`bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center shadow-md">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#3F4A7A]">{report.title}</h3>
                      {report.status === 'Latest' && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          Latest
                        </span>
                      )}
                    </div>
                    <p className="text-[#8A8A8A] mb-3">{report.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                      <Calendar className="w-4 h-4 text-[#5F9ED1]" />
                      <span>{report.date}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="shrink-0">
                    <Button
                      size="lg"
                      className="bg-[#5F9ED1] hover:bg-[#3F4A7A] text-white"
                      asChild
                    >
                      <a href="#" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className={`mt-12 bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-xl p-6 text-white transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-center text-white/90">
              All audit reports are conducted by independent certified auditors in compliance with 
              international accounting standards and regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
