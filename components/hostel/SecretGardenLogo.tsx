'use client'

import React from 'react'

interface SecretGardenLogoProps {
  size?: number | string
  className?: string
  variant?: 'green-gold' | 'light-green' | 'monochrome-green'
}

export const SecretGardenLogo: React.FC<SecretGardenLogoProps> = ({
  size = 48,
  className = '',
  variant = 'green-gold',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-2xl overflow-hidden shrink-0 shadow-sm ${className}`}
    >
      <img
        src="/images/secret_garden_logo.jpg"
        alt="Secret Garden Hostel Logo"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
