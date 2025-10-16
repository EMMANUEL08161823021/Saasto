"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape and prevent body scroll when sidebar is open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    // cleanup
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
      <header className="w-[100%] flex justify-center h-16">
        <div className="w-[100%] sm:w-[75%] fixed bg-[#FFF8F2] top-0 mx-auto z-50 px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Brand */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={"/assets/logo.svg"} alt="logo"/>
                <h1 className="text-xl font-bold text-gray-900">Saasto</h1>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4">
              <ul className="flex gap-3">
                <a href="#"><li className="hover:text-blue-600">Demos</li></a>
                <a href="#"><li className="hover:text-blue-600">Features</li></a>
                <a href="#"><li className="hover:text-blue-600">Pricing</li></a>
                <a href="#"><li className="hover:text-blue-600">Contact</li></a>
              </ul>
            </nav>

            {/* Actions + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex gap-3">
                <button className="px-3 py-1 rounded-md text-[#FF553E]">Login</button>
                <button className="px-3 py-2 rounded-lg bg-[#FF553E] text-white">Sign up</button>
              </div>

              {/* Hamburger for mobile */}
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpen((s) => !s)}
              >
                {/* simple hamburger icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar (AnimatePresence handles mount/unmount animations) */}
        <AnimatePresence>
          {open && (
            // Overlay
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            // Sidebar panel sliding in from right to left
            <motion.aside
              key="sidebar"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-70 max-w-[90%] bg-[#FFF8F2] shadow-lg md:hidden"
            >
              <div className="flex items-center justify-end px-4 py-3">
                {/* <div className="flex items-center gap-2">
                  <img src={"/assets/logo.svg"} alt="logo"/>
                  <span className="font-bold text-lg">Saasto</span>
                </div> */}
                <button
                  aria-label="Close sidebar"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <nav className="p-4">
                <ul className="flex flex-col gap-4">
                  <a href="#"><li className="text-lg">Demos</li></a>
                  <a href="#"><li className="text-lg">Features</li></a>
                  <a href="#"><li className="text-lg">Pricing</li></a>
                  <a href="#"><li className="text-lg">Contact</li></a>
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <button className="w-full px-4 py-2 rounded-md border border-[#FF553E]">Login</button>
                  <button className="w-full px-4 py-2 rounded-md bg-[#FF553E] text-white">SignUp</button>
                </div>

                {/* Optional small footer */}
                <div className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} Saasto</div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
  );
}
