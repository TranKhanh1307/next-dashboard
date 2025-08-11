import clsx from "clsx";
import { ReactNode } from "react";

export function Button({
  icon,
  text,
  primary,
  secondary,
  onClick,
}: {
  icon?: ReactNode;
  text: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx("flex items-center justify-center gap-2 rounded-md p-3", {
        "bg-blue-600 text-white hover:bg-blue-400": primary,
        "bg-gray-200 hover:bg-gray-400": secondary,
      })}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
}
