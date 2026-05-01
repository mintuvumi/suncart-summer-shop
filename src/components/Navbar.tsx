"use client";

import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-white/90 backdrop-blur sticky top-0 z-50 shadow-md px-4 lg:px-10">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-black text-orange-500">
          ☀️ SunCart
        </Link>
      </div>

      <div className="hidden md:flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/my-profile">My Profile</Link>
      </div>

      <div className="ml-4 flex gap-2 items-center">
        {session?.user ? (
          <>
            <img
              src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />
            <button
              onClick={() => signOut()}
              className="btn btn-sm bg-orange-500 text-white border-none"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-sm">
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-sm bg-orange-500 text-white border-none"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}