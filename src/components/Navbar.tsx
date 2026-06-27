"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiShoppingBag4Line, RiUser3Line } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Plants Type", href: "#plants", hasDropdown: true },
  { label: "More", href: "#more" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="flex justify-between items-center pt-5 px-4 lg:px-8 mb-10 md:mb-25"
        aria-label="Main navigation"
      >
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="FloraVision logo"
            width={28}
            height={28}
            className="w-6 md:w-7 h-6 md:h-7"
          />
          <span className="text-[var(--color-text-primary)] text-md font-semibold">
            FloraVision.
          </span>
        </Link>

        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[var(--color-text-secondary)] cursor-pointer text-sm hover:text-[var(--color-text-primary)] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
                {link.hasDropdown && (
                  <IoMdArrowDropdown className="inline-block" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 md:gap-8">
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen((prev) => !prev)}
            className="text-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <RiSearchLine />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="hidden md:inline-flex text-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <RiShoppingBag4Line />
          </button>
          <button
            type="button"
            aria-label="Open profile"
            className="hidden md:inline-flex text-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <RiUser3Line />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-2xl text-[var(--color-text-secondary)] inline-flex md:hidden cursor-pointer hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      <section
        className={`w-full h-full fixed top-0 left-0 z-50 bg-[var(--color-background-transparent)] backdrop-blur-xs ${
          menuOpen ? "flex" : "hidden"
        } md:hidden justify-center items-center`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="w-8 h-8 rounded-full border-2 border-[var(--border-primary-color)] absolute top-4 right-4 cursor-pointer inline-flex items-center justify-center box-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdClose className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" />
        </button>
        <ul className="text-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-40 h-10 bg-[var(--color-primary)] rounded-md border-2 border-[var(--border-primary-color)] inline-flex items-center justify-center text-[var(--color-text-secondary)] font-medium cursor-pointer my-8 hover:text-[var(--color-text-primary)] transition-all hover:scale-105 box-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`w-full h-full fixed top-0 left-0 z-40 bg-[var(--color-background-transparent)] backdrop-blur-xs ${
          searchOpen ? "flex" : "hidden"
        } items-center justify-center`}
        aria-hidden={!searchOpen}
      >
        <div className="relative w-[87%] md:w-2/3 lg:w-1/2 h-12 rounded-lg bg-[var(--color-primary)] border-2 border-[var(--border-primary-color)] flex items-center box-border overflow-hidden">
          <div className="w-12 h-full shrink-0 flex items-center justify-center border-r-2 border-[var(--border-primary-color)]">
            <button
              type="button"
              aria-label="Close search"
              className="absolute z-10 -top-12 right-0 rounded-full border-2 border-[var(--border-primary-color)] w-8 h-8 bg-[var(--color-primary)] inline-flex items-center justify-center box-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setSearchOpen(false)}
            >
              <IoMdClose className="text-[var(--color-text-secondary)] cursor-pointer" />
            </button>
            <RiSearchLine className="text-[var(--border-primary-color)] text-xl" aria-hidden="true" />
          </div>
          <input
            type="search"
            className="flex-1 h-full focus:outline-none text-[var(--color-text-secondary)] text-lg pl-3 pr-2 placeholder:text-lg placeholder:opacity-70 bg-transparent"
            placeholder="Search plant"
            aria-label="Search plants"
          />
        </div>
      </section>
    </>
  );
}
