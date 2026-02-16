"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  Activity,
  Scale,
  Heart,
  Smile,
  Eye,
  Footprints,
  FlaskConical,
  Stethoscope,
  Pill,
  Apple,
  CheckCircle,
  ClipboardList,
  Users,
  TrendingUp,
  Tent,
  UserCheck,
  Share2,
  type LucideIcon,
} from 'lucide-react'

// TypeScript Interfaces
interface Service {
  icon: LucideIcon
  title: string
  description?: string
}

interface CampStation {
  number: number
  title: string
  description: string
  responsible: string
  icon: LucideIcon
}

interface Statistic {
  value: string
  label: string
  icon: LucideIcon
}

interface TeamMember {
  role: string
  icon: LucideIcon
}

// Static Data Structures
const services: Service[] = [
  {
    icon: Activity,
    title: 'Random Blood Sugar Test',
  },
  {
    icon: Scale,
    title: 'Height, Weight & BMI Check',
  },
  {
    icon: Heart,
    title: 'Blood Pressure Check',
  },
  {
    icon: Smile,
    title: 'Dental Screening',
  },
  {
    icon: Eye,
    title: 'Eye Screening',
  },
  {
    icon: Footprints,
    title: 'Diabetic Foot & Wound Screening',
  },
  {
    icon: FlaskConical,
    title: 'HbA1c Test',
  },
  {
    icon: Stethoscope,
    title: "Doctor's Consultation",
  },
  {
    icon: Pill,
    title: 'Medicines',
    description: 'Anti-diabetic, Antihypertensive, Painkillers, Insulin',
  },
]

const campStations: CampStation[] = [
  {
    number: 1,
    title: 'Registration',
    description: 'Patient details collection',
    responsible: 'Registration Officer',
    icon: ClipboardList,
  },
  {
    number: 2,
    title: 'Random Blood Sugar Test',
    description: 'Glucometer testing',
    responsible: 'Nurse',
    icon: Activity,
  },
  {
    number: 3,
    title: 'Height, Weight & BMI Check',
    description: 'Measurements and calculations',
    responsible: 'Health Technician',
    icon: Scale,
  },
  {
    number: 4,
    title: 'Blood Pressure Check',
    description: 'Blood pressure measurement',
    responsible: 'Health Technician',
    icon: Heart,
  },
  {
    number: 5,
    title: 'Eye Screening',
    description: 'Diabetes-related eye issues assessment',
    responsible: 'Ophthalmologist',
    icon: Eye,
  },
  {
    number: 6,
    title: 'Dental Screening',
    description: 'Oral health assessment',
    responsible: 'Dentist',
    icon: Smile,
  },
  {
    number: 7,
    title: 'Diabetic Foot & Wound Screening',
    description: 'Foot care and wound assessment',
    responsible: 'Foot Care Specialist',
    icon: Footprints,
  },
  {
    number: 8,
    title: 'HbA1c Test',
    description: 'Long-term glucose control measurement',
    responsible: 'Lab Technician',
    icon: FlaskConical,
  },
  {
    number: 9,
    title: "Doctor's Consultation",
    description: 'Diagnosis and prescriptions',
    responsible: 'Medical Officer',
    icon: Stethoscope,
  },
  {
    number: 10,
    title: 'Nutritional Advice',
    description: 'Tailored dietary guidance',
    responsible: 'Nutritionist',
    icon: Apple,
  },
  {
    number: 11,
    title: 'Monitoring & Evaluation',
    description: 'Completion verification and feedback collection',
    responsible: 'MEAL Officer',
    icon: CheckCircle,
  },
  {
    number: 12,
    title: 'Pharmacy',
    description: 'Medication dispensing with instructions',
    responsible: 'Pharmacist',
    icon: Pill,
  },
]

const impactStats: Statistic[] = [
  {
    value: '250+',
    label: 'Full-scale camps conducted',
    icon: Tent,
  },
  {
    value: '21,250+',
    label: 'Individuals screened and treated',
    icon: Users,
  },
  {
    value: '64.07%',
    label: 'Female participants',
    icon: UserCheck,
  },
  {
    value: '34%',
    label: 'Improvement in glycemic levels',
    icon: TrendingUp,
  },
]

const diabetesStats = {
  pakistanTotal: '33 million',
  kpkPrevalence: '16-18%',
  type2Percentage: '64%',
  type1Percentage: '8%',
  nonDiabeticPercentage: '28%',
}

