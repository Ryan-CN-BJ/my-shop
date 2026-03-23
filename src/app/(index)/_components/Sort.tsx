'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Fragment } from 'react'
import { SortTypes } from '@/lib/constant'
import { useSortType } from '@/app/(index)/store'
// import { usePathname, useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/navigation'
export default function Sort() {
  // const searchParams = useSearchParams()
  // const params = new URLSearchParams(searchParams.toString())
  // const router = useRouter()
  // const path = usePathname()

  // const [value, setVal] = useState('low')
  const setSortType = useSortType((state) => state.setSortType)
  const sortType = useSortType((state) => state.sortType)
  const onValueChange = (v: SortValueType) => {
    // params.set('a', v)
    console.log(v, 'vvvvvvvvvvv-')
    setSortType(v)
    // router.push(path + '?' + params.toString())
  }
  return (
    <div>
      <h2 className="mb-[10]">Sort By</h2>
      <ToggleGroup
        orientation={'vertical'}
        type={'single'}
        spacing={2}
        onValueChange={onValueChange}
        value={sortType}
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
