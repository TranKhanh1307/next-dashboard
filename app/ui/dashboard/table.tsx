import { ReactNode } from "react";

export default function Table({
  children,
  title,
  icon,
  timeDesc,
}: {
  children: ReactNode;
  title: string;
  icon: ReactNode;
  timeDesc: string;
}) {
  return (
    <div className="md:flex-1">
      <h2>{title}</h2>
      <div className="mt-5 flex h-[32rem] flex-col gap-3 rounded-md bg-gray-200 p-4">
        <div className="flex-1 rounded-md bg-white">{children}</div>
        <div className="flex items-center gap-2">
          {icon}
          <p>{timeDesc}</p>
        </div>
      </div>
    </div>
  );
}
