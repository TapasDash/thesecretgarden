'use client'

import React from 'react'
import { Music, HelpCircle, UtensilsCrossed, Film, Clock, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

interface VibeEvent {
  id: string
  title: string
  subtitle: string
  day: string
  time: string
  host: string
  location: string
  description: string
  perks: string[]
  icon: React.ReactNode
  tag: string
  accentBadge: string
  colSpan: string
  image: string
}

const VIBE_EVENTS: VibeEvent[] = [
  {
    id: 'jam-session',
    title: 'Jam Session',
    subtitle: 'Acoustic Strings & Jungle Beats',
    day: 'TUESDAY & FRIDAY',
    time: '7:30 PM - 11:00 PM',
    host: 'Linh & The Cat Ba Travelers Crew',
    location: 'Courtyard Bamboo Pavilion',
    description: 'Grab an acoustic guitar, cajón, or djembe from our stage rack. We light the kerosene lanterns, pour complementary passionfruit rum, and sing classic anthems under the palms.',
    perks: ['Free Welcome Rum Punch', 'Instruments Provided', 'Songbook & Open Mic'],
    icon: <Music className="w-5 h-5 text-[#D4AF37]" />,
    tag: 'MOST POPULAR',
    accentBadge: 'LIVE SOUND',
    colSpan: 'lg:col-span-7',
    image: '/images/secret_garden_social_night.jpg',
  },
  {
    id: 'quiz-night',
    title: 'Quiz Night',
    subtitle: 'Wild Trivia & Free Drink Rounds',
    day: 'WEDNESDAY & SUNDAY',
    time: '8:00 PM - 10:00 PM',
    host: 'Alex (Vietnam Expat & Geographer)',
    location: 'Garden Bar & Patio',
    description: 'High-energy team trivia covering backpacker survival, world music, geography fails, and Vietnam lore. The winning dorm table scores a free tour discount & shots for everyone.',
    perks: ['Free Entry for Guests', 'Winning Team Grand Prize', 'Happy Hour Prices All Night'],
    icon: <HelpCircle className="w-5 h-5 text-[#D4AF37]" />,
    tag: 'TEAM BATTLE',
    accentBadge: 'TRIVIA & SHOTS',
    colSpan: 'lg:col-span-5',
    image: '/images/community_moment.png',
  },
  {
    id: 'cooking-class',
    title: 'Cooking Class',
    subtitle: 'Hand-rolled Spring Rolls & Phở Secrets',
    day: 'DAILY AT SUNSET',
    time: '5:00 PM - 6:30 PM',
    host: 'Mama Huong (Hostel Matriarch)',
    location: 'Open Courtyard Kitchen',
    description: 'Learn family recipes passed down 3 generations. Roll crispy nem rán (fried spring rolls), mix authentic dipping nuoc mam sauce, and devour your creations together before nightfall.',
    perks: ['Fresh Island Herbs Included', 'Recipe Postcard to Take Home', 'Eat Everything You Cook'],
    icon: <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />,
    tag: 'AUTHENTIC TASTE',
    accentBadge: 'FAMILY RECIPES',
    colSpan: 'lg:col-span-5',
    image: '/images/courtyard_mural.png',
  },
  {
    id: 'movie-night',
    title: 'Movie Night',
    subtitle: 'Courtyard Starlight Projector & Popcorn',
    day: 'THURSDAY & MONDAY',
    time: '8:30 PM - Late',
    host: 'Secret Garden Cine Club',
    location: 'Rooftop Hammocks & Beanbag Deck',
    description: 'Chill vibe cinema on our massive weathered whitewash wall. We screen cult travel classics, Ghibli gems, and indie documentaries with freshly popped buttered corn and cold coconuts.',
    perks: ['Fresh Popcorn Included', 'Cozy Blanket & Hammocks', 'Cold Coconut & Cocktail Service'],
    icon: <Film className="w-5 h-5 text-[#D4AF37]" />,
    tag: 'CHILL SANCTUARY',
    accentBadge: 'CINEMA UNDER STARS',
    colSpan: 'lg:col-span-7',
    image: '/images/secret_garden_reception_bar.jpg',
  },
]

export const TheHostVibeBoard: React.FC = () => {
  const { activeVibeModal, setActiveVibeModal, openBooking } = useHostelStore()

  const selectedEvent = VIBE_EVENTS.find((e) => e.id === activeVibeModal)

  return (
    <section id="vibe" className="w-full bg-[#1B3320] text-[#F5F5F0] py-16 md:py-24 border-b border-[#D8D8CC] relative">
      {/* Background Subtle Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Anti-slop, Indochine Editorial Headline */}
        <div className="mb-10 sm:mb-12 border-b border-[#F5F5F0]/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#3E2723] text-[#D4AF37] text-[11px] font-mono tracking-widest uppercase border border-[#D4AF37]/50">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>THE DAILY SOCIAL PULSE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              The Host Vibe Board
            </h2>
            <p className="text-sm sm:text-base text-[#F5F5F0]/80 font-sans max-w-[55ch]">
              Never a boring night in Cat Ba. Every gathering is hosted by our island family, 
              crafted to connect solo wanderers without awkward forced icebreakers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#3E2723] border border-[#D4AF37] px-4 py-2 text-right shadow-[3px_3px_0px_0px_#000]">
              <span className="block text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">ALL EVENTS INCLUDED</span>
              <span className="text-xs font-bold text-[#F5F5F0]">Free for Staying Guests</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Bento Grid: 4 Core Events with Rice Paper & Teakwood Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {VIBE_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`${event.colSpan} bg-[#142618] border-2 border-[#D4AF37]/40 p-6 sm:p-7 relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#3E2723] hover:border-[#D4AF37] transition-all group`}
            >
              {/* Card Top Stamp & Details */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-[#3E2723] border border-[#D4AF37] text-[#D4AF37]">
                      {event.icon}
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                        {event.day}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#F5F5F0]/80">
                        <Clock className="w-3 h-3 text-[#D4AF37]" /> {event.time}
                      </span>
                    </div>
                  </div>

                  <span className="bg-[#D4AF37] text-[#1B3320] font-mono font-bold text-[10px] tracking-wider px-2 py-0.5 border border-[#1B3320]">
                    {event.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] mb-3">
                  {event.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#F5F5F0]/85 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Highlights List */}
                <div className="space-y-1.5 mb-6 bg-[#1B3320] p-3 border border-[#F5F5F0]/10">
                  {event.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5F5F0]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Host Name & Interactive RSVP / Detail Button */}
              <div className="pt-4 border-t border-[#F5F5F0]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#F5F5F0]/70 font-mono">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Host: <strong className="text-[#F5F5F0]">{event.host}</strong></span>
                </div>

                <button
                  onClick={() => setActiveVibeModal(event.id)}
                  className="px-3.5 py-1.5 bg-[#3E2723] hover:bg-[#D4AF37] text-[#F5F5F0] hover:text-[#1B3320] font-mono text-xs uppercase tracking-wider border border-[#D4AF37] transition-colors cursor-pointer"
                >
                  View Details & Photos →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Courtyard Philosophy Strip */}
        <div className="mt-8 p-4 bg-[#3E2723] border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-lg">🌿</span>
            <p className="text-[#F5F5F0]/90 font-medium">
              <strong>The Secret Garden Guarantee:</strong> No forced commercial nightlife. Real friendships formed around crackling acoustic nights and home-cooked family dinners.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="shrink-0 px-4 py-2 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold uppercase tracking-wider text-xs border border-[#1B3320] shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          >
            Join This Week&apos;s Circle
          </button>
        </div>

      </div>

      {/* Interactive Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#1B3320] border-2 border-[#D4AF37] shadow-[8px_8px_0px_0px_#000] p-6 text-[#F5F5F0] relative">
            <div className="flex items-center justify-between border-b border-[#F5F5F0]/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-[#3E2723] text-[#D4AF37] border border-[#D4AF37]">
                  {selectedEvent.icon}
                </span>
                <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                  {selectedEvent.day} • {selectedEvent.time}
                </span>
              </div>
              <button
                onClick={() => setActiveVibeModal(null)}
                className="px-2 py-1 bg-[#3E2723] text-white hover:bg-[#D4AF37] hover:text-black font-mono text-xs border border-[#D4AF37] cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="h-44 w-full overflow-hidden border border-[#D4AF37] mb-4 bg-black">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#F5F5F0] mb-1">
              {selectedEvent.title}
            </h3>
            <p className="text-xs text-[#D4AF37] font-bold mb-3">
              {selectedEvent.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#F5F5F0]/85 leading-relaxed mb-4">
              {selectedEvent.description}
            </p>

            <div className="bg-[#142618] p-3 border border-[#F5F5F0]/20 mb-5 space-y-1.5">
              <div className="text-[11px] font-mono text-[#D4AF37] uppercase font-bold">What to expect:</div>
              {selectedEvent.perks.map((p, i) => (
                <div key={i} className="text-xs text-[#F5F5F0]/90 flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#F5F5F0]/20">
              <span className="text-xs font-mono text-[#F5F5F0]/70">
                Location: <strong>{selectedEvent.location}</strong>
              </span>
              <button
                onClick={() => {
                  setActiveVibeModal(null)
                  openBooking()
                }}
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-xs uppercase tracking-wider border border-[#1B3320] shadow-[3px_3px_0px_0px_#000] cursor-pointer"
              >
                Book Bed & Join
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
