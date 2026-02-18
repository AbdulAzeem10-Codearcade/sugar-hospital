"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Non-Communicable disease burden is an ever growing challenge for Pakistan. I was pleased to visit AIMS and Diabetes Association KP. We will be happy to help coordinate efforts in improving care for our patients. Good to see focus on dignity of patients.",
    author: "Dr. Abdul Bari",
    position: "Consultant - Cardio-thoracic Surgeon. CEO Indus Hospital, Karachi",
  },
  {
    quote: "AIMS Diabetes Circle of Care seems a very efficient and cost effective model of screening and treatment of diabetes complications under one roof. If successfully replicated in the community as is the plan, this will help reduce the burden on our out-patients departments at tertiary care level. Indeed I need to play my role in the community as well and contribute in the Diabetes Association of KP.",
    author: "Dr. Khalid Usman",
    position: "Associate Professor Endocrinology, Hayatabad Medical Complex",
  },
  {
    quote: "AIMS's commitment to research is a fresh breath of air, especially in the KPK region. Their research goals are commendable. Piloting community based diabetes care model should help in providing evidence to the policy makers in allocation of much needed resources. Training the professionals is an area I would be delighted to contribute to. I am pleased to be on the advisory board as a volunteer.",
    author: "Dr. Abdul Jabbar",
    position: "Professor of Medicine, Diabetes & Endocrinology, The Aga Khan University Karachi",
  },
  {
    quote: "Human beings were created to feel empathy otherwise Allah already had many angels to worship Him. AIMS seems to have been directly created to ease the pains and sufferings for all people influenced by Diabetes. It is progressing well to achieve its targets. I pay tribute to all the members for their efforts.",
    author: "Shameem Fazle-khaliq",
    position: "Writer, Member Ladies Club Peshawar",
  },
  {
    quote: "In a poor state of healthcare and public services, I believe AIMS in their limited resource is a ray of hope for people with marginalised backgrounds. AIMS outreach health services are setting an example of a public private partnership to address the most neglected area of the health service, diabetes and blood pressure. On the completion of another year of dedication to serve communities, I would like to acknowledge the services of AIMS and also pray for more success. I agree we need more volunteers to help the cause.",
    author: "Rukshanda",
    position: "Executive Director LAAS (Legal Awareness and Advocacy Services)",
  },
  {
    quote: "I met the team and visited Sugar Hospital, jointly run by AIMS and Diabetes Association a few months ago. I was very pleased to see their model of diabetes care. I have asked if I can have the same near my village in Mardan. I am delighted AIMS and Diabetes Association have agreed to get diabetes care to my village. I have agreed to be their member in future and help as much as I can.",
    author: "Professor Dr. Meher Taj Roghani",
    position: "Senator",
  },
  {
    quote: "I am really impressed with the quality services of AIMS and Sugar Hospital, a specialised hospital for treatment of diabetes was much needed for Peshawar and its periphery, I also believe that it will serve the whole province of Khyber Pukhtunkhwa in large. I wish and encourage the philanthropists should come forward and be part of this noble cause.",
    author: "Iskandar Sultan Khawaja",
    position: "Ex-President & Director Pakistan Business Council Dubai, UAE",
  },
  {
    quote: "Diabetes, hypertension and its related factors are a huge problem for our patients in the villages. AIMS is a unique organisation designed to directly address this issue. We are extremely pleased to be their partners in helping with diabetes care in the urban and rural communities at union council level in Peshawar.",
    author: "Muhammad Asim Khan",
    position: "District Nazim-e-Ala Peshawar",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What They Say
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Testimonials
          </h2>
          <p className={`text-[#8A8A8A] max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Hear from healthcare professionals, community leaders, and partners about their experience with AIMS Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-[#E2E2E2] hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-[#5F9ED1] mb-4 opacity-50" />
              <p className="text-[#8A8A8A] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-[#E2E2E2] pt-4">
                <p className="font-semibold text-[#3F4A7A] mb-1">{testimonial.author}</p>
                <p className="text-sm text-[#8A8A8A]">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
