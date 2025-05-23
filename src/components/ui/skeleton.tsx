import { cn } from "@/lib/utils"

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[#ddd] animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export function PropertyCardSkeleton() {
  return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[225px] w-[400px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
  )
}
