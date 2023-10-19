"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function UserButton() {
  const { user } = useUser();

  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {user ? (
          <Avatar>
            <AvatarImage src={user.picture ?? ""} />
            <AvatarFallback>{user?.name?.at(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="flex items-center justify-center">
            <User />
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!user && (
          <DropdownMenuLabel>
            new user?{" "}
            <Link href="/api/auth/login" className="text-primary">
              signup
            </Link>
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem>View Cart</DropdownMenuItem>
        <DropdownMenuItem>View Wishlist</DropdownMenuItem>
        {user ? (
          <DropdownMenuItem onClick={() => router.replace("/api/auth/logout")}>
            Logout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => router.replace("/api/auth/login")}>
            {" "}
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
