"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await signUp.email({
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      image: String(formData.get("image")),
    });

    if (error) {
      setError(error.message || "Registration failed");
      return;
    }

    router.push("/login");
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
        <h1 className="text-4xl font-black text-center mb-6">Register</h1>

        {error && <p className="alert alert-error mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            name="image"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn bg-orange-500 text-white border-none w-full">
            Register
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}