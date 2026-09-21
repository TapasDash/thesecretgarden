'use client'

import React from 'react'
import { useHostelStore } from '@/lib/store'

export const HeaderNavBar: React.FC = () => {
  const { openBooking } = useHostelStore()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#1B3320]/15">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 border-2 border-[#1B3320] bg-white overflow-hidden shadow-[2px_2px_0px_0px_#1B3320] shrink-0">
            <img
              src="/images/secret_garden_logo.jpg"
              alt="Secret Garden Hostel Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-[#1B3320] tracking-tight leading-none">
              Secret Garden
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#3E2723]/80 mt-1">
              Cat Ba Island
            </span>
          </div>
        </a>

        {/* Clean Editorial Nav Links (No icon clutter) */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-widest text-[#3E2723]">
          <button
            onClick={() => scrollTo('rooms')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            Rooms & Beds
          </button>
          <button
            onClick={() => scrollTo('vibe')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            Weekly Nights
          </button>
          <button
            onClick={() => scrollTo('expeditions')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            Boat & Island Tours
          </button>
          <button
            onClick={() => scrollTo('courtyard')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            The Courtyard
          </button>
        </nav>

        {/* High-Contrast CTA Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openBooking()}
            className="px-6 py-2.5 bg-[#1B3320] hover:bg-[#3E2723] text-[#F5F5F0] font-mono text-xs font-bold uppercase tracking-wider border border-[#1B3320] shadow-[3px_3px_0px_0px_#D4AF37] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            Book a Bed
          </button>
        </div>

      </div>
    </header>
  )
}
