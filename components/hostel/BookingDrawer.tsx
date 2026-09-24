'use client'

import React, { useState, useMemo } from 'react'
import { X, Check, Sparkles, ShieldCheck, ArrowRight, MessageSquare, Phone } from 'lucide-react'
import { useHostelStore } from '@/lib/store'
import { HOSTEL_CONFIG } from '@/lib/config'

const AVAILABLE_ROOMS = [
  { id: 'bamboo-dorm-8', name: '8-Bed Wooden Dorm', priceUSD: 8, priceVND: 200000, type: 'dorm' },
  { id: 'teak-dorm-4', name: '4-Bed Small Garden Dorm', priceUSD: 11, priceVND: 275000, type: 'dorm' },
  { id: 'female-dorm-6', name: '6-Bed Female Dorm', priceUSD: 10, priceVND: 250000, type: 'dorm' },
  { id: 'indochine-private-balcony', name: 'Private Double Room with Mountain Balcony', priceUSD: 29, priceVND: 725000, type: 'private' },
  { id: 'garden-bungalow-suite', name: 'Garden Bungalow (1 Double + 1 Single)', priceUSD: 38, priceVND: 950000, type: 'private' },
]

export const BookingDrawer: React.FC = () => {
  const { isBookingOpen, closeBooking, selectedRoomId, checkInDate, checkOutDate, setDates, selectRoom } = useHostelStore()
  
  const [roomId, setRoomId] = useState<string>(selectedRoomId || 'bamboo-dorm-8')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    guestsCount: 1,
    notes: '',
    includeBreakfast: true,
    motorbikeRental: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Synchronize with external room selection
  React.useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId)
    }
  }, [selectedRoomId])

  // Calculate nights
  const nightsCount = useMemo(() => {
    try {
      const inDate = new Date(checkInDate)
      const outDate = new Date(checkOutDate)
      const diffTime = outDate.getTime() - inDate.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays > 0 ? diffDays : 1
    } catch {
      return 1
    }
  }, [checkInDate, checkOutDate])

  const selectedRoom = AVAILABLE_ROOMS.find((r) => r.id === roomId) || AVAILABLE_ROOMS[0]
  const totalPriceUSD = selectedRoom.priceUSD * nightsCount * formData.guestsCount
  const totalPriceVND = selectedRoom.priceVND * nightsCount * formData.guestsCount

  if (!isBookingOpen) return null

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const rawMessage = 
      `🌴 *NEW DIRECT RESERVATION - SECRET GARDEN*\n\n` +
      `👤 *Guest Name:* ${formData.fullName}\n` +
      `🛏️ *Room/Bed:* ${selectedRoom.name}\n` +
      `👥 *Guests:* ${formData.guestsCount}\n` +
      `📅 *Check-in:* ${checkInDate}\n` +
      `📅 *Check-out:* ${checkOutDate} (${nightsCount} night${nightsCount > 1 ? 's' : ''})\n` +
      `💰 *Est. Total:* $${totalPriceUSD} (~${totalPriceVND.toLocaleString()} VND)\n` +
      `🍳 *Free Breakfast:* ${formData.includeBreakfast ? 'Yes' : 'No'}\n` +
      `🛵 *Motorbike:* ${formData.motorbikeRental ? 'Yes (Hold 1 bike)' : 'No'}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
      `📱 *Contact:* ${formData.whatsapp || formData.email}\n\n` +
      `_Sent via Secret Garden Direct Web Engine_`

    // Open WhatsApp in new tab / app with configured number
    window.open(HOSTEL_CONFIG.getWhatsAppLink(rawMessage), '_blank')

    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    closeBooking()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-[#FAF8F5] border border-[#1B3320]/15 rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.25)] p-6 sm:p-8 text-[#1B3320] relative my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1B3320]/5 hover:bg-[#1B3320] text-[#1B3320] hover:text-white transition-all cursor-pointer"
          aria-label="Close Booking"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-[#1B3320]/10 pb-4 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1B3320] text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase rounded-full mb-2">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>DIRECT BOOKING • PAY ON ARRIVAL • ZERO FEES</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3320]">
                Reserve Your Bed / Room
              </h2>
              <p className="text-xs text-[#3E2723]/90 font-sans mt-1">
                No deposit needed. Instant confirmation via WhatsApp &amp; Email. Pay cash or card at front desk.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              
              {/* Room Selection Dropdown */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                  Select Room / Bed Type
                </label>
                <select
                  value={roomId}
                  onChange={(e) => {
                    setRoomId(e.target.value)
                    selectRoom(e.target.value)
                  }}
                  className="w-full bg-white border border-[#1B3320]/15 rounded-xl p-3 text-xs font-bold text-[#1B3320] focus:outline-none cursor-pointer shadow-sm"
                >
                  {AVAILABLE_ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — ${r.priceUSD} / {r.priceVND.toLocaleString()} VND per night
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/70 p-3.5 border border-[#1B3320]/10 rounded-2xl shadow-sm">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setDates(e.target.value, checkOutDate)}
                    className="w-full bg-[#FAF8F5] border border-[#1B3320]/10 rounded-xl p-2 text-xs font-semibold text-[#1B3320] focus:outline-none"
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
                    className="w-full bg-[#FAF8F5] border border-[#1B3320]/10 rounded-xl p-2 text-xs font-semibold text-[#1B3320] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                    className="w-full bg-[#FAF8F5] border border-[#1B3320]/10 rounded-xl p-2 text-xs font-semibold text-[#1B3320] focus:outline-none cursor-pointer"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4+ (Group)</option>
                  </select>
                </div>
              </div>

              {/* Live Price Calculation Summary Box */}
              <div className="p-4 bg-[#1B3320] text-[#F5F5F0] rounded-2xl border border-[#D4AF37]/30 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    Total for {nightsCount} Night{nightsCount > 1 ? 's' : ''} ({formData.guestsCount} guest{formData.guestsCount > 1 ? 's' : ''})
                  </div>
                  <div className="text-sm font-sans text-white/90 font-semibold mt-0.5">
                    {selectedRoom.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-xl font-bold text-[#D4AF37]">
                    ${totalPriceUSD} USD
                  </div>
                  <div className="text-[11px] font-mono text-white/70">
                    ≈ {totalPriceVND.toLocaleString()} VND
                  </div>
                </div>
              </div>

              {/* Guest Contact Details */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#1B3320]/15 rounded-xl p-3 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                      WhatsApp or Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white border border-[#1B3320]/15 rounded-xl p-3 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="alex@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#1B3320]/15 rounded-xl p-3 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div className="bg-white/70 p-3.5 border border-[#1B3320]/10 rounded-2xl space-y-2 shadow-sm">
                <div className="text-[10px] font-mono uppercase font-bold text-[#3E2723]">
                  Hostel Perks &amp; Extras
                </div>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-[#1B3320]">
                  <input
                    type="checkbox"
                    checked={formData.includeBreakfast}
                    onChange={(e) => setFormData({ ...formData, includeBreakfast: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4 rounded"
                  />
                  <span>Free Big Breakfast (Eggs, pancakes, bread &amp; fruit)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-[#1B3320]">
                  <input
                    type="checkbox"
                    checked={formData.motorbikeRental}
                    onChange={(e) => setFormData({ ...formData, motorbikeRental: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4 rounded"
                  />
                  <span>Reserve a Semi-Automatic Motorbike (+120,000 VND / day)</span>
                </label>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#3E2723] font-bold mb-1">
                  Estimated arrival time or ferry info (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Taking 12:30 PM speedboat from Hai Phong, arriving around 3 PM..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-[#1B3320]/15 rounded-xl p-3 text-xs text-[#1B3320] placeholder:text-[#3E2723]/40 focus:outline-none shadow-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-bold text-sm uppercase tracking-wider rounded-full border border-[#1B3320]/15 shadow-[0_4px_14px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <MessageSquare className="w-4 h-4 text-[#1B3320]" />
                <span>Confirm &amp; Message on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#1B3320]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#3E2723]/70 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B3320]" />
                <span>Instantly connects with reception WhatsApp • Pay at front desk on arrival</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#1B3320] text-[#D4AF37] rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1B3320]">
              Reservation Sent!
            </h3>

            <p className="text-xs sm:text-sm text-[#3E2723] max-w-[42ch] mx-auto leading-relaxed">
              Your booking details have been generated and dispatched to the front desk. We will confirm your bed immediately on WhatsApp.
            </p>

            <div className="bg-white/80 p-5 border border-[#1B3320]/10 rounded-2xl text-left text-xs font-mono space-y-1.5 max-w-sm mx-auto shadow-sm">
              <div><strong>Name:</strong> {formData.fullName}</div>
              <div><strong>Room:</strong> {selectedRoom.name}</div>
              <div><strong>Dates:</strong> {checkInDate} &rarr; {checkOutDate} ({nightsCount} nights)</div>
              <div><strong>Total:</strong> ${totalPriceUSD} (~{totalPriceVND.toLocaleString()} VND)</div>
              <div><strong>Payment:</strong> <span className="text-[#1B3320] font-bold">Pay cash or card at front desk</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#1B3320] text-[#FAF8F5] hover:bg-[#284a30] font-bold text-xs uppercase tracking-wider rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
