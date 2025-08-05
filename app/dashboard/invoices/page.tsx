import Table from "@/app/ui/invoices/table";
import { Suspense } from "react";
import SearchBar from "@/app/ui/common/search-bar";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import CardList from "@/app/ui/invoices/cards";
import { CardsSkeleton } from "@/app/ui/common/skeletons";
import { TableSkeleton } from "@/app/ui/invoices/skeletons";
import PaginationBar from "@/app/ui/common/pagination-bar";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = 1 } = await searchParams;
  const curPage = Number(page);
  const totalPages = await fetchInvoicesPages(query);
  return (
    <main className="space-y-4">
      <h1>Invoices</h1>
      <div className="flex gap-2">
        <SearchBar placeholder={"Search Invoices"} className="flex-1" />
        <CreateInvoice />
      </div>
      <Suspense fallback={<CardsSkeleton />}>
        {/*Hidden on large screen*/}
        <CardList query={query} page={curPage} />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <Table query={query} page={curPage} /> {/*Hidden on mobile*/}
      </Suspense>
      <PaginationBar totalPages={totalPages} />
    </main>
  );
}
