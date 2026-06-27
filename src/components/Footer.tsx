"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Type’s Of plant’s", href: "#plants" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
];

const socialLinks = [
  { label: "FB", href: "https://facebook.com" },
  { label: "TW", href: "https://twitter.com" },
  { label: "LI", href: "https://linkedin.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-[var(--color-footer-bg)] pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center md:text-start px-5 py-4">
          <div className="flex gap-2 items-center mb-5 justify-center md:justify-start">
            <Image src="/logo.svg" alt="FloraVision logo" width={32} height={32} />
            <h3 className="text-[var(--color-text-primary)] text-[1.5rem] font-semibold">
              FloraVision.
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] text-[0.9rem] italic leading-relaxed">
            &quot;From lush indoor greens to vibrant outdoor blooms, our plants
            are crafted to thrive and elevate your living environment.&quot;
          </p>
        </div>

        <div className="text-center md:text-start px-5 py-4 md:mx-auto">
          <h4 className="text-[var(--color-text-primary)] font-bold mb-5">
            Quick Link’s
          </h4>
          <ul className="text-[var(--color-text-secondary)] font-medium">
            {footerLinks.map((link) => (
              <li key={link.label} className="my-2">
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-text-primary)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-start px-5 py-4 flex flex-col items-center md:items-start">
          <h4 className="text-[var(--color-text-primary)] font-bold mb-5">
            For Every Update.
          </h4>
          <form
            className="w-full max-w-sm h-12 grid grid-cols-[1fr_auto] border-2 border-[var(--color-text-primary)] rounded-md overflow-hidden box-border"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              aria-label="Email for newsletter"
              className="h-full min-w-0 px-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] placeholder:text-[0.8rem] placeholder:opacity-50 focus:outline-none bg-transparent border-0"
            />
            <Button variant="subscribe" type="submit" className="h-12 px-5 min-w-[7rem]">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 pb-5">
        <div className="flex items-center justify-center md:justify-start gap-2 px-5 order-2 md:order-1 mt-5 md:mt-0">
          <p className="text-[var(--color-text-secondary)] font-medium text-[0.8rem]">
            FloraVision © all right reserve
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 px-5 order-1 md:order-2">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--color-text-secondary)] text-sm font-bold hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
