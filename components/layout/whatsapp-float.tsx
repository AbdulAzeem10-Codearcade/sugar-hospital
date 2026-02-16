"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

// WhatsApp icon attribution: Whatsapp icons created by cobynecz - Flaticon
// https://www.flaticon.com/free-icons/whatsapp

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const number = "03011155713"
    const cleanNumber = number.replace(/\s/g, "")
    const whatsappUrl = `https://wa.me/92${cleanNumber.startsWith("0") ? cleanNumber.slice(1) : cleanNumber}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-float group relative overflow-hidden cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <Image
          src="/images/whatsapp-icon.svg"
          alt="WhatsApp"
          width={40}
          height={40}
          className="group-hover:scale-110 transition-transform"
        />
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </button>
    </div>
  )
}
