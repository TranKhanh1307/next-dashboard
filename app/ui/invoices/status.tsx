import clsx from "clsx";

const statusConfig = {
  paid: {
    label: "Paid",
    className: "bg-green-400 text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    ),
  },
  pending: {
    label: "Pending",
    className: "bg-gray-200 text-gray-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
} as const;

export default function Status({ status }: { status: "pending" | "paid" }) {
  const { label, className, icon } = statusConfig[status];

  return (
    <div className={clsx("flex w-fit items-center gap-2 rounded-full px-2 py-1", className)}>
      <p className="text-xs">{label}</p>
      {icon}
    </div>
  );
}
