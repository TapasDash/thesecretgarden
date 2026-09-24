'use client'

import React, { useActionState } from 'react'
import Link from 'next/link'
import { submitTourBooking } from '@/app/actions/bookTour'
import type { ActionState } from '@/lib/types/tour'
import { Check, ArrowRight } from 'lucide-react'

interface TourBookingFormProps {
  initialTourId?: string
  onSuccess?: () => void
}

const initialState: ActionState = {
  success: false,
  message: '',
}

export const TourBookingForm: React.FC<TourBookingFormProps> = ({
  initialTourId = 'plankton-night-kayak',
}) => {
  const [state, formAction, isPending] = useActionState(submitTourBooking, initialState)

  const defaultDate = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-[#1B3320]/10 rounded-[2.5rem] shadow-[0_12px_48px_rgba(27,51,32,0.06)] p-6 sm:p-9 font-sans text-[#1B3320]">
      
      {state.success ? (
        <div className="text-center py-6 space-y-4 animate-in fade-in">
          <div className="w-12 h-12 bg-[#1B3320] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-md">
            <Check className="w-6 h-6 stroke-[2.5]" />
          </div>

          <span className="inline-block px-3 py-1 bg-[#1B3320]/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#1B3320]/75 font-semibold">
            Booking Confirmed
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
            You&apos;re all set!
          </h3>

          <p className="text-xs text-[#1B3320]/75 max-w-sm mx-auto leading-relaxed">
            {state.message}
          </p>

          {state.data && (
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#1B3320]/10 text-left text-xs font-mono space-y-2 max-w-sm mx-auto shadow-sm">
              <div className="flex justify-between border-b border-[#1B3320]/8 pb-2">
                <span className="text-[#1B3320]/60">Guest</span>
                <span className="font-semibold">{state.data.guestName}</span>
              </div>
              <div className="flex justify-between border-b border-[#1B3320]/8 pb-2">
                <span className="text-[#1B3320]/60">Tour</span>
                <span className="font-semibold text-right">{state.data.tourName}</span>
              </div>
              <div className="flex justify-between border-b border-[#1B3320]/8 pb-2">
                <span className="text-[#1B3320]/60">Date</span>
                <span className="font-semibold">{state.data.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1B3320]/60">Travelers</span>
                <span className="font-semibold">{state.data.guestCount} guest(s)</span>
              </div>
            </div>
          )}

          <div className="pt-2">
            <Link
              href="/tour-confirmed"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md active:scale-95 transition-all"
            >
              <span>View Full Confirmation</span>
              <ArrowRight className="w-4 h-4 text-[#FAF8F5]/80" />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="mb-6">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#1B3320]/70 block mb-1">
              Cat Ba Expeditions • Zero Pre-Payment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320] tracking-tight">
              Reserve a Tour Spot
            </h3>
            <p className="text-xs text-[#1B3320]/70 mt-1">
              Free cancellation up to 24h prior. Pay at front desk upon arrival.
            </p>
          </div>

          {/* Form Action */}
          <form action={formAction} className="space-y-4">
            
            {/* General Error Message */}
            {!state.success && state.message && (
              <div className="p-3 bg-red-50 text-red-800 text-xs font-mono border border-red-200 rounded-2xl">
                {state.message}
              </div>
            )}

            {/* Tour Selection */}
            <div>
              <label htmlFor="tourId" className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                Select Expedition
              </label>
              <div className="relative">
                <select
                  id="tourId"
                  name="tourId"
                  defaultValue={initialTourId}
                  required
                  className="w-full bg-[#FAF8F5] border border-[#1B3320]/12 rounded-2xl text-xs font-semibold text-[#1B3320] p-3.5 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] cursor-pointer appearance-none transition-all"
                >
                  <option value="plankton-night-kayak">Lan Ha Bay Plankton Night Kayak ($28 / 700k VND)</option>
                  <option value="deep-water-solo">Deep Water Solo Climbing ($35 / 880k VND)</option>
                  <option value="ha-giang-loop">Ha Giang Loop Road Trip 4D/3N ($145 / 3.65M VND)</option>
                  <option value="jungle-trek">National Park Jungle Trek ($22 / 550k VND)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1B3320]/50 text-xs">
                  ▼
                </div>
              </div>
              {state.errors?.tourId && (
                <p className="text-[11px] font-mono text-red-600 mt-1">{state.errors.tourId[0]}</p>
              )}
            </div>

            {/* Date & Travelers Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                  Tour Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  defaultValue={defaultDate}
                  className="w-full bg-[#FAF8F5] border border-[#1B3320]/12 rounded-2xl text-xs font-medium text-[#1B3320] p-3 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                />
                {state.errors?.date && (
                  <p className="text-[11px] font-mono text-red-600 mt-1">{state.errors.date[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                  Travelers
                </label>
                <div className="relative">
                  <select
                    id="guestCount"
                    name="guestCount"
                    defaultValue={1}
                    required
                    className="w-full bg-[#FAF8F5] border border-[#1B3320]/12 rounded-2xl text-xs font-medium text-[#1B3320] p-3 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] cursor-pointer appearance-none transition-all"
                  >
                    <option value={1}>1 Solo traveler</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 Friends</option>
                    <option value={4}>4 People</option>
                    <option value={5}>5+ Group</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1B3320]/50 text-xs">
                    ▼
                  </div>
                </div>
                {state.errors?.guestCount && (
                  <p className="text-[11px] font-mono text-red-600 mt-1">{state.errors.guestCount[0]}</p>
                )}
              </div>
            </div>

            {/* Name & Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="guestName" className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  required
                  placeholder="Alex Rivera"
                  className="w-full bg-[#FAF8F5] border border-[#1B3320]/12 rounded-2xl text-xs text-[#1B3320] p-3 placeholder:text-[#1B3320]/35 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                />
                {state.errors?.guestName && (
                  <p className="text-[11px] font-mono text-red-600 mt-1">{state.errors.guestName[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="whatsappNumber" className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                  placeholder="+44 7123 456789"
                  className="w-full bg-[#FAF8F5] border border-[#1B3320]/12 rounded-2xl text-xs text-[#1B3320] p-3 placeholder:text-[#1B3320]/35 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                />
                {state.errors?.whatsappNumber && (
                  <p className="text-[11px] font-mono text-red-600 mt-1">{state.errors.whatsappNumber[0]}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-[#1B3320] hover:bg-[#284a30] disabled:bg-[#1B3320]/40 text-[#FAF8F5] font-semibold text-xs uppercase tracking-widest rounded-full shadow-[0_4px_18px_rgba(27,51,32,0.2)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isPending ? 'Reserving...' : 'Confirm Spot'}</span>
                {!isPending && <ArrowRight className="w-4 h-4 text-[#FAF8F5]/80" />}
              </button>
            </div>

            <div className="text-center text-[10px] font-mono text-[#1B3320]/60 pt-1">
              WhatsApp confirmation sent instantly • Pay at reception
            </div>

          </form>
        </div>
      )}

    </div>
  )
}
