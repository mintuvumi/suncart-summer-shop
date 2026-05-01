"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await signIn.email({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });

    if (error) {
      setError(error.message || "Login failed");
      return;
    }

    router.push(redirect);
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="max-w-md mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-center mb-6">Login</h1>

        {error && <p className="alert alert-error mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn bg-orange-500 text-white border-none w-full">
            Login
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-5">
          New here?{" "}
          <Link href="/register" className="text-orange-500 font-bold">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}