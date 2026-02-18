"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Building2, Heart, Smartphone, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const suggestedDonations = [
  { item: 'Insulin', description: 'One Patient / Month', amount: 'Rs 1,500' },
  { item: 'Glucometer', description: 'One Patient / Month', amount: 'Rs 3,500' },
  { item: 'Blood Sugar Test', description: '50 Patients / Month', amount: 'Rs 2,500' },
  { item: 'Eye Care', description: 'One Patient / Month', amount: 'Rs 3,000' },
  { item: 'Foot Care', description: 'One Patient / Month', amount: 'Rs 1,500' },
  { item: 'Dental Care', description: 'One Child / Month', amount: 'Rs 3,000' },
  { item: 'Children with Diabetes', description: 'One Adult / Month', amount: 'Rs 3,000' },
  { item: 'AIMS Zakat', description: 'One Camp', amount: 'Rs 200,000 (2 Lac PKR)' },
]

const donationAccounts = [
  {
    type: 'Sadqa / Donation',
    icon: Heart,
    color: 'bg-[#A34C55]',
    details: {
      bank: 'National Bank of Pakistan',
      title: 'Aims Pakistan District Community Program',
      iban: 'PK90NBPA1759003156265090',
    },
  },
  {
    type: 'Zakat',
    icon: Building2,
    color: 'bg-[#5F9ED1]',
    details: {
      bank: 'National Bank of Pakistan',
      title: 'Aims Pakistan Zakat Fund',
      iban: 'PK12NBPA1759004156396537',
    },
  },
]

const easyPaisaDetails = {
  name: 'Muhammad Akhtar',
  number: '03337217400',
}

export function DonationDetails() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section ref={ref} id="donation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className={`inline-block text-[#A34C55] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Banking Details
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Donation & Zakat Accounts
          </h2>
          <p className={`text-[#8A8A8A] text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your contributions help us provide quality diabetes care to those in need. Choose your preferred method below.
          </p>
        </div>

        {/* Quranic Verse */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-4 italic">
              "Certainly, those who give charity, men and women, and lend to Allah an excellent loan, it shall be increased manifold and theirs shall be an honourable reward."
            </p>
            <p className="text-white/80 text-sm font-semibold">
              Surah Al-Hadid, Ayat 18
            </p>
          </div>
        </div>

        {/* Suggested Donation Amounts Table */}
        <div className={`max-w-5xl mx-auto mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-[#3F4A7A] mb-6 text-center">Suggested Donation Amounts</h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#E2E2E2]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#3F4A7A] to-[#5F9ED1] text-white">
                    <th className="py-4 px-6 text-left font-semibold">Item</th>
                    <th className="py-4 px-6 text-left font-semibold">Description</th>
                    <th className="py-4 px-6 text-right font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestedDonations.map((donation, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-[#E2E2E2] hover:bg-[#F4F6F8] transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'
                      }`}
                    >
                      <td className="py-4 px-6 text-[#3F4A7A] font-semibold">{donation.item}</td>
                      <td className="py-4 px-6 text-[#8A8A8A]">{donation.description}</td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-block px-4 py-1 bg-[#A34C55]/10 text-[#A34C55] rounded-full font-bold">
                          {donation.amount}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-[#8A8A8A] text-sm mt-4">
            Choose any amount above or donate what you can afford. Every contribution makes a difference.
          </p>
        </div>

        {/* Bank Accounts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {donationAccounts.map((account, index) => (
            <div
              key={account.type}
              className={`bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-xl border-2 border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-16 h-16 ${account.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <account.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#3F4A7A] mb-6">{account.type}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#8A8A8A] mb-1">Bank Name</p>
                  <p className="text-base font-semibold text-[#3F4A7A]">{account.details.bank}</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#8A8A8A] mb-1">Account Title</p>
                  <p className="text-base font-semibold text-[#3F4A7A]">{account.details.title}</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#8A8A8A] mb-2">IBAN Number</p>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E2E2E2]">
                    <p className="text-base font-mono font-bold text-[#3F4A7A] flex-1">
                      {account.details.iban}
                    </p>
                    <button
                      onClick={() => copyToClipboard(account.details.iban, `iban-${index}`)}
                      className="p-2 hover:bg-[#F4F6F8] rounded-lg transition-colors"
                      aria-label="Copy IBAN"
                    >
                      {copiedField === `iban-${index}` ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-[#8A8A8A]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EasyPaisa */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">EasyPaisa</h3>
                <p className="text-white/80">Quick & Easy Mobile Payment</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/70 mb-1">Account Name</p>
                <p className="text-xl font-semibold">{easyPaisaDetails.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-white/70 mb-2">Mobile Number</p>
                <div className="flex items-center gap-2 bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-2xl font-mono font-bold flex-1">
                    {easyPaisaDetails.number}
                  </p>
                  <button
                    onClick={() => copyToClipboard(easyPaisaDetails.number, 'easypaisa')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Copy number"
                  >
                    {copiedField === 'easypaisa' ? (
                      <Check className="w-5 h-5 text-green-300" />
                    ) : (
                      <Copy className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className={`mt-12 text-center max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#FFF9E6] border border-[#FFE066] rounded-xl p-6">
            <p className="text-[#8A8A8A] text-sm leading-relaxed">
              <strong className="text-[#3F4A7A]">Note:</strong> After making your donation, please send us a screenshot 
              or transaction details via WhatsApp at <strong className="text-[#3F4A7A]">0301-1155713</strong> or 
              email at <a href="mailto:admin@sugarhospital.com" className="text-[#5F9ED1] font-bold hover:underline">admin@sugarhospital.com</a> for acknowledgment and receipt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
