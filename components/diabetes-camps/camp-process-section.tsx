"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { 
  ClipboardList, 
  Droplet, 
  Scale, 
  HeartPulse, 
  Eye, 
  Smile,
  Footprints,
  FlaskConical,
  Stethoscope,
  Apple,
  ClipboardCheck,
  Pill
} from 'lucide-react'

const stations = [
  {
    number: 1,
    icon: ClipboardList,
    title: 'Registration',
    description: 'Patients register with our Registration Officer, providing essential details including name, age, gender, contact information, and CNIC details.',
  },
  {
    number: 2,
    icon: Droplet,
    title: 'Random Blood Sugar Test',
    description: 'Blood sugar levels are measured using a glucometer by a Nurse.',
  },
  {
    number: 3,
    icon: Scale,
    title: 'Height/Weight & BMI Check',
    description: "Patients' height and weight are measured, and BMI is calculated according to age and gender.",
  },
  {
    number: 4,
    icon: HeartPulse,
    title: 'Blood Pressure Check',
    description: 'Blood pressure is measured by a Health Technician.',
  },
  {
    number: 5,
    icon: Eye,
    title: 'Eye Screening',
    description: 'Eyes are examined by an Ophthalmologist to detect diabetes-related eye issues.',
  },
  {
    number: 6,
    icon: Smile,
    title: 'Dental Screening',
    description: 'Oral health is assessed by a Dentist.',
  },
  {
    number: 7,
    icon: Footprints,
    title: 'Diabetic Foot & Wound Screening',
    description: 'Feet are examined by a Foot Care Specialist to screen for complications.',
  },
  {
    number: 8,
    icon: FlaskConical,
    title: 'HbA1c Test',
    description: 'Blood is tested to assess long-term glucose control by a Lab Technician.',
  },
  {
    number: 9,
    icon: Stethoscope,
    title: "Doctor's Consultation",
    description: 'Patients meet with a Medical Officer to receive a diagnosis and prescribed medications.',
  },
  {
    number: 10,
    icon: Apple,
    title: 'Nutritional Advice',
    description: 'Tailored dietary guidance is provided by our Nutritionist based on individual conditions and medications.',
  },
  {
    number: 11,
    icon: ClipboardCheck,
    title: 'Monitoring & Evaluation',
    description: 'The MEAL Officer ensures every patient has gone through all stations and collects feedback on services and staff.',
  },
  {
    number: 12,
    icon: Pill,
    title: 'Pharmacy',
    description: 'Prescribed medications are dispensed by our Pharmacist, with detailed instructions on dosage and intake.',
  },
]

export function CampProcessSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Process
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How Our Camps Work
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Each patient goes through a systematic 12-station process ensuring comprehensive care and attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station, index) => (
            <div
              key={station.number}
              className={`bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center shadow-md">
                    <station.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-[#5F9ED1]/10 rounded-full text-[#5F9ED1] font-bold text-sm">
                      {station.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2">
                    {station.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">
                    {station.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
