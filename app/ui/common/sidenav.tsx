import Link from "next/link";
import AcmeLogo from "./acme-logo";
import NavLinks from "./navlinks";
import { signOutIcon } from "./icons";

export default function SideNav() {
  return (
    <nav className="flex w-full flex-col gap-2 md:h-full md:w-64">
      <Link href={"/dashboard"}>
        <AcmeLogo />
      </Link>
      <div className="flex flex-1 gap-2 md:flex-col">
        <NavLinks />
        <div className="hidden flex-1 rounded-md bg-gray-200 md:block" />
        <SignOutBtn />
      </div>
    </nav>
  );
}

function SignOutBtn() {
  return (
    <button className="flex items-center justify-center gap-2 rounded-md bg-gray-200 p-4 hover:bg-sky-300 hover:text-sky-600 md:justify-start">
      {signOutIcon}
      <p className="hidden md:block">Sign Out</p>
    </button>
  );
}
