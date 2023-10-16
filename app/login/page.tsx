import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Login Page</h1>
      <LoginForm />
      <p>
        new user? <Link href="/signup">Signup</Link>
      </p>
    </main>
  );
}
