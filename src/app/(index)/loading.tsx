import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="w-[980] py-[50] mx-auto flex items-start">
      <div className="w-[200]">
        <Skeleton className="w-[40%] h-[40] mb-[10]" />
        <Skeleton className="w-[80%] h-[40] mb-[10]" />
        <Skeleton className="w-[80%] h-[40] mb-[10]" />
        <Skeleton className="w-[80%] h-[40] mb-[10]" />
      </div>
      <div className="flex-1 ml-[40]">
        <Skeleton className="w-[200] h-[40] mb-[15]" />
        <div className="grid grid-cols-3 gap-[50]">
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
          <Skeleton className="w-full h-[200]" />
        </div>
      </div>
    </div>
  )
}
