import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <SignupForm />
      <p>
        Already a user? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
