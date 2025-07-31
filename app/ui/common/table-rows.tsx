import { ReactNode } from "react";

export default function BodyRow({ children }: { children: ReactNode }) {
  return <tr className="border-b-[1px] border-gray-200">{children}</tr>;
}
