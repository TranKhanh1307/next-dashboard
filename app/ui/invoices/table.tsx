import { InvoicesTable } from "@/app/lib/definitions";
import TableWrapper from "../common/table-wrapper";
import CustomerNameCell from "../common/customer-name-cell";
import BodyRow from "../common/table-rows";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import Status from "./status";
import { DeleteInvoice, EditInvoice } from "./buttons";
import { fetchFilteredInvoices } from "@/app/lib/data";
import { invoiceTableHeaders } from "@/app/lib/constants";

export default async function Table({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const invoices = await fetchFilteredInvoices(query, page);

  return (
    <TableWrapper headers={invoiceTableHeaders}>
      {invoices.map((invoice) => (
        <InvoiceRow invoice={invoice} key={invoice.id} />
      ))}
    </TableWrapper>
  );
}

function InvoiceRow({ invoice }: { invoice: InvoicesTable }) {
  return (
    <BodyRow>
      <CustomerNameCell imageUrl={invoice.image_url} name={invoice.name} />
      <td>{invoice.email}</td>
      <td>{formatCurrency(invoice.amount)}</td>
      <td className="whitespace-nowrap">{formatDateToLocal(invoice.date)}</td>
      <td>
        <Status status={invoice.status} />
      </td>
      <td>
        <div className="flex gap-2">
          <EditInvoice />
          <DeleteInvoice />
        </div>
      </td>
    </BodyRow>
  );
}