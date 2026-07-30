import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-indochine-primary)' }}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
