"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=/my-profile");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!session?.user) {
    return null;
  }

  return (
    <section className="max-w-md mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
        <img
          src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-orange-400"
        />

        <h1 className="text-3xl font-black mt-5">{session.user.name}</h1>
        <p className="text-slate-600">{session.user.email}</p>

        <Link
          href="/update-profile"
          className="btn bg-orange-500 text-white border-none mt-6"
        >
          Update Information
        </Link>
      </div>
    </section>
  );
}