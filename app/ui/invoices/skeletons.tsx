import { invoiceTableHeaders } from "@/app/lib/constants";
import {
  BaseRow,
  CellSkeleton,
  ImageNameCellSkeleton,
} from "../common/skeletons";
import TableWrapper from "../common/table-wrapper";
import { renderMultiple } from "@/app/lib/utils";

export function TableSkeleton() {
  return (
    <TableWrapper headers={invoiceTableHeaders}>
      {renderMultiple(6, (i) => (
        <RowSkeleton key={i} />
      ))}
    </TableWrapper>
  );
}

function RowSkeleton() {
  return (
    <BaseRow>
      <ImageNameCellSkeleton />
      <CellSkeleton />
      <CellSkeleton />
      <CellSkeleton />
      <CellSkeleton />
      <ActionsSkeleton />
    </BaseRow>
  );
}

function ActionsSkeleton() {
  return (
    <td className="py-3 pr-3 pl-6 whitespace-nowrap">
      <div className="flex justify-end gap-3">
        <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
      </div>
    </td>
  );
}
