import { create } from 'zustand'

export type RoomCategory = 'all' | 'dorm' | 'private'

export interface BookingState {
  isBookingOpen: boolean
  selectedRoomId: string | null
  selectedExpeditionId: string | null
  activeCategory: RoomCategory
  checkInDate: string
  checkOutDate: string
  guests: number
  activeVibeModal: string | null
  isCourtyardSoundPlaying: boolean
  openBooking: (roomId?: string) => void
  closeBooking: () => void
  selectRoom: (roomId: string) => void
  selectExpedition: (expeditionId: string) => void
  setCategory: (category: RoomCategory) => void
  setDates: (checkIn: string, checkOut: string) => void
  setGuests: (count: number) => void
  setActiveVibeModal: (eventId: string | null) => void
  toggleCourtyardSound: () => void
}

export const useHostelStore = create<BookingState>((set) => ({
  isBookingOpen: false,
  selectedRoomId: null,
  selectedExpeditionId: null,
  activeCategory: 'all',
  checkInDate: new Date().toISOString().split('T')[0],
  checkOutDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
  guests: 1,
  activeVibeModal: null,
  isCourtyardSoundPlaying: false,
  openBooking: (roomId?: string) =>
    set({ isBookingOpen: true, ...(roomId ? { selectedRoomId: roomId } : {}) }),
  closeBooking: () => set({ isBookingOpen: false }),
  selectRoom: (roomId: string) => set({ selectedRoomId: roomId, isBookingOpen: true }),
  selectExpedition: (expeditionId: string) =>
    set({ selectedExpeditionId: expeditionId, isBookingOpen: true }),
  setCategory: (category: RoomCategory) => set({ activeCategory: category }),
  setDates: (checkIn: string, checkOut: string) =>
    set({ checkInDate: checkIn, checkOutDate: checkOut }),
  setGuests: (count: number) => set({ guests: count }),
  setActiveVibeModal: (eventId: string | null) => set({ activeVibeModal: eventId }),
  toggleCourtyardSound: () =>
    set((state) => ({ isCourtyardSoundPlaying: !state.isCourtyardSoundPlaying })),
}))
