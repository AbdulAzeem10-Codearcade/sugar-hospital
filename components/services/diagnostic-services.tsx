"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { 
  FlaskConical, 
  Microscope, 
  Activity, 
  Scan,
  Droplet,
  Heart,
  Zap,
  TestTube
} from 'lucide-react'

const diagnostics = [
  {
    icon: FlaskConical,
    title: 'Laboratory Services',
    tests: ['Complete Blood Count', 'Lipid Profile', 'Liver Function Tests', 'Kidney Function Tests'],
  },
  {
    icon: Droplet,
    title: 'Diabetes Testing',
    tests: ['HbA1c', 'Fasting Blood Sugar', 'Random Blood Sugar', 'Glucose Tolerance Test'],
  },
  {
    icon: Microscope,
    title: 'Pathology',
    tests: ['Histopathology', 'Cytology', 'Microbiology', 'Serology'],
  },
  {
    icon: Scan,
    title: 'Imaging Services',
    tests: ['X-Ray', 'Ultrasound', 'CT Scan', 'MRI'],
  },
  {
    icon: Activity,
    title: 'Cardiac Diagnostics',
    tests: ['ECG', 'Echocardiography', 'Stress Test', 'Holter Monitoring'],
  },
  {
    icon: Heart,
    title: 'Vascular Studies',
    tests: ['Doppler Ultrasound', 'Ankle-Brachial Index', 'Venous Studies'],
  },
  {
    icon: Zap,
    title: 'Neurophysiology',
    tests: ['EEG', 'EMG', 'Nerve Conduction Studies'],
  },
  {
    icon: TestTube,
    title: 'Specialized Tests',
    tests: ['Thyroid Function', 'Hormone Assays', 'Tumor Markers', 'Allergy Testing'],
  },
]

export function DiagnosticServices() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="diagnostic" className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Advanced Diagnostics
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Diagnostic Services
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            State-of-the-art diagnostic facilities with accurate and timely results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diagnostics.map((diagnostic, index) => (
            <div
              key={diagnostic.title}
              className={`bg-white rounded-xl p-6 hover:shadow-lg border border-[#E2E2E2] hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                <diagnostic.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-3">{diagnostic.title}</h3>
              <ul className="space-y-2">
                {diagnostic.tests.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#8A8A8A]">
                    <span className="w-1.5 h-1.5 bg-[#5F9ED1] rounded-full mt-1.5 shrink-0" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl p-8 border border-[#5F9ED1]/20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#3F4A7A] text-lg">
            <span className="font-semibold">100+ diagnostic tests</span> available with quick turnaround times and accurate results
          </p>
        </div>
      </div>
    </section>
  )
}
