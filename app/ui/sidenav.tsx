import Link from "next/link";
import AcmeLogo from "./acme-logo";
import NavLinks from "./navlinks";

export default function SideNav() {
  return (
    <nav className="flex w-full flex-col gap-2 md:h-full md:w-64">
      <Link href={"/dashboard"}>
        <AcmeLogo />
      </Link>
      <div className="flex flex-1 gap-2 md:flex-col">
        <NavLinks />
        <div className="hidden flex-1 rounded-md bg-gray-200 md:block" />
        <button className="flex items-center justify-center gap-2 rounded-md bg-gray-200 p-4 hover:bg-sky-300 hover:text-sky-600 md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
            />
          </svg>
          <p className="hidden md:block">Sign Out</p>
        </button>
      </div>
    </nav>
  );
}
