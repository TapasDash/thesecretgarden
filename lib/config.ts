/**
 * Centralized Hostel Configuration
 * Edit these values or set environment variables in .env.local to link directly
 * to your real phone number, WhatsApp number, and email.
 */

export const HOSTEL_CONFIG = {
  name: 'Secret Garden Hostel',
  tagline: 'Clean beds, cold beer, good people.',
  location: '123 Nui Ngoc Street, Cat Ba Town, Hai Phong, Vietnam',
  
  // Real WhatsApp & Phone: set to your number +919815002866 for live testing
  whatsappNumber: process.env.NEXT_PUBLIC_HOSTEL_WHATSAPP || '919815002866',
  whatsappDisplay: process.env.NEXT_PUBLIC_HOSTEL_WHATSAPP_DISPLAY || '+91 98150 02866',
  
  // Zalo number for domestic Vietnamese travelers
  zaloNumber: process.env.NEXT_PUBLIC_HOSTEL_ZALO || '0987654321',
  
  // Email for reservation receipts
  email: process.env.NEXT_PUBLIC_HOSTEL_EMAIL || 'hello@secretgardenhostelcatba.com',
  
  // Direct WhatsApp dispatch helper
  getWhatsAppLink: (customMessage?: string) => {
    const number = HOSTEL_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')
    if (!customMessage) {
      return `https://wa.me/${number}`
    }
    return `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`
  },

  getZaloLink: () => {
    const number = HOSTEL_CONFIG.zaloNumber.replace(/[^0-9]/g, '')
    return `https://zalo.me/${number}`
  }
}
