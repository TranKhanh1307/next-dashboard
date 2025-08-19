import clsx from "clsx";
import { globalIcon } from "./icons";

export default function AcmeLogo({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex items-end gap-2 rounded-md bg-blue-500 p-4 text-white md:h-44",
        className,
      )}
    >
      {globalIcon}
      <p className="text-4xl">Acme</p>
    </div>
  );
}
