import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowLeft, ArrowUpRight, Phone, MapPin, Clock, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react'
import { HOSTEL_CONFIG } from '@/lib/config'

export default function TourConfirmedPage() {
  const whatsappHelpLink = HOSTEL_CONFIG.getWhatsAppLink(
    "Hi Secret Garden team! I just booked a tour on the website and wanted to check in about my reservation."
  )

  return (
    <main className="min-h-[100dvh] bg-[#FAF8F5] text-[#1B3320] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-20 relative overflow-hidden selection:bg-[#D4AF37]/30">
      {/* Ambient background glows for soft atmospheric depth */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-[#1B3320]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar Navigation & Brand */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-[#1B3320]/8 relative z-10">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-3 text-[#1B3320] hover:text-[#3E2723] transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-[#1B3320]/10 flex items-center justify-center shadow-[0_2px_8px_rgba(27,51,32,0.04)] group-hover:scale-105 group-active:scale-95 transition-all">
            <ArrowLeft className="w-4 h-4 text-[#1B3320] group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest font-semibold hidden sm:inline-block">
            Back to Secret Garden
          </span>
        </Link>

        {/* Dynamic Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-[#1B3320]/10 shadow-[0_2px_12px_rgba(27,51,32,0.04)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#1B3320]/80">
            Booking Confirmed • Cat Ba
          </span>
        </div>
      </header>

      {/* Main Content: Asymmetric Editorial Split with Abundant Breathing Room */}
      <div className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Editorial Narrative Column (7 cols on desktop) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1B3320]/5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest text-[#3E2723]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Reservation Locked In</span>
          </div>

          {/* Expressive Editorial Display Title */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B3320] leading-[1.08]">
              Your island adventure is ready.
            </h1>
            <p className="text-base sm:text-lg text-[#3E2723]/80 max-w-xl leading-relaxed font-sans pt-2">
              We&apos;ve reserved your spot. No upfront online deposit is needed — simply show up at the hostel reception, grab a cold drink, and pay when you arrive.
            </p>
          </div>

          {/* Visual Anchor: Nested Double-Bezel Image Card */}
          <div className="pt-2">
            <div className="p-2 bg-white/70 backdrop-blur-md rounded-[2.25rem] border border-[#1B3320]/8 shadow-[0_16px_40px_-12px_rgba(27,51,32,0.06)] max-w-lg">
              <div className="relative h-48 sm:h-56 w-full rounded-[1.75rem] overflow-hidden">
                <Image
                  src="/images/lan_ha_bay_kayak.jpg"
                  alt="Lan Ha Bay Kayaking"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3320]/80 via-[#1B3320]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block">
                      Cat Ba Island • Lan Ha Bay
                    </span>
                    <span className="font-serif text-lg font-bold">
                      Secret Garden Guided Expeditions
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-mono font-medium border border-white/20">
                    Daily Departures
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Group with Button-in-Button Trailing Icons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={whatsappHelpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-6 py-3.5 bg-[#1B3320] hover:bg-[#284a30] text-[#FAF8F5] rounded-full font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_10px_25px_-5px_rgba(27,51,32,0.25)] hover:shadow-[0_14px_30px_-5px_rgba(27,51,32,0.35)] active:scale-[0.98] transition-all"
            >
              <span>Message Reception on WhatsApp</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F3EFEA] text-[#1B3320] rounded-full border border-[#1B3320]/10 font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_2px_8px_rgba(27,51,32,0.04)] active:scale-[0.98] transition-all"
            >
              <span>Explore More Rooms</span>
            </Link>
          </div>

        </div>

        {/* Right Boarding Pass / Reservation Details Column (5 cols on desktop) */}
        <div className="lg:col-span-5">
          
          {/* Double-Bezel Nested Card Container */}
          <div className="p-2.5 sm:p-3 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-[#1B3320]/10 shadow-[0_24px_60px_-12px_rgba(27,51,32,0.08),0_1px_3px_rgba(27,51,32,0.04)]">
            <div className="bg-[#FAF8F5] rounded-[2rem] p-6 sm:p-8 border border-[#1B3320]/6 space-y-6">
              
              {/* Header inside ticket */}
              <div className="flex items-center justify-between pb-6 border-b border-[#1B3320]/8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B3320] text-[#D4AF37] flex items-center justify-center shadow-sm">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#3E2723]/70 font-semibold">
                      Official Receipt
                    </div>
                    <div className="font-serif text-xl font-bold text-[#1B3320]">
                      Confirmed Pass
                    </div>
                  </div>
                </div>

                <div className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                  Guaranteed
                </div>
              </div>

              {/* Detail Items with Soft Pill Icon Wrappers */}
              <div className="space-y-4 text-xs font-mono">
                
                {/* Meeting Point */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#1B3320]/5">
                  <div className="w-8 h-8 rounded-xl bg-[#1B3320]/5 flex items-center justify-center shrink-0 text-[#1B3320]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#3E2723]/60 tracking-wider">
                      Meeting &amp; Departure Point
                    </div>
                    <div className="font-bold text-[#1B3320] text-sm mt-0.5">
                      Secret Garden Reception
                    </div>
                    <div className="text-[#3E2723]/70 text-[11px]">
                      123 Nui Ngoc Street, Cat Ba Town
                    </div>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#1B3320]/5">
                  <div className="w-8 h-8 rounded-xl bg-[#1B3320]/5 flex items-center justify-center shrink-0 text-[#1B3320]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#3E2723]/60 tracking-wider">
                      Arrival Time
                    </div>
                    <div className="font-bold text-[#1B3320] text-sm mt-0.5">
                      15 mins before tour start
                    </div>
                    <div className="text-[#3E2723]/70 text-[11px]">
                      Complimentary tea, coffee &amp; water refills while you wait
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#1B3320]/5">
                  <div className="w-8 h-8 rounded-xl bg-[#1B3320]/5 flex items-center justify-center shrink-0 text-[#1B3320]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#3E2723]/60 tracking-wider">
                      Payment Policy
                    </div>
                    <div className="font-bold text-[#1B3320] text-sm mt-0.5">
                      Pay at check-in (Cash or Card)
                    </div>
                    <div className="text-[#3E2723]/70 text-[11px]">
                      VND / USD accepted • Free 24h cancellation
                    </div>
                  </div>
                </div>

                {/* Direct Front Desk Contact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#1B3320]/5">
                  <div className="w-8 h-8 rounded-xl bg-[#1B3320]/5 flex items-center justify-center shrink-0 text-[#1B3320]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-bold text-[#3E2723]/60 tracking-wider">
                      Front Desk Concierge
                    </div>
                    <div className="font-bold text-[#1B3320] text-sm mt-0.5">
                      {HOSTEL_CONFIG.whatsappDisplay}
                    </div>
                    <div className="text-[#3E2723]/70 text-[11px]">
                      {HOSTEL_CONFIG.email}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Note */}
              <div className="pt-2 text-center text-[11px] font-mono text-[#3E2723]/60 border-t border-[#1B3320]/8">
                Questions or changes? We reply on WhatsApp in under 5 minutes.
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Footer Branding Bar */}
      <footer className="w-full max-w-7xl mx-auto pt-8 border-t border-[#1B3320]/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#3E2723]/60 relative z-10">
        <div>
          © {new Date().getFullYear()} Secret Garden Hostel • Cat Ba Island, Vietnam
        </div>
        <div className="flex items-center gap-6">
          <span>123 Nui Ngoc, Cat Ba</span>
          <span>Clean beds • Cold beer • Good people</span>
        </div>
      </footer>
    </main>
  )
}
