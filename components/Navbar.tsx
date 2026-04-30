"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const solutionItems = [
  { href: "/solutions#eblite", label: "eBLite" },
  { href: "/solutions#ebscale", label: "eBScale" },
  { href: "/solutions#ebizcover", label: "EBizCover" },
  { href: "/solutions#cyberpro", label: "CyberPro" },
  { href: "/solutions#trade-credit-protection", label: "Trade Credit Protection" },
  { href: "/solutions#premium-financing", label: "Premium Financing" },
];

const insureItems = [
  { href: "/insure#retail", label: "Retail & Wholesale" },
  { href: "/insure#fnb", label: "Food & Beverage (F&B)" },
  { href: "/insure#professional", label: "Professional Services" },
  { href: "/insure#logistics", label: "Logistics & Transportation" },
  { href: "/insure#healthcare", label: "Healthcare & Medical Services" },
  { href: "/insure#education", label: "Education & Training" },
  { href: "/insure#automotive", label: "Automotive & Transport" },
  { href: "/insure#agriculture", label: "Agriculture & Agro-Based" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md md:px-5">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="VSure SME Pro Logo"
              width={38}
              height={38}
              className="h-9 w-auto flex-shrink-0"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[17px] font-bold text-[#4b1f87]">
                VSure SME Pro
              </p>
              <p className="truncate text-xs text-gray-500">
                Smart Protection
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex">
            <Link
              href="/about"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
            >
              About Us
            </Link>

            <div className="group relative">
              <Link
                href="/solutions"
                className="flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
              >
                Solutions
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>

              <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-72 rounded-xl bg-[#2b2b2f] py-3 shadow-2xl">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-[#33343a] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/insure"
                className="flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
              >
                Who We Insure
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>

              <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-72 rounded-xl bg-[#2b2b2f] py-3 shadow-2xl">
                  {insureItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-[#33343a] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/flexibenefit"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
            >
              Flexi Benefits
            </Link>

            <Link
              href="/careconnect"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
            >
              CareConnect
            </Link>

            <Link
              href="/blog"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
            >
              V-Blog
            </Link>

            <Link
              href="/contact"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-gray-500 transition hover:text-[#ff1493]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-full bg-[#4b1f87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3b176b] sm:inline-block"
            >
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/40 bg-white/95 p-4 shadow-lg backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/about" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              About Us
            </Link>
            <Link href="/solutions" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              Solutions
            </Link>
            <Link href="/insure" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              Who We Insure
            </Link>
            <Link href="/flexibenefit" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              Flexi Benefits
            </Link>
            <Link href="/careconnect" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              CareConnect
            </Link>
            <Link href="/blog" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              V-Blog
            </Link>
            <Link href="/contact" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#f6f7fb]">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-[#4b1f87] px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}