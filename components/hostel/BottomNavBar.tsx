'use client'

import { useState } from 'react'
import { Bed, Coffee, Sparkles, User, type LucideIcon } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: LucideIcon
  targetId: string
}

const navItems: NavItem[] = [
  {
    id: 'book',
    label: 'Rooms',
    icon: Bed,
    targetId: 'accommodations',
  },
  {
    id: 'dates',
    label: 'Check Dates',
    icon: Sparkles,
    targetId: 'booking-widget',
  },
  {
    id: 'amenities',
    label: 'Amenities',
    icon: Coffee,
    targetId: 'amenities',
  },
]

export function BottomNavBar() {
  const [activeTab, setActiveTab] = useState('book')

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.id)
    const el = document.getElementById(item.targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 w-full md:hidden bg-[var(--bg-primary)] border-t border-[var(--border-primary)] shadow-lg"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 transition-colors border-t-2 ${
                isActive
                  ? 'bg-[var(--bg-secondary)] border-[var(--accent-gold)] text-[var(--accent-green)] font-bold'
                  : 'border-transparent text-[var(--text-secondary)] font-medium'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
