import { fetchFilteredCustomers } from "@/app/lib/data";
import Table from "@/app/ui/customers/table";
import SearchBar from "@/app/ui/search-bar";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = 1 } = await searchParams;
  return (
    <div className="space-y-4">
      <h2>Customers</h2>
      <SearchBar placeholder={"Search customers..."} />
      <Table query={query} />
    </div>
  );
}
