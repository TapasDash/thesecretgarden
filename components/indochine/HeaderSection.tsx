import React from 'react'

interface HeaderSectionProps {
  title: string
  subtitle?: string
}

export function HeaderSection({ title, subtitle }: HeaderSectionProps) {
  return (
    <div className="mb-8">
      <h1
        className="text-5xl font-serif font-bold mb-3 leading-tight"
        style={{ color: 'var(--text-indochine-primary)' }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="text-lg font-sans"
          style={{ color: 'var(--text-indochine-secondary)' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="w-24 h-1 mt-4"
        style={{ backgroundColor: 'var(--accent-gold)' }}
      />
    </div>
  )
}
