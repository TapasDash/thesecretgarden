'use client'

import React from 'react'
import { Calendar, Users, MapPin, Compass, ArrowDownRight, Sparkles, Coffee } from 'lucide-react'
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
        
        {/* Top Location & Hostel Badge Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D8D8CC]/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3E2723]">
            <span className="inline-block w-2.5 h-2.5 bg-[#1B3320] border border-[#D4AF37]" />
            <MapPin className="w-3.5 h-3.5 text-[#1B3320]" />
            <span>Cat Ba Island • Lan Ha Bay • Vietnam</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-[#1B3320]/80">
            <span className="bg-[#E8E8DF] px-2.5 py-1 border border-[#D8D8CC] text-[11px] font-mono">
              GPS 20.7275° N, 107.0467° E
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#3E2723] font-medium">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Organic Courtyard & Social Vibe
            </span>
          </div>
        </div>

        {/* Hero Grid: Left Typographic Narrative & Booking, Right Densely Layered Visual Courtyard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Massive Indochine Typography & Pinned Gold CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B3320] text-[#F5F5F0] text-xs font-mono tracking-widest uppercase border border-[#1B3320] shadow-[2px_2px_0px_0px_#3E2723]">
                <span>SANCTUARY EST. 2017</span>
                <span className="text-[#D4AF37]">✦</span>
                <span>HOST-CENTRIC COURTYARD</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#1B3320] leading-[1.05]">
                Lose track of time <br />
                <span className="italic font-normal text-[#3E2723]">in our lush tropical</span> <br />
                island courtyard.
              </h1>

              <p className="text-base sm:text-lg text-[#3E2723]/90 leading-relaxed font-sans max-w-[54ch]">
                Raw teakwood dorms, chilled acoustic jam nights, and cold Hanoi beer under rain tree canopies. 
                Your authentic launchpad for Lan Ha Bay expeditions and Cat Ba limestone adventures.
              </p>
            </div>

            {/* Heavy Indochine Quick-Booking Bar (Tactile & Solid Shadow) */}
            <div className="mt-8 p-5 bg-[#E8E8DF] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] relative">
              <div className="absolute -top-3 left-4 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 border border-[#D4AF37]">
                DIRECT BOOKING ENGINE • BEST RATE GUARANTEE
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
                      <option value={1}>1 Solo Explorer</option>
                      <option value={2}>2 Companions</option>
                      <option value={3}>3 Travel Crew</option>
                      <option value={4}>4+ Group Tribe</option>
                    </select>
                  </div>
                </div>

                {/* Massive Gold CTA Button */}
                <button
                  onClick={() => openBooking()}
                  className="w-full bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-sm uppercase tracking-wider py-3 px-4 border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#1B3320] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Your Stay</span>
                  <ArrowDownRight className="w-4 h-4 text-[#1B3320]" />
                </button>
              </div>

              {/* Host Perks Micro-Tag */}
              <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#3E2723]/80 border-t border-[#D8D8CC] pt-2">
                <span>✓ Free Courtyard Family Breakfast</span>
                <span>✓ Free Plankton Night Tour Briefing</span>
                <span>✓ High-Speed Mesh Wi-Fi</span>
              </div>
            </div>

            {/* Quick Courtyard Pulse Teaser */}
            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-[#3E2723]">
              <div className="flex -space-x-2 overflow-hidden border border-[#1B3320] p-0.5 bg-[#E8E8DF]">
                <img 
                  src="/images/community_moment.png" 
                  alt="Hostel Guest" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
                <img 
                  src="/images/secret_garden_social_night.jpg" 
                  alt="Hostel Host" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
                <img 
                  src="/images/secret_garden_logo.jpg" 
                  alt="Hostel Staff" 
                  className="inline-block h-6 w-6 object-cover border border-[#1B3320]"
                />
              </div>
              <p className="text-xs text-[#1B3320] font-semibold">
                <span className="font-bold text-[#1B3320]">Tonight&apos;s Pulse:</span> Acoustic Jam Session & Lime Rum Punch in courtyard from 7:30 PM
              </p>
            </div>
          </div>

          {/* Right Column: Densely Layered Overlapping Image Grid (No Flat Backgrounds) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full min-h-[460px] sm:min-h-[520px]">
              
              {/* Back Layer: Courtyard Arch / Bar Atmosphere */}
              <div className="absolute top-0 right-0 w-[88%] h-[320px] sm:h-[360px] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] overflow-hidden bg-[#1B3320]">
                <img
                  src="/images/secret_garden_reception_bar.jpg"
                  alt="Secret Garden Hostel Reception & Tropical Bar"
                  className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3320]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#1B3320]/90 text-[#F5F5F0] border border-[#D4AF37] px-2.5 py-1 text-[11px] font-mono uppercase">
                  Lush Reception Bar • Free Rum Shots at 7PM
                </div>
              </div>

              {/* Overlapping Mid Layer: Social Evening Gathering */}
              <div className="absolute bottom-12 left-0 w-[72%] h-[240px] sm:h-[270px] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#3E2723] overflow-hidden bg-[#3E2723] z-20">
                <img
                  src="/images/secret_garden_social_night.jpg"
                  alt="Secret Garden Hostel Social Evening"
                  className="w-full h-full object-cover filter saturate-[1.15]"
                />
                <div className="absolute top-2 right-2 bg-[#D4AF37] text-[#1B3320] font-mono font-bold text-[10px] px-2 py-0.5 border border-[#1B3320]">
                  COMMUNITY NIGHTS
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-[#F5F5F0]/95 text-[#1B3320] p-2 text-xs font-semibold border border-[#1B3320]">
                  &quot;The warmest hostel in Southeast Asia&quot; • 9.8 Host Score
                </div>
              </div>

              {/* Foreground Floating Polaroid Stamp: Entrance & Botanical Canopy */}
              <div className="absolute -bottom-4 right-2 w-[52%] border-2 border-[#1B3320] bg-[#F5F5F0] p-2 shadow-[5px_5px_0px_0px_#1B3320] z-30 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="relative h-28 sm:h-32 overflow-hidden border border-[#1B3320]">
                  <img
                    src="/images/secret_garden_entrance_arch.jpg"
                    alt="Entrance Botanical Archway"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#3E2723]">
                  <span className="font-bold">GARDEN ARCHWAY</span>
                  <span className="text-[#D4AF37]">✦ CAT BA</span>
                </div>
              </div>

              {/* Vintage Indochine Stamp Badge */}
              <div className="absolute -top-3 -left-3 z-30 bg-[#3E2723] text-[#F5F5F0] border-2 border-[#D4AF37] p-2.5 shadow-[3px_3px_0px_0px_#1B3320] flex flex-col items-center justify-center text-center">
                <Coffee className="w-4 h-4 text-[#D4AF37] mb-0.5" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">PHIN COFFEE</span>
                <span className="text-[11px] font-bold font-serif">& GARDEN CAFE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
