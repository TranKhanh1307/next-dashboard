import { InvoicesTable } from "@/app/lib/definitions";
import TableWrapper from "../common/table-wrapper";
import CustomerNameCell from "../common/customer-name-cell";
import BodyRow from "../common/table-rows";

const headers = ["Customer", "Email", "Amount", "Date", "Status", ""];

export default function Table({ invoices }: { invoices: InvoicesTable[] }) {
  return (
    <TableWrapper headers={headers}>
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
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </BodyRow>
  );
}
