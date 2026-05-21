import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Globe, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#1f1633] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="VSure SME Pro logo"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">VSure SME Pro</h3>
                <p className="text-white/70">Smart Protection for Your Business</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl leading-8 text-white/75">
              Practical insurance solutions designed to help SMEs build
              resilience, manage risks, and grow with confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/vsure.life"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/vsure.life/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/vsuredotcom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=60162103862&text=Hi%2C+I+would+like+to+know+more&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@vsure927"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://vsure.life/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>



          <div className="grid gap-3 text-sm text-white/80">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/solutions" className="transition hover:text-white">
              Solutions
            </Link>
            <Link href="/insure" className="transition hover:text-white">
              Who We Insure
            </Link>
            <Link href="/flexibenefit" className="transition hover:text-white">
              FlexiBenefit
            </Link>
            <Link href="/loss-prevention" className="transition hover:text-white">
              Loss Prevention
            </Link>
            <Link href="/careconnect" className="transition hover:text-white">
              Care Connect
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              V-Blog
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © 2026 VSure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}