'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const HeroImmersive: React.FC = () => {
  const { openBooking, checkInDate, checkOutDate, setDates } = useHostelStore()

  return (
    <section className="relative w-full bg-[#F5F5F0] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#1B3320]/15 overflow-hidden">
      
      {/* Background Subtle Indochine Motif */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.04] bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/indochine_cement_tile.png)' }}
      />

      {/* Container with wide editorial breathing room */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Block: Wide 2-Line Headline */}
        <div className="max-w-5xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3E2723] font-bold">
              Cat Ba Island • Since 2017
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1B3320] leading-[1.08] mb-6">
            Clean beds, cold AC, cheap beer, and good people.
          </h1>

          <p className="text-lg sm:text-xl text-[#3E2723]/90 font-sans max-w-3xl leading-relaxed">
            A quiet garden courtyard two minutes from Cat Ba town center. Heavy wooden bunks that do not squeak, blackout curtains for proper sleep, and free family dinners every night.
          </p>
        </div>

        {/* Clean Direct Booking Bar */}
        <div className="mb-16 p-4 sm:p-6 bg-white/80 backdrop-blur-md border border-[#1B3320]/10 rounded-[2rem] shadow-[0_20px_50px_rgba(27,51,32,0.06)] max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
            
            <div className="sm:col-span-4 bg-[#FAF8F5] p-3.5 border border-[#1B3320]/10 rounded-2xl">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#3E2723] font-bold mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setDates(e.target.value, checkOutDate)}
                className="bg-transparent border-none p-0 text-sm font-semibold text-[#1B3320] focus:outline-none w-full cursor-pointer font-sans"
              />
            </div>

            <div className="sm:col-span-4 bg-[#FAF8F5] p-3.5 border border-[#1B3320]/10 rounded-2xl">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#3E2723] font-bold mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setDates(checkInDate, e.target.value)}
                className="bg-transparent border-none p-0 text-sm font-semibold text-[#1B3320] focus:outline-none w-full cursor-pointer font-sans"
              />
            </div>

            <div className="sm:col-span-4">
              <button
                onClick={() => openBooking()}
                className="w-full h-[52px] bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider rounded-2xl border border-[#1B3320]/15 shadow-[0_4px_14px_rgba(212,175,55,0.3)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4 text-[#1B3320]" />
              </button>
            </div>

          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between text-xs font-mono text-[#3E2723]/80 pt-2 border-t border-[#1B3320]/8">
            <span>Free breakfast included (7:30 - 10:00 AM)</span>
            <span>Pay on arrival • No online booking deposit</span>
            <span>Direct booking best rate</span>
          </div>
        </div>

        {/* Asymmetrical High-End Photography Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Atmosphere Shot */}
          <div className="md:col-span-8 border border-[#1B3320]/10 rounded-[2rem] shadow-[0_16px_40px_rgba(27,51,32,0.06)] overflow-hidden bg-[#1B3320] relative min-h-[360px] md:min-h-[460px] group">
            <img
              src="/images/secret_garden_social_night.jpg"
              alt="Courtyard evening gathering at Secret Garden"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-[#1B3320]/90 backdrop-blur-sm text-[#D4AF37] px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full border border-[#D4AF37]/30 shadow-sm">
              Courtyard Social Canopy
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1B3320]/95 via-[#1B3320]/40 to-transparent p-6 text-[#F5F5F0]">
              <p className="font-serif text-xl sm:text-2xl font-bold">
                The open courtyard after boat tours
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#F5F5F0]/85 mt-1">
                Family dinner every night at 6:30 PM • 25,000 VND cold Bia Ha Noi
              </p>
            </div>
          </div>

          {/* Supporting Photo Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            <div className="border border-[#1B3320]/10 rounded-[2rem] shadow-[0_12px_30px_rgba(27,51,32,0.05)] overflow-hidden bg-[#1B3320] h-52 relative group">
              <img
                src="/images/secret_garden_reception_bar.jpg"
                alt="Garden cafe and bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 bg-[#1B3320]/90 backdrop-blur-sm text-[#F5F5F0] px-3 py-1 text-[11px] font-mono rounded-full border border-white/20">
                Garden Drip Coffee &amp; Beer Bar
              </div>
            </div>

            <div className="border border-[#1B3320]/10 rounded-[2rem] shadow-[0_12px_30px_rgba(27,51,32,0.05)] overflow-hidden bg-[#1B3320] h-52 relative group">
              <img
                src="/images/secret_garden_entrance_arch.jpg"
                alt="Garden entrance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 bg-[#1B3320]/90 backdrop-blur-sm text-[#F5F5F0] px-3 py-1 text-[11px] font-mono rounded-full border border-white/20">
                Garden Gate &amp; Reception Arch
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
