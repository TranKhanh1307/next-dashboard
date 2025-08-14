import { globalIcon } from "./icons";

export default function AcmeLogo() {
  return (
    <div className="flex items-end gap-2 rounded-md bg-blue-500 p-4 text-white md:h-44">
      {globalIcon}
      <p className="text-4xl">Acme</p>
    </div>
  );
}
