// app/api/auth/[auth0]/route.js
import { handleAuth } from "@auth0/nextjs-auth0";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = handleAuth();
