"use client"

import React from "react"

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, CheckCircle2, Clock, User } from 'lucide-react'

const departments = [
  'General Medicine',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Ophthalmology',
  'Dermatology',
  'ENT',
  'Gynecology',
  'Urology',
]

export function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section ref={ref} id="appointment" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Schedule a Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Request an Appointment
            </h2>
            <p className="text-[#8A8A8A] mb-8">
              Fill out the form below and our team will contact you to confirm your appointment.
            </p>

            {isSubmitted ? (
              <div className="bg-[#5F9ED1]/10 rounded-2xl p-8 text-center animate-scale-in">
                <CheckCircle2 className="w-16 h-16 text-[#5F9ED1] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#3F4A7A] mb-2">Appointment Request Received!</h3>
                <p className="text-[#8A8A8A]">
                  Our team will contact you shortly to confirm your appointment. Thank you for choosing AIMS Pakistan.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
                >
                  Schedule Another Appointment
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+92 XXX XXXXXXX" required className="h-12" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept.toLowerCase().replace(' ', '-')}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input id="date" type="date" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your symptoms or reason for visit..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white h-12 btn-hover-lift">
                  Request Appointment
                </Button>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-[#5F9ED1] to-[#3F4A7A] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Appointment Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-white/80 text-sm">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-white/80 text-sm">Sunday: Emergency Only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Appointment Policy</p>
                    <p className="text-white/80 text-sm">Please arrive 15 minutes before your appointment time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">What to Bring</p>
                    <p className="text-white/80 text-sm">Valid ID, previous medical records, and insurance card if applicable.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F6F8] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#3F4A7A] mb-4">Need Urgent Care?</h3>
              <p className="text-[#8A8A8A] mb-4">
                For medical emergencies, please visit our Emergency Department or call our 24/7 helpline.
              </p>
              <div className="bg-[#A34C55]/10 rounded-xl p-4 border border-[#A34C55]/20">
                <p className="text-[#A34C55] font-bold text-2xl">+92 123 456 7890</p>
                <p className="text-[#8A8A8A] text-sm">Emergency Helpline - Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
