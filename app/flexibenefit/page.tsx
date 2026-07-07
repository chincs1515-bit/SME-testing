"use client";

import { useState, useEffect } from "react";
import {
  Gift,
  Smile,
  ShieldCheck,
  Building2,
  Users,
  RefreshCw,
  Star,
  Award,
  Smartphone,
  ArrowRight,
  ChevronDown
} from "lucide-react";

const benefitCards = [
  {
    title: "Personalized Digital Marketplace",
    description:
      "Empower employees with real choices across wellness, lifestyle, F&B, and more through an easy-to-use, digital-first platform.",
    icon: Smartphone,
  },
  {
    title: "Performance-Based Rewards",
    description:
      "Motivate your team with a reward system where points reflect employee contributions, driving higher engagement and productivity.",
    icon: Star,
  },
  {
    title: "Reduced HR Admin Burden",
    description:
      "Streamline benefits management with a centralized platform. No complex setup—just allocate points and let the system handle the rest.",
    icon: ShieldCheck,
  },
];

// Upgraded to include detailed descriptions for the interactive accordion
const highlights = [
  {
    title: "Winner of the UNDP Generali Insurance Innovation Challenge",
    detail: "Recognized for our commitment to practical, innovation-driven solutions that support inclusive business resilience and employee welfare."
  },
  {
    title: "Performance-based points allocation",
    detail: "Seamlessly tie employee milestones, work anniversaries, or KPI achievements to tangible reward points that they can spend freely."
  },
  {
    title: "AI-powered voucher browsing",
    detail: "Our smart platform learns from user behavior to recommend the most relevant vouchers, creating a highly personalized and engaging benefits experience."
  },
  {
    title: "Massive growing merchant network",
    detail: "Employees gain access to a constantly expanding ecosystem of top-tier brands spanning F&B, wellness, groceries, and retail to suit every lifestyle."
  }
];

const useCases = [
  {
    title: "Talent Attraction & Retention",
    description:
      "Offer a competitive, customizable benefits package that modern employees truly value, improving loyalty and reducing turnover.",
    icon: Users,
  },
  {
    title: "Simplify HR Operations",
    description:
      "Replace manual benefits tracking with a centralized digital dashboard, freeing up your HR team to focus on strategic initiatives.",
    icon: Building2,
  },
  {
    title: "Drive Employee Engagement",
    description:
      "Foster a culture of well-being by rewarding staff with points they can actually spend on the perks and brands they love.",
    icon: Award,
  },
];

// Expanded Categories & Massive Merchant List (Paths kept exactly as requested)
const categories = ["All", "F&B", "Lifestyle & Retail", "Wellness", "Groceries", "Entertainment & Services"];

