'use client'

import React, { useState } from 'react'
import { Sparkles, Coffee, Compass, Bed, X } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const BottomNav: React.FC = () => {
  const { openBooking } = useHostelStore()
  const [showCafeModal, setShowCafeModal] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Heavy Mahogany Pinned Mobile Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#3E2723] text-[#F5F5F0] border-t-2 border-[#D4AF37] shadow-[0_-4px_10px_rgba(0,0,0,0.3)] md:hidden"
      >
        <div className="grid grid-cols-4 items-stretch h-16">
          
          {/* 1. Book / Stay Button */}
          <button
            onClick={() => openBooking()}
            className="flex flex-col items-center justify-center gap-1 bg-[#D4AF37] text-[#1B3320] font-bold border-r border-[#1B3320] active:bg-[#c29f30] transition-colors cursor-pointer"
          >
            <Bed className="w-5 h-5 text-[#1B3320]" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold">
              Book
            </span>
          </button>

          {/* 2. Vibe Button */}
          <button
            onClick={() => scrollToSection('vibe')}
            className="flex flex-col items-center justify-center gap-1 hover:bg-[#1B3320] border-r border-[#D4AF37]/30 text-[#F5F5F0] active:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
              Events
            </span>
          </button>

          {/* 3. Cafe Menu Button */}
          <button
            onClick={() => setShowCafeModal(true)}
            className="flex flex-col items-center justify-center gap-1 hover:bg-[#1B3320] border-r border-[#D4AF37]/30 text-[#F5F5F0] active:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <Coffee className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
              Drinks & Food
            </span>
          </button>

          {/* 4. Tours Button */}
          <button
            onClick={() => scrollToSection('expeditions')}
            className="flex flex-col items-center justify-center gap-1 hover:bg-[#1B3320] text-[#F5F5F0] active:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
              Tours
            </span>
          </button>

        </div>
      </nav>

      {/* Pop-up Modal for Courtyard Cafe Menu */}
      {showCafeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-[#FAF8F5] border border-[#1B3320]/10 rounded-[2.5rem] shadow-[0_24px_64px_rgba(27,51,32,0.2)] p-6 text-[#1B3320] relative max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#1B3320]/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1B3320]/60 block mb-0.5">
                  Courtyard Bar &amp; Cafe
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B3320]">
                  Drinks &amp; Bites
                </h3>
              </div>
              <button
                onClick={() => setShowCafeModal(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#1B3320] text-[#1B3320] hover:text-white border border-[#1B3320]/10 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Coffee */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#1B3320]/8 shadow-sm">
                <div className="text-[11px] font-mono text-[#1B3320] font-semibold uppercase tracking-wider mb-2">
                  Vietnamese Drip Coffee
                </div>
                <div className="space-y-2 text-[#1B3320]/85">
                  <div className="flex justify-between">
                    <span>Iced Milk Coffee (Cà Phê Sữa Đá)</span>
                    <span className="font-semibold font-mono">35k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hanoi Egg Coffee</span>
                    <span className="font-semibold font-mono">50k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Iced Coconut Milk Coffee</span>
                    <span className="font-semibold font-mono">45k</span>
                  </div>
                </div>
              </div>

              {/* Garden Bar */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#1B3320]/8 shadow-sm">
                <div className="text-[11px] font-mono text-[#1B3320] font-semibold uppercase tracking-wider mb-2">
                  Beer &amp; Refreshments
                </div>
                <div className="space-y-2 text-[#1B3320]/85">
                  <div className="flex justify-between">
                    <span>Cold Hanoi Beer / Saigon Special</span>
                    <span className="font-semibold font-mono text-[#1B3320]">25k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passionfruit Rum Punch</span>
                    <span className="font-semibold font-mono text-[#1B3320]">55k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fresh Whole Coconut</span>
                    <span className="font-semibold font-mono text-[#1B3320]">35k</span>
                  </div>
                </div>
              </div>

              {/* Kitchen Bites */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#1B3320]/8 shadow-sm">
                <div className="text-[11px] font-mono text-[#1B3320] font-semibold uppercase tracking-wider mb-2">
                  Kitchen Bites
                </div>
                <div className="space-y-2 text-[#1B3320]/85">
                  <div className="flex justify-between">
                    <span>Crispy Pork / Tofu Bánh Mì</span>
                    <span className="font-semibold font-mono">40k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crispy Spring Rolls (3 pcs)</span>
                    <span className="font-semibold font-mono">50k</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4 pt-2">
              <button
                onClick={() => {
                  setShowCafeModal(false)
                  openBooking()
                }}
                className="w-full py-3 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] font-semibold uppercase text-xs tracking-wider rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Reserve a Bed
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
