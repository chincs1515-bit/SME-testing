"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Wallet, SlidersHorizontal, TrendingUp, Building2, ChevronDown } from "lucide-react";

const whyCards = [
  {
    title: "Affordable Premiums",
    description:
      "Protection solutions designed to support SME budgets without unnecessary complexity.",
    icon: Wallet,
  },
  {
    title: "Customizable Coverage",
    description:
      "Flexible plans that can be adjusted based on your business needs and priorities.",
    icon: SlidersHorizontal,
  },
  {
    title: "Scalable Protection",
    description:
      "Solutions that grow together with your business as your operations expand.",
    icon: TrendingUp,
  },
  {
    title: "Industry-Focused",
    description:
      "Coverage shaped around operational, financial, employee, and cyber-related risks.",
    icon: Building2,
  },
];

const steps = [
  {
    number: "01",
    title: "Understand Your Risks",
    description:
      "Identify the key financial, operational, employee, and cyber exposures affecting your business.",
  },
  {
    number: "02",
    title: "Choose the Right Solution",
    description:
      "Explore practical protection options that match your industry, size, and growth stage.",
  },
  {
    number: "03",
    title: "Build Resilience",
    description:
      "Strengthen continuity and confidence with a protection approach built for long-term business growth.",
  },
];

const coveragePriorities = [
  {
    title: "Business continuity",
    detail: "Protect your daily operations from unexpected disruptions that could bring your business to a halt. Whether dealing with sudden equipment breakdowns, supply chain interruptions, or natural disasters, having the right continuity plan ensures your business can keep running, recover quickly, and maintain vital trust with your clients without suffering devastating revenue losses."
  },
  {
    title: "Financial resilience",
    detail: "Safeguard your cash flow and core business assets against sudden liabilities, market shocks, or major property damages. For SMEs, a single unexpected lawsuit, workplace accident, or significant physical damage to your premises can be financially crippling. Building financial resilience creates a reliable safety net that absorbs these heavy costs, allowing your balance sheet to remain stable."
  },
  {
    title: "Employee stability",
    detail: "Provide robust benefits and comprehensive protection to attract and retain top talent in a highly competitive market. With rising medical inflation and healthcare costs, offering strong employee welfare programs—including coverage for hospitalisation, workplace accidents, and virtual healthcare access—not only supports workforce well-being but also directly boosts productivity and long-term loyalty."
  },
  {
    title: "Cyber awareness",
    detail: "Defend your business against the rapidly growing landscape of digital threats, including data breaches, phishing scams, and ransomware attacks. As modern SMEs increasingly rely on digital tools, cloud platforms, and remote work, protecting sensitive customer data is non-negotiable. Comprehensive cyber protection helps mitigate financial losses, legal repercussions, and severe reputational damage."
  }
];

// Partner List (Paths exactly as you requested)
const partners = [
  { name: "Mobility One", logo: "/images/partner/m1.png" },
  { name: "MicroLeap", logo: "/images/partner/microleap.png" },
  { name: "TFP Solution", logo: "/images/partner/tfp.png" },
  { name: "Medilink-Global", logo: "/images/partner/medilink.png" },
  { name: "Coded Solution", logo: "/images/partner/codedsolution.jpg" },
  { name: "HeyDoc Health", logo: "/images/partner/heydoc.png" },
  { name: "Emphatta", logo: "/images/partner/emphatta.png" },
  { name: "Blaze Tech", logo: "/images/partner/blazetech.png" },
  { name: "Allianz", logo: "/images/partner/allianz.png" },
  { name: "Etiqa", logo: "/images/partner/etiqa.png" },
  { name: "Kaspersky", logo: "/images/partner/kaspersky.png" },
  { name: "Takaful Ikhlas", logo: "/images/partner/takafulikhlas.png" },
  { name: "MDEC", logo: "/images/partner/mdec.png" }
];

