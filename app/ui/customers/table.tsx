import { AVATAR_SIZE } from "@/app/lib/constants";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import Image from "next/image";

const headers = [
  "Name",
  "Email",
  "Total Invoices",
  "Total Pending",
  "Total Paid",
];

export default async function Table({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="hidden overflow-x-auto rounded-md bg-gray-200 p-2 md:block">
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <CustomerRow customer={customer} key={customer.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CustomerRow({ customer }: { customer: FormattedCustomersTable }) {
  return (
    <tr className="border-b-[1px] border-gray-200 bg-white">
      <td className="whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Image
            src={customer.image_url}
            alt={customer.name}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            className="rounded-full"
          />
          <p className="mr-4">{customer.name}</p>
        </div>
      </td>
      <td>{customer.email}</td>
      <td>{customer.total_invoices}</td>
      <td>{customer.total_pending}</td>
      <td>{customer.total_paid}</td>
    </tr>
  );
}
