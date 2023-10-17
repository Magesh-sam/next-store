"use client";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/firebase/firebase";

type FieldValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password);
    router.replace("/");
  };
  const handleSocialLogin = async () => {
    await signInWithPopup(auth, provider);
    router.replace("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded bg-white p-8 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-semibold">Login</h2>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="w-full rounded border px-3 py-2"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="w-full rounded border px-3 py-2"
                required
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="mb-4 w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white"
        >
          Signin
        </button>
        <span className="flex flex-row items-center">
          <hr className="w-full  border-black" />
          <p className="px-3 text-black">or</p>
          <hr className="w-full  border-black" />
        </span>
        <button
          type="button"
          className="e flex  w-full items-center gap-2 rounded px-4 py-2 font-semibold text-black"
          onClick={handleSocialLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="-0.5 0 48 48"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g transform="translate(-401 -860)">
                <g transform="translate(401 860)">
                  <path
                    fill="#FBBC05"
                    d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 00.213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 019.827 24"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 00-21.09 13.071l7.908 6.04a13.849 13.849 0 0113.182-9.51"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M23.714 37.867a13.849 13.849 0 01-13.182-9.51l-7.909 6.038a23.43 23.43 0 0021.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
