import { InvoicesTable } from "@/app/lib/definitions";
import Status from "./status";
import CustomerInfo from "../common/customer-info";
import CardContainer from "../common/card-container";
import { DeleteInvoice, EditInvoice } from "./buttons";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

export default function InvoiceCard({ invoice }: { invoice: InvoicesTable }) {
  return (
    <CardContainer>
      <div className="flex items-center justify-between border-b-[1px] border-gray-200 pb-4">
        <CustomerInfo
          imageUrl={invoice.image_url}
          name={invoice.name}
          email={invoice.email}
        />
        <Status status={invoice.status} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <InvoiceInfo amount={invoice.amount} date={invoice.date} />
        <div className="flex gap-2">
          <EditInvoice />
          <DeleteInvoice />
        </div>
      </div>
    </CardContainer>
  );
}

function InvoiceInfo({ amount, date }: { amount: number; date: string }) {
  return (
    <div>
      <p className="text text-xl font-bold">{formatCurrency(amount)}</p>
      <p className="text-lg">{formatDateToLocal(date)}</p>
    </div>
  );
}
