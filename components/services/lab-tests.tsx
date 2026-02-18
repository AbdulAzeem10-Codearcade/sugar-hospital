"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { FlaskConical, Search } from 'lucide-react'
import { useState } from 'react'

const labTests = [
  { sno: 1, name: 'ALP', fee: 350 },
  { sno: 2, name: 'AMYLASE (SERUM)', fee: 600 },
  { sno: 3, name: 'APTT', fee: 400 },
  { sno: 4, name: 'BILIRUBIN', fee: 350 },
  { sno: 5, name: 'BLOOD GROUP', fee: 200 },
  { sno: 6, name: 'BT/CT', fee: 450 },
  { sno: 7, name: 'CBC', fee: 500 },
  { sno: 8, name: 'CHOLESTEROL', fee: 400 },
  { sno: 9, name: 'CREATININE', fee: 350 },
  { sno: 10, name: 'DENGUE NS1', fee: 700 },
  { sno: 11, name: 'ESR', fee: 200 },
  { sno: 12, name: 'H. PYLORI (BLOOD)', fee: 500 },
  { sno: 13, name: 'H. PYLORI (STOOL)', fee: 500 },
  { sno: 14, name: 'HbA1C', fee: 1200 },
  { sno: 15, name: 'HBS (ICT)', fee: 250 },
  { sno: 16, name: 'HCV (ICT)', fee: 250 },
  { sno: 17, name: 'HIV (ICT)', fee: 300 },
  { sno: 18, name: 'LFTs', fee: 1000 },
  { sno: 19, name: 'LIPID PROFILE', fee: 1400 },
  { sno: 20, name: 'M. ALBUMIN', fee: 700 },
  { sno: 21, name: 'MP', fee: 400 },
  { sno: 22, name: 'OGTT', fee: 700 },
  { sno: 23, name: 'PERIPHERAL SMEAR', fee: 800 },
  { sno: 24, name: 'PREGNANCY TEST (ICT)', fee: 250 },
  { sno: 25, name: 'PT/INR', fee: 550 },
  { sno: 26, name: 'RFTs', fee: 700 },
  { sno: 27, name: 'SGPT', fee: 350 },
  { sno: 28, name: 'SUGAR (FBS/RBS)', fee: 150 },
  { sno: 29, name: 'TGs', fee: 450 },
  { sno: 30, name: 'UREA', fee: 350 },
  { sno: 31, name: 'URIC ACID', fee: 350 },
  { sno: 32, name: 'URINE R/E', fee: 200 },
]

export function LabTests() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTests = labTests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section ref={ref} id="lab-fees" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Laboratory Services
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Laboratory Test Fees
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            AIMS Sugar General Hospital and Research Center - Comprehensive diagnostic services at affordable rates
          </p>

          {/* Search Bar */}
          <div className={`max-w-md mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Search for a test..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#E2E2E2] focus:border-[#5F9ED1] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Tests Table */}
        <div className={`max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#3F4A7A] to-[#5F9ED1] text-white">
                  <th className="py-4 px-6 text-left font-semibold">S.NO</th>
                  <th className="py-4 px-6 text-left font-semibold">Test Name</th>
                  <th className="py-4 px-6 text-right font-semibold">Fee (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {filteredTests.length > 0 ? (
                  filteredTests.map((test, index) => (
                    <tr
                      key={test.sno}
                      className={`border-b border-[#E2E2E2] hover:bg-[#F4F6F8] transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'
                      }`}
                    >
                      <td className="py-4 px-6 text-[#8A8A8A] font-medium">{test.sno}</td>
                      <td className="py-4 px-6 text-[#3F4A7A] font-medium">{test.name}</td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-block px-4 py-1 bg-[#5F9ED1]/10 text-[#5F9ED1] rounded-full font-semibold">
                          Rs. {test.fee.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-[#8A8A8A]">
                      <FlaskConical className="w-12 h-12 mx-auto mb-3 opacity-30" />
                      <p>No tests found matching "{searchTerm}"</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Info */}
        <div className={`mt-12 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white text-center">
            <FlaskConical className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Need to Book a Lab Test?</h3>
            <p className="text-white/90 mb-6">
              Contact us to schedule your lab tests or inquire about any specific requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:03011155713"
                className="inline-flex items-center gap-2 bg-white text-[#5F9ED1] font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
              >
                Call 0301-1155713
              </a>
              <a
                href="https://wa.me/923011155713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className={`mt-8 max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#FFF9E6] border border-[#FFE066] rounded-xl p-6 text-center">
            <p className="text-[#8A8A8A] text-sm">
              <strong className="text-[#3F4A7A]">Note:</strong> Fees are subject to change. Please contact us for the most current pricing and package deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
