"use client";

import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/my-profile">My Profile</Link></li>
    </>
  );

  return (
    <div className="navbar bg-white/90 backdrop-blur sticky top-0 z-50 shadow-md px-4 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost md:hidden">
            ☰
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link href="/" className="text-2xl font-black text-orange-500">
          ☀️ SunCart
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-2">
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