export default function HomePage() {
  const [activeCoverage, setActiveCoverage] = useState<number | null>(null);
  
  // Preloader States
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOutPreloader, setFadeOutPreloader] = useState(false);

  // 1. Preloader Effect
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutPreloader(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // 2. High-End Multiple Scroll Entrance Animation Effect
  useEffect(() => {
    if (!isLoading) {
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

      // We now target the generic base class "reveal-elem"
      const elements = document.querySelectorAll(".reveal-elem");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const toggleCoverage = (index: number) => {
    setActiveCoverage(activeCoverage === index ? null : index);
  };

  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {/* --- PRELOADER SCREEN --- */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
            fadeOutPreloader ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center animate-pulse">
            <Image
              src="/images/logo.png"
              alt="VSure Logo"
              width={240}
              height={80}
              priority
              className="h-14 w-auto object-contain mb-5"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="mb-8 px-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/70 md:text-sm">
              Smart Insurance for Modern SMEs
            </p>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full animate-[slideRight_1.5s_ease-in-out_infinite] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89]" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <div 
        className={`bg-[#f6f7fb] text-gray-900 overflow-hidden transition-all duration-[1000ms] ease-out ${
          isLoading && !fadeOutPreloader ? "opacity-0 translate-y-4 scale-[0.99]" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Partner Marquee */
          @keyframes partner-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-partner-marquee {
            display: flex;
            width: max-content;
            animation: partner-marquee 35s linear infinite; 
          }
          .animate-partner-marquee:hover {
            animation-play-state: paused;
          }

          /* Preloader Bar */
          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          /* --- MULTIPLE ENTRANCE ANIMATIONS --- */
          /* Base styles for all animated elements */
          .reveal-elem {
            opacity: 0;
            transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
          }
          
          /* 1. Fade Up (Good for cards) */
          .reveal-elem.fade-up {
            transform: translateY(80px);
          }
          
          /* 2. Fade Left (Slides in from the right side) */
          .reveal-elem.fade-left {
            transform: translateX(80px);
          }
          
          /* 3. Fade Right (Slides in from the left side) */
          .reveal-elem.fade-right {
            transform: translateX(-80px);
          }
          
          /* 4. Zoom In (Good for big hero blocks) */
          .reveal-elem.zoom-in {
            transform: translateY(40px) scale(0.9);
          }

          /* Common Revealed State */
          .reveal-elem.is-revealed {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        `}} />

        {/* Hero - Uses zoom-in for a grand entrance */}
        <section className="px-6 pt-8 pb-16">
          <div className="reveal-elem zoom-in mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#27114a] via-[#4b1f87] to-[#ea4c89] text-white shadow-2xl">
            <div className="grid gap-10 px-8 py-12 md:grid-cols-2 md:px-12 md:py-16">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                  VSure SME Pro
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                  Smart Insurance
                  <span className="block text-white/90">for Modern SMEs</span>
                </h1>

                <p className="mb-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
                  Protect your business with affordable, scalable, and customizable
                  solutions designed for real SME risks and long-term resilience.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
                  >
                    Get Started
                  </a>
                  <a
                    href="/solutions"
                    className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Solutions
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/85">
                  <div>
                    <div className="text-2xl font-bold text-white">SME-Focused</div>
                    <div>Business protection</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Flexible</div>
                    <div>Coverage approach</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Future-Ready</div>
                    <div>Modern business risks</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="overflow-hidden rounded-[22px] bg-black shadow-xl">
                    <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black">
                      <iframe
                        src="https://vsure.life/smepro/video-wrapper.html"
                        title="SME Pro Video"
                        className="absolute inset-0 block h-full w-[110%] border-0"
                        allow="autoplay; fullscreen"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/75">Protection Type</p>
                      <p className="mt-1 font-semibold">Business + Employee</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/75">Coverage Style</p>
                      <p className="mt-1 font-semibold">Flexible & Scalable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNDP recognition section - Uses fade-up */}
        <section className="px-6 pb-10">
          <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <div className="grid items-stretch gap-6 md:grid-cols-4">
              <div className="flex flex-col justify-center md:justify-start">
                <div className="rounded-[24px] bg-[#f8fafc] px-6 py-5 ring-1 ring-gray-100">
                  <Image
                    src="/images/UNDP logo.png"
                    alt="UNDP logo"
                    width={240}
                    height={120}
                    className="h-[70px] w-auto object-contain md:h-[90px]"
                  />
                </div>
              </div>
              <div className="col-span-2 flex flex-col text-center md:text-left">
                <div>
                  <h1 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                    Recognition
                  </h1>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                    Recognized in the UNDP Generali Insurance Innovation Challenge Fund in Malaysia
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                    This recognition reflects a stronger commitment to practical,
                    innovation-driven protection solutions that support SMEs and more
                    inclusive business resilience.
                  </p>
                </div>
                <div className="mt-auto pt-6 flex justify-center md:justify-start">
                  <div className="inline-flex rounded-full bg-[#f6f7fb] px-4 py-2 text-sm text-gray-500 ring-1 ring-gray-100">
                    UNDP does not endorse any entity, brand, product, or service.
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col h-full">
                <div className="flex-grow min-h-[160px] w-full overflow-hidden rounded-[24px] shadow-sm ring-1 ring-gray-100">
                  <Image
                    src="/images/undp.png"
                    alt="UNDP Picture"
                    width={1080}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-auto pt-6 flex justify-center md:justify-end">
                  <a
                    href="https://irff.undp.org/news/undp-and-generali-announce-winning-solution-sme-insurance-innovation-challenge-malaysia"
                    className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For more information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why section - Uses staggered fade-up */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-elem fade-up mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                Why Choose SME Pro
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Protection That Fits the Way SMEs Operate
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyCards.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-elem fade-up rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-md">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-7 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split section - Uses fade-right (for left block) and fade-left (for right block) */}
        <section className="px-6 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            {/* Left box comes in from the left (fade-right means moving rightwards into position) */}
            <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                About SME Pro
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-tight">
                Strengthen Your Business with Smarter Protection
              </h2>
              <p className="mb-5 leading-8 text-gray-600">
                VSure SME Pro helps businesses stay prepared for operational,
                financial, employee, and cyber-related risks through practical
                solutions that are easier to understand and easier to apply.
              </p>
              <p className="leading-8 text-gray-600">
                We focus on helping SMEs build confidence, continuity, and
                resilience with a protection approach that aligns with business
                realities and growth ambitions.
              </p>
            </div>

            {/* Right box comes in from the right */}
            <div 
              className="reveal-elem fade-left rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Coverage Priorities
                  </p>
                  <h3 className="mb-5 text-3xl font-bold">
                    Built Around Key SME Risk Areas
                  </h3>
                </div>

                <div className="space-y-4">
                  {coveragePriorities.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => toggleCoverage(index)}
                      className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${activeCoverage === index
                          ? "bg-white shadow-md ring-2 ring-purple-400"
                          : "bg-white/80 backdrop-blur hover:bg-white hover:shadow-sm"
                        }`}
                    >
                      <div className="flex items-center justify-between font-semibold text-gray-900">
                        {item.title}
                        <ChevronDown
                          className={`h-5 w-5 text-purple-600 transition-transform duration-300 ${activeCoverage === index ? "rotate-180" : ""
                            }`}
                        />
                      </div>

                      <div
                        className={`grid transition-all duration-300 ${activeCoverage === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
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

        {/* Process - Uses staggered fade-up */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-[#111827] px-8 py-12 text-white md:px-10">
            <div className="reveal-elem fade-up mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                How It Works
              </p>
              <h2 className="text-4xl font-bold">A Simpler Way to Build Resilience</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="reveal-elem fade-up rounded-[28px] border border-white/10 bg-white/5 p-6"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-6 text-4xl font-bold text-pink-300">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{step.title}</h3>
                  <p className="leading-7 text-white/75">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner logos - Uses a subtle zoom-in */}
        <section className="px-6 py-12">
          <div className="reveal-elem zoom-in mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10 relative overflow-hidden">
            <div className="mb-10 text-center px-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                Trusted Network
              </p>
              <h2 className="text-4xl font-bold">Our Partners</h2>
            </div>

            <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#ede9fe] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#dbeafe] after:to-transparent">
              <div className="animate-partner-marquee gap-6 px-3">
                {displayPartners.map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="flex h-28 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-full object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('span')?.classList.remove('hidden');
                      }}
                    />
                    <span className="mt-1 text-xs font-bold uppercase tracking-wider text-purple-700 text-center line-clamp-1">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Uses standard fade-up */}
        <section className="px-6 pt-4 pb-16">
          <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-8 py-14 text-center text-white shadow-xl md:px-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Get Started
            </p>
            <h2 className="mb-5 text-4xl font-bold">
              Protect Your Business with More Confidence
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
              Explore practical insurance solutions built for SME realities and
              long-term business resilience.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
              >
                Contact Us
              </a>
              <a
                href="/insure"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Who We Insure
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}