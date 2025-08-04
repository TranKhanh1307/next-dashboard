import { FormattedCustomersTable } from "@/app/lib/definitions";
import TableWrapper from "../common/table-wrapper";
import CustomerNameCell from "../common/customer-name-cell";
import BodyRow from "../common/table-rows";
import { customerTableHeaders } from "@/app/lib/constants";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Table({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const customers = await fetchFilteredCustomers(query);
  return (
    <TableWrapper headers={customerTableHeaders}>
      {customers.map((customer) => (
        <CustomerRow customer={customer} key={customer.id} />
      ))}
    </TableWrapper>
  );
}

function CustomerRow({ customer }: { customer: FormattedCustomersTable }) {
  return (
    <BodyRow>
      <CustomerNameCell imageUrl={customer.image_url} name={customer.name} />
      <td>{customer.email}</td>
      <td>{customer.total_invoices}</td>
      <td>{customer.total_pending}</td>
      <td>{customer.total_paid}</td>
    </BodyRow>
  );
}
