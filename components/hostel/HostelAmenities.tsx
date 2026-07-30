'use client'

import React from 'react'
import {
  Coffee,
  Wifi,
  Shirt,
  Sparkles,
  Bed,
  Lock,
  Bike,
  BookOpen,
  Utensils,
  Trees,
  Tv,
  Compass,
  type LucideIcon,
} from 'lucide-react'

interface Amenity {
  icon: LucideIcon
  name: string
  description: string
}

const amenities: Amenity[] = [
  {
    icon: Coffee,
    name: 'On-site Café',
    description: 'Fresh coffee, pastries, and light meals available daily',
  },
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    description: 'Reliable fiber internet throughout the hostel and garden',
  },
  {
    icon: Shirt,
    name: 'Laundry Service',
    description: 'Self-service and professional washing available',
  },
  {
    icon: Sparkles,
    name: 'Social Events',
    description: 'Weekly family dinners, art nights, and community activities',
  },
  {
    icon: Bed,
    name: 'Comfortable Beds',
    description: 'Quality orthopedic mattresses and fresh linens in all rooms',
  },
  {
    icon: Lock,
    name: 'Secure Lockers',
    description: 'Digital keycard and padlock storage in every room',
  },
  {
    icon: Bike,
    name: 'Bike Rentals',
    description: 'Explore Cat Ba National Park and coastline on two wheels',
  },
  {
    icon: BookOpen,
    name: 'Cozy Library',
    description: 'Books, board games, and quiet spaces to recharge',
  },
  {
    icon: Utensils,
    name: 'Shared Kitchen',
    description: 'Cook your own meals and share recipes with fellow travelers',
  },
  {
    icon: Trees,
    name: 'Tropical Garden',
    description: 'Serene courtyard with lush greenery and cozy seating areas',
  },
  {
    icon: Tv,
    name: 'Common Room',
    description: 'Projector cinema nights, lounge, and chill spaces',
  },
  {
    icon: Compass,
    name: 'Tour Bookings',
    description: 'Help arranging Lan Ha Bay cruises & island trekking excursions',
  },
]

function AmenityCard({ amenity }: { amenity: Amenity }) {
  const Icon = amenity.icon
  return (
    <div
      className="p-6 text-center shadow-indochine transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 bg-white border border-[var(--border-primary)] rounded-none group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--bg-primary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-green)] transition-all group-hover:bg-[var(--accent-gold)] group-hover:text-[var(--text-primary)] shadow-sm">
        <Icon className="w-7 h-7" />
      </div>
      <h3
        className="text-lg font-serif font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-green)] transition-colors"
      >
        {amenity.name}
      </h3>
      <p
        className="text-sm leading-relaxed text-[var(--text-secondary)]"
      >
        {amenity.description}
      </p>
    </div>
  )
}

export function HostelAmenities() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-widget')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="amenities"
      className="w-full py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)]"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent-green)] mb-2 block">
            Designed for Travelers
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]"
          >
            World-Class Amenities
          </h2>
          <p
            className="text-lg text-[var(--text-secondary)]"
          >
            Everything you need for a comfortable, connected, and unforgettable island stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, idx) => (
            <AmenityCard key={idx} amenity={amenity} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-16 p-8 md:p-12 shadow-indochine-lg text-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] relative overflow-hidden"
        >
          <div className="max-w-xl mx-auto relative z-10">
            <h3
              className="text-2xl md:text-3xl font-serif font-bold mb-3 text-[var(--text-primary)]"
            >
              Ready to Experience Secret Garden?
            </h3>
            <p
              className="text-base md:text-lg mb-8 text-[var(--text-secondary)]"
            >
              Secure your spot in Cat Ba's favorite botanical hostel sanctuary.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 font-bold text-sm uppercase tracking-wider shadow-indochine transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 bg-[var(--accent-gold)] text-[var(--text-primary)] border border-[var(--border-primary)] cursor-pointer"
            >
              Book Your Sanctuary
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
