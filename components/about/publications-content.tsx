"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { FileText, BookOpen, Users, Award } from 'lucide-react'

const categories = [
  {
    icon: FileText,
    title: 'Research Publications',
    description: 'Peer-reviewed research papers and studies in diabetes care and management',
    count: '25+',
  },
  {
    icon: BookOpen,
    title: 'Journal Articles',
    description: 'Published articles in national and international medical journals',
    count: '40+',
  },
  {
    icon: Users,
    title: 'Conference Papers',
    description: 'Presentations and papers at medical conferences and symposiums',
    count: '30+',
  },
  {
    icon: Award,
    title: 'Academic Contributions',
    description: 'Educational materials and training resources for healthcare professionals',
    count: '15+',
  },
]

const publications = [
  {
    year: '2022',
    items: [
      {
        title: 'Evidence-based risk factors for major complications during Ramadan fasting in people with diabetes grouped under IDF-DAR risk categories',
        authors: 'Rahmatullah MYA., Basit A., Zia S., Hasan, Z. et al.',
        journal: 'Journal of Diabetes and Clinical Practice, 185 (109234) 1-6',
        type: 'Research Paper',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        title: 'Clinical Care: Hallux Amputation Due to Disruption of Diabetes Services in COVID-19 Pandemic, Peshawar, Pakistan',
        authors: 'Hasan, A, Zia, S, Jamal Z.',
        journal: 'Journal of Diabetes Mellitus, 11 (4), 171-177',
        type: 'Research Paper',
      },
    ],
  },
  {
    year: '2020',
    items: [
      {
        title: 'Prevalence of depressive and anxiety symptoms in adults with type 2 diabetes, in Peshawar, Pakistan',
        authors: 'Hasan A, Zia S, Amanullah Y, Nisa F, Maracy M, Hasan Z',
        journal: 'J Depress Anxiety, 9 (4), 369, 1-7',
        type: 'Study',
      },
    ],
  },
  {
    year: '2007',
    items: [
      {
        title: 'Prenatal Care Services uptake by rural women in Northwest of Pakistan',
        authors: 'Z, Hasan, S Zia, M. Maracy',
        journal: 'Journal of Postgraduate Medical Institute, 21 (1), 29-35',
        type: 'Research Paper',
      },
    ],
  },
  {
    year: '2004',
    items: [
      {
        title: 'A comparison between patients of acute myocardial infarction alone or with other cardiovascular disease and patients of acute myocardial infarction with type2 diabetes',
        authors: 'Zia, S., Hasan, Z. and Waheed, AS',
        journal: 'Journal of Postgraduate Medical Institute, 18 (2), 133-141',
        type: 'Research Paper',
      },
      {
        title: 'Baseline Disease knowledge assessment in patients with type 2 diabetes in a rural area of northwest of Pakistan',
        authors: 'Hasan, Z., Zia, S. and Maracy, M.',
        journal: 'Journal of Pakistan Medical Association, 54 (2), 67-73',
        type: 'Study',
      },
      {
        title: 'Survival after myocardial infarction in patients with type 2 diabetes in Peshawar, northwest of Pakistan',
        authors: 'Zia, S. and Hasan, Z.',
        journal: 'Journal of Pakistan Medical Association, 54 (2), 73-80',
        type: 'Research Paper',
      },
    ],
  },
]

