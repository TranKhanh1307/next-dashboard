import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function BreadCrumb({
  breadcrumbs,
}: {
  breadcrumbs: { href: string; label: string }[];
}) {
  return (
    <nav className="flex gap-3 text-2xl">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.href}>
          <Link
            href={breadcrumb.href}
            key={breadcrumb.href}
            className={clsx("text-gray-500 transition hover:text-gray-700", {
              "font-bold text-gray-900 transition hover:text-gray-700":
                index === breadcrumbs.length - 1,
            })}
          >
            {breadcrumb.label}
          </Link>
          <span>{index < breadcrumbs.length - 1 && "/"}</span>
        </React.Fragment>
      ))}
    </nav>
  );
}
