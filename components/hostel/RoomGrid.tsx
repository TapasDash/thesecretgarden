'use client'

import { useState } from 'react'
import { Users, Wifi, ShieldCheck, Wind, Check, Star, X, CheckCircle2, ArrowRight } from 'lucide-react'

interface Room {
  id: string
  name: string
  type: 'mixed' | 'female' | 'private'
  capacity: number
  pricePerNight: number
  description: string
  amenities: string[]
  badge: string
}

const rooms: Room[] = [
  {
    id: 'mixed-1',
    name: 'Mixed Dorm (8-Bed)',
    type: 'mixed',
    capacity: 8,
    pricePerNight: 12,
    badge: 'Popular Backpackers',
    description: 'Vibrant, spacious dorm with high ceilings, personal reading lights, and privacy curtains.',
    amenities: ['Personal Locker', 'Reading Lamp', 'Power Outlet', 'Shared Bath'],
  },
  {
    id: 'mixed-2',
    name: 'Mixed Dorm (6-Bed)',
    type: 'mixed',
    capacity: 6,
    pricePerNight: 15,
    badge: 'Cozy Social',
    description: 'Smaller mixed dorm with enhanced quiet hours and climate control A/C.',
    amenities: ['Lockers', 'A/C', 'Shared Bath', 'Privacy Curtain'],
  },
  {
    id: 'female-1',
    name: 'Female Dorm (6-Bed)',
    type: 'female',
    capacity: 6,
    pricePerNight: 14,
    badge: 'Female Sanctuary',
    description: 'Thoughtfully designed female-only dorm with vanity mirrors and ensuite bathroom.',
    amenities: ['Ensuite Bath', 'Vanity Mirror', 'Lockers', 'A/C'],
  },
  {
    id: 'female-2',
    name: 'Female Dorm (4-Bed)',
    type: 'female',
    capacity: 4,
    pricePerNight: 18,
    badge: 'Quiet Sanctuary',
    description: 'Intimate 4-bed female sanctuary with premium linen bedding and garden view window.',
    amenities: ['Ensuite Bath', 'Linen Bedding', 'Reading Nook', 'A/C'],
  },
  {
    id: 'private-1',
    name: 'Private Bungalow (Double)',
    type: 'private',
    capacity: 2,
    pricePerNight: 45,
    badge: 'Garden View',
    description: 'Private tropical bungalow featuring queen bed, ensuite bath, and private terrace.',
    amenities: ['Queen Bed', 'Private Bath', 'A/C', 'High-Speed WiFi', 'Balcony'],
  },
  {
    id: 'private-2',
    name: 'Private Bungalow (Twin)',
    type: 'private',
    capacity: 2,
    pricePerNight: 50,
    badge: 'Courtyard Access',
    description: 'Spacious twin bungalow opening directly into the lush garden courtyard.',
    amenities: ['Twin Beds', 'Private Bath', 'A/C', 'WiFi', 'Courtyard View'],
  },
  {
    id: 'private-3',
    name: 'Private Suite (Family)',
    type: 'private',
    capacity: 4,
    pricePerNight: 85,
    badge: 'Luxury Suite',
    description: 'Expansive family suite with two bedrooms, private lounge, and panoramic mountain terrace.',
    amenities: ['2 Bedrooms', 'Private Lounge', 'A/C', 'Kitchenette', 'Terrace View'],
  },
]

