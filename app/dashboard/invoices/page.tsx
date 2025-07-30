import CreateInvoicesBtn from "@/app/ui/invoices/create-invoices-btn";
import SearchBar from "@/app/ui/search-bar";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1>Invoices</h1>
      <div className="flex gap-2">
        <Suspense>
          <SearchBar placeholder={"Search Invoices"} className="flex-1" />
        </Suspense>
        <CreateInvoicesBtn />
      </div>
    </div>
  );
}
