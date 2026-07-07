"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  HeartPulse,
  Wallet,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const ezpaPlans = [
  {
    name: "Plan 1",
    death: "RM10,000",
    disability: "RM10,000",
    hospital: "Not available",
    annual: "RM7.00 / year",
  },
  {
    name: "Plan 2",
    death: "RM25,000",
    disability: "RM25,000",
    hospital: "Not available",
    annual: "RM18.00 / year",
  },
  {
    name: "Plan 3",
    death: "RM50,000",
    disability: "RM50,000",
    hospital: "Not available",
    annual: "RM30.00 / year",
  },
  {
    name: "Plan 4",
    death: "RM50,000",
    disability: "RM50,000",
    hospital: "RM100/day (max 30 days)",
    annual: "RM36.00 / year",
  },
  {
    name: "Plan 5",
    death: "RM100,000",
    disability: "RM100,000",
    hospital: "RM100/day (max 30 days)",
    annual: "RM60.00 / year",
  },
];

const careConnectPlans = [
  {
    name: "PRO",
    price: "RM20/month or RM216/year",
    features: [
      "EzPA personal accident coverage",
      "Accidental death: RM50,000",
      "Permanent disablement: RM50,000",
      "Hospital income: RM100/day (up to 30 days)",
      "Unlimited teleconsults",
      "1x acute medication per month",
      "Pharmacy pickup",
      "Utilization reports",
    ],
  },
  {
    name: "PRO+",
    price: "RM30/month or RM336/year",
    features: [
      "EzPA personal accident coverage",
      "Same core protection as PRO",
      "Unlimited teleconsults",
      "3x teleconsults with medication",
      "3x GP clinic visits with medication",
      "Cashless panel clinics",
      "Medication delivery or self-pickup",
      "Flex health wallet access",
      "Utilisation insights",
    ],
  },
];

const ebizcoverProducts = [
  {
    id: "educare",
    number: "01",
    title: "EduCare",
    subtitle: "For Education Centres, Tutors & Learning Providers",
    audience: "Tuition centres, preschools, and online learning hubs.",
    highlights:
      "Comprehensive General Liability, First Loss Basis, Content & Equipment All Risk.",
    details: [
      "Property all risks for building, renovation, furniture and fittings",
      "Theft, armed robbery or hold-up",
      "Plate glass cover",
      "Money in transit / money in premise",
      "Employer's liability: RM1,000,000 per event",
      "Inconvenience allowance up to 180 days",
      "Content / equipment all risk available in higher plans",
      "Comprehensive general liability: RM250,000 per event",
    ],
  },
  {
    id: "fnb-care",
    number: "02",
    title: "F&B Care",
    subtitle: "For F&B Stalls, Cafes and Food Trucks",
    audience: "Cafes, neighbourhood food stalls, and fast-moving food trucks.",
    highlights:
      "Tailored for food trucks, food spoilage due to covered events, and options to cover staff.",
    details: [
      "Renovation, content, business equipment and stock",
      "Theft, armed robbery or hold-up",
      "Plate glass cover",
      "Employer's liability: RM100,000 per event",
      "Public liability: RM100,000 per event",
      "Fidelity guarantee: RM5,000",
      "Inconvenience allowance up to 180 days",
      "Group PA available in selected plans",
    ],
  },
  {
    id: "beauty-care",
    number: "03",
    title: "Beauty Care",
    subtitle: "For Beauty Parlours & Salons",
    audience: "Beauty studios, hair salons, and nail parlours.",
    highlights:
      "Content & Equipment All Risk, inconvenience allowance for business closure, and lady entrepreneur protection.",
    details: [
      "Property all risks for renovation, furniture, fittings, content and stock-in-trade",
      "Theft, armed robbery or hold-up",
      "Plate glass cover",
      "Money in transit / in premise",
      "Employer's liability: RM100,000 per event",
      "Public liability: RM100,000 per event",
      "Fidelity guarantee: RM5,000",
      "Lady Protector available in selected plans",
    ],
  },
  {
    id: "retail-care",
    number: "04",
    title: "Retail Care",
    subtitle: "For Pop-Up Booths & Mall Kiosks",
    audience:
      "Jewelry makers, fashion goods, handmade art booths, and mall kiosks.",
    highlights:
      "Protection for theft/robbery, inconvenience allowance, and employee coverage.",
    details: [
      "Property all risks for renovation, content, business equipment and stock",
      "Theft, armed robbery or hold-up",
      "Plate glass cover",
      "Money in transit / money in premise",
      "Employer's liability: RM100,000 per event",
      "Public liability: RM100,000 per event",
      "Fidelity guarantee: RM5,000",
      "Group PA available in higher plans",
    ],
  },
];

