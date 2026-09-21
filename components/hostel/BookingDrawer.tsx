'use client'

import React, { useState } from 'react'
import { X, Calendar, Users, Bed, Check, Sparkles, ShieldCheck, ArrowRight, Phone, Mail } from 'lucide-react'
import { useHostelStore } from '@/lib/store'

export const BookingDrawer: React.FC = () => {
  const { isBookingOpen, closeBooking, checkInDate, checkOutDate, guests, selectedRoomId, selectedExpeditionId, setDates, setGuests } = useHostelStore()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    notes: '',
    includeBreakfast: true,
    motorbikeRental: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isBookingOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    closeBooking()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[8px_8px_0px_0px_#1B3320] p-6 sm:p-8 text-[#1B3320] relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute top-4 right-4 p-2 bg-[#3E2723] hover:bg-[#1B3320] text-[#F5F5F0] border border-[#1B3320] transition-colors cursor-pointer"
          aria-label="Close Booking"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-[#D8D8CC] pb-4 mb-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase border border-[#1B3320] mb-2">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>DIRECT BOOKING • INSTANT CONFIRMATION</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
                Reserve Your Secret Garden Bed
              </h2>
              <p className="text-xs text-[#3E2723]/90 font-sans mt-1">
                Zero booking fees, free date change up to 24h before check-in, pay upon arrival.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#E8E8DF] p-3 border border-[#1B3320]">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setDates(e.target.value, checkOutDate)}
                    className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2 text-xs font-semibold text-[#1B3320] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setDates(checkInDate, e.target.value)}
                    className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2 text-xs font-semibold text-[#1B3320] focus:outline-none"
                  />
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Full Name (as in passport)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2.5 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2.5 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+84 987 654 321"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2.5 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div className="bg-[#E8E8DF] p-3 border border-[#D8D8CC] space-y-2">
                <div className="text-[10px] font-mono uppercase font-bold text-[#3E2723]">
                  Hostel Add-ons & Island Perks
                </div>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-[#1B3320]">
                  <input
                    type="checkbox"
                    checked={formData.includeBreakfast}
                    onChange={(e) => setFormData({ ...formData, includeBreakfast: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4"
                  />
                  <span>Include Daily Courtyard Family Breakfast (Free)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-[#1B3320]">
                  <input
                    type="checkbox"
                    checked={formData.motorbikeRental}
                    onChange={(e) => setFormData({ ...formData, motorbikeRental: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4"
                  />
                  <span>Reserve Semi-Automatic Motorbike (+120,000 VND / day)</span>
                </label>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                  Special Notes or Arrival Time (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Taking afternoon ferry from Hai Phong, arriving approx 5:30 PM..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F5F5F0] border border-[#1B3320] p-2 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-sm uppercase tracking-wider border-2 border-[#1B3320] shadow-[4px_4px_0px_0px_#1B3320] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Confirm & Lock In My Bed</span>
                <ArrowRight className="w-4 h-4 text-[#1B3320]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#3E2723]/70 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B3320]" />
                <span>Encrypted Host Dispatch • Instant WhatsApp Confirmation</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#1B3320] text-[#D4AF37] border-2 border-[#D4AF37] flex items-center justify-center mx-auto shadow-[4px_4px_0px_0px_#3E2723]">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1B3320]">
              Welcome to the Family!
            </h3>

            <p className="text-xs sm:text-sm text-[#3E2723] max-w-[42ch] mx-auto leading-relaxed">
              Your bed reservation request has been received. Our host team is reviewing availability and will WhatsApp / email you within 15 minutes.
            </p>

            <div className="bg-[#E8E8DF] p-4 border border-[#1B3320] text-left text-xs font-mono space-y-1 max-w-sm mx-auto">
              <div><strong>Guest:</strong> {formData.fullName}</div>
              <div><strong>Dates:</strong> {checkInDate} to {checkOutDate}</div>
              <div><strong>Contact:</strong> {formData.whatsapp || formData.email}</div>
              <div><strong>Status:</strong> <span className="text-[#1B3320] font-bold">Pending Host Confirmation</span></div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[#1B3320] text-[#F5F5F0] hover:bg-[#3E2723] font-bold text-xs uppercase tracking-wider border border-[#1B3320] shadow-[3px_3px_0px_0px_#D4AF37] cursor-pointer"
            >
              Return to Courtyard
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
