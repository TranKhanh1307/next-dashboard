import { AVATAR_SIZE } from "@/app/lib/constants";
import { fetchLatestInvoices } from "@/app/lib/data";
import Image from "next/image";

export default async function LatestInvoices() {
  const invoices = await fetchLatestInvoices();
  return (
    <div>
      {invoices.map((invoice) => (
        <div key={invoice.id} className="border-b-[1px] border-gray-200">
          <div className="flex items-center p-3">
            <Image
              src={invoice.image_url}
              alt={invoice.name}
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              className="mr-4 rounded-full"
            />
            <p className="font-bold">{invoice.name}</p>
            <div className="flex-1"></div>
            <p>{invoice.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
