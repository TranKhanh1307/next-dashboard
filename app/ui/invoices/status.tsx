import clsx from "clsx";
import { checkedIcon, trashBinIcon } from "../common/icons";

const statusConfig = {
  paid: {
    label: "Paid",
    className: "bg-green-400 text-white",
    icon: checkedIcon,
  },
  pending: {
    label: "Pending",
    className: "bg-gray-200 text-gray-600",
    icon: trashBinIcon,
  },
};

export default function Status({ status }: { status: "pending" | "paid" }) {
  const { label, className, icon } = statusConfig[status];

  return (
    <div
      className={clsx(
        "flex w-fit items-center gap-2 rounded-full px-2 py-1",
        className,
      )}
    >
      <p className="text-xs">{label}</p>
      {icon}
    </div>
  );
}
