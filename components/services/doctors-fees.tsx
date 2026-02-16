"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Stethoscope, Eye, Heart, Activity, Globe, Smile } from 'lucide-react'

const doctorCategories = [
  {
    category: 'General OPD',
    icon: Stethoscope,
    color: 'bg-[#5F9ED1]',
    doctors: [
      { name: 'Dr. Muhammad Jawad', specialty: 'Diabetes', fee: 'Rs. 100' },
      { name: 'Dr. Abdul Jalil Khan', specialty: 'Diabetes', fee: 'Rs. 100' },
    ],
  },
  {
    category: 'Specialist OPD',
    icon: Heart,
    color: 'bg-[#A34C55]',
    doctors: [
      { name: 'Dr. Ahmad Zuhayr Mufti', specialty: 'Diabetes', fee: 'Rs. 1500' },
      { name: 'Dr. Muhammad Jawad', specialty: 'Medical & Diabetes Specialist', fee: 'Rs. 1500' },
      { name: 'Dr. Abdul Jalil', specialty: 'Diabetes', fee: 'Rs. 1500' },
      { name: 'Dr. Shazia', specialty: 'Dermatologist Specialist', fee: 'Rs. 1000' },
      { name: 'Dr. Shaima', specialty: 'Consultant Gynaecologist', fee: 'Rs. 1500' },
    ],
  },
  {
    category: 'Eye Care',
    icon: Eye,
    color: 'bg-[#3F4A7A]',
    doctors: [
      { name: 'Pro. Dr. Lal Muhammad Khattak', specialty: 'Consultant Eye Surgeon', fee: 'Rs. 1500' },
      { name: 'Dr. Amir', specialty: 'Eye Physician / Vision Specialist', fee: 'Rs. 1000' },
    ],
  },
  {
    category: 'Foot Care',
    icon: Activity,
    color: 'bg-[#5F9ED1]',
    doctors: [
      { name: 'Hygiene Counseling', specialty: 'Free for OPD Patients', fee: 'Free' },
      { name: 'Foot Procedures', specialty: 'Diabetic Foot Care', fee: 'Rs. 300' },
    ],
  },
  {
    category: 'Tele Medicine',
    icon: Globe,
    color: 'bg-[#A34C55]',
    doctors: [
      { name: 'Dr. Shahzeb (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1500' },
      { name: 'Dr. Inam Ullah (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Nizam (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Masood (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Tamar Saeed (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Imran Abbasi (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Tufail Ijaz (USA)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Jawad Bashir (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
      { name: 'Dr. Jawad Babar (UK)', specialty: 'Telemedicine Consultation', fee: 'Rs. 1000' },
    ],
  },
  {
    category: 'Dental',
    icon: Smile,
    color: 'bg-[#3F4A7A]',
    doctors: [
      { name: 'Dr. Faisal', specialty: 'Dental Consultation', fee: 'Rs. 500' },
      { name: 'Dr. Zubaira', specialty: 'Dental Consultation', fee: 'Rs. 100' },
    ],
  },
]

const dentalProcedures = [
  { name: 'Dental Implant', fee: 'Rs. 60,000' },
  { name: 'Alvoplasty', fee: 'Rs. 2,000' },
  { name: 'Amalgam Complex Filling', fee: 'Rs. 2,000' },
  { name: 'Amalgam Simple Filling', fee: 'Rs. 800' },
  { name: 'Bite Block 1 Arch', fee: 'Rs. 3,000' },
  { name: 'Bite Block 2 Arch', fee: 'Rs. 26,000' },
  { name: 'Bleaching 16 prc (Teeth Whitening)', fee: 'Rs. 15,000' },
  { name: 'Bleaching 36 prc (Teeth Whitening)', fee: 'Rs. 25,000' },
  { name: 'C/C Plate 1 Arch', fee: 'Rs. 1,000' },
  { name: 'C/C Plate 2 Arch', fee: 'Rs. 20,000' },
  { name: 'Composite Complex Filling', fee: 'Rs. 5,000' },
  { name: 'Composite Simple Filling', fee: 'Rs. 4,000' },
  { name: 'Corn Removal', fee: 'Rs. 800' },
  { name: 'Crown Cementation per tooth', fee: 'Rs. 500' },
  { name: 'PFM Crown', fee: 'Rs. 5,000' },
  { name: 'Crown Designed', fee: 'Rs. 5,500' },
  { name: 'Crown Lengthening (Surgical)', fee: 'Rs. 3,000' },
  { name: 'Zirconia Crown', fee: 'Rs. 20,000' },
  { name: 'Complete Denture Adjustment (both)', fee: 'Rs. 40,000' },
  { name: 'Extraction Simple/BDR', fee: 'Rs. 1,000' },
  { name: 'Extraction BDR Complex', fee: 'Rs. 2,000' },
  { name: 'Extraction of impacted tooth', fee: 'Rs. 6,000' },
  { name: 'Extraction Surgical', fee: 'Rs. 3,000' },
  { name: 'Filling (GIC/amalgam)', fee: 'Rs. 1,500' },
  { name: 'Fissure Sealant', fee: 'Rs. 1,500' },
  { name: 'Flexible Denture (Complete Arch)', fee: 'Rs. 25,000' },
  { name: 'Flexible Denture Complex', fee: 'Rs. 18,000' },
  { name: 'Flexible Denture (Per Unit)', fee: 'Rs. 2,000' },
  { name: 'Full Denture Advance (1 Arch)', fee: 'Rs. 28,000' },
  { name: 'Full Denture both arches', fee: 'Rs. 50,000' },
  { name: 'Full Porceline per tooth', fee: 'Rs. 7,000' },
  { name: 'GIC Filling', fee: 'Rs. 4,000' },
  { name: 'Growth Modifications', fee: 'Rs. 30,000' },
  { name: 'High/Sharp Spot/Tooth', fee: 'Rs. 500' },
  { name: 'Examination kit', fee: 'Rs. 500' },
  { name: 'Invisible Braces (Clear Path)', fee: 'Rs. 150,000' },
  { name: 'Localized Dressing', fee: 'Rs. 1,500' },
  { name: 'Loose Bracket per piece', fee: 'Rs. 800' },
  { name: 'Lower Denture', fee: 'Rs. 10,000' },
  { name: 'Metal Crown 1 Unit', fee: 'Rs. 3,000' },
  { name: 'Mono Plast Denture (1 Arch)', fee: 'Rs. 20,000' },
  { name: 'Night Guard', fee: 'Rs. 3,000' },
  { name: 'Ortho Kit (American)', fee: 'Rs. 3,000' },
  { name: 'Ortho Kit (Chinese)', fee: 'Rs. 1,500' },
  { name: 'Orthodontics (Complex)', fee: 'Rs. 75,000' },
  { name: 'Orthodontics (Simple)', fee: 'Rs. 50,000' },
  { name: 'Orthodontics Appointment (Complex)', fee: 'Rs. 2,000' },
  { name: 'Orthodontics Appointment (Simple)', fee: 'Rs. 1,500' },
  { name: 'Partial Denture', fee: 'Rs. 1,000' },
  { name: 'Polishing', fee: 'Rs. 2,000' },
  { name: 'Post & Core Build up', fee: 'Rs. 2,500' },
  { name: 'Pulpotomy', fee: 'Rs. 2,000' },
  { name: 'RCT Interior', fee: 'Rs. 5,000' },
  { name: 'RCT Posterior', fee: 'Rs. 6,000' },
  { name: 'Re-RCT', fee: 'Rs. 8,000' },
  { name: 'Retainer', fee: 'Rs. 10,000' },
  { name: 'Retainer (Single Arch)', fee: 'Rs. 5,000' },
  { name: 'Scaler Tip Disposable', fee: 'Rs. 500' },
  { name: 'Scaling/Polishing Deep', fee: 'Rs. 5,000' },
  { name: 'Scaling/Polishing Simple', fee: 'Rs. 3,000' },
  { name: 'Teeth Whitening', fee: 'Rs. 4,000' },
  { name: 'Temporary Filling', fee: 'Rs. 500' },
  { name: 'Temporary Crown 1 Unit', fee: 'Rs. 800' },
  { name: 'Tooth Extraction Complex', fee: 'Rs. 1,000' },
  { name: 'Tooth Extraction Simple', fee: 'Rs. 600' },
  { name: 'X-Ray', fee: 'Rs. 300' },
  { name: 'Simple extraction', fee: 'Rs. 4,000' },
]

const additionalServices = [
  { name: 'ECG', fee: 'Rs. 200' },
]

export function DoctorsFees() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Medical Services
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Doctors & Consultation Fees
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our experienced team of specialists is here to provide quality healthcare services at affordable rates
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {doctorCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`bg-[#F4F6F8] rounded-2xl p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(catIndex + 3) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3F4A7A]">{category.category}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#E2E2E2]">
                      <th className="text-left py-3 px-4 text-[#3F4A7A] font-semibold">Doctor Name</th>
                      <th className="text-left py-3 px-4 text-[#3F4A7A] font-semibold">Specialty</th>
                      <th className="text-right py-3 px-4 text-[#3F4A7A] font-semibold">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.doctors.map((doctor, index) => (
                      <tr key={index} className="border-b border-[#E2E2E2] hover:bg-white transition-colors">
                        <td className="py-4 px-4 text-[#3F4A7A] font-medium">{doctor.name}</td>
                        <td className="py-4 px-4 text-[#8A8A8A]">{doctor.specialty}</td>
                        <td className="py-4 px-4 text-right">
                          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                            doctor.fee === 'Free' ? 'bg-green-100 text-green-700' : 'bg-[#5F9ED1]/10 text-[#5F9ED1]'
                          }`}>
                            {doctor.fee}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Additional Services */}
          <div
            className={`bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex justify-between items-center">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-xl font-bold">{service.fee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dental Procedures */}
          <div
            className={`bg-white rounded-2xl p-8 border-2 border-[#3F4A7A] transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#3F4A7A] rounded-xl flex items-center justify-center shadow-md">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3F4A7A]">Dental Procedures</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#E2E2E2]">
                    <th className="text-left py-3 px-4 text-[#3F4A7A] font-semibold">Procedure Name</th>
                    <th className="text-right py-3 px-4 text-[#3F4A7A] font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {dentalProcedures.map((procedure, index) => (
                    <tr key={index} className="border-b border-[#E2E2E2] hover:bg-[#F4F6F8] transition-colors">
                      <td className="py-3 px-4 text-[#3F4A7A] font-medium">{procedure.name}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#3F4A7A]/10 text-[#3F4A7A]">
                          {procedure.fee}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#8A8A8A] mb-4">To book an appointment, please contact us</p>
          <a
            href="tel:03011155713"
            className="inline-flex items-center gap-2 bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white font-semibold py-3 px-8 rounded-xl transition-all hover:scale-105"
          >
            <Stethoscope className="w-5 h-5" />
            Call 0301-1155713
          </a>
        </div>
      </div>
    </section>
  )
}
