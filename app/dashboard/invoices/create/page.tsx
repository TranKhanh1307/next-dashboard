import { fetchCustomers } from "@/app/lib/data";
import BreadCrumb from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/form";

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <main className="space-y-8">
      <BreadCrumb
        breadcrumbs={[
          { href: "/dashboard/invoices", label: "Invoices" },
          { href: "/dashboard/invoices/create", label: "Create Invoice" },
        ]}
      />
      <Form customers={customers} mode="create" />
    </main>
  );
}
