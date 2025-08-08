import { createInvoice } from "@/app/lib/action";
import Status from "./status";
export default function Form() {
  return (
    <form action={createInvoice} className="flex flex-col">
      <div className="rounded-md bg-gray-200 p-3">
        <CustomerInput />
        <AmountInput />
        <StatusInput />
      </div>
    </form>
  );
}

function CustomerInput() {
  return <></>;
}

function AmountInput() {
  return <></>;
}

function StatusInput() {
  return (
    <div className="flex items-center gap-3 rounded-md bg-white p-2">
      <StatusRadioBtn value={"pending"} />
      <StatusRadioBtn value={"paid"} />
    </div>
  );
}

function StatusRadioBtn({ value }: { value: "pending" | "paid" }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <input type="radio" id={value} name="status" value={value} />
      <label htmlFor={value}>
        <Status status={value} />
      </label>
    </div>
  );
}
