import { AVATAR_SIZE } from "@/app/lib/constants";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import Image from "next/image";

export default function Cards({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="space-y-3 rounded-md bg-gray-200 p-2 md:hidden">
      {customers.map((customer) => (
        <Card customer={customer} key={customer.id} />
      ))}
    </div>
  );
}

function Card({ customer }: { customer: FormattedCustomersTable }) {
  return (
    <div className="rounded-md bg-white p-3">
      <div className="space-y-2 border-b-[1px] border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={customer.image_url}
            alt={customer.name}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            className="rounded-full"
          />
          <p>{customer.name}</p>
        </div>
        <p className="text-gray-600">{customer.email}</p>
      </div>
      <div className="flex items-center border-b-[1px] border-gray-200 py-4">
        <div className="flex-1">
          <p className="text-xs">Pending</p>
          <p className="text-xl font-bold">{customer.total_pending}</p>
        </div>
        <div className="flex-1">
          <p className="text-xs">Paid</p>
          <p className="text-xl font-bold">{customer.total_paid}</p>
        </div>
      </div>
      <p className="pt-3">{`${customer.total_invoices} invoices`}</p>
    </div>
  );
}
