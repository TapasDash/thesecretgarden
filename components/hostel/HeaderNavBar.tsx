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
          <div className="w-11 h-11 rounded-2xl border border-black/15 bg-black overflow-hidden shadow-sm shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/images/secret_garden_logo.jpg"
              alt="Secret Garden Hostel Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-black tracking-tight leading-none group-hover:text-stone-700 transition-colors">
              Secret Garden
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 font-semibold mt-1">
              Cat Ba Island
            </span>
          </div>
        </a>

        {/* Clean Editorial Nav Links for Travelers */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-widest text-[#3E2723]">
          <button
            onClick={() => scrollTo('rooms')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            Rooms &amp; Beds
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
            Boat &amp; Island Tours
          </button>
          <button
            onClick={() => scrollTo('courtyard')}
            className="hover:text-[#1B3320] transition-colors cursor-pointer"
          >
            The Courtyard &amp; Story
          </button>
        </nav>

        {/* High-Contrast Direct CTA Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openBooking()}
            className="px-6 py-2.5 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] font-mono text-xs font-bold uppercase tracking-wider rounded-full border border-[#1B3320]/20 shadow-[0_4px_14px_rgba(27,51,32,0.18)] active:scale-95 transition-all cursor-pointer"
          >
            Book a Bed
          </button>
        </div>

      </div>
    </header>
  )
}
