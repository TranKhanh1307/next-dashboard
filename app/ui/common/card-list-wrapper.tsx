import clsx from "clsx";
import { ReactNode } from "react";

export default function CardListWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "space-y-3 rounded-md bg-gray-200 p-2 md:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
