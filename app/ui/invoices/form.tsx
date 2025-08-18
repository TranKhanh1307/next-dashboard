"use client";

import { createInvoice, updateInvoice, State } from "@/app/lib/action";
import Status from "./status";
import {
  OutlinedSelectField,
  OutlinedTextField,
} from "../common/custom-inputs";
import { dollarIcon, personIcon } from "../common/icons";
import FormField from "../common/form-field";
import { FilledBtn } from "../common/custom-buttons";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { useActionState } from "react";
import { FieldError, FormErrorMessage } from "../common/form-errors";

export default function Form({
  customers,
  mode,
  invoice,
}: {
  customers: CustomerField[];
  mode: "create" | "edit";
  invoice?: InvoiceForm;
}) {
  const updateInvoiceWithId =
    mode === "edit" && invoice
      ? updateInvoice.bind(null, invoice.id)
      : undefined;

  const initialState: State = { message: null, errors: {} };
  const action = mode === "create" ? createInvoice : updateInvoiceWithId!;
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-4">
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
          />
          <FieldError id="customer-error" errors={state.errors?.customerId} />
        </FormField>
        <FormField label="Choose an amount" id="amount">
          <OutlinedTextField
            defaultValue={invoice?.amount.toString()}
            type="number"
            leadingIcon={dollarIcon}
            id="amount"
            name="amount"
            placeholder="Enter USD amount"
          />
          <FieldError id="amount-error" errors={state.errors?.amount} />
        </FormField>
        <StatusInput status={invoice?.status} state={state} />
        <FormErrorMessage message={state.message} />
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

function StatusInput({
  status,
  state,
}: {
  status: "pending" | "paid" | undefined;
  state: State;
}) {
  return (
    <fieldset className="space-y-2">
      <legend>Set the invoice status</legend>
      <div className="flex gap-3 rounded-md border border-gray-200 bg-white p-3">
        <RadioBtn value="pending" checked={status === "pending"} />
        <RadioBtn value="paid" checked={status === "paid"} />
      </div>
      <FieldError id="status-error" errors={state.errors?.status} />
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
      />
      <label htmlFor={value}>
        <Status status={value} />
      </label>
    </div>
  );
}
