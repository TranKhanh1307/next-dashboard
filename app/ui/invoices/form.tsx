import { createInvoice, updateInvoice } from "@/app/lib/action";
import Status from "./status";
import {
  OutlinedSelectField,
  OutlinedTextField,
} from "../common/custom-inputs";
import { dollarIcon, personIcon } from "../common/icons";
import FormField from "../common/form-field";
import { FilledBtn } from "../common/custom-buttons";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";

export default async function Form({
  customers,
  mode,
  invoice,
}: {
  customers: CustomerField[];
  mode: "create" | "edit";
  invoice?: InvoiceForm;
}) {
  const updateInvoiceWithId = invoice && updateInvoice.bind(null, invoice.id);

  return (
    <form
      action={mode === "create" ? createInvoice : updateInvoiceWithId}
      className="space-y-4"
    >
      <div className="space-y-3 rounded-md bg-gray-100 p-3">
        <FormField label="Choose customer" id="customer">
          <OutlinedSelectField
            placeholder="Select a customer"
            id="customer"
            name="customerId"
            leadingIcon={personIcon}
            options={customers.map((customer) => ({
              value: customer.id,
              label: customer.name,
            }))}
            defaultValue={invoice?.customer_id || ""}
            required
          />
        </FormField>
        <FormField label="Choose an amount" id="amount">
          <OutlinedTextField
            defaultValue={invoice?.amount.toString()}
            type="number"
            leadingIcon={dollarIcon}
            id="amount"
            name="amount"
            placeholder="Enter USD amount"
            required
          />
        </FormField>
        <StatusInput status={invoice?.status} />
      </div>
      <div className="flex justify-end gap-2">
        <FilledBtn href="/dashboard/invoices" variant="secondary">
          Cancel
        </FilledBtn>
        <FilledBtn variant="primary" type="submit">
          {mode === "create" ? "Create invoice" : "Edit invoice"}
        </FilledBtn>
      </div>
    </form>
  );
}

function StatusInput({ status }: { status: "pending" | "paid" | undefined }) {
  return (
    <fieldset className="space-y-2">
      <legend>Set the invoice status</legend>
      <div className="flex gap-3 rounded-md border border-gray-200 bg-white p-3">
        <RadioBtn value="pending" checked={status === "pending"} />
        <RadioBtn value="paid" checked={status === "paid"} />
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
        value={value}
        defaultChecked={checked}
        required
      />
      <label htmlFor={value}>
        <Status status={value} />
      </label>
    </div>
  );
}
