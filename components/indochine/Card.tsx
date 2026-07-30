import React from 'react'

interface CardProps {
  title: string
  description: string
  imageSrc?: string
  children?: React.ReactNode
}

export function Card({ title, description, imageSrc, children }: CardProps) {
  return (
    <div
      className="p-6 border"
      style={{
        backgroundColor: 'var(--bg-indochine-primary)',
        borderColor: 'var(--border-indochine)',
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: 'var(--text-indochine-primary)' }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: 'var(--text-indochine-secondary)' }}
      >
        {description}
      </p>
      {children && (
        <div className="flex gap-2">
          {children}
        </div>
      )}
    </div>
  )
}
