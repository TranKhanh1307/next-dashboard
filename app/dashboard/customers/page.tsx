import SearchBar from "@/app/ui/common/search-bar";
import { CardsSkeleton } from "@/app/ui/common/skeletons";
import CardList from "@/app/ui/customers/cards";
import { TableSkeleton } from "@/app/ui/customers/skeletons";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = 1 } = await searchParams;
  return (
    <main className="space-y-4">
      <h2>Customers</h2>
      <SearchBar placeholder={"Search customers..."} />
      <Suspense fallback={<CardsSkeleton />}>
        {/*Hidden on large screen*/}
        <CardList query={query} page={Number(page)} />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <Table query={query} page={Number(page)} /> {/*Hidden on mobile*/}
      </Suspense>
    </main>
  );
}
