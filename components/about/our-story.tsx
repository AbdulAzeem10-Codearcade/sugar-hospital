"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Award, Heart, Users, TrendingUp } from 'lucide-react'

export function OurStory() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="our-story" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              The AIMS Legacy: Transforming Diabetes Care in Pakistan
            </h2>
          </div>

          {/* Introduction */}
          <div className={`bg-gradient-to-r from-[#A34C55] to-[#8E3F47] rounded-2xl p-8 text-white mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg leading-relaxed">
              Pakistan currently faces one of the highest diabetes prevalence rates in the world, with over 
              <span className="font-bold"> 34.5 million people</span> living with the condition. With projections 
              suggesting this number will surge to <span className="font-bold">70.2 million by 2050</span>, the need 
              for a dedicated, specialized response has never been more urgent. Abaseen Institute of Medical Sciences 
              (AIMS) rose to meet that challenge.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* 2004 */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">2004</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3F4A7A] mb-4">A Vision Takes Root</h3>
                  <p className="text-[#8A8A8A] leading-relaxed mb-4">
                    In 2004, Dr. Zia ul Hasan observed a devastating trend in Khyber Pakhtunkhwa (KP). The diabetes 
                    epidemic was growing, and the healthcare system was fragmented. Patients were often underdiagnosed, 
                    and those who were diagnosed lacked access to affordable, continuous care.
                  </p>
                  <p className="text-[#8A8A8A] leading-relaxed">
                    Driven by a mission to serve, Dr. Zia started a small healthcare setup in Dabgari Garden. His goal 
                    was simple: provide a sanctuary for those fighting a lifelong disease that requires constant vigilance 
                    and specialized treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Diabetes Association KP */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#5F9ED1] rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3F4A7A]">Diabetes Association KP</h3>
              </div>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                Established in 1985 as a charitable organization registered with Social Welfare, the Diabetes Association 
                KP has been engaged in community health education and promoting a healthy lifestyle. It provides free and 
                highly subsidized diagnostic and curative services with the help of skilled professionals and volunteers.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                These services are being imparted through Diabetes General Hospital and Research Centre Hayatabad Peshawar 
                and its network in other districts of KP, namely: Peshawar, Dera Ismail Khan, Charsadda, Bannu, Abbottabad, 
                Mardan, Buner, Nowshera, and Lower Dir.
              </p>
              <div className="bg-[#5F9ED1]/10 rounded-xl p-6 border-l-4 border-[#5F9ED1]">
                <p className="text-[#3F4A7A] font-medium">
                  Both AIMS and Diabetes Association under a long-term MOU share the same objective: to serve the community 
                  with diabetes care and support.
                </p>
              </div>
            </div>

            {/* From Outreach to Excellence */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-2xl font-bold text-[#3F4A7A] mb-6">From Outreach to Institutional Excellence</h3>
              <p className="text-[#8A8A8A] leading-relaxed mb-6">
                As the founder of AIMS, Dr. Zia understood that clinical care was only half the battle. To truly impact 
                the region, AIMS launched extensive community initiatives:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: 'Screening Camps',
                    description: 'Identifying thousands of undiagnosed cases in rural and urban KP',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Public Awareness',
                    description: 'Educating the population on the dangers of physical inactivity and poor dietary habits',
                  },
                  {
                    icon: Heart,
                    title: 'Patient Registration',
                    description: 'Establishing a long-term database to ensure continuity of care for the underprivileged',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#3F4A7A] mb-2">{item.title}</h4>
                    <p className="text-[#8A8A8A] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className={`bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-8 text-white transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-12 h-12" />
                <h3 className="text-2xl font-bold">Sitara-e-Imtiaz 2019</h3>
              </div>
              <p className="text-lg leading-relaxed">
                In recognition of his tireless philanthropic efforts and his service to the people of Pakistan, 
                Dr. Zia ul Hasan was honored with the <span className="font-bold">Sitara-e-Imtiaz in 2019</span>.
              </p>
            </div>

            {/* Sugar Hospital */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold text-[#3F4A7A] mb-4">Sugar General Hospital: Flagship Project</h3>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                A project of AIMS and Diabetes Association, Sugar Hospital is dedicated to addressing the critical health 
                concerns surrounding diabetes in Peshawar, Khyber Pakhtunkhwa (KPK). Recognizing diabetes as a significant 
                health issue within the community, Sugar Hospital strives to eliminate barriers to quality healthcare by 
                offering subsidized comprehensive treatment, irrespective of financial circumstances.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed mb-6">
                Diabetes is a complex, lifelong journey that affects every part of the body. Sugar General Hospital was 
                designed to address this by bringing complete diabetes care under one roof. From diagnostics to specialized 
                consultations, our mission is to make world-class treatment accessible and affordable for everyone.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F4F6F8] rounded-xl p-6">
                  <h4 className="font-bold text-[#3F4A7A] mb-2">Mission</h4>
                  <p className="text-[#8A8A8A] text-sm">
                    To provide free, comprehensive treatment to all patients with diabetes, alongside proactive education 
                    and regular healthcare services to mitigate the impacts of diabetes on individual lives.
                  </p>
                </div>
                <div className="bg-[#F4F6F8] rounded-xl p-6">
                  <h4 className="font-bold text-[#3F4A7A] mb-2">Vision</h4>
                  <p className="text-[#8A8A8A] text-sm">
                    A community where every individual, regardless of financial barriers, has access to quality healthcare 
                    and support in managing their health conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className={`text-center transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold text-[#3F4A7A] mb-4">Our Commitment</h3>
              <p className="text-xl text-[#8A8A8A] leading-relaxed max-w-4xl mx-auto">
                At AIMS and Sugar General Hospital, we believe that no one should have to face diabetes alone. We remain 
                dedicated to being the leading shield against this epidemic in Pakistan, combining medical excellence with 
                a heart for philanthropy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
