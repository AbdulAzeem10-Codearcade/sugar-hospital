"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    children: [
      { name: 'Our Vision & Mission', href: '/about#vision-mission' },
      { name: 'Our Journey', href: '/about#our-story' },
      { name: 'Our Leadership', href: '/about#leadership' },
      { name: 'Audit Reports', href: '/about#audit-reports' },
      { name: 'Community Outreach Camps', href: '/about/community-camps' },
      { name: 'Facts & Statistics', href: '/about#statistics' },
      { name: 'Our Partners', href: '/about#partners' },
      { name: 'Testimonials', href: '/about#testimonials' },
    ],
  },
  {
    name: 'Patients & Families',
    href: '/patients',
    children: [
      { name: 'Lab Services & Tests', href: '/patients#find-test' },
      { name: 'Find a Doctor', href: '/patients#find-doctor' },
      { name: 'Autism & Allies', href: '/patients#autism-allies' },
      { name: 'Financial Assistance Programme', href: '/patients#financial-assistance' },
      { name: 'Our Network', href: '/patients#network' },
    ],
  },
  {
    name: 'Medical & Clinical Services',
    href: '/services',
    children: [
      { name: 'Clinical Services', href: '/services#clinical' },
      { name: 'Diagnostic Services', href: '/services#diagnostic' },
      { name: 'Doctor & Consultation Fees', href: '/services#doctors-fees' },
      { name: 'Laboratory Test Fees', href: '/services#lab-fees' },
      { name: 'Pharmacy', href: '/services#pharmacy' },
    ],
  },
  {
    name: 'Healthcare Professionals',
    href: '/professionals',
    children: [
      { name: 'Quality & Patient Safety', href: '/professionals#quality-policy' },
      { name: 'Awards & Recognitions', href: '/professionals#awards' },
      { name: 'Publications & Research', href: '/professionals#publications' },
      { name: 'Conference Presentations', href: '/professionals#conferences' },
    ],
  },
  {
    name: 'Donors / Support Us',
    href: '/support',
    children: [
      { name: 'Donate Now', href: '/support#donation' },
      { name: 'Zakat / Sadqa', href: '/support#donation' },
      { name: 'Sponsor a Patient', href: '/support#sponsor' },
      { name: 'Fundraising Campaigns', href: '/support#campaigns' },
      { name: 'Corporate Partnerships', href: '/support#partnerships' },
    ],
  },
  {
    name: 'Join Us',
    href: '/join',
    children: [
      { name: 'Partnership Opportunities', href: '/join#partnership' },
      { name: 'Volunteer & Internship', href: '/join/volunteer' },
    ],
  },
  { name: 'Events', href: '/news-events' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2C4A6E] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0915892728" className="flex items-center gap-2 hover:text-[#4A90C2] transition-colors">
              <Phone className="w-4 h-4" />
              <span>091-5892728</span>
            </a>
            <a href="tel:03011155713" className="flex items-center gap-2 hover:text-[#4A90C2] transition-colors">
              <Phone className="w-4 h-4" />
              <span>0301-1155713</span>
            </a>
            <a href="mailto:admin@sugarhospital.com" className="flex items-center gap-2 hover:text-[#4A90C2] transition-colors">
              <Mail className="w-4 h-4" />
              <span>admin@sugarhospital.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/diabeteshospitalpeshawar?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A90C2] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/aimssugarhospital?igsh=cHR3cHU2d3p5MjBz" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A90C2] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/aims-pakistan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A90C2] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@aimspakistan7582" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A90C2] transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/sugar-hospital-logo.png"
                alt="Sugar Hospital Logo"
                width={160}
                height={70}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#2C4A6E] hover:text-[#4A90C2] transition-colors rounded-md hover:bg-[#E8F4FC]">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href} className="w-full cursor-pointer">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-[#2C4A6E] hover:text-[#4A90C2] transition-colors rounded-md hover:bg-[#E8F4FC]"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-[#4A90C2] text-[#4A90C2] hover:bg-[#4A90C2] hover:text-white transition-all bg-transparent"
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button
                asChild
                className="bg-[#A34C55] hover:bg-[#8E3F47] text-white btn-hover-lift"
              >
                <Link href="/support#donation">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#2C4A6E] hover:bg-[#E8F4FC] rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D4E6F4] bg-white mobile-menu-open">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <details className="group">
                        <summary className="flex items-center justify-between px-4 py-3 text-[#2C4A6E] font-medium cursor-pointer hover:bg-[#E8F4FC] rounded-md">
                          {item.name}
                          <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="px-4 py-2 text-sm text-[#6B8CAD] hover:text-[#4A90C2] hover:bg-[#E8F4FC] rounded-md transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-[#2C4A6E] font-medium hover:bg-[#E8F4FC] rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#D4E6F4]">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#4A90C2] text-[#4A90C2] hover:bg-[#4A90C2] hover:text-white bg-transparent"
                >
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-[#A34C55] hover:bg-[#8E3F47] text-white"
                >
                  <Link href="/support#donation">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
