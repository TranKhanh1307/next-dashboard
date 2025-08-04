import { customerTableHeaders } from "@/app/lib/constants";
import {
  BaseRow,
  CellSkeleton,
  ImageNameCellSkeleton,
} from "../common/skeletons";
import TableWrapper from "../common/table-wrapper";
import { renderMultiple } from "@/app/lib/utils";

export function TableSkeleton() {
  return (
    <TableWrapper headers={customerTableHeaders}>
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
    </BaseRow>
  );
}