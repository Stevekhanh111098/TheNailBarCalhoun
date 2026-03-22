"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createClient } from "@/lib/supabase-client";
import type { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative z-50 flex items-center justify-between py-4 bg-white" style={{ paddingLeft: "10%", paddingRight: "6%" }}>
      <div className="flex items-center gap-10">
        <a href="/">
          <Image
            src="/handwritten.png"
            alt="The Nail Bar in Calhoun"
            width={200}
            height={200}
          />
        </a>
        <ul className="flex gap-10 text-base font-medium text-zinc-700" style={{ fontFamily: "var(--font-bodoni-moda)" }}>
          <li><a href="/services" className="hover:text-zinc-900">Services</a></li>
          <li><a href="/gallery" className="hover:text-zinc-900">Gallery</a></li>
          <li><a href="/about" className="hover:text-zinc-900">About Us</a></li>
          <li><a href="/contact" className="hover:text-zinc-900">Contact</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
          style={{ fontFamily: "var(--font-bodoni-moda)", backgroundColor: "#f5ead6" }}
        >
          Book Appointment
        </a>
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 transition-colors hover:border-zinc-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg" style={{ fontFamily: "var(--font-bodoni-moda)" }}>
              {user ? (
                <>
                  <span className="block px-4 py-2 text-xs text-zinc-500 truncate">
                    {user.email}
                  </span>
                  <hr className="my-1 border-zinc-100" />
                  <a href="/auth/signout" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100">
                    Log Out
                  </a>
                </>
              ) : (
                <>
                  <button onClick={() => { setProfileOpen(false); setAuthModal("login"); }} className="block w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100">Log In</button>
                  <button onClick={() => { setProfileOpen(false); setAuthModal("signup"); }} className="block w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100">Sign Up</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={authModal !== null}
        onClose={() => setAuthModal(null)}
        initialView={authModal ?? "login"}
      />
    </nav>
  );
}
