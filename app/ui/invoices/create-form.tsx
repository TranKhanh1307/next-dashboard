import { createInvoice } from "@/app/lib/action";
import Status from "./status";
import { fetchCustomers } from "@/app/lib/data";
import { Button } from "../common/custom-buttons";
import {
  OutlinedSelectField,
  OutlinedTextField,
} from "../common/custom-inputs";
import { dollarIcon, personIcon } from "../common/icons";

export default async function Form() {
  const customers = await fetchCustomers();
  return (
    <form action={createInvoice} className="space-y-4">
      <div className="space-y-3 rounded-md bg-gray-100 p-3">
        <div>
          <label htmlFor="customer">Choose customer</label>
          <OutlinedSelectField
            placeholder="Select a customer"
            id="customer"
            name="customerId"
            leadingIcon={personIcon}
            options={customers.map((customer) => ({
              value: customer.id,
              label: customer.name,
            }))}
            defaultValue=""
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Choose amount</label>
          <OutlinedTextField
            type="number"
            leadingIcon={dollarIcon}
            id="amount"
            name="amount"
            placeholder="Enter USD amount"
            required
          />
        </div>
        <StatusInput />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Create invoices" />
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
