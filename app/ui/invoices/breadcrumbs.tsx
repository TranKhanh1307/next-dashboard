import Link from "next/link";

export default function BreadCrumb() {
  return (
    <nav className="inline-flex gap-3 text-2xl text-gray-500">
      <Link
        href="/dashboard/invoices"
        className="transition hover:text-gray-700"
      >
        Invoices
      </Link>
      <span>/</span>
      <Link
        href="/dashboard/invoices/create"
        className="font-bold text-gray-900 transition hover:text-gray-700"
      >
        Create Invoices
      </Link>
    </nav>
  );
}
