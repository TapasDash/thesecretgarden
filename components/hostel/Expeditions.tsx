'use client'

import React, { useRef } from 'react'
import { Compass, Sparkles, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Waves, Mountain, Flame, Anchor } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

interface ExpeditionItem {
  id: string
  title: string
  subtitle: string
  tag: string
  price: string
  priceVND: string
  duration: string
  groupSize: string
  intensity: string
  highlights: string[]
  description: string
  image: string
  icon: React.ReactNode
}

const EXPEDITION_LIST: ExpeditionItem[] = [
  {
    id: 'lan-ha-plankton',
    title: 'Lan Ha Bay Plankton Tour',
    subtitle: 'Night Bioluminescent Kayaking & Hidden Karst Lagoons',
    tag: 'SIGNATURE HOSTEL EXPEDITION',
    price: '$28',
    priceVND: '700,000 VND',
    duration: 'Full Evening (4:30 PM - 9:30 PM)',
    groupSize: 'Max 12 explorers',
    intensity: 'Moderate Kayaking',
    highlights: [
      'Sunset kayak through secluded limestone arches',
      'Midnight swim surrounded by glowing blue dinoflagellates',
      'Fresh seafood barbecue & cold beer on floating fish farm'
    ],
    description: 'Avoid the crowded tourist junk boats. Our local Cat Ba captains lead you into pitch-black karst canyons where every stroke of your paddle ignites glowing electric-blue plankton stars.',
    image: '/images/secret_garden_entrance_arch.jpg',
    icon: <Waves className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: 'deep-water-solo',
    title: 'Deep Water Solo',
    subtitle: 'Unroped Rock Climbing Over Emerald Bay Water',
    tag: 'ADRENALINE & FREEDOM',
    price: '$35',
    priceVND: '880,000 VND',
    duration: 'Full Day (8:30 AM - 4:30 PM)',
    groupSize: 'Max 8 climbers',
    intensity: 'High Energy / All Skill Levels',
    highlights: [
      'Climb graded limestone cliffs without harness or rope',
      'Safe deep water landings into calm emerald sea',
      'Certified local climbing guide & rescue speedboat escort'
    ],
    description: 'Cat Ba is world-renowned for deep water soloing. Test your grip on overhang stalactites, push your limits, and drop freely into 15-meter deep ocean water. Pure liberation.',
    image: '/images/secret_garden_social_night.jpg',
    icon: <Anchor className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: 'ha-giang-loop',
    title: 'Ha Giang Loop',
    subtitle: 'Epic Northern Mountain Motorbike Convoy',
    tag: 'ULTIMATE VIETNAM ROADTRIP',
    price: '$145',
    priceVND: '3,650,000 VND',
    duration: '4 Days / 3 Nights',
    groupSize: 'Small Hostel Convoy',
    intensity: 'Legendary Motorcycle Traverse',
    highlights: [
      'Traverse Ma Pi Leng pass & Sky Path cliffs',
      'Stay in authentic Tay & Hmong village homestays',
      'Choose self-ride or easy-rider with seasoned local pilot'
    ],
    description: 'Direct door-to-door shuttle from Secret Garden Cat Ba straight to our Ha Giang basecamp. Join fellow hostel travelers for the most breathtaking highland motorcycle loop on Earth.',
    image: '/images/motorcycle_detail.png',
    icon: <Flame className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: 'national-park-trek',
    title: 'National Park Trekking',
    subtitle: 'Dense Jungle Canopy, Frog Lake & Ngu Lam Peak',
    tag: 'WILD JUNGLE CANOPY',
    price: '$22',
    priceVND: '550,000 VND',
    duration: '6 Hours (8:00 AM - 2:00 PM)',
    groupSize: 'Max 10 hikers',
    intensity: 'Active Trekking',
    highlights: [
      'Dense ancient rainforest biodiversity trail',
      'Visit remote Viet Hai ancient village by foot',
      '360-degree panoramic limestone peak summit'
    ],
    description: 'Deep trek through the UNESCO Cat Ba Biosphere Reserve. Spot native langurs, traverse lush bamboo groves, and climb rugged limestone pinnacles before emerging at a serene village.',
    image: '/images/courtyard_mural.png',
    icon: <Mountain className="w-4 h-4 text-[#D4AF37]" />,
  },
]

