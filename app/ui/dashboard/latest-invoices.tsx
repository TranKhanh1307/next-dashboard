import { fetchLatestInvoices } from "@/app/lib/data";
import Image from "next/image";

export default async function LatestInvoices() {
  const invoices = await fetchLatestInvoices();
  return (
    <div>
      {invoices.map((invoice) => (
        <div key={invoice.id}>
          <div className="flex items-center p-3">
            <Image
              src={invoice.image_url}
              alt={invoice.name}
              width={32}
              height={32}
              className="mr-4 rounded-full"
            />
            <p className="font-bold">{invoice.name}</p>
            <div className="flex-1"></div>
            <p>{invoice.amount}</p>
          </div>
          <div className="h-0.5 w-full bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}
