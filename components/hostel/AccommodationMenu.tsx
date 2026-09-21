'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
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
  availableCount: number
  image: string
}

const ROOM_OPTIONS: RoomOption[] = [
  {
    id: 'bamboo-dorm-8',
    title: '8-Bed Wooden Dorm',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Bunk',
    priceUSD: '$8',
    priceVND: '200,000 VND',
    unit: '/ night',
    description: 'Heavy solid wooden bunks that do not squeak or shake when someone climbs up. Thick blackout curtains, personal power socket, reading light, and large under-bed lockbox.',
    amenities: ['Full blackout privacy curtain', 'Solid wooden bunks (no squeaks)', 'AC running all night', 'Large lockbox under bed', 'Clean sheets & towel included'],
    availableCount: 4,
    image: '/images/secret_garden_social_night.jpg',
  },
  {
    id: 'teak-dorm-4',
    title: '4-Bed Small Garden Dorm',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Bunk',
    priceUSD: '$11',
    priceVND: '275,000 VND',
    unit: '/ night',
    description: 'Quieter 4-bed dorm with its own ensuite bathroom and strong hot shower. Ideal if you want proper rest before early morning island hikes.',
    amenities: ['Ensuite bathroom & hot shower', 'Garden view window', 'Thick spring mattress', 'Keypad door lock', 'Daily housekeeping'],
    availableCount: 2,
    image: '/images/secret_garden_reception_bar.jpg',
  },
  {
    id: 'female-dorm-6',
    title: '6-Bed Female Dorm',
    type: 'dorm',
    categoryLabel: 'Dorm Bed',
    capacity: '1 Bunk',
    priceUSD: '$10',
    priceVND: '250,000 VND',
    unit: '/ night',
    description: 'Female-only room located on the quiet garden courtyard side. Includes vanity mirror station, hair dryers, privacy curtains on all bunks, and lockboxes.',
    amenities: ['Secure keypad door lock', 'Vanity station & hair dryers', 'Full privacy curtains', 'Individual lockboxes', 'Courtyard garden view'],
    availableCount: 3,
    image: '/images/secret_garden_entrance_arch.jpg',
  },
  {
    id: 'indochine-private-balcony',
    title: 'Private Double Room with Balcony',
    type: 'private',
    categoryLabel: 'Private Room',
    capacity: 'Up to 2 people',
    priceUSD: '$29',
    priceVND: '725,000 VND',
    unit: '/ night',
    description: 'King wooden bed, private balcony overlooking limestone cliffs, private bathroom with strong hot shower, and quiet Daikin air conditioning.',
    amenities: ['King-size wooden bed', 'Private mountain balcony', 'Ensuite hot rain shower', 'Coffee station & kettle', 'Work desk & fast Wi-Fi'],
    availableCount: 1,
    image: '/images/courtyard_mural.png',
  },
  {
    id: 'garden-bungalow-suite',
    title: 'Garden Bungalow (1 Double + 1 Single)',
    type: 'private',
    categoryLabel: 'Private Room',
    capacity: 'Up to 3 people',
    priceUSD: '$38',
    priceVND: '950,000 VND',
    unit: '/ night',
    description: 'Detached garden bungalow with 1 queen bed and 1 single daybed. Features a private bamboo outdoor patio with hammock and private stone bathroom.',
    amenities: ['1 Queen Bed + 1 Single Bed', 'Private bamboo patio with hammock', 'Ensuite stone bathroom', 'Free big breakfast included', 'Quiet garden corner'],
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
    <section id="rooms" className="w-full bg-[#F5F5F0] py-20 md:py-32 border-b border-[#1B3320]/15 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Filter Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#D8D8CC]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#3E2723] font-semibold mb-3">
              Rooms & Beds
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320] mb-3">
              Dorms and private rooms
            </h2>
            <p className="text-sm sm:text-base text-[#3E2723]/90 font-sans max-w-xl leading-relaxed">
              Solid wood frames, thick mattresses, cold AC running all night, and hot high-pressure showers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center bg-[#E8E8DF] p-1 border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320]">
            {(['all', 'dorm', 'private'] as RoomCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1B3320] text-[#D4AF37]'
                    : 'text-[#3E2723] hover:text-[#1B3320]'
                }`}
              >
                {cat === 'all' ? 'All Rooms' : cat === 'dorm' ? 'Dorms' : 'Private Rooms'}
              </button>
            ))}
          </div>
        </div>

        {/* Brutalist List Layout */}
        <div className="border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] bg-[#F5F5F0] divide-y-2 divide-[#1B3320]">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="p-6 sm:p-8 hover:bg-[#E8E8DF]/60 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center flex-1">
                
                {/* Thumbnail */}
                <div className="relative w-full sm:w-48 h-36 overflow-hidden border-2 border-[#1B3320] shrink-0 bg-[#1B3320]">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-2 left-2 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono font-bold px-2 py-0.5 border border-[#D4AF37]">
                    {room.categoryLabel}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#3E2723]">
                    <span className="font-bold">{room.capacity}</span>
                    <span>•</span>
                    <span>{room.availableCount} {room.type === 'dorm' ? 'beds' : 'rooms'} open today</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1B3320]">
                    {room.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3E2723]/90 max-w-2xl leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {room.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-[#E8E8DF] text-[#1B3320] px-2.5 py-1 border border-[#D8D8CC]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Price & Action */}
              <div className="flex sm:flex-row lg:flex-col items-center sm:items-end justify-between sm:justify-end gap-5 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D8D8CC]">
                <div className="text-left sm:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-[#1B3320]">
                      {room.priceUSD}
                    </span>
                    <span className="text-xs font-mono text-[#3E2723]">
                      {room.unit}
                    </span>
                  </div>
                  <span className="block text-xs font-mono text-[#3E2723]/70">
                    ≈ {room.priceVND}
                  </span>
                </div>

                <button
                  onClick={() => selectRoom(room.id)}
                  className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Select {room.type === 'dorm' ? 'Bed' : 'Room'}</span>
                  <ArrowRight className="w-4 h-4 text-[#1B3320]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 p-6 bg-[#E8E8DF] border-2 border-[#1B3320] flex flex-wrap items-center justify-around gap-6 text-xs font-mono text-[#1B3320]">
          <div>Free big breakfast every morning (7:30 - 10:00 AM)</div>
          <div>Free bag storage before check-in & after check-out</div>
          <div>Cold AC & hot showers guaranteed 24/7</div>
        </div>

      </div>
    </section>
  )
}
