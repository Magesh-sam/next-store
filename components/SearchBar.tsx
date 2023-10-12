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
    <div className="item-center flex">
      <input
        type="search"
        name="product search"
        placeholder="Search Products... from usesearchparams"
        value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          router.replace(
            "/products/search" + "?" + createQueryString("q", Query),
          );
        }}
      >
        <Search />
      </Button>
    </div>
  );
}

export default SearchBar;
