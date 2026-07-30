'use client'

import { HeaderNavBar } from '@/components/hostel/HeaderNavBar'
import { HeroBookingWidget } from '@/components/hostel/HeroBookingWidget'
import { InteriorShowcase } from '@/components/hostel/InteriorShowcase'
import { RoomGrid } from '@/components/hostel/RoomGrid'
import { HostelAmenities } from '@/components/hostel/HostelAmenities'
import { BottomNavBar } from '@/components/hostel/BottomNavBar'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'

const CourtyardScene = dynamic(
  () => import('@/components/3d/CourtyardScene').then((mod) => mod.CourtyardScene),
  { ssr: false }
)

export default function Page() {
  const [show3DCourtyard, setShow3DCourtyard] = useState(false)

  return (
    <main className="w-full min-h-screen relative pb-16 md:pb-0">
      {/* Top Desktop Navigation */}
      <HeaderNavBar />

      {/* 3D Courtyard Floating Toggle */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40">
        <button
          onClick={() => setShow3DCourtyard(!show3DCourtyard)}
          className="px-4 py-3 bg-[var(--accent-green)] text-white text-xs font-bold uppercase tracking-wider shadow-indochine transition-all hover:scale-105 border border-[var(--border-primary)] flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[var(--accent-gold)]" />
          <span>{show3DCourtyard ? 'Close 3D View' : 'Explore 3D Courtyard'}</span>
        </button>
      </div>

      {/* 3D Courtyard Modal Overlay */}
      {show3DCourtyard && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl h-[80vh] bg-[var(--text-primary)] border-2 border-[var(--border-primary)] relative overflow-hidden shadow-indochine-lg">
            <button
              onClick={() => setShow3DCourtyard(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white text-black font-bold border border-black shadow-md hover:bg-gray-100 cursor-pointer"
              aria-label="Close 3D Courtyard"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full">
              <CourtyardScene />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section & Booking Widget */}
      <HeroBookingWidget />

      {/* Real Interior & Atmosphere Showcase */}
      <InteriorShowcase />

      {/* Accommodations Grid */}
      <RoomGrid />

      {/* Amenities Section */}
      <HostelAmenities />

      {/* Footer Section */}
      <footer className="w-full py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] text-center text-sm text-[var(--text-secondary)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="font-serif font-bold text-lg text-[var(--text-primary)] mb-2">
            Secret Garden Hostel • Cat Ba Island
          </p>
          <p className="text-xs mb-4">
            123 Nui Ngoc Street, Cat Ba Town, Hai Phong, Vietnam
          </p>
          <p className="text-[11px] text-[var(--text-secondary)] opacity-80">
            © {new Date().getFullYear()} Secret Garden Hostel. All rights reserved. Crafted with Indochine Aesthetics.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <BottomNavBar />
    </main>
  )
}
