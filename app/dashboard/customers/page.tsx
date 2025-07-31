import { fetchFilteredCustomers } from "@/app/lib/data";
import CardListWrapper from "@/app/ui/common/card-list-wrapper";
import SearchBar from "@/app/ui/common/search-bar";
import CustomerCard from "@/app/ui/customers/card";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = 1 } = await searchParams;
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="space-y-4">
      <h2>Customers</h2>
      <Suspense>
        <SearchBar placeholder={"Search customers..."} />
      </Suspense>
      {/*Hidden on large screen*/}
      <CardListWrapper>
        {customers.map((customer) => (
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </CardListWrapper>
      <Table customers={customers} /> {/*Hidden on mobile*/}
    </div>
  );
}
