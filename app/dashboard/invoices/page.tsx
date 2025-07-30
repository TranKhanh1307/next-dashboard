import CreateInvoicesBtn from "@/app/ui/invoices/create-invoices-btn";
import SearchBar from "@/app/ui/search-bar";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1>Invoices</h1>
      <div className="flex gap-2">
        <SearchBar placeholder={"Search Invoices"} className="flex-1" />
        <CreateInvoicesBtn />
      </div>
    </div>
  );
}
