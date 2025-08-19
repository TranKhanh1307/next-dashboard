import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface BaseBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}

const initialClass = "flex items-center justify-center gap-2 rounded-md p-3";

export function OutlinedBtn({
  variant,
  href,
  className,
  children,
  ...rest
}: BaseBtnProps) {
  const baseClass = clsx(
    initialClass,
    "outline bg-white",
    {
      "outline-gray-200 hover:bg-gray-300": variant === "primary",
      "outline-purple-200 hover:bg-purple-300": variant === "secondary",
    },
    className,
  );
  return href ? (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  ) : (
    <button className={baseClass} {...rest}>
      {children}
    </button>
  );
}

export function FilledBtn({
  variant,
  href,
  className,
  children,
  ...rest
}: BaseBtnProps) {
  const baseClass = clsx(
    initialClass,
    {
      "bg-blue-600 text-white hover:bg-blue-400": variant === "primary",
      "bg-gray-200 hover:bg-gray-400": variant === "secondary",
    },
    className,
  );
  return href ? (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  ) : (
    <button className={baseClass} {...rest}>
      {children}
    </button>
  );
}
