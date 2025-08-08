import BreadCrumb from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default function Page() {
  return (
    <main className="space-y-8">
      <BreadCrumb />
      <Form />
    </main>
  );
}
