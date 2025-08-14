import clsx from "clsx";
import { ReactNode } from "react";

export function Button({
  icon,
  text,
  variant,
  onClick,
}: {
  icon?: ReactNode;
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx("flex items-center justify-center gap-2 rounded-md p-3", {
        "bg-blue-600 text-white hover:bg-blue-400": variant === "primary",
        "bg-gray-200 hover:bg-gray-400": variant === "secondary",
      })}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
}
