'use client'

import React, { useState } from 'react'
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react'
import { HOSTEL_CONFIG } from '@/lib/config'

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    window.open(HOSTEL_CONFIG.getWhatsAppLink("Hi Secret Garden! I have a question about room booking / island tours."), '_blank')
  }

  const openZalo = () => {
    window.open(HOSTEL_CONFIG.getZaloLink(), '_blank')
  }

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="bg-[#1B3320]/95 backdrop-blur-md text-[#F5F5F0] border border-[#D4AF37]/30 shadow-[0_16px_40px_rgba(0,0,0,0.3)] p-5 rounded-2xl w-72 mb-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/15">
            <div>
              <span className="font-serif font-bold text-sm block">Reception Front Desk</span>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase">Online 24/7 • Fast Reply</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={openWhatsApp}
              className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={openZalo}
              className="w-full py-2.5 px-3 bg-[#0068FF] hover:bg-[#0055d4] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Chat on Zalo</span>
            </button>
          </div>

          <div className="mt-2.5 text-center text-[10px] font-mono text-white/60">
            123 Nui Ngoc Street • Cat Ba Island
          </div>
        </div>
      )}

      {/* Floating Toggle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3 bg-[#1B3320] hover:bg-[#284a30] text-[#D4AF37] border border-[#D4AF37]/30 shadow-[0_8px_25px_rgba(27,51,32,0.3)] rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer active:scale-95 transition-all"
        aria-label="Contact Reception"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
        <span>Front Desk</span>
      </button>

    </div>
  )
}
