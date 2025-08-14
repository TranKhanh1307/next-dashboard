"use client";

import { generatePagination } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { leftArrowIcon, rightArrowIcon } from "./icons";

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
          isActive={page === curPage}
          totalPages={totalPages}
        />
      ))}
      <PageArrow
        direction={"right"}
        href={createPageURL(curPage + 1)}
        isDisabled={curPage === totalPages}
      />
    </div>
  );
}

function PageNumber({
  href,
  page,
  isActive,
  totalPages,
}: {
  href: string;
  page: string | number;
  isActive: boolean;
  totalPages: number;
}) {
  const className = clsx(
    "flex size-10 items-center justify-center border border-gray-200 p-2",
    {
      "hover:bg-blue-400 hover:text-white": page !== "..." && !isActive,
      "bg-blue-400 text-white": isActive,
      "rounded-l-md": page === 1,
      "rounded-r-md": page === totalPages,
    },
  );

  return page === "..." ? (
    <div className={className}>{page}</div>
  ) : (
    <Link className={className} href={href}>
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
  const icon = direction === "left" ? leftArrowIcon : rightArrowIcon;

  const className = clsx("size-10 rounded-md border border-gray-200 p-2", {
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
