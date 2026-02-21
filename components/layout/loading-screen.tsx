"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Circular Progress Animation */}
        <div className="relative w-48 h-48">
          {/* Animated Circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E8F4FC"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="animate-loading-circle"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5F9ED1" />
                <stop offset="50%" stopColor="#4A90C2" />
                <stop offset="100%" stopColor="#3F4A7A" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hospital Logo */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <Image
              src="/images/Sugar hospital building images/SGH image.jpg"
              alt="Sugar Hospital"
              width={120}
              height={120}
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-[#3F4A7A] mb-2">
            Sugar Hospital
          </h2>
          <p className="text-[#5F9ED1] font-medium animate-pulse">
            Loading into Sugar Hospital...
          </p>
        </div>
      </div>
    </div>
  )
}
