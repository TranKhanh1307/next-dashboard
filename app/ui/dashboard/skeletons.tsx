import { renderMultiple } from "@/app/lib/utils";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

function MetricCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function MetricsCardSkeleton() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
      {renderMultiple(4, (i) => (
        <MetricCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex h-[32rem] flex-col overflow-hidden md:flex-1`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex-1 rounded-xl bg-gray-100 p-4 flex flex-col">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4 flex-1" />
        <div className="flex items-center pt-6 pb-2">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className={`${shimmer} relative flex h-[32rem] flex-col md:flex-1`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          {renderMultiple(5, (i) => (
            <InvoiceSkeleton key={i} />
          ))}
        </div>
        <div className="flex items-center pt-6 pb-2">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
