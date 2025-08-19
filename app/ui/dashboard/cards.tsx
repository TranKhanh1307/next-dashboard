import { fetchCardData } from "@/app/lib/data";
import { ReactNode } from "react";
import {
  clockIcon,
  customersIcon,
  invoicesIcon,
  moneyIcon,
} from "../common/icons";

interface Card {
  title: string;
  icon: ReactNode;
  getValue: (data: CardData) => number | string;
}

interface CardData {
  numberOfCustomers: number;
  numberOfInvoices: number;
  totalPaidInvoices: string;
  totalPendingInvoices: string;
}

const cards: Card[] = [
  {
    title: "Collected",
    icon: moneyIcon,
    getValue: (data) => data.totalPaidInvoices,
  },
  {
    title: "Pending",
    icon: clockIcon,
    getValue: (data) => data.totalPendingInvoices,
  },
  {
    title: "Total Invoices",
    icon: invoicesIcon,
    getValue: (data) => data.numberOfInvoices,
  },
  {
    title: "Total Customers",
    icon: customersIcon,
    getValue: (data) => data.numberOfCustomers,
  },
];

export default async function Cards() {
  const data = await fetchCardData();

  return (
    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card
          title={card.title}
          icon={card.icon}
          value={card.getValue(data)}
          key={card.title}
        />
      ))}
    </div>
  );
}

function Card({
  title,
  icon,
  value,
}: {
  title: string;
  icon: ReactNode;
  value: string | number;
}) {
  return (
    <div className="flex h-48 flex-1 flex-col gap-2 rounded-md bg-gray-200 p-4">
      <div className="flex items-center gap-2">
        {icon}
        <p>{title}</p>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-md bg-white p-4">
        <p className="text-3xl">{value}</p>
      </div>
    </div>
  );
}
