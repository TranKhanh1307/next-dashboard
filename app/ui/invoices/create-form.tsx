import { createInvoice } from "@/app/lib/action";
import Status from "./status";
import { fetchCustomers } from "@/app/lib/data";

const dollarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const personIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

export default async function Form() {
  const customers = await fetchCustomers();
  return (
    <form action={createInvoice} className="flex flex-col">
      <div className="space-y-3 rounded-md bg-gray-100 p-3">
        <CustomerInput names={customers.map((customer) => customer.name)} />
        <AmountInput />
        <StatusInput />
      </div>
    </form>
  );
}

function CustomerInput({ names }: { names: string[] }) {
  return (
    <div>
      <label htmlFor="customer">Choose customer</label>
      <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white pl-3 focus-within:border-blue-400">
        {personIcon}
        <select
          name="customer"
          id="customer"
          className="w-full py-3 outline-none"
          defaultValue={names[0]}
          required
        >
          <option value="" disabled>
            Select a customer
          </option>
          {names.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function AmountInput() {
  return (
    <div>
      <label htmlFor="amount">Choose an amount</label>
      <div className="relative">
        <input
          id="amount"
          name="amount"
          type="text"
          placeholder="Enter USD amount"
          className="w-full rounded-md border border-gray-200 bg-white py-3 pl-10 outline-none focus:border-blue-400"
          required
        />
        {dollarIcon}
      </div>
    </div>
  );
}

function StatusInput() {
  return (
    <fieldset className="space-y-2">
      <legend>Set the invoice status</legend>
      <div className="flex gap-3 rounded-md border border-gray-200 bg-white p-3">
        <RadioBtn value={"pending"} checked />
        <RadioBtn value={"paid"} />
      </div>
    </fieldset>
  );
}

function RadioBtn({
  value,
  checked,
}: {
  value: "pending" | "paid";
  checked?: boolean;
}) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        name="status"
        id={value}
        defaultChecked={checked}
        required
      />
      <label htmlFor={value}>
        <Status status={value} />
      </label>
    </div>
  );
}
