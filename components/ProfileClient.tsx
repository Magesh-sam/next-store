/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return (
    user && (
      <div>
        <img
          src={user?.picture ?? "user photo"}
          alt={user?.name ?? "user photo"}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
