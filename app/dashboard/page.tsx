import { Suspense } from "react";
import Cards from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import Table from "../ui/dashboard/table";
import {
  LatestInvoicesSkeleton,
  MetricsCardSkeleton,
  RevenueChartSkeleton,
} from "../ui/dashboard/skeletons";
import { calendarIcon, reloadIcon } from "../ui/common/icons";

export default function Page() {
  return (
    <main>
      <h2>Dashboard</h2>
      <Suspense fallback={<MetricsCardSkeleton />}>
        <Cards />
      </Suspense>
      <div className="mt-4 space-y-8 md:gap-4 lg:flex">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Table
            title={"Recent Revenue"}
            icon={calendarIcon}
            timeDesc="Last 12 months"
          >
            <RevenueChart />
          </Table>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Table
            title={"Latest Invoices"}
            icon={reloadIcon}
            timeDesc="Updated just now"
          >
            <LatestInvoices />
          </Table>
        </Suspense>
      </div>
    </main>
  );
}
