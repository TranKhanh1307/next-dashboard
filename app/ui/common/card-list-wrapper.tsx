import { ReactNode } from "react";

export default function CardListWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-3 rounded-md bg-gray-200 p-2 md:hidden">
      {children}
    </div>
  );
}
