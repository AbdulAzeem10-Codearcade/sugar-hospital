"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ],
  services: [
    { name: 'Find a Doctor', href: '/patients#find-doctor' },
    { name: 'Find a Lab Test', href: '/patients#find-test' },
    { name: 'Book Appointment', href: '/contact' },
  ],
  support: [
    { name: 'Donate Now', href: '/support#donation' },
    { name: 'Zakat', href: '/support#donation' },
    { name: 'Volunteer', href: '/join/volunteer' },
    { name: 'Internship', href: '/join/volunteer' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/diabeteshospitalpeshawar?mibextid=rS40aB7S9Ucbxw6v' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aimssugarhospital?igsh=cHR3cHU2d3p5MjBz' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/aims-pakistan/' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@AIMSPakistan' },
]

export function Footer() {
  return (
    <footer className="bg-[#2C4A6E] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/sugar-hospital-logo.png"
                alt="Sugar Hospital Logo"
                width={140}
                height={60}
                className="object-contain bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
              Sugar Hospital - Diabetes General Hospital & Research Centre is dedicated to providing 
              specialized diabetes care and comprehensive healthcare services. 
              Another Reason To Smile - quality healthcare for all.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4A90C2] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#4A90C2] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#4A90C2] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Support Us</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#4A90C2] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4A90C2] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-white/70 text-sm">A-6 B/3, Opposite Edhi Homes, Phase 5, Hayatabad, Peshawar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#4A90C2] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <a href="tel:03011155713" className="text-white/70 text-sm hover:text-[#4A90C2] transition-colors block">
                  0301-1155713 (Appointments)
                </a>
                <a href="tel:0915892728" className="text-white/70 text-sm hover:text-[#4A90C2] transition-colors block">
                  091-5892728 (Enquiry)
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#4A90C2] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:admin@sugarhospital.com" className="text-white/70 text-sm hover:text-[#4A90C2] transition-colors">
                  admin@sugarhospital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm text-center mb-4">Our Programs & Initiatives</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              src="/images/jwand-campaign.jpg"
              alt="Jwand - Life is Sweet Campaign"
              width={120}
              height={60}
              className="object-contain bg-white rounded-lg p-2 h-16 w-auto"
            />

            <Image
              src="/images/aims-logo.png"
              alt="AIMS Pakistan"
              width={120}
              height={60}
              className="object-contain bg-white rounded-lg p-2 h-16 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1E3A52] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sugar Hospital - Diabetes General Hospital & Research Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-white/60 text-sm">Made with care by</p>
            <a 
              href="https://blancos-hq-portfolio.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-4 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#5F9ED1] via-[#A34C55] to-[#5F9ED1] animate-gradient-x"></span>
              <span className="absolute inset-[2px] bg-[#1E3A52] rounded-lg"></span>
              <span className="relative z-10 bg-gradient-to-r from-[#5F9ED1] to-[#A34C55] bg-clip-text text-transparent group-hover:from-[#A34C55] group-hover:to-[#5F9ED1] transition-all duration-300">
                BlancosHQ
              </span>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-2">
          <p className="text-white/40 text-xs text-center">
            WhatsApp icons created by <a href="https://www.flaticon.com/free-icons/whatsapp" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">cobynecz - Flaticon</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
