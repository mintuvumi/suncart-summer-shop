"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    // simple fake login
    if (email) {
      router.push("/");
    }
  };

  return (
    <section className="max-w-md mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn bg-orange-500 text-white border-none w-full">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}