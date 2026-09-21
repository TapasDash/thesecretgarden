'use client'

import React from 'react'
import { MapPin, Phone, Sparkles, Coffee, Bed, Compass, Music, Calendar } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const HeaderNavBar: React.FC = () => {
  const { openBooking } = useHostelStore()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-[#F5F5F0] border-b-2 border-[#1B3320] sticky top-0 z-40">
      
      {/* Top Island Weather & Notice Marquee Strip */}
      <div className="bg-[#1B3320] text-[#F5F5F0] px-4 py-1.5 text-[11px] font-mono border-b border-[#D4AF37]/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] font-bold">CAT BA ISLAND:</span>
          <span>27°C • Sunny Bay Conditions • Plankton Visibility High</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#F5F5F0]/80">
          <a href="tel:+84987654321" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#D4AF37]" /> WhatsApp Desk: +84 987 654 321
          </a>
          <span>•</span>
          <span>123 Nui Ngoc, Cat Ba Town</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Emblem */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#1B3320] shadow-[2px_2px_0px_0px_#1B3320] bg-white overflow-hidden shrink-0">
            <img
              src="/images/secret_garden_logo.jpg"
              alt="Secret Garden Hostel Emblem"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-serif font-extrabold text-lg sm:text-2xl text-[#1B3320] tracking-tight block leading-tight">
              Secret Garden
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3E2723] block">
              Hostel • Cat Ba Island
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-[#3E2723]">
          <button
            onClick={() => scrollToSection('vibe')}
            className="hover:text-[#1B3320] hover:underline underline-offset-4 decoration-[#D4AF37] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Vibe Board</span>
          </button>

          <button
            onClick={() => scrollToSection('expeditions')}
            className="hover:text-[#1B3320] hover:underline underline-offset-4 decoration-[#D4AF37] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tours & Treks</span>
          </button>

          <button
            onClick={() => scrollToSection('rooms')}
            className="hover:text-[#1B3320] hover:underline underline-offset-4 decoration-[#D4AF37] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Beds & Suites</span>
          </button>

          <button
            onClick={() => scrollToSection('courtyard')}
            className="hover:text-[#1B3320] hover:underline underline-offset-4 decoration-[#D4AF37] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Coffee className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Garden Cafe</span>
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openBooking()}
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1B3320] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1B3320]" />
            <span>Book Bed</span>
          </button>
        </div>

      </div>
    </header>
  )
}
