'use client'

import React from 'react'
import { Sparkles, Heart, Coffee, Users, ShieldCheck, MapPin, Sun, TreePine } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const CourtyardStory: React.FC = () => {
  const { openBooking } = useHostelStore()

  return (
    <section id="courtyard" className="w-full bg-[#E8E8DF] py-16 md:py-24 border-b border-[#D8D8CC] relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Collage with Texture & Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-[#1B3320] shadow-[5px_5px_0px_0px_#1B3320] overflow-hidden bg-[#1B3320] h-60">
                <img
                  src="/images/courtyard_mural.png"
                  alt="Courtyard Mural & Plants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-2 border-[#1B3320] shadow-[5px_5px_0px_0px_#3E2723] overflow-hidden bg-[#3E2723] h-60 mt-6">
                <img
                  src="/images/indochine_cement_tile.png"
                  alt="Indochine Cement Tiles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote Badge */}
            <div className="mt-4 p-4 bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#1B3320]">
              <p className="font-serif italic text-sm text-[#1B3320] leading-relaxed">
                &ldquo;We didn&apos;t build a commercial hotel. We opened our family garden gates to wanderers who value raw conversations over generic luxury.&rdquo;
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#3E2723] font-bold">
                — Mama Huong & Son (Secret Garden Founders)
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Island Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#1B3320] text-[#D4AF37] text-[11px] font-mono tracking-widest uppercase border border-[#1B3320] mb-2">
                <TreePine className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>THE INDOCHINE SANCTUARY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320] leading-tight">
                An authentic haven nestled under Cat Ba karst cliffs.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#3E2723]/90 font-sans leading-relaxed">
              Tucked away behind climbing bougainvillea and tall bamboo palms, Secret Garden is where island adventurers gather to trade route tips, drink fresh drip coffee, and rest in handmade teakwood beds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-[#F5F5F0] border border-[#1B3320]">
                <div className="flex items-center gap-2 mb-1">
                  <Coffee className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="font-serif font-bold text-sm text-[#1B3320]">Artisanal Phin Bar</h4>
                </div>
                <p className="text-xs text-[#3E2723]/80">
                  Slow-dripped robusta sourced from Dalat highlands, condensed milk, and fresh coconuts.
                </p>
              </div>

              <div className="p-3.5 bg-[#F5F5F0] border border-[#1B3320]">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="font-serif font-bold text-sm text-[#1B3320]">Family Dinners</h4>
                </div>
                <p className="text-xs text-[#3E2723]/80">
                  Every evening at 6:30 PM, all travelers sit together around long courtyard tables.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openBooking()}
                className="px-6 py-3.5 bg-[#1B3320] hover:bg-[#3E2723] text-[#F5F5F0] font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#D4AF37] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                Reserve Your Bed & Join The Family
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
