"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type FieldValues = {
  fullName: string;
  email: string;
  password: string;
  reenterPassword: string;
};

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { fullName, email, password, reenterPassword } = data;

    if (password !== reenterPassword) {
      setError("reenterPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    console.log(data);
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
            htmlFor="fullName"
          >
            Full Name
          </label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="w-full rounded border px-3 py-2"
                required
              />
            )}
          />
        </div>
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
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="reenterPassword"
          >
            Re-enter Password
          </label>
          <Controller
            name="reenterPassword"
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
          <span className="text-sm text-red-500">
            {errors.reenterPassword?.message}
          </span>
        </div>
        <button
          type="submit"
          className="mb-4 w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white"
        >
          Create Account
        </button>
        <span className="flex flex-row items-center">
          <hr className="w-full  border-black" />
          <p className="px-3 text-black">or</p>
          <hr className="w-full  border-black" />
        </span>
        <button
          type="button"
          className="w-full rounded bg-red-600 px-4 py-2 font-semibold text-white"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
