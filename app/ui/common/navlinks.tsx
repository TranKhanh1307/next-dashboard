"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { customersIcon, homeIcon, invoicesIcon } from "./icons";

interface Link {
  name: string;
  href: string;
  icon: ReactNode;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: homeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: invoicesIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: customersIcon,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="flex flex-1 gap-2 md:grow-0 md:flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "flex flex-1 items-center justify-center gap-2 rounded-md bg-gray-200 p-4 hover:bg-sky-300 hover:text-sky-600 md:justify-start",
            {
              "bg-sky-300 text-sky-600": pathName === link.href,
            },
          )}
        >
          {link.icon}
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </div>
  );
}