export const Expeditions: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { selectExpedition } = useHostelStore()

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' })
    }
  }

  return (
    <section id="expeditions" className="w-full bg-[#E8E8DF] py-16 md:py-24 border-b border-[#D8D8CC] relative overflow-hidden">
      {/* Background Subtle Noise */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#D8D8CC]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#1B3320] text-[#D4AF37] text-[11px] font-mono tracking-widest uppercase border border-[#1B3320] mb-2">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ISLAND & HIGHLAND EXPEDITIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1B3320]">
              Authentic Tours & Treks
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2723]/90 font-sans max-w-[50ch] mt-1">
              Curated and guided by our local island brotherhood. Small groups, raw destinations, zero tourist traps.
            </p>
          </div>

          {/* Swipe Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase text-[#3E2723] hidden md:inline-block mr-2">
              Swipe or Scroll →
            </span>
            <button
              onClick={scrollLeft}
              aria-label="Previous Expedition"
              className="p-2.5 bg-[#F5F5F0] hover:bg-[#D4AF37] text-[#1B3320] border-2 border-[#1B3320] shadow-[2px_2px_0px_0px_#1B3320] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next Expedition"
              className="p-2.5 bg-[#F5F5F0] hover:bg-[#D4AF37] text-[#1B3320] border-2 border-[#1B3320] shadow-[2px_2px_0px_0px_#1B3320] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Swipeable Container (Scrollbar Hidden via Tailwind & inline styles) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {EXPEDITION_LIST.map((expedition) => (
            <div
              key={expedition.id}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] max-w-[440px] bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] p-5 sm:p-6 flex flex-col justify-between snap-start relative group shrink-0"
            >
              <div>
                {/* Top Badge & Price Stamp */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono uppercase tracking-wider font-bold border border-[#1B3320]">
                    {expedition.icon}
                    {expedition.tag}
                  </span>

                  <div className="text-right bg-[#E8E8DF] px-2.5 py-1 border border-[#1B3320]">
                    <span className="block font-serif text-lg font-bold text-[#1B3320] leading-none">
                      {expedition.price}
                    </span>
                    <span className="text-[10px] font-mono text-[#3E2723]">
                      {expedition.priceVND}
                    </span>
                  </div>
                </div>

                {/* Visual Image Preview */}
                <div className="relative h-44 w-full overflow-hidden border border-[#1B3320] mb-4 bg-[#1B3320]">
                  <img
                    src={expedition.image}
                    alt={expedition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[1.1]"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#1B3320]/90 text-[#F5F5F0] px-2 py-0.5 text-[10px] font-mono border border-[#D4AF37]">
                    {expedition.intensity}
                  </div>
                </div>

                {/* Tour Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-[#1B3320] mb-1 leading-snug group-hover:text-[#3E2723] transition-colors">
                  {expedition.title}
                </h3>
                <p className="text-xs font-semibold text-[#3E2723] mb-3">
                  {expedition.subtitle}
                </p>

                <p className="text-xs text-[#1B3320]/90 leading-relaxed mb-4">
                  {expedition.description}
                </p>

                {/* Specs Pill Box */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono mb-4 bg-[#E8E8DF] p-2.5 border border-[#D8D8CC]">
                  <div className="flex items-center gap-1.5 text-[#3E2723]">
                    <Clock className="w-3.5 h-3.5 text-[#1B3320]" />
                    <span>{expedition.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#3E2723]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1B3320]" />
                    <span>{expedition.groupSize}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#1B3320]">
                  {expedition.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Directly Reserve Expedition */}
              <button
                onClick={() => selectExpedition(expedition.id)}
                className="w-full py-3 bg-[#1B3320] hover:bg-[#D4AF37] text-[#F5F5F0] hover:text-[#1B3320] font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#3E2723] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#3E2723]/80 border-t border-[#D8D8CC] pt-3">
          <span>🛡 Free cancellation up to 24 hours before tour start</span>
          <span>⚡ Direct pickup from Secret Garden reception</span>
        </div>

      </div>
    </section>
  )
}
