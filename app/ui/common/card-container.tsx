import { ReactNode } from "react";

export default function CardContainer({ children }: { children: ReactNode }) {
  return <div className="rounded-md bg-white p-3">{children}</div>;
}
