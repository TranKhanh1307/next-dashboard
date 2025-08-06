"use client";

import { generatePagination } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginationBar({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const curPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(curPage, totalPages);

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex">
        <PageArrow
          direction={"left"}
          href={createPageURL(curPage - 1)}
          isDisabled={curPage === 1}
        />
        {allPages.map((page, index) => (
          <PageNumber
            key={`${page}-${index}`}
            href={createPageURL(page)}
            page={page}
            curPage={curPage}
            totalPages={totalPages}
          />
        ))}
        <PageArrow
          direction={"right"}
          href={createPageURL(curPage + 1)}
          isDisabled={curPage === totalPages}
        />
      </div>
    </div>
  );
}

function PageNumber({
  href,
  page,
  curPage,
  totalPages,
}: {
  href: string;
  page: string | number;
  curPage: number;
  totalPages: number;
}) {
  return (
    <Link
      className={clsx(
        "flex size-10 items-center justify-center border-1 border-gray-200 p-2 hover:bg-blue-400 hover:text-white",
        { "bg-blue-400 text-white": page === curPage },
        { "rounded-l-md": page === 1 },
        { "rounded-r-md": page === totalPages },
      )}
      href={href}
    >
      {page}
    </Link>
  );
}

function PageArrow({
  direction,
  href,
  isDisabled,
}: {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}) {
  const icon =
    direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    );

  const className = clsx("size-10 rounded-md border-1 border-gray-200 p-2", {
    "mr-3": direction === "left",
    "ml-3": direction === "right",
    "hover:bg-gray-300": !isDisabled,
    "cursor-not-allowed opacity-50 hover:bg-transparent": isDisabled,
  });

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
}
