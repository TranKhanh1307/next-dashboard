import { ReactNode } from "react";

export default function TableWrapper({
  headers,
  children,
}: {
  headers: string[];
  children: ReactNode;
}) {
  return (
    <div className="hidden overflow-x-auto rounded-md bg-gray-200 p-2 md:block">
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">{children}</tbody>
      </table>
    </div>
  );
}
