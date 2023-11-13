"use client";
import React, { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const [Query, setQuery] = useState("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  return (
    <div className="flex justify-center">
      <input
        type="search"
        name="product search"
        placeholder="Search Products..."
        value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-[60%] max-w-[60%] rounded-md border-2 pl-3"
      />
      <Button
        variant={"outline"}
        size={"icon"}
        className="border border-primary"
        onClick={() => {
          router.replace(
            "/products/search" + "?" + createQueryString("q", Query),
          );
        }}
        disabled={Query.length === 0}
      >
        <Search />
      </Button>
    </div>
  );
}

export default SearchBar;
