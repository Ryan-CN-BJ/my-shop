'use client'
import { createContext, useState } from 'react'

export const appContext = createContext<{
  sortType: string
  setSortType: ((type: string) => void) | null
}>({
  sortType: 'latest',
  setSortType: null,
})

export default function Provider({ children }: { children: React.ReactNode }) {
  const [sortType, setSortType] = useState('latest')
  return <appContext.Provider value={{ sortType, setSortType }}>{children}</appContext.Provider>
}
