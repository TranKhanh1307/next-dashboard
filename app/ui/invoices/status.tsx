import clsx from "clsx";

export default function Status({ status }: { status: "pending" | "paid" }) {
  return (
    <div
      className={clsx("flex items-center gap-2 rounded-full px-2 py-1", {
        "bg-green-400 text-white": status === "paid",
        "bg-gray-200 text-gray-600": status === "pending",
      })}
    >
      <p className="text-xs">{status}</p>
      {status === "paid" ? (
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
      ) : (
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
      )}
    </div>
  );
}
