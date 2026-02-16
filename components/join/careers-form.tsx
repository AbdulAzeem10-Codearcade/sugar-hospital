"use client"

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Briefcase, Upload, CheckCircle } from 'lucide-react'

export function CareersForm() {
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
      position: formData.get('position'),
      experience: formData.get('experience'),
      qualifications: formData.get('qualifications'),
      coverLetter: formData.get('coverLetter'),
    }

    // Send email to admin@sugarhospital.com
    const emailBody = `
New Career Application

Personal Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}

Position Details:
- Position Applied For: ${data.position}
- Years of Experience: ${data.experience}

Qualifications:
${data.qualifications}

Cover Letter:
${data.coverLetter}

Note: Please check the applicant's attached resume/CV.
    `.trim()

    const mailtoLink = `mailto:admin@sugarhospital.com?subject=Career Application - ${data.position} - ${data.firstName} ${data.lastName}&body=${encodeURIComponent(emailBody)}`
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
              Apply for a Position
            </h2>
            <p className="text-[#8A8A8A]">
              Fill out the form below to submit your application. We'll review it and get back to you soon.
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
              {/* Personal Information */}
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

              {/* Position Details */}
              <div>
                <Label htmlFor="position">Position Applied For *</Label>
                <Input id="position" name="position" required className="mt-2" placeholder="e.g., Nurse, Doctor, Lab Technician" />
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input id="experience" name="experience" type="number" required className="mt-2" />
              </div>

              <div>
                <Label htmlFor="qualifications">Qualifications *</Label>
                <Textarea 
                  id="qualifications"
                  name="qualifications"
                  required 
                  className="mt-2" 
                  rows={4}
                  placeholder="List your educational qualifications and certifications"
                />
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter / Why You Want to Join *</Label>
                <Textarea 
                  id="coverLetter"
                  name="coverLetter"
                  required 
                  className="mt-2" 
                  rows={6}
                  placeholder="Tell us why you want to work with us and what you can bring to our team"
                />
              </div>

              {/* File Upload */}
              <div>
                <Label htmlFor="resume">Upload Resume/CV *</Label>
                <div className="mt-2 border-2 border-dashed border-[#E2E2E2] rounded-xl p-8 text-center hover:border-[#5F9ED1] transition-colors">
                  <Upload className="w-12 h-12 text-[#8A8A8A] mx-auto mb-3" />
                  <p className="text-[#8A8A8A] mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-[#8A8A8A]">PDF, DOC, DOCX (Max 5MB)</p>
                  <input id="resume" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </div>

              <p className="text-sm text-[#8A8A8A] text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}

          {/* Contact Info */}
          <div className={`mt-12 bg-gradient-to-r from-[#5F9ED1]/10 to-[#3F4A7A]/10 rounded-2xl p-8 border border-[#5F9ED1]/20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-[#3F4A7A] mb-3">Questions About Careers?</h3>
            <p className="text-[#8A8A8A] mb-4">
              For inquiries about career opportunities, please contact our HR department
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
