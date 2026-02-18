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
      { name: 'General OPD Consultation', specialty: 'General Medical Consultation', fee: 'Rs. 100' },
    ],
  },
  {
    category: 'Specialist OPD',
    icon: Heart,
    color: 'bg-[#A34C55]',
    doctors: [
      { name: 'Prof. Dr. Rooh ul Muqim', specialty: 'General Surgeon', fee: 'Rs. 1200' },
      { name: 'Dr. Ghulam Farooq', specialty: 'Diabetes, Endocrine', fee: 'Rs. 1500' },
      { name: 'Dr. Muhammad Jawad', specialty: 'Medical & Diabetes Specialist', fee: 'Rs. 1500' },
      { name: 'Dr. Abdul Jalil', specialty: 'Diabetes', fee: 'Rs. 1500' },
      { name: 'Dr. Shazia Naz', specialty: 'Dermatologist Specialist', fee: 'Rs. 1000' },
      { name: 'Dr. Talat Naz', specialty: 'Consultant Gynaecologist', fee: 'Rs. 1200' },
    ],
  },
  {
    category: 'Eye Care',
    icon: Eye,
    color: 'bg-[#3F4A7A]',
    doctors: [
      { name: 'Pro. Dr. Lal Muhammad Khattak', specialty: 'Consultant Eye Surgeon', fee: 'Rs. 1500' },
      { name: 'Dr. Sadiya Hassan', specialty: 'Eye Physician / Vision Specialist', fee: 'Rs. 500' },
      { name: 'Mr. Amir Sohail', specialty: 'Optometrist', fee: 'Rs. 500' },
    ],
  },
  {
    category: 'Foot Care',
    icon: Activity,
    color: 'bg-[#5F9ED1]',
    doctors: [
      { name: 'Hygiene Counseling', specialty: 'Free for OPD Patients', fee: 'Free' },
      { name: 'Foot Procedures', specialty: 'Diabetic Foot Care', fee: 'Rs. 500' },
      { name: 'DPM. Habib', specialty: 'Podiatrist - Footcare', fee: 'Rs. 800' },
    ],
  },

  {
    category: 'Dental',
    icon: Smile,
    color: 'bg-[#3F4A7A]',
    doctors: [
      { name: 'Dr. Faisal Hayat', specialty: 'Dental Consultation', fee: 'Rs. 500' },
      { name: 'Dr. Ayesha Khan', specialty: 'Dental Consultation', fee: 'Rs. 500' },
      { name: 'Dr. Hira Khan', specialty: 'Dental Consultation', fee: 'Rs. 500' },
    ],
  },
]

const dentalProcedures = [
  'Dental Implant',
  'Alvoplasty',
  'Amalgam Complex Filling',
  'Amalgam Simple Filling',
  'Bite Block 1 Arch',
  'Bite Block 2 Arch',
  'Bleaching 16 prc (Teeth Whitening)',
  'Bleaching 36 prc (Teeth Whitening)',
  'C/C Plate 1 Arch',
  'C/C Plate 2 Arch',
  'Composite Complex Filling',
  'Composite Simple Filling',
  'Corn Removal',
  'Crown Cementation per tooth',
  'PFM Crown',
  'Crown Designed',
  'Crown Lengthening (Surgical)',
  'Zirconia Crown',
  'Complete Denture Adjustment (both)',
  'Extraction Simple/BDR',
  'Extraction BDR Complex',
  'Extraction of impacted tooth',
  'Extraction Surgical',
  'Filling (GIC/amalgam)',
  'Fissure Sealant',
  'Flexible Denture (Complete Arch)',
  'Flexible Denture Complex',
  'Flexible Denture (Per Unit)',
  'Full Denture Advance (1 Arch)',
  'Full Denture both arches',
  'Full Porceline per tooth',
  'GIC Filling',
  'Growth Modifications',
  'High/Sharp Spot/Tooth',
  'Examination kit',
  'Invisible Braces (Clear Path)',
  'Localized Dressing',
  'Loose Bracket per piece',
  'Lower Denture',
  'Metal Crown 1 Unit',
  'Mono Plast Denture (1 Arch)',
  'Night Guard',
  'Ortho Kit (American)',
  'Ortho Kit (Chinese)',
  'Orthodontics (Complex)',
  'Orthodontics (Simple)',
  'Orthodontics Appointment (Complex)',
  'Orthodontics Appointment (Simple)',
  'Partial Denture',
  'Polishing',
  'Post & Core Build up',
  'Pulpotomy',
  'RCT Interior',
  'RCT Posterior',
  'Re-RCT',
  'Retainer',
  'Retainer (Single Arch)',
  'Scaler Tip Disposable',
  'Scaling/Polishing Deep',
  'Scaling/Polishing Simple',
  'Teeth Whitening',
  'Temporary Filling',
  'Temporary Crown 1 Unit',
  'Tooth Extraction Complex',
  'Tooth Extraction Simple',
  'X-Ray',
  'Simple extraction',
]

const additionalServices = [
  { name: 'ECG', fee: 'Rs. 400' },
  { name: 'General OPD', fee: 'Rs. 100' },
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
            className={`bg-linear-to-br from-[#3F4A7A] to-[#5F9ED1] rounded-2xl p-8 text-white transition-all duration-700 delay-900 ${
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dentalProcedures.map((procedure, index) => (
                  <div key={index} className="bg-[#F4F6F8] rounded-lg p-3 hover:bg-white transition-colors">
                    <p className="text-[#3F4A7A] font-medium text-sm">{procedure}</p>
                  </div>
                ))}
              </div>
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
