import { AVATAR_SIZE } from "@/app/lib/constants";
import { fetchFilteredCustomers } from "@/app/lib/data";
import Image from "next/image";

export default async function Table({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="space-y-3 rounded-md bg-gray-200 p-2">
      {customers.map((customer) => (
        <div key={customer.id} className="rounded-md bg-white p-3">
          <CustomerInfo
            imageUrl={customer.image_url}
            name={customer.name}
            email={customer.email}
          />
          <InvoiceInfo
            pending={customer.total_pending}
            paid={customer.total_paid}
            totalInvoices={customer.total_invoices}
          />
        </div>
      ))}
    </div>
  );
}

function InvoiceInfo({
  pending,
  paid,
  totalInvoices,
}: {
  pending: string;
  paid: string;
  totalInvoices: number;
}) {
  return <div></div>;
}

function CustomerInfo({
  imageUrl,
  name,
  email,
}: {
  imageUrl: string;
  name: string;
  email: string;
}) {
  return (
    <div className="space-y-2 border-b-[1px] border-gray-200 pb-4">
      <div className="flex items-center gap-2">
        <Image
          src={imageUrl}
          alt={name}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="rounded-full"
        />
        <p>{name}</p>
      </div>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
