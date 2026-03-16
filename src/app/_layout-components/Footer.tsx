import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { navList } from '@/lib/constant'
import { Fragment } from 'react/jsx-runtime'

export default function Footer() {
  return (
    <div className="mt-[20] pt-[40] border-t">
      <div className="w-[980] mx-auto py-[20] flex justify-between items-start">
        <h1 className="text-2xl">
          <Link href="/">My Store</Link>
        </h1>
        <div className="flex gap-[60]">
          {navList.map((item, index) => {
            return (
              <Fragment key={item.title}>
                <div>
                  <span>{item.title}</span>
                  <ul className="space-y-3 mt-[15]">
                    {item.list.map((it) => {
                      return <li key={it + '' + index}>{it}</li>
                    })}
                  </ul>
                </div>
                {index === navList.length - 1 ? null : <Separator orientation={'vertical'} />}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
