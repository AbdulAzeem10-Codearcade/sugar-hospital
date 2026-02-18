"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search, Calendar, Phone, Star } from 'lucide-react'

const doctors = [
  { id: 1, name: 'Prof. Dr. Rooh ul Muqim', specialty: 'General Surgery', rating: 4.9, available: ['Mon', 'Wed', 'Fri'], fee: 'Rs. 1200', image: '/images/Doctors/Dr Rooh ul Muqim.jpg' },
  { id: 2, name: 'Dr. Muhammad Jawad', specialty: 'Diabetes', rating: 4.9, available: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], fee: 'Rs. 100-1500', image: '/images/Doctors/dr Muhammad Jawad.jpeg' },
  { id: 3, name: 'Dr. Abdul Jalil Khan', specialty: 'Diabetes', rating: 4.8, available: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], fee: 'Rs. 100-1500', image: '/images/Doctors/Dr Abdul Jalil Khan.jpeg' },
  { id: 4, name: 'Dr. Ghulam Farooq', specialty: 'Diabetes, Endocrine', rating: 4.9, available: ['Mon', 'Wed', 'Fri'], fee: 'Rs. 1500', image: '/images/Doctors/Dr Ghulam Farooq.jpeg' },
  { id: 5, name: 'Dr. Shazia Naz', specialty: 'Dermatology', rating: 4.7, available: ['Tue', 'Thu', 'Sat'], fee: 'Rs. 1000', image: '/images/Doctors/Dr Shazia Naz.jpeg' },
  { id: 6, name: 'Dr. Talat Naz', specialty: 'Gynaecology', rating: 4.8, available: ['Mon', 'Wed', 'Fri'], fee: 'Rs. 1200', image: '/placeholder-user.jpg' },
  { id: 7, name: 'Prof. Dr. Lal Muhammad Khattak', specialty: 'Ophthalmology', rating: 4.9, available: ['Mon', 'Tue', 'Wed', 'Thu'], fee: 'Rs. 1500', image: '/images/Doctors/Dr Lal Muhammad Khattak Senior Consultant Ophthalmologist.jpeg' },
  { id: 8, name: 'Dr. Sadiya Hassan', specialty: 'Ophthalmology', rating: 4.6, available: ['Mon', 'Wed', 'Fri', 'Sat'], fee: 'Rs. 500', image: '/images/Doctors/Dr Sadia.jpeg' },
  { id: 9, name: 'Mr. Amir Sohail', specialty: 'Optometry', rating: 4.6, available: ['Mon', 'Wed', 'Fri', 'Sat'], fee: 'Rs. 500', image: '/placeholder-user.jpg' },
  { id: 10, name: 'Mr. Sohail', specialty: 'Optometry', rating: 4.5, available: ['Tue', 'Thu', 'Sat'], fee: 'Rs. 500', image: '/images/Doctors/MR Sohail.jpeg' },
  { id: 11, name: 'Dr. Faisal Hayat', specialty: 'Dental', rating: 4.7, available: ['Tue', 'Thu', 'Sat'], fee: 'Rs. 500', image: '/placeholder-user.jpg' },
  { id: 12, name: 'Dr. Ayesha Khan', specialty: 'Dental', rating: 4.7, available: ['Mon', 'Wed', 'Fri'], fee: 'Rs. 500', image: '/placeholder-user.jpg' },
  { id: 13, name: 'Dr. Hira Khan', specialty: 'Dental', rating: 4.6, available: ['Tue', 'Thu', 'Sat'], fee: 'Rs. 500', image: '/placeholder-user.jpg' },
  { id: 14, name: 'RD. Ghazala', specialty: 'Dietitian', rating: 4.7, available: ['Mon', 'Wed', 'Fri'], fee: 'Rs. 800', image: '/placeholder-user.jpg' },
  { id: 15, name: 'DPM. Habib', specialty: 'Podiatrist - Footcare', rating: 4.8, available: ['Tue', 'Thu', 'Sat'], fee: 'Rs. 800', image: '/images/Sugar Hospital Staff/Habib footcare.jpeg' },
]

const specialties = [
  'All Specialties',
  'Diabetes',
  'Dermatology',
  'Gynaecology',
  'Ophthalmology',
  'Optometry',
  'Dental',
  'General Surgery',
  'Dietitian',
  'Podiatrist',
]

export function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <section ref={ref} id="find-doctor" className="py-20 bg-[#F4F6F8] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Experts
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Find a Doctor
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Search our team of experienced healthcare professionals to find the right specialist for your needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
            <Input
              type="text"
              placeholder="Search by doctor name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
          <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <SelectTrigger className="w-full sm:w-64 h-12">
              <SelectValue placeholder="Select specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`bg-white rounded-xl border border-[#E2E2E2] overflow-hidden hover:border-[#5F9ED1] hover:shadow-xl transition-all duration-500 card-3d group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Doctor image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#5F9ED1]/20 to-[#3F4A7A]/20 relative overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-[#3F4A7A]">{doctor.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#3F4A7A] group-hover:text-[#5F9ED1] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[#5F9ED1] text-sm font-medium">{doctor.specialty}</p>
                <p className="text-[#3F4A7A] text-sm font-semibold mt-2">Fee: {doctor.fee}</p>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {doctor.available.map((day) => (
                    <span key={day} className="px-2 py-0.5 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs rounded-full">
                      {day}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
                  >
                    <Link href="/contact">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#E2E2E2] text-[#3F4A7A] hover:bg-[#F4F6F8] bg-transparent"
                  >
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8A8A8A]">No doctors found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
