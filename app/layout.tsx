import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloat } from '@/components/layout/whatsapp-float'
import { LoadingScreen } from '@/components/layout/loading-screen'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sugar Hospital | Diabetes General Hospital & Research Centre',
  description: 'Sugar Hospital - Diabetes General Hospital & Research Centre provides specialized diabetes care, comprehensive healthcare services, and medical research. Another Reason To Smile.',
  keywords: 'Sugar Hospital, diabetes hospital, diabetes care, healthcare, medical services, research centre, DGHRC',
  authors: [{ name: 'Sugar Hospital' }],
  openGraph: {
    title: 'Sugar Hospital | Diabetes General Hospital & Research Centre',
    description: 'Specialized diabetes care and comprehensive healthcare services. Another Reason To Smile.',
    type: 'website',
    locale: 'en_US',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4A90C2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <link rel="icon" href="/images/sugar-hospital-logo.png" />
      </head>
      <body className="font-sans antialiased">
        <LoadingScreen />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
