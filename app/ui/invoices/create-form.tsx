import { createInvoice } from "@/app/lib/action";
import Status from "./status";
import { fetchCustomers } from "@/app/lib/data";
import { SelectInput, TextInput } from "../common/custom-inputs";
import { Button } from "../common/custom-buttons";

const dollarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5"
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
    <form action={createInvoice} className="space-y-4">
      <div className="space-y-3 rounded-md bg-gray-100 p-3">
        <SelectInput
          placeholder="Select a customer"
          id="customer"
          name="customerId"
          label="Choose customer"
          icon={personIcon}
          values={customers.map((customer) => ({
            value: customer.id,
            label: customer.name,
          }))}
        />
        <TextInput
          icon={dollarIcon}
          label={"Choose an amount"}
          id={"amount"}
          name={"amount"}
          placeholder={"Enter USD amount"}
        />
        <StatusInput />
      </div>
      <div className="flex justify-end gap-2">
        <Button secondary text={"Cancel"} />
        <Button primary text={"Create invoices"} />
      </div>
    </form>
  );
}

function StatusInput() {
  return (
    <fieldset className="space-y-2">
      <legend>Set the invoice status</legend>
      <div className="flex gap-3 rounded-md border border-gray-200 bg-white p-3">
        <RadioBtn value={"pending"} />
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
