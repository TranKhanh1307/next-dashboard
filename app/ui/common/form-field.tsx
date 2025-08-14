import { ReactNode } from "react";

export default function FormField({
  children,
  label,
  id,
}: {
  children: ReactNode;
  label: string;
  id: string;
}) {
  return (
    <div className="space-y-2">
      <label className="inline-block" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}
