import { deleteIcon, editIcon, plusIcon } from "../common/icons";
import { FilledBtn, OutlinedBtn } from "../common/custom-buttons";
import { deleteInvoice } from "@/app/lib/action";

export function CreateInvoice() {
  return (
    <FilledBtn variant="primary" href="/dashboard/invoices/create">
      <p className="hidden md:block">Create invoices</p>
      {plusIcon}
    </FilledBtn>
  );
}

export function EditInvoice() {
  return (
    <OutlinedBtn href="" variant="primary">
      {editIcon}
    </OutlinedBtn>
  );
}

export function DeleteInvoice() {
  return (
    <form action={deleteInvoice}>
      <OutlinedBtn type="submit" variant="primary">
        {deleteIcon}
      </OutlinedBtn>
    </form>
  );
}
