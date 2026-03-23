'use client'
import { createContext, useState } from 'react'
import type { ReactNode, Dispatch, SetStateAction } from 'react'

export const appContext = createContext<{
  sortType: string
  setSortType: Dispatch<SetStateAction<string>>
}>({
  sortType: 'latest',
  setSortType: () => {},
})

export default function Provider({ children }: { children: ReactNode }) {
  const [sortType, setSortType] = useState('latest')
  return <appContext.Provider value={{ sortType, setSortType }}>{children}</appContext.Provider>
}
