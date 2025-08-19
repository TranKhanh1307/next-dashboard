import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import BreadCrumb from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/form";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) {
    notFound();
  }
  return (
    <main className="space-y-8">
      <BreadCrumb
        breadcrumbs={[
          { href: "/dashboard/invoices", label: "Invoices" },
          { href: `/dashboard/invoices/${id}/edit`, label: "Edit Invoice" },
        ]}
      />
      <Form customers={customers} mode="edit" invoice={invoice} />
    </main>
  );
}
