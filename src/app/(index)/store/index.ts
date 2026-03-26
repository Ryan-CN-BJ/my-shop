import { create } from 'zustand'

export type SortType = 'latest' | 'low' | 'hight'

type SortStore = {
  sortType: SortType
  setSortType: (sortType: SortType) => void
}

export const useSortType = create<SortStore>((set) => ({
  sortType: 'latest',
  setSortType: (sortType) => set({ sortType }),
}))
