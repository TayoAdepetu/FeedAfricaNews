"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line, RiArrowDownSLine } from "react-icons/ri";
import { NAV_ITEMS } from "@/config/nav.config";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (name: string) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <nav className="md:hidden z-[100] w-full bg-white font-semibold py-4 px-8">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/logos/feedafrica.svg"
              alt="Feed Africa"
              width={150}
              height={64}
              className="w-[130px]"
            />
          </Link>

          <RiMenu3Line
            onClick={() => setMenuOpen((v) => !v)}
            className="text-2xl text-primary cursor-pointer"
          />
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div
        className={`fixed z-[90] top-[88px] w-full bg-white px-4 py-8 md:hidden
        transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 text-gray-700">

          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => toggleSection(item.label)}
                className="flex justify-between w-full"
              >
                <span>{item.label}</span>
                <span>{openSection === item.label ? "−" : "+"}</span>
              </button>

              {openSection === item.label && (
                <div className="pl-4 mt-3 flex flex-col gap-3 text-sm">
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    All {item.label}
                  </Link>

                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* External Tools */}
          <a
            href="https://feedafrica.africa/tools"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 self-start bg-primary text-white py-3 px-6 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Tools
          </a>
        </div>
      </div>
    </>
  );
}
