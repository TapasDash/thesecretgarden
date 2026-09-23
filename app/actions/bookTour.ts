'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import type { ActionState } from '@/lib/types/tour'

// Internal Zod Schema (not exported to comply with Next.js Server Actions rules)
const tourBookingSchema = z.object({
  tourId: z.enum(
    ['ha-giang-loop', 'plankton-night-kayak', 'deep-water-solo', 'jungle-trek'],
    {
      message: 'Please select a valid tour from the list.',
    }
  ),
  guestName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your full name (minimum 2 characters).' })
    .max(100, { message: 'Name is too long.' }),
  whatsappNumber: z
    .string()
    .trim()
    .min(7, { message: 'Please enter a valid WhatsApp number including country code.' })
    .regex(/^\+?[0-9\s\-()]{7,20}$/, {
      message: 'Include country code (e.g. +84 987 654 321 or +44 7123 456789).',
    }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' }),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Please select a valid date (YYYY-MM-DD).' }),
  guestCount: z.coerce
    .number()
    .int()
    .min(1, { message: 'Minimum 1 guest required.' })
    .max(20, { message: 'For groups larger than 20, please contact reception directly.' }),
})

const TOUR_NAMES: Record<string, string> = {
  'ha-giang-loop': 'Ha Giang Loop (4 Days / 3 Nights)',
  'plankton-night-kayak': 'Lan Ha Bay Plankton Night Kayak',
  'deep-water-solo': 'Deep Water Solo Climbing',
  'jungle-trek': 'National Park Jungle Trek (Frog Lake & Viet Hai)',
}

// Pure Asynchronous Server Action (Only export in this file)
export async function submitTourBooking(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    tourId: formData.get('tourId'),
    guestName: formData.get('guestName'),
    whatsappNumber: formData.get('whatsappNumber'),
    email: formData.get('email'),
    date: formData.get('date'),
    guestCount: formData.get('guestCount'),
  }

  // Validate with Zod
  const validation = tourBookingSchema.safeParse(rawData)

  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: fieldErrors,
    }
  }

  const { tourId, guestName, whatsappNumber, email, date, guestCount } = validation.data
  const tourName = TOUR_NAMES[tourId] || tourId

  // Clean WhatsApp number (digits only for API payload)
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '')

  // 1. Dispatch WhatsApp Cloud API notification
  const whatsappToken = process.env.WHATSAPP_ACCESS_TOKEN
  const whatsappPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (whatsappToken && whatsappPhoneId) {
    try {
      const whatsappPayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: cleanPhone,
        type: 'text',
        text: {
          preview_url: false,
          body: `Hi ${guestName}, your booking for ${tourName} on ${date} (${guestCount} guest${guestCount > 1 ? 's' : ''}) is confirmed at Secret Garden Hostel Cat Ba! We will meet at reception at 123 Nui Ngoc. Pay on arrival. Any questions? Reply to this message.`,
        },
      }

      await fetch(`https://graph.facebook.com/v19.0/${whatsappPhoneId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(whatsappPayload),
      })
    } catch (err) {
      console.error('WhatsApp dispatch failed:', err)
    }
  } else {
    console.log('[Dev Mode] WhatsApp Cloud API credentials not configured. Skipping live dispatch for:', cleanPhone)
  }

  // 2. Dispatch Resend Email notification (Guest + Reception)
  const resendApiKey = process.env.RESEND_API_KEY
  const receptionEmail = 'nv01.secretgarden@gmail.com'

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey)

      const emailHtml = `
        <div style="font-family: sans-serif; background-color: #F5F5F0; color: #1B3320; padding: 24px; max-width: 600px; margin: auto; border: 2px solid #1B3320;">
          <h2 style="color: #1B3320; margin-top: 0;">Secret Garden Hostel - Tour Booking</h2>
          <p>Hi ${guestName},</p>
          <p>We received your tour reservation. Here are your booking details:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: #E8E8DF; border: 1px solid #D8D8CC;">
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #D8D8CC;">Tour:</td><td style="padding: 8px 12px; border-bottom: 1px solid #D8D8CC;">${tourName}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #D8D8CC;">Date:</td><td style="padding: 8px 12px; border-bottom: 1px solid #D8D8CC;">${date}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #D8D8CC;">Guests:</td><td style="padding: 8px 12px; border-bottom: 1px solid #D8D8CC;">${guestCount}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #D8D8CC;">WhatsApp:</td><td style="padding: 8px 12px; border-bottom: 1px solid #D8D8CC;">${whatsappNumber}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold;">Payment:</td><td style="padding: 8px 12px;">Pay at front desk on arrival</td></tr>
          </table>
          <p><strong>Meeting Point:</strong> Secret Garden Hostel Reception, 123 Nui Ngoc, Cat Ba Town.</p>
          <p style="font-size: 12px; color: #3E2723; margin-top: 24px;">Need to change your date? WhatsApp us at +84 987 654 321.</p>
        </div>
      `

      // Email to Guest
      await resend.emails.send({
        from: 'Secret Garden Hostel <bookings@secretgardenhostelcatba.com>',
        to: [email],
        subject: `Tour Booking Confirmed: ${tourName} (${date})`,
        html: emailHtml,
      })

      // Email to Reception Desk
      await resend.emails.send({
        from: 'Secret Garden System <system@secretgardenhostelcatba.com>',
        to: [receptionEmail],
        subject: `[New Tour Booking] ${tourName} - ${guestName} (${guestCount} pax)`,
        html: emailHtml,
      })
    } catch (err) {
      console.error('Resend email dispatch failed:', err)
    }
  } else {
    console.log('[Dev Mode] Resend API key not configured. Mocking email delivery to:', email, 'and', receptionEmail)
  }

  return {
    success: true,
    message: 'Your tour booking is confirmed! Details have been sent to your email and phone.',
    data: {
      guestName,
      tourName,
      date,
      guestCount,
    },
  }
}