const cyberTiers = [
  {
    name: "CyberSafe",
    modules: "8–10 modules",
    price: "RM150 / pax",
    desc: "Basic cybersecurity awareness for businesses new to cybersecurity.",
  },
  {
    name: "CyberReady",
    modules: "15–18 modules",
    price: "RM165 / pax",
    desc: "Intermediate protection with stronger data protection, compliance, and threat awareness.",
  },
  {
    name: "CyberSecure",
    modules: "30–35 modules",
    price: "RM175 / pax",
    desc: "Advanced training for regulated or higher-risk sectors.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-8 text-slate-600">{desc}</p>
      )}
    </div>
  );
}

export default function SolutionsPage() {
  const [openEbizcover, setOpenEbizcover] = useState<string>("educare");
  
  // Accordion states for Trade Credit and Premium Financing
  const [activeTrade, setActiveTrade] = useState<number | null>(null);
  const [activePremium, setActivePremium] = useState<number | null>(null);

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
    <div className="bg-[#f6f7fb] text-slate-900 overflow-hidden">
      
      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .reveal-elem {
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        
        .reveal-elem.fade-up { transform: translateY(80px); }
        .reveal-elem.zoom-in { transform: translateY(40px) scale(0.9); }

        .reveal-elem.is-revealed {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      `}} />

      {/* Hero */}
      <section className="px-6 pt-8 pb-10">
        <div className="reveal-elem zoom-in mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#180d38] via-[#2d1363] to-[#ea4c89] text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-12 md:grid-cols-2 md:px-12 md:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium">
                VSure SME Pro Solutions
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Smarter protection
                <span className="block text-white/85">
                  for SMEs and individuals
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                Explore practical solutions built around accident protection,
                healthcare access, flexible benefits, and cybersecurity support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#eblite"
                  className="rounded-full bg-white px-5 py-3 font-semibold text-[#4b1f87] transition hover:-translate-y-0.5"
                >
                  Explore Solutions
                </a>
                <a
                  href="#cyberpro"
                  className="rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View CyberPro
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  id: "eblite",
                  title: "eBLite",
                  subtitle: "EzPA personal accident protection",
                  icon: Shield,
                  color: "from-fuchsia-600 to-violet-700",
                },
                {
                  id: "ebscale",
                  title: "eBScale",
                  subtitle: "CareConnect + VIO Flexi Benefits",
                  icon: HeartPulse,
                  color: "from-blue-600 to-cyan-500",
                },
                {
                  id: "ebizcover",
                  title: "EBizCover",
                  subtitle: "Essential business cover",
                  icon: Sparkles,
                  color: "from-emerald-600 to-teal-500",
                },
                {
                  id: "cyberpro",
                  title: "CyberPro",
                  subtitle: "Cyber risk support and training",
                  icon: Laptop,
                  color: "from-slate-800 to-slate-600",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div
                      className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r p-3 ${item.color}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/80">
                      {item.subtitle}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-semibold text-white">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="px-6 pb-4">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <div className="flex flex-wrap gap-3">
            {[
              ["#eblite", "eBLite"],
              ["#ebscale", "eBScale"],
              ["#ebizcover", "EBizCover"],
              ["#cyberpro", "CyberPro"],
              ["#trade-credit-protection", "Trade Credit Protection"],
              ["#premium-financing", "Premium Financing"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full bg-[#f6f7fb] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* eBLite */}
      <section id="eblite" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="eBLite"
            title="EzPA accident protection made simple"
            desc="eBLite focuses on EzPA, an affordable entry-level protection option for individuals and SMEs that need straightforward personal accident coverage."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              "Affordable starting point for basic protection",
              "Coverage for accidental death and permanent disability",
              "Higher plans include hospital allowance support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-[#faf7ff] p-5 ring-1 ring-fuchsia-100 transition hover:-translate-y-1"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-fuchsia-600" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {ezpaPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  EzPA
                </p>
                <h3 className="mt-2 text-2xl font-bold">{plan.name}</h3>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  <p>
                    <span className="font-semibold">Death:</span> {plan.death}
                  </p>
                  <p>
                    <span className="font-semibold">Disability:</span>{" "}
                    {plan.disability}
                  </p>
                  <p>
                    <span className="font-semibold">Hospital:</span>{" "}
                    {plan.hospital}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl bg-[#111827] px-4 py-3 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    Annual contribution
                  </p>
                  <p className="mt-1 text-lg font-bold">{plan.annual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eBScale */}
      <section id="ebscale" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="eBScale"
            title="Healthcare and flexible benefits for growing teams"
            desc="eBScale groups together broader employee-focused solutions. Under this category, CareConnect and VIO Flexi Benefits are separate products designed for different workforce needs."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#eff6ff] to-white p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-600 p-3 text-white">
                <HeartPulse className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">CareConnect</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A practical bundle that combines accident protection and digital
                healthcare access.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {careConnectPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-100"
                  >
                    <h4 className="text-xl font-bold">{plan.name}</h4>
                    <p className="mt-1 text-sm font-semibold text-blue-600">
                      {plan.price}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                      {plan.features.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#f5fffb] to-white p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-emerald-600 p-3 text-white">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">VIO Flexi Benefits</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A separate product under eBScale for employers who want more
                flexible employee benefit arrangements and stronger workforce
                value.
              </p>

              <div className="mt-5 grid gap-4">
                {[
                  "Supports a more flexible employee benefits approach",
                  "Suitable for employers building a stronger staff value proposition",
                  "Can complement healthcare-focused solutions under eBScale",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] bg-white p-4 ring-1 ring-slate-100"
                  >
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EBizCover */}
      <section id="ebizcover" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="EBizCover"
            title="Essential business cover for small businesses"
            desc="EBizCover provides broad commercial risk coverage for small businesses, helping make business insurance more accessible and affordable for MSMEs."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              "Covers common commercial risks for small businesses",
              "Includes protection such as liability, property-related losses, and business interruption support",
              "Designed around practical business categories with simple package structures",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-100"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-fuchsia-600" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#fcfcfd] px-6 py-2 md:px-10">
            {ebizcoverProducts.map((item) => {
              const isOpen = openEbizcover === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-slate-200 py-6 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenEbizcover(isOpen ? "" : item.id)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <h4 className="text-xl font-bold text-slate-900 md:text-3xl">
                      [{item.number}] {item.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {item.subtitle}
                    </p>

                    <div
                      className={`mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-2xl transition ${isOpen
                          ? "bg-[#ebe9fe] text-[#4f46e5]"
                          : "bg-[#2f39f5] text-white"
                        }`}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-6">
                      <div className="grid gap-4 lg:grid-cols-3">
                        <div className="rounded-[20px] bg-white p-5 ring-1 ring-slate-100">
                          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                            Target Audience
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-700">
                            {item.audience}
                          </p>
                        </div>

                        <div className="rounded-[20px] bg-white p-5 ring-1 ring-slate-100">
                          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                            Key Highlights
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-700">
                            {item.highlights}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[20px] bg-white p-5 ring-1 ring-slate-100">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Coverage Details
                        </p>

                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {item.details.map((detail) => (
                            <div
                              key={detail}
                              className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm leading-7 text-slate-700"
                            >
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] bg-[#faf7ff] p-5 ring-1 ring-fuchsia-100">
              <h4 className="text-xl font-bold">Optional add-ons</h4>
              {/* Added Emojis here */}
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>➕ Top-up on renovation / content / stock cover</li>
                <li>👥 Group PA extension for employees</li>
                <li>🏢 Comprehensive General Liability add-on for EduCare only</li>
              </ul>
            </div>

            <div className="rounded-[24px] bg-[#fff8f1] p-5 ring-1 ring-orange-100">
              <h4 className="text-xl font-bold">General exclusions</h4>
              {/* Added Emojis here */}
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>🏛️ Acts of authorities</li>
                <li>🦠 Communicable diseases</li>
                <li>📉 Consequential loss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CyberPro */}
      <section id="cyberpro" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="CyberPro"
            title="Cyber protection that is easier to understand"
            desc="CyberPro can be positioned as a practical cybersecurity solution for SMEs, combining cyber risk awareness, support services, and structured training in a more accessible way."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white">
              <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Product overview</h3>
              <p className="mt-4 text-sm leading-8 text-white/80">
                CyberPro provides a broader cyber support direction for SMEs,
                covering prevention, detection, and corrective response, while
                helping businesses strengthen digital awareness and resilience.
              </p>

              <div className="mt-6 grid gap-3">
                {/* Added Emojis here */}
                {[
                  "🛡️ Comprehensive cyber risk support",
                  "📈 Proactive risk management direction",
                  "💪 Helps teams work with greater confidence",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-200 transition hover:-translate-y-1">
                <h4 className="text-xl font-bold">Prevention</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Staff training, business risk assessment, and certification.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-200 transition hover:-translate-y-1">
                <h4 className="text-xl font-bold">Detection</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Continuous monitoring, vulnerability scans, and expert
                  pentest support.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-200 transition hover:-translate-y-1">
                <h4 className="text-xl font-bold">Corrective</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tailored cyber insurance, faster claims direction, and crisis
                  response support.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#f8fbff] p-6 ring-1 ring-slate-100">
            <h3 className="text-2xl font-bold">Cybersecurity training tiers</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {cyberTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-xl font-bold">{tier.name}</h4>
                  <p className="mt-2 text-sm font-semibold text-fuchsia-600">
                    {tier.modules}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {tier.price}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade Credit Protection */}
      <section id="trade-credit-protection" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="Trade Credit Protection"
            title="Reduce receivable and payment default risk"
            desc="A solution direction that helps businesses strengthen confidence in receivables and manage exposure to customer payment default."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {/* Converted into Interactive Dropdown Accordions */}
            {[
              {
                title: "Supports receivable confidence",
                detail: "Safeguard your business against the risk of customers defaulting on their payments, ensuring your outstanding invoices are covered."
              },
              {
                title: "Helps reduce payment default exposure",
                detail: "Maintain a steady and predictable cash flow even if key clients fail to pay, allowing you to operate without disruption."
              },
              {
                title: "Useful for businesses managing cash flow risk",
                detail: "Confidently expand sales to new customers and markets with the backing of comprehensive risk mitigation tools."
              }
            ].map((item, index) => {
              const isOpen = activeTrade === index;
              return (
                <div
                  key={item.title}
                  onClick={() => setActiveTrade(isOpen ? null : index)}
                  className="cursor-pointer rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-100 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold leading-7 text-slate-700">{item.title}</p>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-600 border-t border-slate-200 pt-2 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Financing */}
      <section id="premium-financing" className="px-6 py-10">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10">
          <SectionTitle
            eyebrow="Premium Financing"
            title="Manage protection costs more smoothly"
            desc="A financing option that supports budget planning while helping businesses maintain important protection cover."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {/* Converted into Interactive Dropdown Accordions */}
            {[
              {
                title: "Supports smoother payment planning",
                detail: "Instead of paying the full annual premium upfront, Premium Financing allows you to spread the cost over manageable monthly installments."
              },
              {
                title: "Helps reduce budget pressure",
                detail: "Free up your capital for other essential business expenses, reducing the immediate financial strain on your operations."
              },
              {
                title: "Useful for maintaining continuity of protection",
                detail: "Ensure your insurance coverage remains active without interruption, protecting your business from unexpected risks at all times."
              }
            ].map((item, index) => {
              const isOpen = activePremium === index;
              return (
                <div
                  key={item.title}
                  onClick={() => setActivePremium(isOpen ? null : index)}
                  className="cursor-pointer rounded-[24px] bg-[#f8fafc] p-5 ring-1 ring-slate-100 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold leading-7 text-slate-700">{item.title}</p>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-600 border-t border-slate-200 pt-2 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-2 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-8 py-14 text-white shadow-xl md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Find the right solution for your business
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/90">
            From accident protection to digital healthcare and cyber resilience,
            we help businesses choose solutions that are practical, scalable,
            and easier to understand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-slate-100"
            >
              Contact Us
            </Link>
            <Link
              href="/insure"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Who We Insure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
