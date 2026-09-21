'use client'

import React from 'react'
import { HeaderNavBar } from '@/components/hostel/HeaderNavBar'
import { HeroImmersive } from '@/components/hostel/HeroImmersive'
import { TheHostVibeBoard } from '@/components/hostel/TheHostVibeBoard'
import { Expeditions } from '@/components/hostel/Expeditions'
import { AccommodationMenu } from '@/components/hostel/AccommodationMenu'
import { CourtyardStory } from '@/components/hostel/CourtyardStory'
import { BottomNav } from '@/components/hostel/BottomNav'
import { BookingDrawer } from '@/components/hostel/BookingDrawer'
import { MapPin, Phone, Mail, Compass, Heart, Sparkles, Coffee } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export default function Page() {
  const { openBooking } = useHostelStore()

  return (
    <main className="w-full min-h-screen bg-[#F5F5F0] text-[#1B3320] relative pb-20 md:pb-0 overflow-x-hidden">
      
      {/* 1. Colonial Header with Live Island Weather */}
      <HeaderNavBar />

      {/* 2. HeroImmersive: Layered Overlapping Visuals & Pinned Gold CTA */}
      <HeroImmersive />

      {/* 3. TheHostVibeBoard: Asymmetrical Bento Grid for Daily Social Pulse */}
      <TheHostVibeBoard />

      {/* 4. Expeditions: Horizontal Swipeable Tours Container */}
      <Expeditions />

      {/* 5. AccommodationMenu: Brutalist Indochine List Layout */}
      <AccommodationMenu />

      {/* 6. Courtyard Atmosphere & Story */}
      <CourtyardStory />

      {/* 7. Indochine Deep Courtyard Footer */}
      <footer className="w-full bg-[#1B3320] text-[#F5F5F0] pt-16 pb-12 border-t-2 border-[#D4AF37] relative">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#F5F5F0]/20">
            
            {/* Column 1: Brand & Emblem */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-[#D4AF37] bg-white overflow-hidden shadow-[3px_3px_0px_0px_#000]">
                  <img
                    src="/images/secret_garden_logo.jpg"
                    alt="Secret Garden Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F5F0]">
                    Secret Garden Hostel
                  </h3>
                  <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                    Cat Ba Island • Vietnam
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#F5F5F0]/80 leading-relaxed max-w-[42ch]">
                An organic, host-centric sanctuary built with raw teakwood, Vietnamese brick, and lush rain tree foliage. Your home on the island.
              </p>

              <div className="text-xs font-mono text-[#D4AF37] flex items-center gap-2">
                <span>✦ Est. 2017</span>
                <span>•</span>
                <span>Hostelworld 9.8 Rated</span>
                <span>•</span>
                <span>Lonely Planet Recommended</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Courtyard Navigation
              </h4>
              <ul className="space-y-2 text-xs font-mono text-[#F5F5F0]/85">
                <li>
                  <a href="#vibe" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <span>→</span> The Host Vibe Board
                  </a>
                </li>
                <li>
                  <a href="#expeditions" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <span>→</span> Lan Ha Bay Plankton Tour
                  </a>
                </li>
                <li>
                  <a href="#expeditions" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <span>→</span> Ha Giang Loop Expeditions
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <span>→</span> Handcrafted Dorms & Suites
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => openBooking()}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-[#D4AF37] font-bold cursor-pointer"
                  >
                    <span>✦</span> Book Direct for Best Rates
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Location */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Island Reception Desk
              </h4>
              <div className="space-y-2 text-xs text-[#F5F5F0]/85">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>123 Nui Ngoc Street, Cat Ba Town, Hai Phong, Vietnam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>WhatsApp: +84 987 654 321 (24/7 Desk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>hello@secretgardenhostelcatba.com</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking()}
                  className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-xs uppercase tracking-wider border border-[#1B3320] shadow-[3px_3px_0px_0px_#000] cursor-pointer"
                >
                  Direct Booking Desk
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Design Badge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F5F0]/60">
            <div>
              © {new Date().getFullYear()} Secret Garden Hostel Cat Ba. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <span>Crafted with Organic Indochine Aesthetics</span>
              <span>•</span>
              <span>No AI Slop</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. Heavy Dark Mahogany Pinned Bottom Navigation for Mobile */}
      <BottomNav />

      {/* 9. Global Functional Booking Drawer */}
      <BookingDrawer />

    </main>
  )
}
