"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { toggleCart } from "@/redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

function UserButton() {
  const [userName, setUserName] = useState<string | null>("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  });
  const dispatch = useDispatch<AppDispatch>();
  const handleSignout = async () => {
    await auth.signOut();
  };

  return (
    <>
      {!userName ? (
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size={"icon"} className="full-rounded">
              {userName && userName[0]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Hello, {userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => dispatch(toggleCart())}>
              View Cart
            </DropdownMenuItem>
            <DropdownMenuItem>View Wishlist</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignout}>
              <Button className="flex-1">Signout</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}

export default UserButton;
