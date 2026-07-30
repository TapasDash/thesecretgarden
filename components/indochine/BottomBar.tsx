'use client'

import React from 'react'
import { BookOpen, Coffee, Zap, User } from 'lucide-react'

interface BottomBarItem {
  id: string
  label: string
  icon: React.ReactNode
}

const items: BottomBarItem[] = [
  { id: 'book', label: 'Book Room', icon: <BookOpen className="w-6 h-6" /> },
  { id: 'cafe', label: 'Cafe Orders', icon: <Coffee className="w-6 h-6" /> },
  { id: 'vibe', label: 'Hostel Vibe', icon: <Zap className="w-6 h-6" /> },
  { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" /> },
]

export function BottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 border-t"
      style={{
        backgroundColor: 'var(--text-indochine-primary)',
        borderColor: 'var(--border-indochine)',
      }}
    >
      <div className="flex justify-around items-center py-4 px-4 max-w-full">
        {items.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-md transition-colors hover:opacity-80"
            style={{ color: 'var(--bg-indochine-primary)' }}
          >
            {item.icon}
            <span className="text-xs font-medium text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
