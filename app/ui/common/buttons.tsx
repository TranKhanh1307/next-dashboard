"use client";

import clsx from "clsx";

export default function Button({
  primary,
  secondary,
  type = "button", // default to avoid undefined
  onClick,
  text,
}: {
  primary?: boolean;
  secondary?: boolean;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("p3 rounded-md", {
        "bg-blue-400 text-white hover:bg-blue-200": primary,
        "bg-gray-400 text-black hover:bg-gray-200": secondary,
      })}
    >
      {text}
    </button>
  );
}
