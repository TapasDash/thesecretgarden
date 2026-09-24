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
import { FloatingContactWidget } from '@/components/hostel/FloatingContactWidget'
import { useHostelStore } from '@/lib/store'
import { HOSTEL_CONFIG } from '@/lib/config'

export default function Page() {
  const { openBooking } = useHostelStore()

  return (
    <main className="w-full min-h-screen bg-[#F5F5F0] text-[#1B3320] relative pb-20 md:pb-0 overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <HeaderNavBar />

      {/* 2. Hero Availability & Atmosphere */}
      <HeroImmersive />

      {/* 3. The Courtyard Events Noticeboard (Bracelet Workshop, Cooking Class, Quiz Night, Movie Night) */}
      <TheHostVibeBoard />

      {/* 4. Island Expeditions (Lan Ha Bay Kayak & Bioluminescent Plankton, Ha Giang Loop) */}
      <Expeditions />

      {/* 5. Accommodation Menu (Solid Teak Dorms & Balcony Private Rooms) */}
      <AccommodationMenu />

      {/* 6. Courtyard & Founder Story */}
      <CourtyardStory />

      {/* 7. Clean Editorial Footer */}
      <footer className="w-full bg-[#1B3320] text-[#F5F5F0] pt-20 pb-16 border-t-2 border-[#D4AF37] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5F5F0]/15">
            
            {/* Column 1: Brand */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl border border-[#D4AF37]/30 bg-white overflow-hidden shadow-sm shrink-0">
                  <img
                    src="/images/secret_garden_logo.jpg"
                    alt="Secret Garden Hostel Logo"
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

              <p className="text-sm text-[#F5F5F0]/80 leading-relaxed max-w-md font-sans">
                Solid wooden bunks, cold AC, good coffee, cheap beer, and free family dinners. A straightforward spot to stay and meet people.
              </p>

              <div className="text-xs font-mono text-[#D4AF37] pt-1">
                Open since 2017 • 9.8 on Hostelworld • 123 Nui Ngoc, Cat Ba Town
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-mono text-[#F5F5F0]/80">
                <li>
                  <a href="#rooms" className="hover:text-[#D4AF37] transition-colors">
                    Dorms &amp; Private Rooms
                  </a>
                </li>
                <li>
                  <a href="#vibe" className="hover:text-[#D4AF37] transition-colors">
                    Weekly Events &amp; Workshops
                  </a>
                </li>
                <li>
                  <a href="#expeditions" className="hover:text-[#D4AF37] transition-colors">
                    Lan Ha Bay Plankton Tour
                  </a>
                </li>
                <li>
                  <a href="#expeditions" className="hover:text-[#D4AF37] transition-colors">
                    Ha Giang Loop Road Trip
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => openBooking()}
                    className="hover:text-[#D4AF37] transition-colors text-[#D4AF37] font-bold cursor-pointer"
                  >
                    Book Direct (Cheapest Price)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Front Desk &amp; Location
              </h4>
              <div className="space-y-1.5 text-xs font-mono text-[#F5F5F0]/80">
                <div>{HOSTEL_CONFIG.location}</div>
                <div>
                  <a
                    href={HOSTEL_CONFIG.getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    WhatsApp: {HOSTEL_CONFIG.whatsappDisplay} (Front Desk 24/7)
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${HOSTEL_CONFIG.email}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {HOSTEL_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => openBooking()}
                  className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,175,55,0.3)] active:scale-95 transition-all cursor-pointer"
                >
                  Direct Booking Desk
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F5F0]/50">
            <div>
              © {new Date().getFullYear()} Secret Garden Hostel Cat Ba.
            </div>
            <div>
              Cat Ba Island, Hai Phong, Vietnam
            </div>
          </div>
        </div>
      </footer>

      {/* 8. Mobile Bottom Nav */}
      <BottomNav />

      {/* 9. Direct Reservation Drawer */}
      <BookingDrawer />

      {/* 10. Floating WhatsApp & Zalo Quick Desk */}
      <FloatingContactWidget />

    </main>
  )
}
