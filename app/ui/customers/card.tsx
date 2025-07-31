import { FormattedCustomersTable } from "@/app/lib/definitions";
import CustomerInfo from "../common/customer-info";
import CardContainer from "../common/card-container";

export default function CustomerCard({
  customer,
}: {
  customer: FormattedCustomersTable;
}) {
  return (
    <CardContainer>
      <CustomerInfo
        imageUrl={customer.image_url}
        name={customer.name}
        email={customer.email}
      />
      <div className="mt-4 flex items-center border-y-[1px] border-gray-200 py-4">
        <InvoiceInfo title={"Pending"} value={customer.total_pending} />
        <InvoiceInfo title={"Paid"} value={customer.total_paid} />
      </div>
      <p className="pt-3">{`${customer.total_invoices} invoices`}</p>
    </CardContainer>
  );
}

function InvoiceInfo({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex-1">
      <p className="text-xs">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
