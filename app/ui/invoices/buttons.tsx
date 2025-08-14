import Link from "next/link";
import { deleteIcon, editIcon, plusIcon } from "../common/icons";

export function CreateInvoice() {
  return (
    <Link
      href={"/dashboard/invoices/create"}
      className="flex items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-white hover:bg-blue-400"
    >
      <p className="hidden md:block">Create invoices</p>
      {plusIcon}
    </Link>
  );
}

export function EditInvoice() {
  return (
    <Link
      href={""}
      className="flex items-center justify-center rounded-md border-[1px] border-gray-200 p-2 hover:bg-gray-400"
    >
      {editIcon}
    </Link>
  );
}

export function DeleteInvoice() {
  return (
    <form action="">
      <button
        type="submit"
        className="flex items-center justify-center rounded-md border-[1px] border-gray-200 p-2 hover:bg-gray-400"
      >
        {deleteIcon}
      </button>
    </form>
  );
}
