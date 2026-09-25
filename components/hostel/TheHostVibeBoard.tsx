'use client'

import React, { useState } from 'react'
import { ArrowRight, X, Sparkles, Calendar, Clock, MapPin, Users, Check } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

interface EventPoster {
  id: string
  title: string
  subtitle: string
  day: string
  time: string
  priceTag: string
  theme: 'neon' | 'cinema' | 'cooking' | 'bracelet' | 'acoustic'
  bgGradient: string
  tagline: string
  description: string
  bullets: string[]
  footerText: string
  qrLabel: string
  image: string
}

const EVENT_POSTERS: EventPoster[] = [
  {
    id: 'bracelet-workshop',
    title: 'BRACELET WORKSHOP',
    subtitle: 'Handmade Island Keepsake',
    day: 'TUESDAYS & SATURDAYS',
    time: '7:30 PM - 8:30 PM',
    priceTag: 'FREE FOR GUESTS',
    theme: 'bracelet',
    bgGradient: 'from-[#2e1c0c] via-[#3d2314] to-[#1a0f07]',
    tagline: 'WEAVE YOUR OWN CAT BA MEMORIES',
    description: 'Join us around the long wooden courtyard tables before evening drinks for a relaxed bracelet-making session. We provide all the colorful macrame threads, wooden beads, and island shells. Simple knots, good music, cold beer, and take home your own handmade bracelet.',
    bullets: [
      'All colorful threads, beads, and shells provided for free',
      'Step-by-step guidance from our hostel crew',
      'Chill tunes, cold drinks, and trade bracelets with travelers',
    ],
    footerText: 'STARTS 7:30 PM IN THE COURTYARD • ALL GUESTS WELCOME',
    qrLabel: 'FREE EVENT',
    image: '/images/bracelet_workshop.jpg',
  },
  {
    id: 'cooking-class',
    title: 'Cooking Class',
    subtitle: 'Vietnamese Cuisine with Mama Huong',
    day: 'EVERY DAY AT 5:00 PM',
    time: '5:00 PM - 6:30 PM',
    priceTag: '150K / PERSON',
    theme: 'cooking',
    bgGradient: 'from-[#1c1c1c] via-[#24201a] to-[#141414]',
    tagline: 'ROLL CRISPY SPRING ROLLS & GRILL BUN CHA',
    description: 'Discover the secrets behind traditional family recipes. From fragrant grilled pork skewers over charcoal to crispy Spring Rolls, gain hands-on cooking experience with Mama Huong in our garden kitchen.',
    bullets: [
      'Make Bun Cha Nem Ha Noi & fresh rice paper spring rolls',
      '1 Free Drink Included (Cold beer or fresh fruit juice)',
      'Eat everything you cook together as an early family dinner',
    ],
    footerText: 'SIGN UP AT FRONT DESK BY 4:00 PM',
    qrLabel: 'DAILY 5:00 PM',
    image: '/images/cooking_class.jpg',
  },
  {
    id: 'quiz-night',
    title: 'PUB QUIZ NIGHT',
    subtitle: 'Courtyard Trivia & Drinks',
    day: 'WEDNESDAYS & SUNDAYS',
    time: '8:00 PM - 10:00 PM',
    priceTag: 'FREE ENTRY',
    theme: 'neon',
    bgGradient: 'from-[#1a0933] via-[#0d1b2a] to-[#120422]',
    tagline: 'CHALLENGE YOUR BRAIN • WIN FREE DRINKS',
    description: 'Do you have what it takes to be the ultimate quiz champion? We mix up dorm teams so solo travelers make friends instantly. Grab a cold Bia Ha Noi and show off your random knowledge.',
    bullets: [
      'Random dorm teams so solo travelers meet everyone immediately',
      'Free shots & bar tab vouchers for the winning table',
      'Happy hour beer & cocktail prices all night',
    ],
    footerText: 'GET READY TO PUB QUIZ • STARTS 8:00 PM',
    qrLabel: 'FREE ENTRY',
    image: '/images/secret_garden_social_night.jpg',
  },
  {
    id: 'movie-night',
    title: 'WEEKLY MOVIE NIGHT',
    subtitle: 'Courtyard Garden Cinema',
    day: 'THURSDAYS & MONDAYS',
    time: '8:30 PM - 10:30 PM',
    priceTag: 'FREE POPCORN',
    theme: 'cinema',
    bgGradient: 'from-[#3a0808] via-[#1f0505] to-[#0a0000]',
    tagline: 'BIG SCREEN PROJECTOR UNDER THE CANOPY',
    description: 'Each week we screen a travel classic or crowd-favorite movie on the big projector screen. Relax on beanbags and hammocks with free freshly popped buttered popcorn.',
    bullets: [
      'Free freshly popped warm buttered popcorn for all guests',
      'Big courtyard projector screen with beanbags & hammocks',
      'Cold coconuts, draft beers, and iced lemon teas at the bar',
    ],
    footerText: 'GRAB A BEANBAG & ENJOY THE MOVIE',
    qrLabel: 'FREE POPCORN',
    image: '/images/secret_garden_reception_bar.jpg',
  },
  {
    id: 'jam-session',
    title: 'ACOUSTIC JAM SESSION',
    subtitle: 'Live Courtyard Music',
    day: 'FRIDAYS & TUESDAYS',
    time: '7:30 PM - 11:00 PM',
    priceTag: 'FREE RUM PUNCH',
    theme: 'acoustic',
    bgGradient: 'from-[#0d2315] via-[#09170e] to-[#040a06]',
    tagline: 'GUITARS, CAJÓN & COLD BEERS UNDER THE TREES',
    description: 'We bring out acoustic guitars, cajón, and percussion by the bar. No stage fright or formal performances—just travelers singing along to classics with free welcome passionfruit rum punch.',
    bullets: [
      'Guitars, cajón, and djembe available for anyone to play',
      'Free welcome rum punch poured at 7:30 PM',
      'Open microphone & songbook requests all night',
    ],
    footerText: 'EVERYONE IS WELCOME • GRAB A DRINK & SING ALONG',
    qrLabel: 'FREE PUNCH',
    image: '/images/secret_garden_entrance_arch.jpg',
  },
]

