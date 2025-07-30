"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-md border-2 border-gray-200 py-3 pl-3 focus-within:border-blue-400",
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        name={placeholder}
        id={placeholder}
        placeholder={placeholder}
        className="w-full outline-none"
        onChange={(e) => {
          const params = new URLSearchParams(searchParams);
          if (e.target.value) {
            params.set("query", e.target.value);
          } else {
            params.delete("query");
          }
          router.replace(`${pathname}?${params.toString()}`);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