const teamMembers: TeamMember[] = [
  { role: 'Registration Officer', icon: ClipboardList },
  { role: 'Nurse', icon: Heart },
  { role: 'Lab Technician & Assistants', icon: FlaskConical },
  { role: 'Health Technicians', icon: Activity },
  { role: 'Dentist', icon: Smile },
  { role: 'Ophthalmologist', icon: Eye },
  { role: 'Footcare Specialist', icon: Footprints },
  { role: 'Medical Officer', icon: Stethoscope },
  { role: 'Nutritionist', icon: Apple },
  { role: 'MEAL Officer', icon: CheckCircle },
  { role: 'Pharmacist', icon: Pill },
  { role: 'Social Media Officer', icon: Share2 },
]

export function DiabetesCamps() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="diabetes-camps" className="scroll-mt-24">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#3F4A7A] to-[#5F9ED1] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              AIMS Diabetes Camps – Bringing Care to Your Community
            </h2>
            
            {/* Description */}
            <p 
              className={`text-lg md:text-xl text-white/90 leading-relaxed mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              We bring comprehensive diabetes care to communities with scarce access to healthcare services, 
              reaching those who need it most – financially constrained individuals who cannot afford regular medical care.
            </p>
            
            {/* Focus Areas */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Financially Constrained Communities</h3>
                <p className="text-white/80 text-sm">
                  Providing free care to those who cannot afford diabetes treatment
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Minority Communities</h3>
                <p className="text-white/80 text-sm">
                  Ensuring equitable access to healthcare for underserved populations
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Disaster-Affected Areas</h3>
                <p className="text-white/80 text-sm">
                  Supporting communities recovering from natural disasters and emergencies
                </p>
              </div>
            </div>
            
            {/* Commitment Statement */}
            <p 
              className={`text-xl md:text-2xl font-semibold text-white transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Our commitment: 10-12 consecutive camps per community to ensure sustained care and lasting impact
            </p>
          </div>
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Comprehensive Care
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Services Offered
            </h2>
            <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our diabetes camps provide a complete range of medical services, all free of charge for participants.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.title}
                  className={`bg-white rounded-xl p-6 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 group ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#5F9ED1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#5F9ED1] transition-colors">
                    <IconComponent 
                      className="w-6 h-6 text-[#5F9ED1] group-hover:text-white transition-colors" 
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-[#8A8A8A] text-sm">
                      {service.description}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Camp Workflow Section */}
      <div className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our Process
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              How Our Camps Work
            </h2>
            <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Experience a seamless journey through our 12-station process, designed to provide comprehensive diabetes care.
            </p>
          </div>

          {/* Workflow Grid - Vertical on mobile, Grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campStations.map((station, index) => {
              const IconComponent = station.icon
              return (
                <div
                  key={station.number}
                  className={`relative bg-white rounded-xl p-6 border-2 border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-xl transition-all duration-500 group ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  {/* Station Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {station.number}
                    </span>
                  </div>

                  {/* Sequential Flow Connector - Only show on desktop for non-last items in row */}
                  {index < campStations.length - 1 && (index + 1) % 3 !== 0 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-[#5F9ED1]/30" />
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#5F9ED1]/30" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#5F9ED1]/10 rounded-xl flex items-center justify-center mb-4 ml-8 group-hover:bg-[#5F9ED1] transition-colors">
                    <IconComponent 
                      className="w-7 h-7 text-[#5F9ED1] group-hover:text-white transition-colors" 
                      aria-label={`${station.title} icon`}
                    />
                  </div>

                  {/* Station Title */}
                  <h3 className="text-xl font-bold text-[#3F4A7A] mb-2 group-hover:text-[#5F9ED1] transition-colors">
                    {station.title}
                  </h3>

                  {/* Station Description */}
                  <p className="text-[#8A8A8A] text-sm mb-4 leading-relaxed">
                    {station.description}
                  </p>

                  {/* Responsible Professional */}
                  <div className="flex items-center pt-4 border-t border-[#E2E2E2]">
                    <div className="w-2 h-2 bg-[#5F9ED1] rounded-full mr-2" />
                    <span className="text-xs font-medium text-[#5F9ED1] uppercase tracking-wide">
                      {station.responsible}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Additional sections will be added in subsequent tasks */}
    </section>
  )
}
