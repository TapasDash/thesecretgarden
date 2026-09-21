'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

interface VibeEvent {
  id: string
  title: string
  subtitle: string
  schedule: string
  description: string
  colSpan: string
  image: string
}

const VIBE_EVENTS: VibeEvent[] = [
  {
    id: 'jam-session',
    title: 'Acoustic Jam Session',
    subtitle: 'Tuesdays & Fridays at 7:30 PM',
    schedule: 'Free welcome rum punch',
    description: 'We bring out guitars, drums, and a cajón by the bar. No stage fright or formal performances, just sitting around with cold beers and playing songs.',
    colSpan: 'lg:col-span-7',
    image: '/images/secret_garden_social_night.jpg',
  },
  {
    id: 'quiz-night',
    title: 'Hostel Quiz Night',
    subtitle: 'Wednesdays & Sundays at 8:00 PM',
    schedule: 'Free drinks for the winning team',
    description: 'We mix everyone into random dorm teams so you meet people right away. Easy questions about world music, travel fails, and geography.',
    colSpan: 'lg:col-span-5',
    image: '/images/community_moment.png',
  },
  {
    id: 'cooking-class',
    title: 'Spring Roll Cooking Class',
    subtitle: 'Every day at 5:00 PM',
    schedule: 'Free food right before dinner',
    description: 'Mama Huong teaches you how to roll crispy Vietnamese spring rolls and mix fresh dipping sauce. You eat everything you make.',
    colSpan: 'lg:col-span-5',
    image: '/images/courtyard_mural.png',
  },
  {
    id: 'movie-night',
    title: 'Courtyard Movie Night',
    subtitle: 'Thursdays & Mondays at 8:30 PM',
    schedule: 'Free warm popcorn & beanbags',
    description: 'Outdoor projector on the whitewashed wall with big beanbags and hammocks. Travel classics and documentaries after a long day out on the water.',
    colSpan: 'lg:col-span-7',
    image: '/images/secret_garden_reception_bar.jpg',
  },
]

export const TheHostVibeBoard: React.FC = () => {
  const { openBooking } = useHostelStore()

  return (
    <section id="vibe" className="w-full bg-[#1B3320] text-[#F5F5F0] py-20 md:py-32 border-b border-[#1B3320]/20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            Weekly Courtyard Nights
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F0] mb-4">
            What happens every week
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F0]/80 font-sans leading-relaxed">
            You do not have to sit alone in your room. We host something downstairs in the garden every evening. Free for all staying guests.
          </p>
        </div>

        {/* Gapless Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 grid-flow-dense">
          {VIBE_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`${event.colSpan} bg-[#142618] border border-[#D4AF37]/30 p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#000] hover:border-[#D4AF37] transition-all group`}
            >
              <div>
                <div className="relative h-48 sm:h-56 w-full overflow-hidden border border-[#1B3320] mb-6 bg-black">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B3320] text-[#D4AF37] text-xs font-mono font-bold px-3 py-1 border border-[#D4AF37]">
                    {event.schedule}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">
                  {event.subtitle}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-3">
                  {event.title}
                </h3>

                <p className="text-sm text-[#F5F5F0]/80 leading-relaxed font-sans mb-6">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F5F0]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F5F5F0]/60">
                  Courtyard & Bar
                </span>
                <button
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] font-bold hover:underline cursor-pointer"
                >
                  <span>Book Bed to Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Family Dinner Banner */}
        <div className="mt-8 p-6 bg-[#3E2723] border border-[#D4AF37]/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#F5F5F0] mb-1">
              Family dinner every night at 6:30 PM
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F5F0]/80 font-mono">
              70,000 VND for all-you-can-eat home-cooked dishes around one big courtyard table.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="shrink-0 px-6 py-3 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider border border-[#1B3320] shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          >
            Save a Bed
          </button>
        </div>

      </div>
    </section>
  )
}
