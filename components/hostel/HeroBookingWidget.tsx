'use client'

import React, { useState } from 'react'
import { Calendar, Users, CheckCircle2, AlertCircle, Sparkles, Clock, ArrowRight, Check, CalendarDays } from 'lucide-react'
import { DatePickerCalendar } from './DatePickerCalendar'

// Helper to format Date object to YYYY-MM-DD string for HTML date input
function formatDateString(date: Date): string {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

// Add days to a date
function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function HeroBookingWidget() {
  const today = new Date()
  const defaultCheckIn = formatDateString(today)
  const defaultCheckOut = formatDateString(addDays(today, 2))

  const [checkInDate, setCheckInDate] = useState<string>(defaultCheckIn)
  const [checkOutDate, setCheckOutDate] = useState<string>(defaultCheckOut)
  const [guests, setGuests] = useState<number>(2)
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false)

  // Calculate nights
  const calculateNights = (inStr: string, outStr: string): number => {
    if (!inStr || !outStr) return 0
    const start = new Date(inStr).getTime()
    const end = new Date(outStr).getTime()
    if (isNaN(start) || isNaN(end) || end <= start) return 0
    return Math.round((end - start) / (1000 * 60 * 60 * 24))
  }

  const nights = calculateNights(checkInDate, checkOutDate)

  // Auto-adjust check-out if check-in changes past it
  const handleCheckInChange = (newInDate: string) => {
    setCheckInDate(newInDate)
    setErrorMessage('')
    setBookingSuccess(false)
    if (checkOutDate && new Date(newInDate) >= new Date(checkOutDate)) {
      const nextDay = formatDateString(addDays(new Date(newInDate), 1))
      setCheckOutDate(nextDay)
    }
  }

  const handleCheckOutChange = (newOutDate: string) => {
    setCheckOutDate(newOutDate)
    setErrorMessage('')
    setBookingSuccess(false)
    if (checkInDate && new Date(newOutDate) <= new Date(checkInDate)) {
      setErrorMessage('Check-out date must be after check-in date.')
    }
  }

  // Preset Handlers
  const applyPreset = (daysInFuture: number, durationNights: number) => {
    const start = addDays(today, daysInFuture)
    const end = addDays(start, durationNights)
    setCheckInDate(formatDateString(start))
    setCheckOutDate(formatDateString(end))
    setErrorMessage('')
    setBookingSuccess(true)
  }

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Please select both check-in and check-out dates.')
      setBookingSuccess(false)
      return
    }
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      setErrorMessage('Check-out date must be after check-in date.')
      setBookingSuccess(false)
      return
    }
    setErrorMessage('')
    setBookingSuccess(true)
  }

  return (
    <section
      id="booking-widget"
      className="w-full py-16 md:py-24 relative overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-primary)]"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Hero Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Official Emblem Logo */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--accent-gold)] p-1 bg-white shadow-indochine mb-6 hover:scale-105 transition-transform">
            <img
              src="/images/secret_garden_logo.jpg"
              alt="Secret Garden Hostel Official Emblem Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-xs font-bold uppercase tracking-widest text-[var(--accent-green)] mb-4 shadow-sm">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 text-left w-full">
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
          className="p-6 md:p-10 shadow-indochine-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] relative"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-primary)]">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[var(--accent-green)]" />
              <span>Check Room Availability</span>
            </h2>

            <span className="text-xs font-bold text-[var(--accent-green)] uppercase tracking-wider hidden sm:inline-block">
              Best Price Guarantee
            </span>
          </div>

          {/* Quick Date Presets Row */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] opacity-80 mr-2 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[var(--accent-green)]" /> Quick Select:
            </span>
            <button
              onClick={() => applyPreset(0, 1)}
              className="px-3 py-1 bg-white border border-[var(--border-primary)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white transition-colors cursor-pointer"
            >
              Tonight (1 Night)
            </button>
            <button
              onClick={() => applyPreset(1, 2)}
              className="px-3 py-1 bg-white border border-[var(--border-primary)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white transition-colors cursor-pointer"
            >
              Weekend Getaway (2 Nights)
            </button>
            <button
              onClick={() => applyPreset(0, 7)}
              className="px-3 py-1 bg-white border border-[var(--border-primary)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white transition-colors cursor-pointer"
            >
              Full Week (7 Nights)
            </button>
          </div>

          {/* Validation Feedback */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {bookingSuccess && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                <span>
                  {nights > 0 ? `${nights}-Night Stay Verified!` : 'Dates Selected!'} Best available rates found for {guests} guest(s).
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded">
                Dorm Beds from ${12 * (nights || 1)} Total
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end relative">
            {/* Check-in Date */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="check-in-date"
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  Check In Date
                </label>
                <button
                  onClick={() => setShowCalendarModal(!showCalendarModal)}
                  className="text-[10px] font-bold text-[var(--accent-green)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <CalendarDays className="w-3 h-3" /> Calendar View
                </button>
              </div>
              <div
                onClick={() => setShowCalendarModal(true)}
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus-within:ring-2 focus-within:ring-[var(--accent-green)] cursor-pointer flex items-center justify-between"
              >
                <span>{checkInDate || 'Select Check In'}</span>
                <CalendarDays className="w-4 h-4 text-[var(--accent-green)]" />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="check-out-date"
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  Check Out Date
                </label>
                <button
                  onClick={() => setShowCalendarModal(!showCalendarModal)}
                  className="text-[10px] font-bold text-[var(--accent-green)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <CalendarDays className="w-3 h-3" /> Calendar View
                </button>
              </div>
              <div
                onClick={() => setShowCalendarModal(true)}
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus-within:ring-2 focus-within:ring-[var(--accent-green)] cursor-pointer flex items-center justify-between"
              >
                <span>{checkOutDate || 'Select Check Out'}</span>
                <CalendarDays className="w-4 h-4 text-[var(--accent-green)]" />
              </div>
            </div>

            {/* Interactive Calendar Popover Modal */}
            {showCalendarModal && (
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
                <DatePickerCalendar
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  onSelectDates={(newIn, newOut) => {
                    setCheckInDate(newIn)
                    setCheckOutDate(newOut)
                    setErrorMessage('')
                    setBookingSuccess(true)
                    setShowCalendarModal(false)
                  }}
                  onClose={() => setShowCalendarModal(false)}
                />
              </div>
            )}

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
                className="w-full px-4 py-3 border border-[var(--border-primary)] bg-white text-[var(--text-primary)] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] cursor-pointer"
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
              className="w-full py-3.5 px-6 font-bold text-xs uppercase tracking-wider shadow-indochine transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 bg-[var(--accent-gold)] text-[var(--text-primary)] border border-[var(--border-primary)] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{nights > 0 ? `Check ${nights}-Night Rates` : 'Check Rates'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stay Summary Bar */}
          {nights > 0 && (
            <div className="mt-6 pt-4 border-t border-[var(--border-primary)] flex items-center justify-between text-xs text-[var(--text-secondary)] font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[var(--accent-green)]" />
                Selected Duration: <strong>{nights} Night{nights > 1 ? 's' : ''}</strong> ({checkInDate} to {checkOutDate})
              </span>
              <span className="font-bold text-[var(--accent-green)]">
                Instant Confirmation • Free Cancellation
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
