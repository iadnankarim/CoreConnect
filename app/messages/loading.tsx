import { Skeleton } from "@/components/ui/skeleton"
import DashboardLayout from "@/components/dashboard-layout"

export default function Loading() {
  return (
    <DashboardLayout userRole="investor">
      <div className="flex h-[calc(100vh-8rem)] flex-col rounded-lg border bg-white shadow-sm dark:bg-gray-800">
        <div className="flex h-full">
          <div className="w-full border-r md:w-80">
            <div className="flex h-16 items-center justify-between border-b px-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <div className="p-4">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="h-[calc(100%-7rem)] overflow-y-auto p-4 space-y-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:flex-col md:items-center md:justify-center">
            <Skeleton className="h-12 w-48 mb-4" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
