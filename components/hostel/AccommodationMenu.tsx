'use client'

import React from 'react'
import { Users, Bed, Wifi, Wind, Lock, Shield, Check, Sparkles, ArrowRight, Sun, Bath } from 'lucide-react'
import { useHostelStore, RoomCategory } from '@/lib/store'

interface RoomOption {
  id: string
  title: string
  type: 'dorm' | 'private'
  categoryLabel: string
  capacity: string
  priceUSD: string
  priceVND: string
  unit: string
  description: string
  amenities: string[]
  badge: string
  availableCount: number
  image: string
}

const ROOM_OPTIONS: RoomOption[] = [
  {
    id: 'bamboo-dorm-8',
    title: '8-Bed Botanical Bamboo Dorm',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Person (Single Pod)',
    priceUSD: '$8',
    priceVND: '200,000 VND',
    unit: '/ night',
    description: 'Custom crafted solid teakwood bunk pods with privacy blackout curtains, dedicated USB & AC power sockets, personal locker, and reading light.',
    amenities: ['Individual Privacy Curtain', 'Solid Teak Construction', 'AC Aircon 24/7', 'Large Underbed Locker', 'Fresh Linen & Towel'],
    badge: 'MOST SOCIAL',
    availableCount: 4,
    image: '/images/secret_garden_social_night.jpg',
  },
  {
    id: 'teak-dorm-4',
    title: '4-Bed Intimate Garden Dorm',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Person (Spacious Pod)',
    priceUSD: '$11',
    priceVND: '275,000 VND',
    unit: '/ night',
    description: 'Quiet, premium low-density dorm with garden balcony views, orthopedic memory foam mattress, whisper-quiet Daikin aircon, and ensuite hot shower.',
    amenities: ['Ensuite Hot Shower', 'Garden Balcony Access', 'Orthopedic Mattress', 'Electronic Locker', 'Daily Housekeeping'],
    badge: 'COZY & QUIET',
    availableCount: 2,
    image: '/images/secret_garden_reception_bar.jpg',
  },
  {
    id: 'female-sanctuary-6',
    title: '6-Bed Female Courtyard Sanctuary',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Female Explorer',
    priceUSD: '$10',
    priceVND: '250,000 VND',
    unit: '/ night',
    description: 'Exclusive female-only sanctuary dorm located right near the inner herb courtyard. Features full vanity mirrors, hairdryer station, and security keypad lock.',
    amenities: ['Keypad Security Lock', 'Vanity & Hairdryer Hub', 'Privacy Curtains', 'Organic Herbal Toiletries', 'Courtyard View'],
    badge: 'FEMALE ONLY',
    availableCount: 3,
    image: '/images/secret_garden_entrance_arch.jpg',
  },
  {
    id: 'indochine-private-balcony',
    title: 'Colonial Deluxe Double Room',
    type: 'private',
    categoryLabel: 'Private Suite',
    capacity: 'Up to 2 Guests',
    priceUSD: '$29',
    priceVND: '725,000 VND',
    unit: '/ room / night',
    description: 'Grand colonial master bedroom with king teakwood bed, private French balcony overlooking limestone karst hills, ensuite mosaic bathroom, and artisanal tea bar.',
    amenities: ['King Teakwood Bed', 'Private Karst View Balcony', 'Ensuite Rain Shower', 'Handmade Phin Coffee Bar', 'Work Desk & Fast Fiber'],
    badge: 'PRIVATE SANCTUARY',
    availableCount: 1,
    image: '/images/courtyard_mural.png',
  },
  {
    id: 'garden-bungalow-suite',
    title: 'Secret Garden Botanical Suite',
    type: 'private',
    categoryLabel: 'Private Suite',
    capacity: 'Up to 3 Guests',
    priceUSD: '$38',
    priceVND: '950,000 VND',
    unit: '/ room / night',
    description: 'Secluded courtyard garden villa with 1 Queen Bed + 1 Daybed, outdoor bamboo outdoor shower patio, hammock corner, and complimentary fruit basket.',
    amenities: ['Queen Bed + Daybed', 'Private Bamboo Patio', 'Hammock Nook', 'Ensuite Stone Bathroom', 'Daily Breakfast Buffet'],
    badge: 'HOST FAVORITE',
    availableCount: 2,
    image: '/images/community_moment.png',
  },
]

