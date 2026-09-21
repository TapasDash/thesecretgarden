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
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[8px_8px_0px_0px_#1B3320] p-6 text-[#1B3320] relative max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#D8D8CC] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#3E2723]" />
                <h3 className="font-serif text-xl font-bold text-[#1B3320]">
                  Garden Cafe & Bar Menu
                </h3>
              </div>
              <button
                onClick={() => setShowCafeModal(false)}
                className="p-1 bg-[#3E2723] text-white hover:bg-[#1B3320] border border-[#1B3320] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Coffee Section */}
              <div className="bg-[#E8E8DF] p-3 border border-[#D8D8CC]">
                <div className="text-[11px] font-mono text-[#3E2723] font-bold uppercase mb-2">
                  ☕ Vietnamese Drip Coffee
                </div>
                <div className="space-y-1.5 font-sans">
                  <div className="flex justify-between font-semibold">
                    <span>Iced Coffee with Condensed Milk (Cà Phê Sữa Đá)</span>
                    <span>35,000 VND</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Hanoi Egg Coffee (Whipped yolk cream)</span>
                    <span>50,000 VND</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Iced Coconut Milk Coffee</span>
                    <span>45,000 VND</span>
                  </div>
                </div>
              </div>

              {/* Garden Bar Section */}
              <div className="bg-[#1B3320] text-[#F5F5F0] p-3 border border-[#D4AF37]">
                <div className="text-[11px] font-mono text-[#D4AF37] font-bold uppercase mb-2">
                  🍹 Beer & Rum Punch
                </div>
                <div className="space-y-1.5 font-sans">
                  <div className="flex justify-between">
                    <span>Cold Hanoi Beer / Saigon Special</span>
                    <span className="text-[#D4AF37] font-bold">25,000 VND</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fresh Lime & Passionfruit Rum Punch</span>
                    <span className="text-[#D4AF37] font-bold">55,000 VND</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fresh Whole Coconut</span>
                    <span className="text-[#D4AF37] font-bold">35,000 VND</span>
                  </div>
                </div>
              </div>

              {/* Kitchen Bites */}
              <div className="bg-[#E8E8DF] p-3 border border-[#D8D8CC]">
                <div className="text-[11px] font-mono text-[#3E2723] font-bold uppercase mb-2">
                  🥖 Kitchen Snacks
                </div>
                <div className="space-y-1.5 font-sans">
                  <div className="flex justify-between font-semibold">
                    <span>Crispy Pork or Fried Tofu Bánh Mì</span>
                    <span>40,000 VND</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Crispy Spring Rolls (3 pieces)</span>
                    <span>50,000 VND</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Tropical Fruit Smoothie Bowl</span>
                    <span>65,000 VND</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-5 pt-3 border-t border-[#D8D8CC] text-center">
              <button
                onClick={() => {
                  setShowCafeModal(false)
                  openBooking()
                }}
                className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold uppercase text-xs tracking-wider border border-[#1B3320] shadow-[2px_2px_0px_0px_#1B3320] cursor-pointer"
              >
                Book a Bed Directly
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