export const TheHostVibeBoard: React.FC = () => {
  const { openBooking } = useHostelStore()
  const [selectedPoster, setSelectedPoster] = useState<EventPoster | null>(null)

  return (
    <section id="vibe" className="w-full bg-[#1B3320] text-[#F5F5F0] py-20 md:py-32 border-b border-[#1B3320]/20 relative overflow-hidden">
      
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-[#F5F5F0]/15">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
              Weekly Courtyard Schedule
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F0] mb-3">
              What happens in the courtyard
            </h2>
            <p className="text-base sm:text-lg text-[#F5F5F0]/80 font-sans leading-relaxed">
              Every evening there is something happening downstairs. Free for all staying guests—grab a drink, grab a seat, and join in.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#3E2723] border border-[#D4AF37]/40 rounded-2xl px-4 py-2.5 text-right shadow-md">
              <span className="block text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">ALL HOSTEL NIGHTS</span>
              <span className="text-xs font-bold text-[#F5F5F0]">Free for Staying Guests</span>
            </div>
          </div>
        </div>

        {/* Authentic Event Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {EVENT_POSTERS.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedPoster(event)}
              className={`relative bg-gradient-to-b ${event.bgGradient} border ${
                event.theme === 'neon'
                  ? 'border-[#00F0FF]/40 shadow-[0_12px_30px_rgba(0,240,255,0.15)]'
                  : event.theme === 'cinema'
                  ? 'border-[#D4AF37]/40 shadow-[0_12px_30px_rgba(212,175,55,0.15)]'
                  : event.theme === 'cooking'
                  ? 'border-[#4A7C59]/50 shadow-[0_12px_30px_rgba(74,124,89,0.15)]'
                  : event.theme === 'bracelet'
                  ? 'border-[#E07A5F]/50 shadow-[0_12px_30px_rgba(224,122,95,0.15)]'
                  : 'border-[#D4AF37]/40 shadow-[0_12px_30px_rgba(212,175,55,0.15)]'
              } rounded-[2.5rem] p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 transition-all duration-300`}
            >
              
              {/* Poster Top: Secret Garden Round Logo + Tagline */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-full border-2 border-[#D4AF37] bg-black overflow-hidden shrink-0 p-0.5 shadow-md">
                      <img
                        src="/images/secret_garden_logo.jpg"
                        alt="Secret Garden Logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-xs uppercase tracking-wider text-white block leading-tight">
                        Secret Garden
                      </span>
                      <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                        Cat Ba Island
                      </span>
                    </div>
                  </div>

                  {/* Price Tag Badge */}
                  <span className={`px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full border ${
                    event.theme === 'neon'
                      ? 'bg-[#FF007F] text-white border-[#00F0FF]'
                      : event.theme === 'cooking'
                      ? 'bg-[#E63946] text-white border-white/40'
                      : event.theme === 'cinema'
                      ? 'bg-[#D4AF37] text-black border-black/30'
                      : event.theme === 'bracelet'
                      ? 'bg-[#E07A5F] text-white border-white/40'
                      : 'bg-[#D4AF37] text-black border-black/30'
                  }`}>
                    {event.priceTag}
                  </span>
                </div>

                {/* Tagline */}
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold text-center mb-3">
                  {event.tagline}
                </div>

                {/* Poster Main Headline Title */}
                <div className="text-center py-2 mb-4">
                  {event.theme === 'bracelet' ? (
                    <div>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#F4A261] tracking-tight leading-tight uppercase">
                        BRACELET WORKSHOP
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/90 mt-1 block">
                        EVERY TUE &amp; SAT AT 7:30 PM
                      </span>
                    </div>
                  ) : event.theme === 'cooking' ? (
                    <div>
                      <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#A8DADC] tracking-tight leading-none">
                        Cooking Class
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#E9C46A] mt-1 block">
                        Vietnamese Cuisine
                      </span>
                    </div>
                  ) : event.theme === 'neon' ? (
                    <div className="inline-block p-3 border border-[#FF007F] bg-black/60 rounded-2xl shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                      <h3 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-wider uppercase drop-shadow-[0_0_8px_#00F0FF]">
                        QUIZ <span className="text-[#00F0FF] italic">NIGHT</span>
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mt-1 block font-bold">
                        FREE BEER JUG FOR WINNERS
                      </span>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#D4AF37] tracking-tight leading-none uppercase">
                        Cinema Night
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/90 mt-1 block">
                        GARDEN PROJECTOR SCREEN
                      </span>
                    </div>
                  )}
                </div>

                {/* Real Event Photo */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/20 mb-4 bg-black group-hover:border-white/50 transition-colors">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-2.5 left-3 bg-black/85 text-white text-[10px] font-mono px-3 py-1 rounded-full border border-[#D4AF37]/50">
                    {event.day} • {event.time}
                  </div>
                </div>

                {/* Poster Description */}
                <p className="text-xs text-white/85 font-sans leading-relaxed mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Poster Bullets */}
                <div className="space-y-1.5 mb-6 bg-black/40 p-3.5 rounded-2xl border border-white/10 text-[11px] font-mono text-white/90">
                  {event.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">✦</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poster Bottom Strip: Footer Text */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                <div className="flex-1">
                  <span className="block text-[9px] font-mono uppercase text-[#D4AF37] font-bold tracking-wider">
                    {event.footerText}
                  </span>
                  <span className="text-[11px] font-sans text-white/70">
                    Click flyer for details
                  </span>
                </div>

                <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-mono text-[#D4AF37] uppercase font-bold">
                  {event.qrLabel}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Courtyard Family Dinner Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#3E2723] border border-[#D4AF37]/40 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase rounded-full border border-[#D4AF37]/30">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>EVERY SINGLE NIGHT AT 6:30 PM</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F0]">
              Secret Garden Family Dinner
            </h3>
            <p className="text-sm text-[#F5F5F0]/85 font-sans leading-relaxed">
              70,000 VND per person for an all-you-can-eat spread of traditional Vietnamese dishes, fried spring rolls, tofu, and rice. Everyone sits together at the long garden tables.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,175,55,0.3)] active:scale-95 transition-all cursor-pointer"
            >
              Book a Bed &amp; Join Us
            </button>
          </div>
        </div>

      </div>

      {/* Expanded Flyer Poster Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className={`relative w-full max-w-lg bg-gradient-to-b ${selectedPoster.bgGradient} border border-[#D4AF37]/30 rounded-[2.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.5)] p-6 sm:p-8 text-white my-auto max-h-[90vh] overflow-y-auto`}>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/40 hover:bg-white hover:text-black text-white/90 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Close flyer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Poster Header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10 pr-10">
              <div className="w-10 h-10 rounded-2xl border border-[#D4AF37]/40 bg-black overflow-hidden shrink-0 p-0.5 shadow-md">
                <img
                  src="/images/secret_garden_logo.jpg"
                  alt="Secret Garden Logo"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white">
                  Secret Garden Hostel
                </h4>
                <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                  {selectedPoster.day} • {selectedPoster.time}
                </p>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mb-5">
              <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                {selectedPoster.tagline}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {selectedPoster.title}
              </h3>
            </div>

            {/* Image */}
            <div className="h-56 w-full overflow-hidden rounded-2xl border border-white/15 mb-5 bg-black/50">
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-5">
              {selectedPoster.description}
            </p>

            {/* Bullets */}
            <div className="space-y-2 py-3 border-y border-white/10 mb-6 text-xs text-white/90">
              {selectedPoster.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                {selectedPoster.priceTag}
              </span>
              <button
                onClick={() => {
                  setSelectedPoster(null)
                  openBooking()
                }}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Book a Bed to Attend
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
