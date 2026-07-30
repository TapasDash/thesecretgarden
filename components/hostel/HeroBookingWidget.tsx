'use client'

import { useState } from 'react'
import { Calendar, Users, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'

export function HeroBookingWidget() {
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Please select both check-in and check-out dates.')
      setBookingSuccess(false)
      return
    }
    setErrorMessage('')
    setBookingSuccess(true)
    console.log('[Booking Check]:', { checkInDate, checkOutDate, guests })
  }

  return (
    <section
      id="booking-widget"
      className="w-full py-16 md:py-24 relative overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-primary)]"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Hero Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-xs font-bold uppercase tracking-widest text-[var(--accent-green)] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Tropical Sanctuary • Cat Ba Island</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight text-[var(--text-primary)]"
          >
            Secret Garden Hostel
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] mb-8"
          >
            Immerse yourself in lush botanical gardens, vibrant café culture, and authentic Vietnamese warmth in Cat Ba Town.
          </p>

          {/* Quick Interior Highlights Pill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 text-left">
            <a
              href="#interior-showcase"
              className="group relative h-28 border border-[var(--border-primary)] overflow-hidden shadow-sm transition-all hover:scale-102 flex items-end p-3 bg-black"
            >
              <img
                src="/images/secret_garden_entrance_arch.jpg"
                alt="Botanical Entrance"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--accent-gold)] block">Grounds</span>
                <span className="text-xs font-serif font-bold drop-shadow">Botanical Canopy Entrance</span>
              </div>
            </a>

            <a
              href="#interior-showcase"
              className="group relative h-28 border border-[var(--border-primary)] overflow-hidden shadow-sm transition-all hover:scale-102 flex items-end p-3 bg-black"
            >
              <img
                src="/images/secret_garden_reception_bar.jpg"
                alt="Espresso Bar & Reception"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--accent-gold)] block">Café & Bar</span>
                <span className="text-xs font-serif font-bold drop-shadow">Living-Tree Espresso Bar</span>
              </div>
            </a>

            <a
              href="#interior-showcase"
              className="group relative h-28 border border-[var(--border-primary)] overflow-hidden shadow-sm transition-all hover:scale-102 flex items-end p-3 bg-black"
            >
              <img
                src="/images/secret_garden_social_night.jpg"
                alt="Night Courtyard"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--accent-gold)] block">Nightlife</span>
                <span className="text-xs font-serif font-bold drop-shadow">Jellyfish Lantern Social Hub</span>
              </div>
            </a>
          </div>
        </div>

        {/* Booking Card Form */}
        <div
          className="p-6 md:p-10 shadow-indochine-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)]"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-primary)]">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[var(--accent-green)]" />
              <span>Check Room Availability</span>
            </h2>
            <span className="text-xs font-bold text-[var(--accent-green)] uppercase tracking-wider hidden sm:inline-block">
              Best Price Guarantee
            </span>
          </div>

          {/* Validation Feedback */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {bookingSuccess && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
              <span>
                Dates available! Select a room option below to complete your reservation for {guests} guest(s).
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Check-in Date */}
            <div>
              <label
                htmlFor="check-in-date"
                className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-primary)]"
              >
                Check In Date
              </label>
              <input
                id="check-in-date"
                type="date"
                value={checkInDate}
                onChange={(e) => {
                  setCheckInDate(e.target.value)
                  if (errorMessage) setErrorMessage('')
                }}
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]"
              />
            </div>

            {/* Check-out Date */}
            <div>
              <label
                htmlFor="check-out-date"
                className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-primary)]"
              >
                Check Out Date
              </label>
              <input
                id="check-out-date"
                type="date"
                value={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value)
                  if (errorMessage) setErrorMessage('')
                }}
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label
                htmlFor="guest-count"
                className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-primary)] text-left flex items-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                <span>Guests</span>
              </label>
              <select
                id="guest-count"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBooking}
              className="w-full py-3.5 px-6 font-bold text-xs uppercase tracking-wider shadow-indochine transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 bg-[var(--accent-gold)] text-[var(--text-primary)] border border-[var(--border-primary)] cursor-pointer"
            >
              Check Rates
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
