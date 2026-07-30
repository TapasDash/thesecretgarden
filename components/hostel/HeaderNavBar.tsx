'use client'

import { Trees, CalendarCheck, Coffee, Sparkles, Phone } from 'lucide-react'

export function HeaderNavBar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md transition-all border-b border-[var(--border-primary)]"
      style={{
        backgroundColor: 'rgba(245, 245, 240, 0.92)',
        boxShadow: '0 4px 12px rgba(27, 51, 32, 0.05)',
      }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between h-20">
        {/* Brand / Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--accent-green)] text-white flex items-center justify-center shadow-indochine transition-transform group-hover:scale-105">
            <Trees className="w-5 h-5 text-[var(--accent-gold)]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-[var(--text-primary)] block leading-tight">
              Secret Garden
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--accent-green)] font-bold block">
              Cat Ba Island • Vietnam
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--text-primary)]">
          <button
            onClick={() => scrollToSection('accommodations')}
            className="hover:text-[var(--accent-green)] transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
          >
            Accommodations
          </button>
          <button
            onClick={() => scrollToSection('amenities')}
            className="hover:text-[var(--accent-green)] transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection('booking-widget')}
            className="hover:text-[var(--accent-green)] transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
          >
            Book Dates
          </button>
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('booking-widget')}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-indochine transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 bg-[var(--accent-gold)] text-[var(--text-primary)] flex items-center gap-2 border border-[var(--border-primary)] cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Reserve Stay</span>
          </button>
        </div>
      </div>
    </header>
  )
}
