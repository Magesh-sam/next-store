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
import { User } from "lucide-react";

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

  // TODO: Replace with navigation menu | replicate flipkart login
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size={"icon"} className="full-rounded">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userName ? (
          <DropdownMenuLabel>Hello, {userName}</DropdownMenuLabel>
        ) : (
          <DropdownMenuLabel>
            New user? <Link href={"/signup"}>Signup</Link>
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(toggleCart())}>
          View Cart
        </DropdownMenuItem>
        <DropdownMenuItem>View Wishlist</DropdownMenuItem>
        {!userName && (
          <DropdownMenuItem>
            <Button className="flex-1">
              <Link href={"/login"}>Login</Link>
            </Button>
          </DropdownMenuItem>
        )}
        {userName && (
          <DropdownMenuItem onClick={handleSignout}>
            <Button className="flex-1">Signout</Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