function RoomCard({
  room,
  onSelect,
}: {
  room: Room
  onSelect: (room: Room) => void
}) {
  const typeTagStyle =
    room.type === 'mixed'
      ? { bg: '#E8DFF0', text: '#4A148C', label: 'Mixed Dorm' }
      : room.type === 'female'
        ? { bg: '#FCE7E6', text: '#B71C1C', label: 'Female Only' }
        : { bg: '#E8F5E9', text: '#1B5E20', label: 'Private Room' }

  return (
    <div
      className="p-6 shadow-indochine transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 bg-white border border-[var(--border-primary)] flex flex-col justify-between"
    >
      <div>
        {/* Room Header & Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider border border-black/10"
            style={{
              backgroundColor: typeTagStyle.bg,
              color: typeTagStyle.text,
            }}
          >
            {typeTagStyle.label}
          </span>
          <span className="text-xs font-bold text-[var(--accent-green)] flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-primary)]">
            <Users className="w-3.5 h-3.5" />
            <span>Up to {room.capacity}</span>
          </span>
        </div>

        {/* Room Name */}
        <h3
          className="text-xl font-serif font-bold mb-2 text-[var(--text-primary)]"
        >
          {room.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 leading-relaxed text-[var(--text-secondary)] min-h-[44px]"
        >
          {room.description}
        </p>

        {/* Amenities Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {room.amenities.map((amenity, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-primary)] flex items-center gap-1 font-medium"
            >
              <Check className="w-3 h-3 text-[var(--accent-green)]" />
              <span>{amenity}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Price & Action */}
      <div className="flex items-center justify-between border-t border-[var(--border-primary)] pt-4 mt-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
            Rate / Night
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-serif font-bold text-[var(--accent-green)]">
              ${room.pricePerNight}
            </span>
            <span className="text-xs text-[var(--text-secondary)]">USD</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(room)}
          className="px-4 py-2.5 font-bold text-xs uppercase tracking-wider shadow-indochine transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 bg-[var(--accent-gold)] text-[var(--text-primary)] border border-[var(--border-primary)] cursor-pointer flex items-center gap-1.5"
        >
          <span>Select</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

export function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room)
    setConfirmed(false)
  }

  const handleConfirmReservation = () => {
    setConfirmed(true)
  }

  return (
    <section
      id="accommodations"
      className="w-full py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent-green)] mb-2 block">
              Curated Spaces
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)]"
            >
              Accommodations
            </h2>
          </div>
          <p className="text-base text-[var(--text-secondary)] max-w-md">
            Choose from social dormitories with privacy curtains to peaceful private tropical bungalows.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={handleSelectRoom}
            />
          ))}
        </div>

        {/* Selected Room Modal Drawer */}
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-lg bg-white border-2 border-[var(--border-primary)] shadow-indochine-lg p-6 md:p-8 relative">
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[var(--border-primary)]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {!confirmed ? (
                <>
                  <span className="text-xs uppercase font-bold tracking-wider text-[var(--accent-green)] mb-2 block">
                    Selected Accommodation
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-2">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    {selectedRoom.description}
                  </p>

                  <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-primary)] mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-[var(--text-primary)]">Rate per night:</span>
                      <span className="font-serif font-bold text-[var(--accent-green)]">${selectedRoom.pricePerNight} USD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-[var(--text-primary)]">Capacity:</span>
                      <span className="text-[var(--text-secondary)]">{selectedRoom.capacity} Guests Max</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-[var(--text-primary)]">Included:</span>
                      <span className="text-[var(--text-secondary)]">Breakfast & High-Speed WiFi</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="flex-1 py-3 font-bold text-xs uppercase tracking-wider bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)]"
                    >
                      Change Choice
                    </button>
                    <button
                      onClick={handleConfirmReservation}
                      className="flex-1 py-3 font-bold text-xs uppercase tracking-wider bg-[var(--accent-gold)] border border-[var(--border-primary)] text-[var(--text-primary)] shadow-indochine"
                    >
                      Confirm Selection
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-2">
                    Room Reserved!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    You have reserved <strong>{selectedRoom.name}</strong>. Scroll up to the availability form to finalize your dates.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedRoom(null)
                      document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="px-6 py-3 font-bold text-xs uppercase tracking-wider bg-[var(--accent-gold)] border border-[var(--border-primary)] text-[var(--text-primary)] shadow-indochine"
                  >
                    Go to Check-in Dates
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
