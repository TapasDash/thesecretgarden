export interface ActionState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  data?: {
    guestName?: string
    tourName?: string
    date?: string
    guestCount?: number
  }
}
