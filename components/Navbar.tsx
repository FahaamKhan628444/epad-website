"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white bg-white/90 backdrop-blur-md shadow-sm"> 
      <div className="container-custom flex items-center justify-between py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/image.png"
    alt="logo"
    width={60}
    height={60}
    className="object-contain"
  />

  <span className="text-2xl font-bold text-blue-900">
    Eastpoint Advertising
  </span>
</Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          {/* <Link href="/gallery">Gallery</Link> */}
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
{/* 
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link> */}

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}