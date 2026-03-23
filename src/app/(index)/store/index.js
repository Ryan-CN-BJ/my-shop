import { create } from 'zustand'

export const useSortType = create((set) => ({
  sortType: 'low',
  setSortType: (type) => set(type),
}))
