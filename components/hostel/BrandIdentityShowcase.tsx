'use client'

import React, { useState } from 'react'
import { Sparkles, Check, Copy, ExternalLink, Key, Tag, Award, Compass, Eye } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const BrandIdentityShowcase: React.FC = () => {
  const { openBooking } = useHostelStore()
  const [showFullBoard, setShowFullBoard] = useState(false)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'visual' | 'materials' | 'physical'>('all')

  const copyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  return (
    <section id="identity" className="w-full bg-[#F5F5F0] py-20 md:py-32 border-b border-[#1B3320]/20 relative overflow-hidden">
      
      {/* Background Subtle Indochine Cement Texture Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-repeat"
        style={{ backgroundImage: 'url(/images/indochine_cement_tile.png)', backgroundSize: '180px 180px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b-2 border-[#1B3320]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase mb-4 border border-[#1B3320]">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>OFFICIAL 9-PANEL BRAND SYSTEM & DESIGN SPECIFICATIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1B3320] leading-[1.05]">
              The Secret Garden Design System
            </h2>
            <p className="text-base sm:text-lg text-[#3E2723] font-sans mt-4 leading-relaxed max-w-2xl">
              An intentional visual language balancing 1920s Indochine botanical heritage with raw, tactile backpacker utility. Zero AI marketing slop.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowFullBoard(true)}
              className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#1B3320] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1B3320] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#1B3320]" />
              <span>View Master 9-Panel Deck</span>
            </button>
          </div>
        </div>

        {/* Master Brand Deck Featured Interactive Banner */}
        <div 
          onClick={() => setShowFullBoard(true)}
          className="relative w-full border-2 border-[#1B3320] shadow-[8px_8px_0px_0px_#1B3320] overflow-hidden bg-[#1B3320] mb-16 cursor-pointer group"
        >
          <img
            src="/images/secret_garden_brandkit.jpg"
            alt="Secret Garden Hostel 9-Panel Brand Identity Guidelines Board"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 bg-[#1B3320]/95 text-[#D4AF37] border border-[#D4AF37] px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
            MASTER BRAND SPECIFICATION • 9 TILES
          </div>
          <div className="absolute bottom-4 right-4 bg-[#1B3320]/95 text-[#F5F5F0] border-2 border-[#D4AF37] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Click to Expand High-Resolution Board</span>
          </div>
        </div>

        {/* The 9 Deep-Dive System Panels */}
        <div className="space-y-12">
          
          <div className="flex items-center justify-between border-b border-[#D8D8CC] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
              9 Core Architectural & Visual Touchpoints
            </h3>
            <span className="text-xs font-mono text-[#3E2723] uppercase tracking-widest">
              GRID BREAKDOWN 01 — 09
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* PANEL 1: Primary Logo Cover */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 01
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    PRIMARY LOGO
                  </span>
                </div>

                <div className="bg-[#1B3320] p-6 border-2 border-[#1B3320] text-center mb-4 relative overflow-hidden">
                  <div className="w-20 h-20 mx-auto rounded-2xl border-2 border-[#D4AF37] bg-[#1B3320] p-1 shadow-md mb-3">
                    <img
                      src="/images/secret_garden_logo.svg"
                      alt="Secret Garden Botanical Seal"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#F5F5F0] tracking-tight">
                    Secret Garden
                  </h4>
                  <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mt-0.5">
                    Cat Ba Island • Vietnam
                  </p>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Botanical Circular Seal & Wordmark
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Crafted circular wreath seal symbolizing tropical courtyard foliage, set alongside a tailored serif logotype.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Usage: Signage, stamps, letterpress keycards.
              </div>
            </div>

            {/* PANEL 2: Symbol Construction */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 02
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    GRID BLUEPRINT
                  </span>
                </div>

                {/* Blueprint Graphic */}
                <div className="bg-[#1B3320] p-5 border-2 border-[#1B3320] text-[#D4AF37] font-mono text-[11px] mb-4 relative">
                  <div className="border border-dashed border-[#D4AF37]/50 p-3 relative">
                    <div className="flex items-center justify-between text-[10px] mb-2 text-[#F5F5F0]/80">
                      <span>ARC: 109° RADIAL</span>
                      <span>RATIO: 1:1.618</span>
                    </div>
                    <div className="h-16 flex items-center justify-center border border-[#D4AF37]/30 bg-black/40">
                      <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center">
                        <div className="w-6 h-6 border border-dashed border-[#D4AF37]" />
                      </div>
                    </div>
                    <div className="mt-2 text-center text-[9px] text-[#D4AF37] tracking-wider uppercase">
                      Architectural Symmetry Grid
                    </div>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Geometric Arc & Grid Breakdown
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Rigid architectural alignment rooted in Indochine colonial archways and symmetrical Vietnamese courtyard proportions.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Specs: 109° arc angles, 2px stroke weight.
              </div>
            </div>

            {/* PANEL 3: Digital UI Application */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 03
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    DIRECT UI ENGINE
                  </span>
                </div>

                {/* Mini UI Preview Box */}
                <div className="bg-[#F5F5F0] p-4 border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] mb-4">
                  <div className="text-[10px] font-mono uppercase font-bold text-[#3E2723] mb-1.5 flex justify-between">
                    <span>Direct Booking UI</span>
                    <span className="text-[#4A7C59]">LIVE ENGINE</span>
                  </div>
                  <div className="bg-[#E8E8DF] p-2 border border-[#1B3320] text-xs font-mono text-[#1B3320] flex justify-between items-center mb-2">
                    <span>8-Bed Dorm Bunk</span>
                    <span className="font-bold text-[#1B3320]">$8 / night</span>
                  </div>
                  <button 
                    onClick={() => openBooking()}
                    className="w-full py-1.5 bg-[#D4AF37] text-[#1B3320] font-mono text-[10px] font-bold uppercase border border-[#1B3320] shadow-[2px_2px_0px_0px_#1B3320]"
                  >
                    Test Drawer Booking
                  </button>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Tactile Rice-Paper Interface
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  High-contrast typography, harsh solid shadows, and zero marketing friction for seamless backpacker bookings.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Platform: Next.js Server Actions + Zustand.
              </div>
            </div>

            {/* PANEL 4: Brand Essence */}
            <div className="bg-[#1B3320] text-[#F5F5F0] border-2 border-[#D4AF37] p-6 shadow-[5px_5px_0px_0px_#000] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/20">
                  <span className="font-mono text-xs font-bold text-[#1B3320] bg-[#D4AF37] px-2.5 py-0.5 border border-[#D4AF37]">
                    PANEL 04
                  </span>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                    CORE ETHOS
                  </span>
                </div>

                <div className="my-6">
                  <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2 font-bold">
                    The Triad Principle
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-black text-white leading-tight">
                    &ldquo;Clean beds, cold beer, good people.&rdquo;
                  </div>
                </div>

                <p className="text-xs text-white/85 leading-relaxed font-sans">
                  Zero AI fluff words. No fake &quot;sanctuary&quot; talk. Just solid mattresses, cheap Hanoi beer, and a social courtyard where travelers actually meet.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20 text-[11px] font-mono text-[#D4AF37] font-semibold">
                Voice: Direct, honest, peer-to-peer backpacker.
              </div>
            </div>

            {/* PANEL 5: Color System & Materials */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 05
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    PALETTE & MATERIAL
                  </span>
                </div>

                {/* Swatch Matrix */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div 
                    onClick={() => copyColor('#F5F5F0')}
                    className="p-2.5 bg-[#F5F5F0] border border-[#1B3320] text-left cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="block text-[10px] font-mono font-bold text-[#1B3320]">Rice Paper</span>
                    <span className="text-[9px] font-mono text-[#3E2723]">#F5F5F0</span>
                  </div>
                  <div 
                    onClick={() => copyColor('#1B3320')}
                    className="p-2.5 bg-[#1B3320] text-white border border-[#1B3320] text-left cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="block text-[10px] font-mono font-bold text-[#D4AF37]">Jungle Green</span>
                    <span className="text-[9px] font-mono text-white/80">#1B3320</span>
                  </div>
                  <div 
                    onClick={() => copyColor('#3E2723')}
                    className="p-2.5 bg-[#3E2723] text-white border border-[#1B3320] text-left cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="block text-[10px] font-mono font-bold text-[#D4AF37]">Mahogany</span>
                    <span className="text-[9px] font-mono text-white/80">#3E2723</span>
                  </div>
                  <div 
                    onClick={() => copyColor('#D4AF37')}
                    className="p-2.5 bg-[#D4AF37] text-black border border-[#1B3320] text-left cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="block text-[10px] font-mono font-bold text-[#1B3320]">Colonial Gold</span>
                    <span className="text-[9px] font-mono text-black/80">#D4AF37</span>
                  </div>
                </div>

                {/* Cement Tile Chip */}
                <div className="flex items-center gap-3 p-2 bg-[#F5F5F0] border border-[#1B3320]">
                  <div className="w-10 h-10 border border-[#1B3320] overflow-hidden shrink-0">
                    <img
                      src="/images/indochine_cement_tile.png"
                      alt="Indochine Cement Tile Chip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-[#1B3320]">
                    <div className="font-bold">Indochine Cement Tile</div>
                    <div className="text-[#3E2723]/70">Courtyard encaustic motif</div>
                  </div>
                </div>

                {copiedHex && (
                  <div className="mt-2 text-center text-[10px] font-mono text-[#4A7C59] font-bold">
                    Copied {copiedHex} to clipboard!
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Click any swatch to copy HEX code.
              </div>
            </div>

            {/* PANEL 6: Typography System */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 06
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    TYPE SPECIMEN
                  </span>
                </div>

                {/* Typography Showcase */}
                <div className="bg-[#F5F5F0] p-4 border border-[#1B3320] space-y-3 mb-4">
                  <div>
                    <div className="text-[9px] font-mono uppercase text-[#3E2723] font-bold">Display Serif</div>
                    <div className="font-serif text-2xl font-bold text-[#1B3320]">
                      Playfair Display
                    </div>
                    <div className="font-serif italic text-sm text-[#3E2723]">
                      Aa Bb Gg Qq 123 &amp; ?
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#D8D8CC]">
                    <div className="text-[9px] font-mono uppercase text-[#3E2723] font-bold">Body &amp; UI Sans</div>
                    <div className="font-sans font-semibold text-sm text-[#1B3320]">
                      Be Vietnam Pro (Latin &amp; Diacritics)
                    </div>
                    <div className="font-mono text-[10px] text-[#3E2723]">
                      JetBrains Mono for timetables &amp; prices
                    </div>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Dual-Script Editorial Contrast
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Playfair brings French Indochine literary elegance; Be Vietnam Pro delivers pixel-perfect legibility for mobile bookings.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Hierarchy: Display 64px / Body 16px / Mono 12px.
              </div>
            </div>

            {/* PANEL 7: Physical Touchpoints */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 07
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    PHYSICAL ARTIFACTS
                  </span>
                </div>

                {/* 3 Physical Tokens */}
                <div className="space-y-2 mb-4">
                  {/* Leather Key Fob */}
                  <div className="flex items-center gap-3 p-2 bg-[#3E2723] text-[#F5F5F0] border border-black">
                    <Key className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <div className="text-left">
                      <div className="text-[11px] font-mono font-bold text-[#D4AF37]">Embossed Leather Key Fob</div>
                      <div className="text-[9px] font-mono text-white/70">Dorm Room 04 • Bunk B</div>
                    </div>
                  </div>

                  {/* Kraft Tag */}
                  <div className="flex items-center gap-3 p-2 bg-[#D4AF37]/20 border border-[#1B3320] text-[#1B3320]">
                    <Tag className="w-5 h-5 text-[#1B3320] shrink-0" />
                    <div className="text-left">
                      <div className="text-[11px] font-mono font-bold text-[#1B3320]">Kraft Luggage Stamp Tag</div>
                      <div className="text-[9px] font-mono text-[#3E2723]">Lan Ha Bay Express • Cat Ba</div>
                    </div>
                  </div>

                  {/* Brass Token */}
                  <div className="flex items-center gap-3 p-2 bg-[#D4AF37] border border-black text-[#1B3320]">
                    <Award className="w-5 h-5 text-[#1B3320] shrink-0" />
                    <div className="text-left">
                      <div className="text-[11px] font-mono font-bold">Solid Brass Bar Token</div>
                      <div className="text-[9px] font-mono">1 Free Bia Ha Noi @ Courtyard Bar</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Tactile Guest Collateral
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Real physical items given to every guest at reception that feel heavy, authentic, and memorable.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Materials: Full-grain leather, 350gsm kraft, raw brass.
              </div>
            </div>

            {/* PANEL 8: Atmospheric Photography */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 08
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    ATMOSPHERIC LENS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="h-24 border-2 border-[#1B3320] overflow-hidden bg-black relative">
                    <img
                      src="/images/secret_garden_social_night.jpg"
                      alt="Courtyard Twilight"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1 bg-black/80 text-[8px] font-mono text-white px-1">
                      Courtyard Lanterns
                    </span>
                  </div>
                  <div className="h-24 border-2 border-[#1B3320] overflow-hidden bg-black relative">
                    <img
                      src="/images/secret_garden_reception_bar.jpg"
                      alt="Lan Ha Bay Bar"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1 bg-black/80 text-[8px] font-mono text-white px-1">
                      Garden Bar
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Karst Twilight &amp; Lantern Glow
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Art direction focused on honest ambient warmth: low ISO, tungsten courtyard lanterns, and misty limestone cliffs.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20 text-[11px] font-mono text-[#1B3320] font-semibold">
                Color Grade: Deep shadows, warm amber highlights.
              </div>
            </div>

            {/* PANEL 9: Event System */}
            <div className="bg-[#E8E8DF] border-2 border-[#1B3320] p-6 shadow-[5px_5px_0px_0px_#1B3320] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B3320]/20">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1B3320] px-2.5 py-0.5 border border-[#1B3320]">
                    PANEL 09
                  </span>
                  <span className="text-[10px] font-mono text-[#3E2723] uppercase tracking-widest font-bold">
                    EVENT POSTERS
                  </span>
                </div>

                <div className="bg-[#1B3320] p-3 border-2 border-[#1B3320] text-white text-xs font-mono space-y-1.5 mb-4">
                  <div className="flex justify-between items-center text-[#D4AF37] font-bold">
                    <span>WEEKLY FLYER SUITE</span>
                    <span>NOTICEBOARD</span>
                  </div>
                  <div className="text-[10px] text-white/90">✦ Pub Quiz (Wed &amp; Sun 8:00 PM)</div>
                  <div className="text-[10px] text-white/90">✦ Courtyard Cinema (Thu &amp; Mon)</div>
                  <div className="text-[10px] text-white/90">✦ Bracelet Workshop (Tue &amp; Sat 7:30 PM)</div>
                  <div className="text-[10px] text-white/90">✦ Cooking Class (Daily 5:00 PM)</div>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1B3320] mb-1">
                  Tactile Physical Event Flyers
                </h4>
                <p className="text-xs text-[#3E2723] leading-relaxed font-sans">
                  Noticeboard flyer system printed on heavy cardstock with distinct visual identities for every courtyard social night.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B3320]/20">
                <a 
                  href="#vibe"
                  className="text-[11px] font-mono text-[#1B3320] font-bold hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                >
                  <span>Explore Event Posters Section</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Direct Booking Guarantee Card */}
        <div className="mt-16 p-8 sm:p-10 bg-[#1B3320] text-[#F5F5F0] border-2 border-[#D4AF37] shadow-[8px_8px_0px_0px_#000] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#D4AF37] text-[#1B3320] text-[10px] font-mono font-bold tracking-widest uppercase">
              DIRECT BOOKING GUARANTEE
            </div>
            <h4 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Stay in Cat Ba&apos;s most authentic garden hostel
            </h4>
            <p className="text-sm text-[#F5F5F0]/80 font-sans leading-relaxed">
              Book direct with zero booking fees, free date changes, and your free welcome Bia Ha Noi brass token waiting at reception.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-widest border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              Book Your Bed Now
            </button>
          </div>
        </div>

      </div>

      {/* High-Resolution Modal Lightbox for 9-Panel Deck */}
      {showFullBoard && (
        <div 
          onClick={() => setShowFullBoard(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-6xl w-full max-h-[92vh] overflow-auto border-2 border-[#D4AF37] shadow-2xl bg-black">
            <div className="sticky top-0 right-0 z-20 flex justify-between items-center bg-[#1B3320] border-b border-[#D4AF37] px-4 py-2.5 text-white">
              <span className="font-mono text-xs text-[#D4AF37] uppercase font-bold">
                Secret Garden Hostel • 9-Panel Brand Identity Deck
              </span>
              <button
                onClick={() => setShowFullBoard(false)}
                className="px-3 py-1 bg-[#3E2723] text-white hover:bg-[#D4AF37] hover:text-black font-mono text-xs border border-white/40 cursor-pointer"
              >
                ✕ Close Deck
              </button>
            </div>
            <img
              src="/images/secret_garden_brandkit.jpg"
              alt="Secret Garden Hostel Brand Identity Guidelines Deck"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

    </section>
  )
}
