/**
 * Centralized Hostel Configuration
 * Edit these values or set environment variables in .env.local to link directly
 * to your real phone number, WhatsApp number, and email.
 */

export const HOSTEL_CONFIG = {
  name: 'Secret Garden Hostel',
  tagline: 'Clean beds, cold beer, good people.',
  location: '123 Nui Ngoc Street, Cat Ba Town, Hai Phong, Vietnam',
  
  // Real WhatsApp & Phone: update this to your manager's or your phone number for testing
  // Format for WhatsApp link: numbers only without '+' or spaces (e.g. '84912345678' or '447123456789')
  whatsappNumber: process.env.NEXT_PUBLIC_HOSTEL_WHATSAPP || '84987654321',
  whatsappDisplay: process.env.NEXT_PUBLIC_HOSTEL_WHATSAPP_DISPLAY || '+84 987 654 321',
  
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