const allMerchants = [
  { name: "Adidas", category: "Lifestyle & Retail", logo: "/images/merchant/adidas.png" },
  { name: "Alpro", category: "Wellness", logo: "/images/merchant/alpro.png" },
  { name: "Astro", category: "Entertainment & Services", logo: "/images/merchant/astro.png" },
  { name: "Baskin Robbins", category: "F&B", logo: "/images/merchant/baskinrobbins.png" },
  { name: "Big Apple", category: "F&B", logo: "/images/merchant/bigapple.jpg" },
  { name: "Boost", category: "F&B", logo: "/images/merchant/boost.png" },
  { name: "Decathlon", category: "Lifestyle & Retail", logo: "/images/merchant/decathlon.png" },
  { name: "Family Mart", category: "F&B", logo: "/images/merchant/familymart.jpg" },
  { name: "Grab", category: "Entertainment & Services", logo: "/images/merchant/grab.jpg" },
  { name: "Haagen-Dazs", category: "F&B", logo: "/images/merchant/haagendazs.png" },
  { name: "Kenny Rogers Roasters", category: "F&B", logo: "/images/merchant/kennyrogers.png" },
  { name: "Kidzania", category: "Entertainment & Services", logo: "/images/merchant/kidzania.png" },
  { name: "Krispy Kreme", category: "F&B", logo: "/images/merchant/krispykreme.png" },
  { name: "Lazada", category: "Lifestyle & Retail", logo: "/images/merchant/lazada.png" },
  { name: "Lazo Diamond", category: "Lifestyle & Retail", logo: "/images/merchant/lazodiamond.png" },
  { name: "Lost World of Tambun", category: "Entertainment & Services", logo: "/images/merchant/lostworld.png" },
  { name: "Lotus's", category: "Groceries", logo: "/images/merchant/lotus's.png" },
  { name: "Metro Optical Group", category: "Wellness", logo: "/images/merchant/MOG.png" },
  { name: "Montigo", category: "Lifestyle & Retail", logo: "/images/merchant/montigo.png" },
  { name: "NSK Grocer", category: "Groceries", logo: "/images/merchant/nsk.jpg" },
  { name: "Pensonic", category: "Lifestyle & Retail", logo: "/images/merchant/pensonic.png" },
  { name: "Shopee", category: "Lifestyle & Retail", logo: "/images/merchant/shopee.png" },
  { name: "Starbucks", category: "F&B", logo: "/images/merchant/starbuck.jpg" },
  { name: "TGI Fridays", category: "F&B", logo: "/images/merchant/tgifriday.png" },
  { name: "Unifi", category: "Entertainment & Services", logo: "/images/merchant/unifi.png" },
  { name: "Watsons", category: "Wellness", logo: "/images/merchant/watsons.png" },
  { name: "Zalora", category: "Lifestyle & Retail", logo: "/images/merchant/zalora.png" },
  { name: "Zus Coffee", category: "F&B", logo: "/images/merchant/zus.png" },
];

