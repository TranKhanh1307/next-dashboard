"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { OutlinedTextField } from "./custom-inputs";
import { searchIcon } from "./icons";

export default function SearchBar({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <OutlinedTextField
      leadingIcon={searchIcon}
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      className={className}
    />
  );
}
