'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X, Check } from 'lucide-react'

interface DatePickerCalendarProps {
  checkInDate: string // YYYY-MM-DD
  checkOutDate: string // YYYY-MM-DD
  onSelectDates: (checkIn: string, checkOut: string) => void
  onClose?: () => void
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function parseDateStr(str: string): Date | null {
  if (!str) return null
  const [y, m, d] = str.split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function formatDateStr(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export function DatePickerCalendar({
  checkInDate,
  checkOutDate,
  onSelectDates,
  onClose,
}: DatePickerCalendarProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const initialCheckIn = parseDateStr(checkInDate) || today
  const initialCheckOut = parseDateStr(checkOutDate) || new Date(today.getTime() + 86400000 * 2)

  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(initialCheckIn.getFullYear(), initialCheckIn.getMonth(), 1)
  )
  const [selectingMode, setSelectingMode] = useState<'checkIn' | 'checkOut'>('checkIn')
  const [tempCheckIn, setTempCheckIn] = useState<Date | null>(initialCheckIn)
  const [tempCheckOut, setTempCheckOut] = useState<Date | null>(initialCheckOut)

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleDayClick = (dayDate: Date) => {
    if (dayDate < today) return

    if (selectingMode === 'checkIn') {
      setTempCheckIn(dayDate)
      // If check-out is before or equal to new check-in, set check-out to check-in + 1 day
      if (!tempCheckOut || dayDate >= tempCheckOut) {
        const nextDay = new Date(dayDate)
        nextDay.setDate(nextDay.getDate() + 1)
        setTempCheckOut(nextDay)
      }
      setSelectingMode('checkOut')
    } else {
      // Selecting Check-Out
      if (tempCheckIn && dayDate <= tempCheckIn) {
        // Reset check-in to clicked date
        setTempCheckIn(dayDate)
        const nextDay = new Date(dayDate)
        nextDay.setDate(nextDay.getDate() + 1)
        setTempCheckOut(nextDay)
        setSelectingMode('checkOut')
      } else {
        setTempCheckOut(dayDate)
      }
    }
  }

  const handleApply = () => {
    if (tempCheckIn && tempCheckOut) {
      onSelectDates(formatDateStr(tempCheckIn), formatDateStr(tempCheckOut))
      if (onClose) onClose()
    }
  }

  // Generate calendar matrix for current month
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const calendarDays: (Date | null)[] = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(new Date(year, month, d))
  }

  return (
    <div className="bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] shadow-2xl p-4 md:p-6 rounded-none text-[var(--text-primary)] w-full max-w-md animate-fade-in relative z-50">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-[var(--accent-green)]" />
          <span className="font-serif font-bold text-lg">Select Reservation Dates</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/10 transition-colors cursor-pointer"
            aria-label="Close Calendar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mode Selection Tabs (Check In vs Check Out) */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => setSelectingMode('checkIn')}
          className={`py-2 px-3 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer text-left ${
            selectingMode === 'checkIn'
              ? 'bg-[var(--accent-green)] text-white border-[var(--accent-green)] shadow-sm'
              : 'bg-white text-[var(--text-primary)] border-[var(--border-primary)]'
          }`}
        >
          <span className="block text-[9px] opacity-80 uppercase">Step 1: Check In</span>
          <span className="font-serif text-sm">
            {tempCheckIn ? tempCheckIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Select Date'}
          </span>
        </button>

        <button
          onClick={() => setSelectingMode('checkOut')}
          className={`py-2 px-3 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer text-left ${
            selectingMode === 'checkOut'
              ? 'bg-[var(--accent-green)] text-white border-[var(--accent-green)] shadow-sm'
              : 'bg-white text-[var(--text-primary)] border-[var(--border-primary)]'
          }`}
        >
          <span className="block text-[9px] opacity-80 uppercase">Step 2: Check Out</span>
          <span className="font-serif text-sm">
            {tempCheckOut ? tempCheckOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Select Date'}
          </span>
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-3 px-1">
        <button
          onClick={handlePrevMonth}
          className="p-1.5 border border-[var(--border-primary)] bg-white hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
          aria-label="Previous Month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-serif font-bold text-base">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          onClick={handleNextMonth}
          className="p-1.5 border border-[var(--border-primary)] bg-white hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
          aria-label="Next Month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {DAYS_OF_WEEK.map((d) => (
          <span key={d} className="text-[11px] font-bold text-[var(--text-secondary)] uppercase">
            {d}
          </span>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-5">
        {calendarDays.map((date, idx) => {
          if (!date) {
            return <div key={`empty-${idx}`} className="h-9" />
          }

          const isPast = date < today
          const isCheckIn = tempCheckIn ? isSameDay(date, tempCheckIn) : false
          const isCheckOut = tempCheckOut ? isSameDay(date, tempCheckOut) : false
          const isInRange =
            tempCheckIn &&
            tempCheckOut &&
            date > tempCheckIn &&
            date < tempCheckOut

          let styleClass =
            'bg-white text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white'

          if (isPast) {
            styleClass = 'bg-gray-100 text-gray-300 cursor-not-allowed'
          } else if (isCheckIn || isCheckOut) {
            styleClass =
              'bg-[var(--accent-green)] text-white font-bold border-2 border-[var(--accent-gold)] shadow-sm'
          } else if (isInRange) {
            styleClass =
              'bg-[var(--accent-green)]/20 text-[var(--text-primary)] font-semibold'
          }

          return (
            <button
              key={date.toISOString()}
              disabled={isPast}
              onClick={() => handleDayClick(date)}
              className={`h-9 w-full flex items-center justify-center text-xs transition-all cursor-pointer border border-[var(--border-primary)]/40 ${styleClass}`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border-primary)]">
        <span className="text-xs text-[var(--text-secondary)] font-medium">
          {tempCheckIn && tempCheckOut && tempCheckOut > tempCheckIn
            ? `${Math.round(
                (tempCheckOut.getTime() - tempCheckIn.getTime()) / 86400000
              )} Night Stay`
            : 'Select Check-in & Check-out'}
        </span>

        <button
          onClick={handleApply}
          className="px-5 py-2.5 bg-[var(--accent-gold)] text-[var(--text-primary)] font-bold text-xs uppercase tracking-wider border border-[var(--border-primary)] shadow-sm hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>Apply Dates</span>
        </button>
      </div>
    </div>
  )
}
