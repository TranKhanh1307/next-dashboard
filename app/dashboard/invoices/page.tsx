import { fetchFilteredInvoices } from "@/app/lib/data";
import Table from "@/app/ui/invoices/table";
import { Suspense } from "react";
import SearchBar from "@/app/ui/common/search-bar";
import CardListWrapper from "@/app/ui/common/card-list-wrapper";
import InvoiceCard from "@/app/ui/invoices/card";
import { CreateInvoice } from "@/app/ui/invoices/buttons";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = 1 } = await searchParams;
  const invoices = await fetchFilteredInvoices(query, Number(page));
  return (
    <div className="space-y-4">
      <h1>Invoices</h1>
      <div className="flex gap-2">
        <Suspense>
          <SearchBar placeholder={"Search Invoices"} className="flex-1" />
        </Suspense>
        <CreateInvoice />
      </div>
      {/*Hidden on large screen*/}
      <CardListWrapper>
        {invoices.map((invoice) => (
          <InvoiceCard invoice={invoice} key={invoice.id} />
        ))}
      </CardListWrapper>
      <Table invoices={invoices} /> {/*Hidden on mobile*/}
    </div>
  );
}
