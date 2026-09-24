'use client'

import React, { useState, useMemo } from 'react'
import { X, Check, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react'
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

  React.useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId)
    }
  }, [selectedRoomId])

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

    window.open(HOSTEL_CONFIG.getWhatsAppLink(rawMessage), '_blank')
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    closeBooking()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-[#1B3320]/10 rounded-[2.5rem] shadow-[0_24px_64px_rgba(27,51,32,0.18)] p-6 sm:p-9 text-[#1B3320] relative my-auto max-h-[90vh] overflow-y-auto">
        
        {/* Minimalist Close Button */}
        <button
          onClick={closeBooking}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/80 hover:bg-[#1B3320] text-[#1B3320] hover:text-white border border-[#1B3320]/10 flex items-center justify-center transition-all cursor-pointer shadow-sm"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header: Clean & Breathable */}
            <div className="mb-6 pr-8">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#1B3320]/70 block mb-1">
                Direct Reservation • Zero Deposit
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1B3320] tracking-tight">
                Reserve your stay
              </h2>
              <p className="text-xs text-[#1B3320]/70 font-sans mt-1">
                Instant confirmation on WhatsApp. Pay when you arrive.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-medium text-[#1B3320]/80 mb-1.5">
                  Room or Dorm Type
                </label>
                <div className="relative">
                  <select
                    value={roomId}
                    onChange={(e) => {
                      setRoomId(e.target.value)
                      selectRoom(e.target.value)
                    }}
                    className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3.5 text-xs font-semibold text-[#1B3320] focus:outline-none focus:border-[#1B3320] focus:ring-1 focus:ring-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] cursor-pointer appearance-none transition-all"
                  >
                    {AVAILABLE_ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ${r.priceUSD} / {r.priceVND.toLocaleString()} VND per night
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1B3320]/50 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Dates & Guests in Sleek Clean Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setDates(e.target.value, checkOutDate)}
                    className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3 text-xs font-medium text-[#1B3320] focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setDates(checkInDate, e.target.value)}
                    className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3 text-xs font-medium text-[#1B3320] focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3 text-xs font-medium text-[#1B3320] focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] cursor-pointer appearance-none transition-all"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4+ Group</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1B3320]/50 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3 text-xs text-[#1B3320] placeholder:text-[#1B3320]/35 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#1B3320]/75 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7123 456789"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-white border border-[#1B3320]/12 rounded-2xl p-3 text-xs text-[#1B3320] placeholder:text-[#1B3320]/35 focus:outline-none focus:border-[#1B3320] shadow-[0_2px_8px_rgba(27,51,32,0.03)] transition-all"
                  />
                </div>
              </div>

              {/* Minimal Perks Checks */}
              <div className="pt-2 pb-1 space-y-2">
                <label className="flex items-center gap-3 cursor-pointer text-xs text-[#1B3320] select-none">
                  <input
                    type="checkbox"
                    checked={formData.includeBreakfast}
                    onChange={(e) => setFormData({ ...formData, includeBreakfast: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4 rounded"
                  />
                  <span>Free daily homemade breakfast included</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-xs text-[#1B3320] select-none">
                  <input
                    type="checkbox"
                    checked={formData.motorbikeRental}
                    onChange={(e) => setFormData({ ...formData, motorbikeRental: e.target.checked })}
                    className="accent-[#1B3320] w-4 h-4 rounded"
                  />
                  <span>Hold a semi-auto motorbike (+120k VND / day)</span>
                </label>
              </div>

              {/* Refined Minimalist Price Bar */}
              <div className="p-4 bg-white rounded-2xl border border-[#1B3320]/10 flex items-center justify-between shadow-[0_4px_16px_rgba(27,51,32,0.03)]">
                <div>
                  <div className="text-[11px] font-mono text-[#1B3320]/60 uppercase tracking-wide">
                    {nightsCount} night{nightsCount > 1 ? 's' : ''} • {formData.guestsCount} guest{formData.guestsCount > 1 ? 's' : ''}
                  </div>
                  <div className="text-xs font-semibold text-[#1B3320] truncate max-w-[200px]">
                    {selectedRoom.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl font-bold text-[#1B3320] leading-none">
                    ${totalPriceUSD}
                  </div>
                  <div className="text-[10px] font-mono text-[#1B3320]/60 mt-0.5">
                    ≈ {totalPriceVND.toLocaleString()} VND
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] font-semibold text-xs uppercase tracking-widest rounded-full shadow-[0_4px_18px_rgba(27,51,32,0.2)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span>Reserve on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#FAF8F5]/80" />
              </button>

              <div className="text-center text-[10px] font-mono text-[#1B3320]/60 pt-1">
                Pay cash or card on arrival • Free cancellation
              </div>

            </form>
          </div>
        ) : (
          /* Clean Confirmation State */
          <div className="text-center py-6 space-y-4 animate-in fade-in">
            <div className="w-12 h-12 bg-[#1B3320] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1B3320]">
              Reservation Sent
            </h3>

            <p className="text-xs text-[#1B3320]/75 max-w-[36ch] mx-auto leading-relaxed">
              We opened WhatsApp to connect you with reception. We look forward to welcoming you!
            </p>

            <div className="bg-white p-4 rounded-2xl border border-[#1B3320]/10 text-left text-xs font-mono space-y-1.5 max-w-xs mx-auto shadow-sm">
              <div className="flex justify-between"><span className="text-[#1B3320]/60">Guest:</span> <span className="font-semibold">{formData.fullName}</span></div>
              <div className="flex justify-between"><span className="text-[#1B3320]/60">Room:</span> <span className="font-semibold truncate max-w-[150px]">{selectedRoom.name}</span></div>
              <div className="flex justify-between"><span className="text-[#1B3320]/60">Nights:</span> <span className="font-semibold">{nightsCount} night(s)</span></div>
              <div className="flex justify-between border-t border-[#1B3320]/10 pt-1.5"><span className="text-[#1B3320]/60">Total:</span> <span className="font-bold text-[#1B3320]">${totalPriceUSD}</span></div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#1B3320] text-[#FAF8F5] hover:bg-[#284a30] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
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
