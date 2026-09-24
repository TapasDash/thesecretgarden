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
    <div className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-2 border-[#1B3320] rounded-3xl shadow-[6px_6px_0px_0px_#1B3320] p-6 sm:p-8 font-sans">
      
      {state.success ? (
        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="w-14 h-14 bg-[#1B3320] text-[#D4AF37] border-2 border-[#1B3320] rounded-2xl flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#D4AF37]">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>

          <div className="inline-block px-3 py-0.5 bg-[#E8E8DF] border border-[#1B3320] rounded-full text-[10px] font-mono uppercase tracking-widest text-[#3E2723] font-bold shadow-[2px_2px_0px_0px_#1B3320]">
            Confirmed
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
            Your Tour is Booked!
          </h3>

          <p className="text-sm text-[#3E2723] max-w-md mx-auto leading-relaxed">
            {state.message}
          </p>

          {state.data && (
            <div className="bg-[#FAF8F5] p-4 sm:p-5 border-2 border-[#1B3320] rounded-2xl text-left text-xs font-mono space-y-2 max-w-md mx-auto text-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320]/20">
              <div className="flex justify-between border-b border-[#D8D8CC] pb-1.5">
                <span className="text-[#3E2723]/70 font-bold uppercase">Guest</span>
                <span className="font-bold">{state.data.guestName}</span>
              </div>
              <div className="flex justify-between border-b border-[#D8D8CC] pb-1.5">
                <span className="text-[#3E2723]/70 font-bold uppercase">Tour</span>
                <span className="font-bold text-right">{state.data.tourName}</span>
              </div>
              <div className="flex justify-between border-b border-[#D8D8CC] pb-1.5">
                <span className="text-[#3E2723]/70 font-bold uppercase">Date</span>
                <span className="font-bold">{state.data.date}</span>
              </div>
              <div className="flex justify-between border-b border-[#D8D8CC] pb-1.5">
                <span className="text-[#3E2723]/70 font-bold uppercase">Travelers</span>
                <span className="font-bold">{state.data.guestCount} person(s)</span>
              </div>
              <div className="pt-1 text-[#3E2723] text-[11px]">
                <strong>Payment:</strong> Pay at front desk on arrival (cash or card)
              </div>
            </div>
          )}

          <div className="pt-2 text-xs font-mono text-[#3E2723]/80">
            Meet at Secret Garden reception at 123 Nui Ngoc, Cat Ba Town.
          </div>

          <div className="pt-4">
            <Link
              href="/tour-confirmed"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider rounded-xl border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] hover:shadow-[1px_1px_0px_0px_#1B3320] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span>View Full Confirmation Receipt</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="border-b border-[#D8D8CC] pb-4 mb-6">
            <div className="inline-block px-3 py-0.5 bg-[#E8E8DF] border border-[#1B3320] rounded-full text-[10px] font-mono uppercase tracking-widest text-[#3E2723] font-bold shadow-[2px_2px_0px_0px_#1B3320] mb-2">
              Fast Reservation
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
              Book an Island Tour
            </h3>
            <p className="text-xs sm:text-sm text-[#3E2723]/90 mt-1">
              Select your tour and date below. Free cancellation up to 24 hours before tour start. Pay at the front desk when you arrive.
            </p>
          </div>

          {/* Form Action */}
          <form action={formAction} className="space-y-5">
            
            {/* General Error Message */}
            {!state.success && state.message && (
              <div className="p-3 bg-[#3E2723] text-[#F5F5F0] text-xs font-mono border-2 border-[#1B3320] rounded-xl">
                {state.message}
              </div>
            )}

            {/* Tour Selection */}
            <div>
              <label htmlFor="tourId" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                Which Tour?
              </label>
              <select
                id="tourId"
                name="tourId"
                defaultValue={initialTourId}
                required
                className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all cursor-pointer font-sans"
              >
                <option value="plankton-night-kayak">Lan Ha Bay Plankton Night Kayak ($28 / 700k VND)</option>
                <option value="deep-water-solo">Deep Water Solo Climbing ($35 / 880k VND)</option>
                <option value="ha-giang-loop">Ha Giang Loop Road Trip 4D/3N ($145 / 3.65M VND)</option>
                <option value="jungle-trek">National Park Jungle Trek ($22 / 550k VND)</option>
              </select>
              {state.errors?.tourId && (
                <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.tourId[0]}</p>
              )}
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="guestName" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  required
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 placeholder:text-[#3E2723]/40 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all font-sans"
                />
                {state.errors?.guestName && (
                  <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.guestName[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@gmail.com"
                  className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 placeholder:text-[#3E2723]/40 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all font-sans"
                />
                {state.errors?.email && (
                  <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.email[0]}</p>
                )}
              </div>
            </div>

            {/* WhatsApp & Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsappNumber" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                  placeholder="+84 987 654 321"
                  className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 placeholder:text-[#3E2723]/40 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all font-sans"
                />
                {state.errors?.whatsappNumber && (
                  <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.whatsappNumber[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  defaultValue={defaultDate}
                  className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all font-sans"
                />
                {state.errors?.date && (
                  <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.date[0]}</p>
                )}
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label htmlFor="guestCount" className="block text-xs font-mono uppercase font-bold text-[#3E2723] mb-1.5">
                Number of Travelers
              </label>
              <select
                id="guestCount"
                name="guestCount"
                defaultValue={1}
                required
                className="w-full bg-[#FAF8F5] border-2 border-[#1B3320] rounded-xl text-sm text-[#1B3320] p-3 focus:shadow-[3px_3px_0px_0px_#1B3320] outline-none transition-all cursor-pointer font-sans"
              >
                <option value={1}>1 Solo traveler</option>
                <option value={2}>2 People</option>
                <option value={3}>3 Friends</option>
                <option value={4}>4 People</option>
                <option value={5}>5+ Group</option>
              </select>
              {state.errors?.guestCount && (
                <p className="text-[11px] font-mono text-[#991B1B] mt-1">{state.errors.guestCount[0]}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#c29f30] disabled:bg-[#D8D8CC] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider rounded-xl border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#1B3320] hover:shadow-[2px_2px_0px_0px_#1B3320] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isPending ? 'Locking spot in...' : 'Lock it in'}</span>
                {!isPending && <ArrowRight className="w-4 h-4 text-[#1B3320]" />}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#3E2723]/70 pt-2 border-t border-[#D8D8CC]">
              <span>WhatsApp confirmation sent immediately</span>
              <span>Pay on arrival in Cat Ba</span>
            </div>

          </form>
        </div>
      )}

    </div>
  )
}
