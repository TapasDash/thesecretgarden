'use client'

import React from 'react'
import { useHostelStore } from '@/lib/store'

export const CourtyardStory: React.FC = () => {
  const { openBooking } = useHostelStore()

  return (
    <section id="courtyard" className="w-full bg-[#E8E8DF] py-20 md:py-32 border-b border-[#1B3320]/15 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Photos */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] overflow-hidden bg-[#1B3320] h-64 group">
                <img
                  src="/images/courtyard_mural.png"
                  alt="Courtyard wall and plants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#3E2723] overflow-hidden bg-[#3E2723] h-64 mt-8 group">
                <img
                  src="/images/indochine_cement_tile.png"
                  alt="Courtyard cement tiles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="mt-6 p-6 bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#1B3320]">
              <p className="font-serif italic text-base text-[#1B3320] leading-relaxed">
                &ldquo;We started this place in 2017 because we wanted a good garden where backpackers can rest properly, eat home-cooked food together, and drink cold beer.&rdquo;
              </p>
              <div className="mt-3 text-xs font-mono text-[#3E2723] font-bold">
                — Mama Huong & Son (Secret Garden)
              </div>
            </div>
          </div>

          {/* Right Column Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#3E2723] font-semibold">
              How We Run The Place
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320] leading-tight">
              A quiet garden spot under Cat Ba&apos;s limestone cliffs.
            </h2>

            <p className="text-base sm:text-lg text-[#3E2723]/90 font-sans leading-relaxed">
              We are tucked two minutes off the main road in Cat Ba town. It is quiet at night so you actually get sleep, but lively every evening when everyone comes back from boat trips and sits down for family dinner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F5F5F0] border border-[#1B3320]">
                <h4 className="font-serif font-bold text-base text-[#1B3320] mb-1">
                  Real Drip Coffee
                </h4>
                <p className="text-xs text-[#3E2723]/80 font-sans leading-relaxed">
                  Strong Vietnamese Robusta brewed fresh, served with condensed milk or over ice.
                </p>
              </div>

              <div className="p-4 bg-[#F5F5F0] border border-[#1B3320]">
                <h4 className="font-serif font-bold text-base text-[#1B3320] mb-1">
                  Family Dinners
                </h4>
                <p className="text-xs text-[#3E2723]/80 font-sans leading-relaxed">
                  Every night at 6:30 PM. 70k VND for home-cooked food with all the rice and dishes you want.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openBooking()}
                className="px-8 py-4 bg-[#1B3320] hover:bg-[#3E2723] text-[#F5F5F0] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#D4AF37] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                Book a Bed & Come Stay With Us
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
