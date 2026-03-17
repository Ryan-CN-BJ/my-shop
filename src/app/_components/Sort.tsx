'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Fragment, useState } from 'react'
import { SortTypes } from '@/lib/constant'
export default function Sort() {
  const [value, setVal] = useState('low')
  const onValueChange = (v: SortValueType) => {
    setVal(v)
  }
  return (
    <div>
      <h2 className="mb-[10]">Sort By</h2>
      <ToggleGroup
        orientation={'vertical'}
        type={'single'}
        spacing={2}
        onValueChange={onValueChange}
        value={value}
      >
        {SortTypes.map((item) => {
          return (
            <Fragment key={item.value}>
              <ToggleGroupItem
                className="hover:bg-amber-300 cursor-pointer data-[state=on]:bg-amber-300 data-[state=on]:text-white hover:text-white"
                value={item.value}
              >
                {item.title}
              </ToggleGroupItem>
            </Fragment>
          )
        })}
      </ToggleGroup>
    </div>
  )
}