const conferences = [
  {
    year: '2025',
    items: [
      {
        title: 'Comprehensive Free Diabetes Care in Rural Pakistan',
        authors: 'A. HASAN, L. Ali, S. Tanveer, S. Zia',
        conference: 'IDF Congress 2025',
        code: 'BA2025-0635',
      },
      {
        title: 'Distribution of neuropathic symptoms in patients with diabetes in a primary care setting, Pakistan',
        authors: 'A. HASAN, L. Ali, H. Ullah, S. Zia',
        conference: 'IDF Congress 2025',
        code: 'BA2025-0796',
      },
    ],
  },
  {
    year: '2019',
    items: [
      {
        title: 'Frequency of major complications among IDF-DAR categories of people with diabetes during Ramadan; a multi-center study',
        authors: 'Research Team',
        conference: 'IDF-2019, Busan, Korea',
        code: 'P-0909',
      },
      {
        title: 'Prevalence of depressive and anxiety symptoms in adults with type 2 diabetes, in Peshawar, Pakistan',
        authors: 'Hasan A, Y Amanullah, S Zia, F Nisa, Zi Hasan et al',
        conference: 'Oman Family Medicine Conference, Muscat',
        code: 'P13',
      },
    ],
  },
  {
    year: '2018',
    items: [
      {
        title: 'Replicable and sustainable model of holistic diabetes care',
        authors: 'S Zia, Z, Hasan, S Anwar',
        conference: 'IDF Congress, Hyderabad',
        code: 'Poster 108',
      },
    ],
  },
  {
    year: '2011',
    items: [
      {
        title: 'Health related quality of life, comparison in patients with diabetes and without diabetes after an acute myocardial infarction, Northwest, Pakistan',
        authors: 'Z, Hasan and S zia',
        conference: 'World Diabetes Congress',
        code: 'P1856',
      },
    ],
  },
]

export function PublicationsContent() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="publications" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-[#F4F6F8] rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4 shadow-md">
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#3F4A7A] mb-2">{category.count}</div>
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-2">{category.title}</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Latest Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Recent Publications
            </h2>
            <p className="text-[#8A8A8A] max-w-3xl mx-auto">
              Explore our latest research contributions to diabetes care and public health
            </p>
          </div>

          {publications.map((yearGroup, yearIndex) => (
            <div
              key={yearGroup.year}
              className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(yearIndex + 5) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{yearGroup.year}</span>
                </div>
                <div className="flex-1 h-px bg-[#E2E2E2]" />
              </div>

              <div className="space-y-4">
                {yearGroup.items.map((pub, pubIndex) => (
                  <div
                    key={pubIndex}
                    className="bg-[#F4F6F8] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#5F9ED1] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-[#3F4A7A] flex-1">{pub.title}</h3>
                      <span className="px-3 py-1 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs font-medium rounded-full shrink-0">
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-[#8A8A8A] text-sm mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-[#8A8A8A] text-sm">
                      <span className="font-medium">Published in:</span> {pub.journal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Conference Papers Section */}
          <div className={`mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
                Conference Presentations
              </h2>
              <p className="text-[#8A8A8A] max-w-3xl mx-auto">
                Our research has been presented at international conferences and symposiums
              </p>
            </div>

            {conferences.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#A34C55] to-[#8E3F47] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{yearGroup.year}</span>
                  </div>
                  <div className="flex-1 h-px bg-[#E2E2E2]" />
                </div>

                <div className="space-y-4">
                  {yearGroup.items.map((conf, confIndex) => (
                    <div
                      key={confIndex}
                      className="bg-[#F4F6F8] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#A34C55] transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-[#3F4A7A] flex-1">{conf.title}</h3>
                        <span className="px-3 py-1 bg-[#A34C55]/10 text-[#A34C55] text-xs font-medium rounded-full shrink-0">
                          {conf.code}
                        </span>
                      </div>
                      <p className="text-[#8A8A8A] text-sm mb-2">
                        <span className="font-medium">Authors:</span> {conf.authors}
                      </p>
                      <p className="text-[#8A8A8A] text-sm">
                        <span className="font-medium">Conference:</span> {conf.conference}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Publications */}
        <div className={`mt-16 bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white text-center max-w-4xl mx-auto transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-3">Request Full Publications</h3>
          <p className="text-white/90 mb-6">
            For access to full research papers, citations, or collaboration inquiries, please contact our research department
          </p>
          <a
            href="mailto:admin@sugarhospital.com"
            className="inline-block bg-white text-[#5F9ED1] font-semibold py-3 px-8 rounded-xl hover:scale-105 transition-transform"
          >
            Contact Research Department
          </a>
        </div>
      </div>
    </section>
  )
}