export default function FlexiBenefitPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const filteredMerchants = allMerchants.filter(
    (m) => activeCategory === "All" || m.category === activeCategory
  );

  // Dynamic Speed Calculation
  const baseDurationPerItem = 45 / 8; 
  let marqueeDuration = 45; 
  
  if (activeCategory !== "All") {
    marqueeDuration = Math.max(10, filteredMerchants.length * baseDurationPerItem);
  }

  const displayMerchants = [...filteredMerchants, ...filteredMerchants, ...filteredMerchants];

  // High-End Scroll Entrance Animation Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const elements = document.querySelectorAll(".reveal-elem");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f6f7fb] text-gray-900 overflow-hidden">
      
      {/* Dynamic Marquee & Animation CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite; 
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Scroll Reveal Animations */
        .reveal-elem {
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-elem.fade-up { transform: translateY(80px); }
        .reveal-elem.fade-left { transform: translateX(80px); }
        .reveal-elem.fade-right { transform: translateX(-80px); }
        .reveal-elem.zoom-in { transform: translateY(40px) scale(0.9); }
        .reveal-elem.is-revealed {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      `}} />

      {/* Hero */}
      <section className="px-6 pt-8 pb-12">
        <div className="reveal-elem zoom-in mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#27114a] via-[#4b1f87] to-[#ea4c89] text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-2 md:px-12 md:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                VSure VIO FlexiBen
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Smarter Benefits
                <span className="block text-white/90">for Modern Teams</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                Empower your employees with flexible benefits that drive engagement, 
                wellness, and satisfaction through a revolutionary digital marketplace 
                and points-based reward system.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
                >
                  Request a Demo
                </a>
                <a
                  href="#how-it-helps"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  See How It Helps
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[24px] bg-white/95 p-6 text-[#1f1633] shadow-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                    Recognition
                  </p>
                  
                  <div className="mb-5 relative w-full overflow-hidden rounded-[16px] bg-black" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/zI1gvnsk1lI"
                      title="Winning Solution of the SME Insurance Innovation Challenge in Malaysia"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <h2 className="mb-2 text-xl font-bold">
                    Award-Winning Innovation
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    Recognized as the winner of the UNDP Generali Insurance Innovation Challenge Fund in Malaysia.
                  </p>
                  <div className="inline-flex rounded-full bg-[#f6f7fb] px-3 py-1.5 text-xs text-gray-500 ring-1 ring-gray-100">
                    UNDP does not endorse any entity, brand, product, or service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Key Highlights Split Section */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm md:p-10 flex flex-col">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              About VIO FlexiBen
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight">
              A revolutionary digital marketplace for employee welfare
            </h2>
            <p className="mb-5 leading-8 text-gray-600">
              VSure VIO FlexiBen enables employers to offer their workforce a truly 
              personalized benefits experience. It shifts away from rigid, one-size-fits-all 
              packages to a system where employees are given real choices.
            </p>
            <p className="leading-8 text-gray-600 flex-grow">
              By utilizing a performance-based reward system, allocated points can reflect 
              employee contributions. Your team can then spend those points across our 
              growing merchant network, ensuring they get value where it matters most to them.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="/insure"
                className="group inline-flex items-center gap-2 font-semibold text-[#4b1f87] transition hover:text-[#ea4c89]"
              >
                Learn More About SME Protection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div 
            className="reveal-elem fade-left rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Key Highlights
                </p>
                <h3 className="mb-5 text-3xl font-bold">
                  Why employers choose VIO FlexiBen
                </h3>
              </div>

              {/* Interactive Accordion for Key Highlights */}
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveHighlight(activeHighlight === index ? null : index)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                      activeHighlight === index 
                        ? "bg-white shadow-md ring-2 ring-purple-400" 
                        : "bg-white/80 backdrop-blur hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-gray-900">
                      <span className="pr-4">{item.title}</span>
                      <ChevronDown 
                        className={`h-5 w-5 shrink-0 text-purple-600 transition-transform duration-300 ${
                          activeHighlight === index ? "rotate-180" : ""
                        }`} 
                      />
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-300 ${
                        activeHighlight === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-gray-600 leading-relaxed border-t border-purple-100 pt-3">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit cards */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="reveal-elem fade-up mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                Core Value
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Built to empower employees and simplify HR
              </h2>
            </div>
            <a
              href="#merchants"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-[#ea4c89] whitespace-nowrap"
            >
              Explore Merchant Network
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefitCards.map((item, index) => (
              <div
                key={item.title}
                className="reveal-elem fade-up rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-md">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-gray-600 flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Merchant Network Explorer */}
      <section id="merchants" className="px-6 py-16">
        <div className="reveal-elem zoom-in mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Voucher & Rewards
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight">
              Our Growing Merchant Network
            </h2>
            
            {/* Filter Tabs */}
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-[20px] md:rounded-full bg-white p-1.5 ring-1 ring-gray-200 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#4b1f87] text-white shadow-md"
                      : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Auto-Flowing Marquee Container */}
          <div className="relative mt-12 w-full overflow-hidden rounded-3xl py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#f6f7fb] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#f6f7fb] after:to-transparent">
            
            {filteredMerchants.length > 0 ? (
              <div className="animate-marquee gap-6 px-3" style={{ animationDuration: `${marqueeDuration}s` }}>
                {displayMerchants.map((merchant, i) => (
                  <div
                    key={`${merchant.name}-${i}`}
                    className="flex h-28 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <img 
                      src={merchant.logo} 
                      alt={merchant.name} 
                      className="h-12 w-full object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="mt-1 text-xs font-bold uppercase tracking-wider text-purple-700 text-center line-clamp-1">
                      {merchant.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500">
                No merchants found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="how-it-helps" className="px-6 py-12 mt-6">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#111827] px-8 py-12 text-white md:px-10">
          <div className="reveal-elem fade-up mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              The Impact
            </p>
            <h2 className="text-4xl font-bold">
              Transforming your workplace culture
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="reveal-elem fade-up relative rounded-[28px] border border-white/10 bg-white/5 p-6"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-pink-300">
                  <item.icon className="h-5 w-5" />
                </div>

                <div className="mb-6 text-4xl font-bold text-pink-300">
                  0{index + 1}
                </div>

                <h3 className="mb-3 pr-14 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-4 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Get Started
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Ready to grow your business now?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
            Contact us to explore how VSure VIO FlexiBen can simplify your HR operations 
            and delight your employees with a smarter benefits experience.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
            >
              Contact Us Today
            </a>
            <a
              href="/solutions"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
