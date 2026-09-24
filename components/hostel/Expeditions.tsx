'use client'

import React, { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { TourBookingForm } from './TourBookingForm'

interface ExpeditionItem {
  id: string
  tourKey: 'ha-giang-loop' | 'plankton-night-kayak' | 'deep-water-solo' | 'jungle-trek'
  title: string
  subtitle: string
  price: string
  priceVND: string
  duration: string
  groupSize: string
  description: string
  image: string
  features: string[]
}

const EXPEDITION_LIST: ExpeditionItem[] = [
  {
    id: 'lan-ha-plankton',
    tourKey: 'plankton-night-kayak',
    title: 'Lan Ha Bay Plankton Tour',
    subtitle: 'Sunset kayak & night swim with glowing plankton',
    price: '$28',
    priceVND: '700,000 VND',
    duration: '4:30 PM - 9:30 PM',
    groupSize: 'Max 12 people',
    description: 'We take a small wooden boat into quiet karst lagoons where no big cruise ships go. Kayak through sea caves at sunset, then jump in for a night swim in glowing blue plankton.',
    image: '/images/lan_ha_bay_kayak.jpg',
    features: ['Kayak through cave arches', 'Swim with blue bioluminescent plankton', 'Seafood & beer on floating fish farm'],
  },
  {
    id: 'deep-water-solo',
    tourKey: 'deep-water-solo',
    title: 'Deep Water Solo Climbing',
    subtitle: 'Climb limestone cliffs over deep ocean water',
    price: '$35',
    priceVND: '880,000 VND',
    duration: '8:30 AM - 4:30 PM',
    groupSize: 'Max 8 climbers',
    description: 'Cat Ba is one of the top deep-water solo spots in the world. Climb as high as you want with no ropes or harness, and drop straight into deep ocean water with a guide boat right below.',
    image: '/images/secret_garden_social_night.jpg',
    features: ['Climbing shoes and chalk included', 'Beginners and experienced climbers welcome', 'Speedboat safety escort & lunch'],
  },
  {
    id: 'ha-giang-loop',
    tourKey: 'ha-giang-loop',
    title: 'Ha Giang Loop Road Trip',
    subtitle: '4 days through the high Northern mountain passes',
    price: '$145',
    priceVND: '3,650,000 VND',
    duration: '4 Days / 3 Nights',
    groupSize: 'Small convoy',
    description: 'We book your direct sleeper bus from Secret Garden reception to our basecamp in Ha Giang. Ride the famous mountain passes and sleep in local village homestays.',
    image: '/images/motorcycle_detail.png',
    features: ['Direct bus from hostel reception', 'Ride your own bike or easy rider', 'All homestays and meals included'],
  },
  {
    id: 'national-park-trek',
    tourKey: 'jungle-trek',
    title: 'National Park Jungle Trek',
    subtitle: 'Hike through the jungle to Frog Lake and Viet Hai',
    price: '$22',
    priceVND: '550,000 VND',
    duration: '8:00 AM - 2:00 PM',
    groupSize: 'Max 10 hikers',
    description: 'A 12km hike through the island rainforest. Climb limestone rock trails to a mountain peak, visit the quiet Viet Hai valley village, and take a boat back across Lan Ha Bay.',
    image: '/images/courtyard_mural.png',
    features: ['Experienced local trail guide', 'Lunch in remote Viet Hai village', 'Scenic boat ride back to harbor'],
  },
]

export const Expeditions: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedTour, setSelectedTour] = useState<ExpeditionItem['tourKey'] | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const distance = direction === 'left' ? -380 : 380
      scrollContainerRef.current.scrollBy({ left: distance, behavior: 'smooth' })
    }
  }

  return (
    <section id="expeditions" className="w-full bg-[#E8E8DF] py-20 md:py-32 border-b border-[#1B3320]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#D8D8CC]">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#3E2723] font-semibold mb-3">
              Island Tours &amp; Road Trips
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320] mb-3">
              Tours we actually recommend
            </h2>
            <p className="text-sm sm:text-base text-[#3E2723]/90 font-sans leading-relaxed">
              We run small-group trips with local boat captains. No tourist trap stops, no shopping detours, and direct pickup from reception.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 bg-white hover:bg-[#FAF8F5] text-[#1B3320] border border-[#1B3320]/15 rounded-full shadow-sm flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 bg-white hover:bg-[#FAF8F5] text-[#1B3320] border border-[#1B3320]/15 rounded-full shadow-sm flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXPEDITION_LIST.map((expedition) => (
            <div
              key={expedition.id}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] max-w-[440px] bg-white/90 backdrop-blur-md border border-[#1B3320]/10 rounded-[2.25rem] shadow-[0_16px_40px_rgba(27,51,32,0.06)] p-6 sm:p-7 flex flex-col justify-between snap-start shrink-0 group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-[#1B3320]/10 mb-5 bg-[#1B3320]">
                  <img
                    src={expedition.image}
                    alt={expedition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-[#1B3320]/90 backdrop-blur-sm text-[#D4AF37] font-mono font-bold text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm">
                    {expedition.price} ({expedition.priceVND})
                  </div>
                </div>

                <div className="text-xs font-mono text-[#3E2723] font-semibold mb-1">
                  {expedition.duration} • {expedition.groupSize}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1B3320] mb-2 leading-snug">
                  {expedition.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3E2723]/90 font-sans leading-relaxed mb-4">
                  {expedition.description}
                </p>

                <div className="space-y-1.5 mb-6 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#1B3320]/8 text-xs font-mono text-[#1B3320]">
                  {expedition.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#D4AF37] font-bold">✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedTour(expedition.tourKey)}
                className="w-full py-3.5 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_4px_14px_rgba(27,51,32,0.18)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-[#3E2723]/80 pt-4 border-t border-[#D8D8CC]">
          <span>Free cancellation up to 24h before tour start</span>
          <span>Pick-up and drop-off right at our front desk</span>
        </div>

      </div>

      {/* Direct Tour Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl my-8">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-white text-[#1B3320] hover:bg-[#FAF8F5] border border-[#1B3320]/15 font-mono text-xs cursor-pointer shadow-md"
              aria-label="Close"
            >
              ✕ Close
            </button>
            <TourBookingForm
              initialTourId={selectedTour}
              onSuccess={() => setSelectedTour(null)}
            />
          </div>
        </div>
      )}
    </section>
  )
}
