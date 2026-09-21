'use client'

import React from 'react'
import { Calendar, Users, MapPin, ArrowDownRight, Sparkles, Coffee } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const HeroImmersive: React.FC = () => {
  const { openBooking, checkInDate, checkOutDate, guests, setDates, setGuests } = useHostelStore()

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F0] pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#D8D8CC]">
      {/* Background Subtle Organic Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Location & Quick Facts */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D8D8CC]/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3E2723]">
            <span className="inline-block w-2.5 h-2.5 bg-[#1B3320] border border-[#D4AF37]" />
            <MapPin className="w-3.5 h-3.5 text-[#1B3320]" />
            <span>Cat Ba Island • Vietnam</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-[#1B3320]/80">
            <span className="bg-[#E8E8DF] px-2.5 py-1 border border-[#D8D8CC] text-[11px] font-mono">
              2 min walk from town center
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#3E2723] font-medium">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Free family dinner every night
            </span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Backpacker Copy & Booking */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B3320] text-[#F5F5F0] text-xs font-mono tracking-widest uppercase border border-[#1B3320] shadow-[2px_2px_0px_0px_#3E2723]">
                <span>RUNNING SINCE 2017</span>
                <span className="text-[#D4AF37]">✦</span>
                <span>CAT BA ISLAND</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#1B3320] leading-[1.05]">
                Clean beds, cold AC, <br />
                <span className="italic font-normal text-[#3E2723]">cheap cold beer,</span> <br />
                and good people.
              </h1>

              <p className="text-base sm:text-lg text-[#3E2723]/90 leading-relaxed font-sans max-w-[54ch]">
                Heavy wooden bunks with real privacy curtains. A garden courtyard where everyone hangs out after boat trips. No cheesy games. Just a solid spot to crash, eat with other travelers, and book good island tours.
              </p>
            </div>

            {/* Quick Booking Bar */}
            <div className="mt-8 p-5 bg-[#E8E8DF] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] relative">
              <div className="absolute -top-3 left-4 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 border border-[#D4AF37]">
                DIRECT BOOKING • CHEAPEST PRICE HERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* Dates Input */}
                <div className="bg-[#F5F5F0] p-2.5 border border-[#1B3320]/40">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#3E2723] font-bold mb-1">
                    Dates
                  </label>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B3320]">
                    <Calendar className="w-3.5 h-3.5 text-[#1B3320]" />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setDates(e.target.value, checkOutDate)}
                      className="bg-transparent border-none p-0 text-xs font-semibold focus:outline-none w-full text-[#1B3320]"
                    />
                  </div>
                </div>

                {/* Guests Select */}
                <div className="bg-[#F5F5F0] p-2.5 border border-[#1B3320]/40">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#3E2723] font-bold mb-1">
                    Travelers
                  </label>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B3320]">
                    <Users className="w-3.5 h-3.5 text-[#1B3320]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="bg-transparent border-none p-0 text-xs font-semibold focus:outline-none w-full text-[#1B3320] cursor-pointer"
                    >
                      <option value={1}>1 Solo traveler</option>
                      <option value={2}>2 People</option>
                      <option value={3}>3 Friends</option>
                      <option value={4}>4+ Group</option>
                    </select>
                  </div>
                </div>

                {/* Direct CTA Button */}
                <button
                  onClick={() => openBooking()}
                  className="w-full bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-sm uppercase tracking-wider py-3 px-4 border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#1B3320] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book a Bed</span>
                  <ArrowDownRight className="w-4 h-4 text-[#1B3320]" />
                </button>
              </div>

              {/* Real hostel perks */}
              <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#3E2723]/80 border-t border-[#D8D8CC] pt-2">
                <span>✓ Free big breakfast included</span>
                <span>✓ Pay on arrival (cash or card)</span>
                <span>✓ Fast Wi-Fi that actually works</span>
              </div>
            </div>

            {/* Tonight's Event Strip */}
            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-[#3E2723]">
              <div className="flex -space-x-2 overflow-hidden border border-[#1B3320] p-0.5 bg-[#E8E8DF]">
                <img 
                  src="/images/community_moment.png" 
                  alt="Hostel guest" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
                <img 
                  src="/images/secret_garden_social_night.jpg" 
                  alt="Hostel team" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
                <img 
                  src="/images/secret_garden_logo.jpg" 
                  alt="Secret Garden staff" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
              </div>
              <p className="text-xs text-[#1B3320] font-semibold">
                <span className="font-bold text-[#1B3320]">Tonight at 7:30 PM:</span> Acoustic jam in the courtyard. Free welcome drink on the house.
              </p>
            </div>
          </div>

          {/* Right Column: Layered Real Hostel Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full min-h-[460px] sm:min-h-[520px]">
              
              {/* Back Layer */}
              <div className="absolute top-0 right-0 w-[88%] h-[320px] sm:h-[360px] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] overflow-hidden bg-[#1B3320]">
                <img
                  src="/images/secret_garden_reception_bar.jpg"
                  alt="Garden Bar and Reception"
                  className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3320]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#1B3320]/90 text-[#F5F5F0] border border-[#D4AF37] px-2.5 py-1 text-[11px] font-mono uppercase">
                  Garden Bar • 25k VND Cold Beer
                </div>
              </div>

              {/* Overlapping Mid Layer */}
              <div className="absolute bottom-12 left-0 w-[72%] h-[240px] sm:h-[270px] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#3E2723] overflow-hidden bg-[#3E2723] z-20">
                <img
                  src="/images/secret_garden_social_night.jpg"
                  alt="Evening in the garden courtyard"
                  className="w-full h-full object-cover filter saturate-[1.15]"
                />
                <div className="absolute top-2 right-2 bg-[#D4AF37] text-[#1B3320] font-mono font-bold text-[10px] px-2 py-0.5 border border-[#1B3320]">
                  EVENING COURTYARD
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-[#F5F5F0]/95 text-[#1B3320] p-2 text-xs font-semibold border border-[#1B3320]">
                  Family dinner starts at 6:30 PM • 9.8 score on Hostelworld
                </div>
              </div>

              {/* Foreground Floating Polaroid Stamp */}
              <div className="absolute -bottom-4 right-2 w-[52%] border-2 border-[#1B3320] bg-[#F5F5F0] p-2 shadow-[5px_5px_0px_0px_#1B3320] z-30 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="relative h-28 sm:h-32 overflow-hidden border border-[#1B3320]">
                  <img
                    src="/images/secret_garden_entrance_arch.jpg"
                    alt="Hostel garden gate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#3E2723]">
                  <span className="font-bold">GARDEN GATE</span>
                  <span className="text-[#D4AF37]">✦ CAT BA</span>
                </div>
              </div>

              {/* Coffee badge */}
              <div className="absolute -top-3 -left-3 z-30 bg-[#3E2723] text-[#F5F5F0] border-2 border-[#D4AF37] p-2.5 shadow-[3px_3px_0px_0px_#1B3320] flex flex-col items-center justify-center text-center">
                <Coffee className="w-4 h-4 text-[#D4AF37] mb-0.5" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">DRIP COFFEE</span>
                <span className="text-[11px] font-bold font-serif">& BREAKFAST</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
