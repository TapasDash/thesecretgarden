'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, MapPin, Coffee, Users, Maximize2, X, ChevronRight, Beer } from 'lucide-react'

interface InteriorZone {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  description: string
  highlights: string[]
  badgeText: string
}

const interiorZones: InteriorZone[] = [
  {
    id: 'entrance',
    title: 'Botanical Entrance Arch',
    subtitle: 'Step into the Island Sanctuary',
    category: 'Botanical Grounds',
    image: '/images/secret_garden_entrance_arch.jpg',
    badgeText: 'Iconic Landmark',
    description:
      'Framed by towering tropical trees and hand-crafted rainbow floral arches, the Secret Garden entrance sets the tone for an authentic Cat Ba island experience. Nestled in nature with charming wooden birdhouses and bohemian warmth.',
    highlights: [
      'Towering natural jungle canopy overlay',
      'Hand-crafted vibrant tropical flower arch',
      'Artisanal wooden Secret Garden sign',
      'Quiet green courtyard retreat in Cat Ba town',
    ],
  },
  {
    id: 'bar-reception',
    title: 'Espresso Bar & Reception',
    subtitle: 'Craft Beer, Vietnamese Coffee & Tour Desk',
    category: 'Café & Craft Bar',
    image: '/images/secret_garden_reception_bar.jpg',
    badgeText: 'Heart of the Hostel',
    description:
      'A living tree grows straight through the wooden bar counter. Featuring hand-chalked menu boards offering traditional Vietnamese drip coffee, espresso, and craft beers on tap alongside vintage metal signs and hand-painted floral reception decor.',
    highlights: [
      'Living tree trunk seamlessly built into the bar structure',
      'Chalkboard menu featuring Vietnamese drip & espresso coffee',
      'Craft beers on tap & signature cocktail specials',
      'Lan Ha Bay cruise & trek booking desk',
    ],
  },
  {
    id: 'social-courtyard',
    title: 'Night Courtyard & Social Hub',
    subtitle: 'Lanterns, Murals & Communal Evenings',
    category: 'Nightlife & Lounge',
    image: '/images/secret_garden_social_night.jpg',
    badgeText: 'Vibrant Atmosphere',
    description:
      'As night falls, the open-air courtyard transforms into a glowing sanctuary beneath paper fish lanterns, jellyfish light sculptures, and Vietnamese conical hats. Backdropped by colorful murals, long wooden tables host backpackers for nightly family dinners.',
    highlights: [
      'Glowing jellyfish lights & traditional paper lantern ceiling',
      'Hand-painted Vietnamese ethnic motif street murals',
      'Long wooden banquet tables for communal dinners',
      'Unmatched social vibe for solo travelers & groups',
    ],
  },
]

export function InteriorShowcase() {
  const [activeZone, setActiveZone] = useState<InteriorZone>(interiorZones[0])
  const [lightboxImage, setLightboxImage] = useState<InteriorZone | null>(null)

  return (
    <section
      id="interior-showcase"
      className="w-full py-16 md:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-primary)] text-xs font-bold uppercase tracking-widest text-[var(--accent-green)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Authentic Interior & Atmosphere</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--text-primary)] mb-4">
            Inside Secret Garden Cat Ba
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Take a real look inside our lush botanical courtyard, living-tree espresso bar, and glowing lantern-lit night hub.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {interiorZones.map((zone) => {
            const isActive = activeZone.id === zone.id
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className={`px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[var(--accent-green)] text-white border-[var(--accent-green)] shadow-indochine scale-105'
                    : 'bg-white text-[var(--text-primary)] border-[var(--border-primary)] hover:bg-[var(--bg-primary)]'
                }`}
              >
                {zone.title}
              </button>
            )
          })}
        </div>

        {/* Active Zone Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[var(--bg-primary)] border border-[var(--border-primary)] p-6 md:p-8 shadow-indochine-lg">
          {/* Image Container with Hover Effects & Lightbox trigger */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-[var(--border-primary)] bg-black min-h-[350px] md:min-h-[440px] flex items-center justify-center">
            <img
              src={activeZone.image}
              alt={activeZone.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 bg-[var(--accent-gold)] text-[var(--text-primary)] text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md">
              {activeZone.badgeText}
            </div>

            {/* Bottom Floating Info & Expand Button */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-bold mb-1">
                  {activeZone.category}
                </p>
                <h3 className="text-2xl font-serif font-bold drop-shadow-md">
                  {activeZone.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImage(activeZone)}
                className="p-3 bg-white/90 text-black hover:bg-white hover:scale-110 transition-all border border-black shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                aria-label="Enlarge image"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">View Full</span>
              </button>
            </div>
          </div>

          {/* Details & Feature Bullet Points */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-green)] mb-2 block">
                {activeZone.subtitle}
              </span>
              <h3 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {activeZone.title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {activeZone.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] opacity-80 border-b border-[var(--border-primary)] pb-1">
                  Zone Highlights
                </h4>
                {activeZone.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-green)]/15 flex items-center justify-center text-[var(--accent-green)] shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-primary)] flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] font-bold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[var(--accent-green)]" /> Cat Ba Town
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[var(--accent-green)]" /> Social Vibes
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(activeZone)}
                className="px-4 py-2 bg-[var(--accent-gold)] text-[var(--text-primary)] font-bold text-xs uppercase tracking-wider border border-[var(--border-primary)] hover:brightness-105 transition-all cursor-pointer"
              >
                Expand Photo
              </button>
            </div>
          </div>
        </div>

        {/* 3 Photo Grid Gallery Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {interiorZones.map((zone) => (
            <div
              key={zone.id}
              onClick={() => {
                setActiveZone(zone)
                setLightboxImage(zone)
              }}
              className="group relative h-48 border border-[var(--border-primary)] bg-black overflow-hidden cursor-pointer shadow-indochine transition-all hover:-translate-y-1"
            >
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] block">
                  {zone.category}
                </span>
                <h4 className="text-base font-serif font-bold truncate">
                  {zone.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-5xl w-full bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[var(--accent-green)] tracking-wider block">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[var(--text-primary)]">
                  {lightboxImage.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 bg-white text-black border border-black hover:bg-gray-200 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 bg-black min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-[var(--bg-primary)] border-t border-[var(--border-primary)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {lightboxImage.description}
              </p>
              <button
                onClick={() => {
                  setLightboxImage(null)
                  const el = document.getElementById('booking-widget')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 bg-[var(--accent-green)] text-white text-xs font-bold uppercase tracking-wider border border-[var(--border-primary)] shadow-sm hover:scale-105 transition-transform shrink-0 cursor-pointer"
              >
                Book Your Stay Here
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