export const AccommodationMenu: React.FC = () => {
  const { activeCategory, setCategory, selectRoom } = useHostelStore()

  const filteredRooms = ROOM_OPTIONS.filter((room) => {
    if (activeCategory === 'all') return true
    return room.type === activeCategory
  })

  return (
    <section id="rooms" className="w-full bg-[#F5F5F0] py-16 md:py-24 border-b border-[#D8D8CC] relative">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Filter Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#D8D8CC]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#3E2723] text-[#D4AF37] text-[11px] font-mono tracking-widest uppercase border border-[#3E2723] mb-2">
              <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ACCOMMODATION MENU</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320]">
              Handcrafted Beds & Suites
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2723]/90 font-sans max-w-[52ch] mt-1">
              Custom-welded steel & natural teakwood. Built for deep restorative sleep after long island treks.
            </p>
          </div>

          {/* Filter Pills (Zustand Controlled) */}
          <div className="flex items-center bg-[#E8E8DF] p-1 border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320]">
            {(['all', 'dorm', 'private'] as RoomCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1B3320] text-[#D4AF37] border border-[#1B3320]'
                    : 'text-[#3E2723] hover:text-[#1B3320]'
                }`}
              >
                {cat === 'all' ? 'All Spaces' : cat === 'dorm' ? 'Dorm Pods' : 'Private Rooms'}
              </button>
            ))}
          </div>
        </div>

        {/* Brutalist / Indochine List Layout (1px Solid Separator Lines) */}
        <div className="border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] bg-[#F5F5F0] divide-y divide-[#D8D8CC]">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="p-5 sm:p-7 hover:bg-[#E8E8DF]/60 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
            >
              {/* Left Details & Image Thumbnail */}
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center flex-1">
                
                {/* Thumbnail Stamp */}
                <div className="relative w-full sm:w-44 h-32 sm:h-28 overflow-hidden border-2 border-[#1B3320] shrink-0 bg-[#1B3320]">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-1 left-1 bg-[#1B3320] text-[#D4AF37] text-[9px] font-mono px-1.5 py-0.5 border border-[#D4AF37]">
                    {room.badge}
                  </span>
                </div>

                {/* Specs & Description */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3E2723] font-bold bg-[#E8E8DF] px-2 py-0.5 border border-[#D8D8CC]">
                      {room.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#1B3320] font-semibold">
                      <Users className="w-3 h-3 text-[#1B3320]" />
                      {room.capacity}
                    </span>
                    <span className="text-[10px] font-mono text-[#3E2723]/70">
                      • {room.availableCount} {room.type === 'dorm' ? 'beds' : 'rooms'} left for today
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B3320] group-hover:text-[#3E2723] transition-colors">
                    {room.title}
                  </h3>

                  <p className="text-xs text-[#3E2723]/90 max-w-[58ch] leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenity Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {room.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-mono bg-[#E8E8DF] text-[#1B3320] px-2 py-0.5 border border-[#D8D8CC]"
                      >
                        <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Pricing & Direct Select Button */}
              <div className="flex sm:flex-row lg:flex-col items-center sm:items-end justify-between sm:justify-end gap-4 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#D8D8CC]">
                <div className="text-left sm:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-[#1B3320]">
                      {room.priceUSD}
                    </span>
                    <span className="text-xs font-mono text-[#3E2723]">
                      {room.unit}
                    </span>
                  </div>
                  <span className="block text-[11px] font-mono text-[#3E2723]/80">
                    ≈ {room.priceVND}
                  </span>
                </div>

                <button
                  onClick={() => selectRoom(room.id)}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Select {room.type === 'dorm' ? 'Bed' : 'Room'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1B3320]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking Perks Strip */}
        <div className="mt-6 p-4 bg-[#E8E8DF] border border-[#1B3320] flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-[#1B3320]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Complimentary Island Breakfast (7:30 - 10:00 AM)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#D4AF37]" />
            <span>Secure Luggage Storage Before & After Check-In</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-[#D4AF37]" />
            <span>Cold AC & High-Pressure Showers Always Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  )
}
