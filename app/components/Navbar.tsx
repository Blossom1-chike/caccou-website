"use client";
import { useState } from "react";
import Image from "next/image";

const links = ["home", "about", "services", "why-us", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="CACCOU Family Services"
          width={180}
          height={60}
          priority
        />

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-semibold text-gray-700 capitalize hover:text-purple-700 transition-colors"
            >
              {l.replace("-", " ")}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-purple-700 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-purple-800 transition-colors"
          >
            Get Care Now
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-sm font-semibold text-gray-700 capitalize hover:text-purple-700"
            >
              {l.replace("-", " ")}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-purple-700 text-white text-sm font-bold px-5 py-2 rounded-full"
          >
            Get Care Now
          </button>
        </div>
      )}
    </nav>
  );
}
