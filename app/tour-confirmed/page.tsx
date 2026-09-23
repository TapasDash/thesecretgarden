import React from 'react'
import Link from 'next/link'
import { Check, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react'
import { HOSTEL_CONFIG } from '@/lib/config'

export default function TourConfirmedPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1B3320] flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-[#F5F5F0] border-2 border-[#1B3320] shadow-[6px_6px_0px_0px_#1B3320] p-8 md:p-10 text-center font-sans relative">
        
        {/* Checkmark icon */}
        <div className="w-14 h-14 bg-[#1B3320] text-[#D4AF37] border-2 border-[#1B3320] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#3E2723] mb-6">
          <Check className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-[#3E2723] font-bold mb-2">
          Secret Garden Hostel • Cat Ba
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3320] mb-3">
          Your tour is booked!
        </h1>

        <p className="text-sm sm:text-base text-[#3E2723]/90 leading-relaxed mb-6 max-w-md mx-auto">
          We received your reservation. Full tour details and pickup times have been sent to your WhatsApp and email.
        </p>

        {/* Info Box */}
        <div className="bg-[#E8E8DF] border border-[#1B3320] p-5 text-left text-xs font-mono space-y-2.5 mb-8 text-[#1B3320]">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#1B3320] shrink-0 mt-0.5" />
            <div>
              <strong>Meeting Point:</strong> Secret Garden Hostel Reception, 123 Nui Ngoc, Cat Ba Town
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#1B3320] shrink-0" />
            <div>
              <strong>Front Desk WhatsApp:</strong> {HOSTEL_CONFIG.whatsappDisplay}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#1B3320] shrink-0" />
            <div>
              <strong>Contact:</strong> {HOSTEL_CONFIG.email}
            </div>
          </div>
          <div className="pt-2 border-t border-[#D8D8CC] text-[#3E2723]">
            <strong>Payment:</strong> Pay at the front desk when you arrive (cash or card).
          </div>
        </div>

        {/* Return Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#c29f30] text-[#1B3320] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1B3320] shadow-[3px_3px_0px_0px_#1B3320] active:translate-x-[1px] active:translate-y-[1px] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

      </div>
    </main>
  )
}
