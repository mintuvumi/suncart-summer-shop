"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/profile">My Profile</Link></li>
    </>
  );

  return (
    <div className="navbar bg-white/90 backdrop-blur sticky top-0 z-50 shadow-md px-4 lg:px-10">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost md:hidden text-xl">
            <FiMenu size={22} />
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo Image */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/6yK9KkF/sun-logo.png"
            alt="SunCart Logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-black text-orange-500">
            SunCart
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        {isLoggedIn ? (
          <>
            <img
              src="https://i.ibb.co.com/4pDNDk1/avatar.png"
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn btn-sm bg-orange-500 text-white border-none"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm bg-orange-500 text-white font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}