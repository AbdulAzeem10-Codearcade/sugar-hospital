"use client"

import React from "react"

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle2 } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-[#5F9ED1] to-[#3F4A7A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-white/80 mb-8">
            Stay updated with the latest news, events, and healthcare tips from AIMS Pakistan. 
            Get our emails to stay in the know.
          </p>

          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
              <p className="text-white/80">You have successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-[#A34C55] hover:bg-[#8E3F47] text-white h-12 px-8 btn-hover-lift"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-white/60 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
