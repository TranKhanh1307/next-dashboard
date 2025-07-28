import SearchBar from "@/app/ui/search-bar";

export default async function Page(
) {
  return (
    <div className="space-y-4">
      <h2>Customers</h2>
      <SearchBar placeholder={"Search customers..."} />
    </div>
  );
}
