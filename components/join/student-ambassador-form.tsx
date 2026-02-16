"use client"

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { GraduationCap, CheckCircle } from 'lucide-react'

export function StudentAmbassadorForm() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      institution: formData.get('institution'),
      program: formData.get('program'),
      year: formData.get('year'),
      experience: formData.get('experience'),
      motivation: formData.get('motivation'),
      ideas: formData.get('ideas'),
    }

    // Send email to admin@sugarhospital.com
    const emailBody = `
New Student Ambassador Application

Personal Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}

Academic Information:
- Institution: ${data.institution}
- Program/Degree: ${data.program}
- Current Year: ${data.year}

Leadership Experience:
${data.experience || 'Not provided'}

Motivation:
${data.motivation}

Campaign Ideas:
${data.ideas || 'Not provided'}
    `.trim()

    const mailtoLink = `mailto:admin@sugarhospital.com?subject=Student Ambassador Application - ${data.firstName} ${data.lastName}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2">
              Application Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F4A7A] mb-4">
              Become a Student Ambassador
            </h2>
            <p className="text-[#8A8A8A]">
              Join our network of student ambassadors and make a difference in your community
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Application Submitted!</h3>
              <p className="text-green-700">Thank you for your interest. We'll review your application and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`bg-[#F4F6F8] rounded-2xl p-8 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required className="mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="institution">University/College Name *</Label>
                <Input id="institution" name="institution" required className="mt-2" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="program">Program/Degree *</Label>
                  <Input id="program" name="program" required className="mt-2" placeholder="e.g., MBBS, BDS, Pharmacy" />
                </div>
                <div>
                  <Label htmlFor="year">Current Year *</Label>
                  <Input id="year" name="year" type="number" required className="mt-2" placeholder="e.g., 2, 3, 4" />
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Leadership Experience</Label>
                <Textarea 
                  id="experience"
                  name="experience"
                  className="mt-2" 
                  rows={4}
                  placeholder="Any previous leadership roles, volunteer work, or community involvement"
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to be a Student Ambassador? *</Label>
                <Textarea 
                  id="motivation"
                  name="motivation"
                  required 
                  className="mt-2" 
                  rows={6}
                  placeholder="Tell us about your passion for diabetes awareness and how you plan to make an impact"
                />
              </div>

              <div>
                <Label htmlFor="ideas">Campaign Ideas</Label>
                <Textarea 
                  id="ideas"
                  name="ideas"
                  className="mt-2" 
                  rows={4}
                  placeholder="Share any ideas you have for awareness campaigns or activities at your institution"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </div>

              <p className="text-sm text-[#8A8A8A] text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}

          <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl p-8 border border-[#5F9ED1]/20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-3">Questions About the Programme?</h3>
            <p className="text-[#8A8A8A] mb-4">
              For inquiries about the Student Ambassador Programme, please contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:03011155713" className="text-[#5F9ED1] font-semibold hover:underline">
                0301-1155713
              </a>
              <span className="hidden sm:inline text-[#8A8A8A]">|</span>
              <a href="mailto:admin@sugarhospital.com" className="text-[#5F9ED1] font-semibold hover:underline">
                admin@sugarhospital.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
