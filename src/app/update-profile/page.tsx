"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=/update-profile");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!session?.user) {
    return null;
  }

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await authClient.updateUser({
      name: String(formData.get("name")),
      image: String(formData.get("image")),
    });

    if (error) {
      setError(error.message || "Update failed");
      return;
    }

    router.push("/my-profile");
  };

  return (
    <section className="max-w-md mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-center mb-6">
          Update Profile
        </h1>

        {error && <p className="alert alert-error mb-4">{error}</p>}

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            name="name"
            defaultValue={session.user.name || ""}
            className="input input-bordered w-full"
            placeholder="Name"
            required
          />

          <input
            name="image"
            defaultValue={session.user.image || ""}
            className="input input-bordered w-full"
            placeholder="Image URL"
          />

          <button className="btn bg-orange-500 text-white border-none w-full">
            Update Information
          </button>
        </form>
      </div>
    </section>
  );
}