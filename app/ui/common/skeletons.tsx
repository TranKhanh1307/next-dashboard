import { ReactNode } from "react";
import CardListWrapper from "./card-list-wrapper";
import { renderMultiple } from "@/app/lib/utils";

export function CardsSkeleton() {
  return (
    <CardListWrapper className="animate-pulse">
      {renderMultiple(6, (i) => (
        <CardSkeleton key={i} />
      ))}
    </CardListWrapper>
  );
}

function CardSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function CellSkeleton() {
  return (
    <td className="px-3 py-3 whitespace-nowrap">
      <div className="h-6 w-32 rounded bg-gray-100"></div>
    </td>
  );
}

export function ImageNameCellSkeleton() {
  return (
    <td className="relative overflow-hidden py-3 pr-3 pl-6 whitespace-nowrap">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-100"></div>
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </div>
    </td>
  );
}

export function BaseRow({ children }: { children: ReactNode }) {
  return (
    <tr className="w-full animate-pulse border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {children}
    </tr>
  );
}
