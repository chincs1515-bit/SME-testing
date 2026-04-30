"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Expanded industries data with emojis and detailed descriptions for the dropdowns
const industries = [
  {
    id: "retail",
    title: "Retail & Wholesale",
    description:
      "Protection support for businesses managing inventory, customer traffic, supply chain dependency, and daily operational risks.",
    points: [
      { emoji: "📦", title: "Stock loss & property disruption", detail: "Coverage for damaged or stolen inventory, ensuring your business recovers quickly from physical losses." },
      { emoji: "🤝", title: "Customer liability exposure", detail: "Protection against claims if a customer is accidentally injured while visiting your retail premises." },
      { emoji: "🛑", title: "Business interruption risk", detail: "Financial support to help cover fixed costs and keep your business running if unexpected events force a temporary closure." },
      { emoji: "💸", title: "Cash flow pressure from delays", detail: "Safeguard against unpaid invoices from B2B wholesale clients to maintain steady, predictable cash flow." },
    ],
    tag: "Retail",
    image: "/images/insure/Retail-Wholesale.jpg",
  },
  {
    id: "fnb",
    title: "Food & Beverage (F&B)",
    description:
      "Designed for businesses balancing food safety, service operations, equipment dependence, and workforce stability.",
    points: [
      { emoji: "🔥", title: "Kitchen fire & equipment failure", detail: "Coverage for fire damage and sudden breakdowns of essential commercial kitchen appliances like freezers and ovens." },
      { emoji: "🍲", title: "Food contamination & liability", detail: "Protection against claims arising from accidental foodborne illnesses or cross-contamination issues." },
      { emoji: "👥", title: "High staff turnover", detail: "Flexible group accident and welfare benefits to help you attract and retain reliable kitchen and service staff." },
      { emoji: "⏳", title: "Disruption during peak periods", detail: "Compensation for lost revenue if your restaurant or cafe cannot operate during critical high-traffic times." },
    ],
    tag: "F&B",
    image: "/images/insure/food-beverage.jpg",
  },
  {
    id: "professional",
    title: "Professional Services",
    description:
      "Supports consultants, agencies, and service firms that depend on expertise, trust, and uninterrupted delivery.",
    points: [
      { emoji: "⚖️", title: "Professional liability concerns", detail: "Defense and settlement coverage against claims of negligence or errors in your professional advice or services." },
      { emoji: "💻", title: "Client data & cyber exposure", detail: "Financial and technical support if sensitive client information is compromised in a cyber attack or data breach." },
      { emoji: "🏢", title: "Service interruption risk", detail: "Coverage for office disruptions that prevent your team from delivering critical services and meeting client deadlines." },
      { emoji: "📢", title: "Reputation-related impact", detail: "Public relations and crisis management support to help rebuild trust and mitigate brand damage after an incident." },
    ],
    tag: "Services",
    image: "/images/insure/professional-services.jpg",
  },
  {
    id: "logistics",
    title: "Logistics & Transportation",
    description:
      "For businesses handling cargo, fleet operations, delivery schedules, and cross-location operational risks.",
    points: [
      { emoji: "🚚", title: "Cargo loss or damage", detail: "Insurance for goods in transit, protecting against accidents, theft, or damage while out for delivery." },
      { emoji: "💥", title: "Vehicle accident exposure", detail: "Comprehensive coverage for your commercial fleet and drivers in the event of road accidents." },
      { emoji: "⏱️", title: "Operational delay & disruption", detail: "Support for business continuity when severe supply chain bottlenecks or warehouse issues halt your operations." },
      { emoji: "💳", title: "Payment delays affecting cash flow", detail: "Trade credit protection to insulate your logistics firm from clients who default on major shipping payments." },
    ],
    tag: "Logistics",
    image: "/images/insure/transport.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical Services",
    description:
      "Relevant for clinics and healthcare operators managing patient trust, service continuity, and data sensitivity.",
    points: [
      { emoji: "⚕️", title: "Medical liability risk", detail: "Malpractice and professional indemnity coverage tailored specifically for clinics and medical practitioners." },
      { emoji: "🔐", title: "Patient data exposure", detail: "Cyber protection against breaches of highly sensitive patient medical records and confidential personal data." },
      { emoji: "🔬", title: "Equipment-related disruption", detail: "Coverage for expensive diagnostic and medical equipment against sudden breakdown, theft, or physical damage." },
      { emoji: "🏥", title: "Operational continuity pressure", detail: "Financial safety nets to ensure your clinic can continue providing necessary care even after a major physical disruption." },
    ],
    tag: "Healthcare",
    image: "/images/insure/healthcare.jpg",
  },
  {
    id: "education",
    title: "Education & Training",
    description:
      "Useful for institutions that need to protect students, staff, learning continuity, and internal records.",
    points: [
      { emoji: "🎒", title: "Student safety incidents", detail: "Liability and accident protection covering students while they are on campus or participating in authorized activities." },
      { emoji: "🛡️", title: "Data privacy concerns", detail: "Safeguards against cyber threats targeting student records, financial data, and institutional research." },
      { emoji: "🏫", title: "Facility-related interruptions", detail: "Property coverage for classrooms, labs, and administrative buildings against fire, flood, or vandalism." },
      { emoji: "📚", title: "Service continuity challenges", detail: "Support to help institutions quickly transition to alternative teaching methods if the campus becomes inaccessible." },
    ],
    tag: "Education",
    image: "/images/insure/education.jpg",
  },
  {
    id: "automotive",
    title: "Automotive & Transport",
    description:
      "For workshops, transport operators, and automotive businesses that rely on assets, labor, and service reliability.",
    points: [
      { emoji: "🛠️", title: "Workshop accident risk", detail: "Liability and employee injury coverage tailored for mechanics operating in high-risk workshop environments." },
      { emoji: "🚗", title: "Vehicle & equipment damage", detail: "Protection for customer vehicles under your care, as well as expensive diagnostic and repair machinery." },
      { emoji: "🔧", title: "Liability from repair issues", detail: "Defense against claims stemming from faulty repairs, defective parts, or accidents occurring post-service." },
      { emoji: "📉", title: "Revenue pressure from interruptions", detail: "Business interruption coverage to help pay fixed costs and salaries if your workshop is forced to shut down temporarily." },
    ],
    tag: "Automotive",
    image: "/images/insure/automobile.jpg",
  },
  {
    id: "agriculture",
    title: "Agriculture & Agro-Based",
    description:
      "Supports businesses exposed to climate variability, machinery dependence, and operational uncertainty.",
    points: [
      { emoji: "⛈️", title: "Climate-related disruption", detail: "Protection against severe weather events, floods, or natural disasters that damage crops, livestock, or facilities." },
      { emoji: "🚜", title: "Machinery breakdown", detail: "Coverage for tractors, harvesters, and specialized processing equipment essential to your daily agricultural operations." },
      { emoji: "📊", title: "Revenue volatility", detail: "Financial stabilizing tools to protect your agribusiness against sudden market shifts or unexpected yield losses." },
      { emoji: "🌾", title: "Supply & operational uncertainty", detail: "Support across the agricultural supply chain to ensure processing and distribution can continue smoothly during crises." },
    ],
    tag: "Agro",
    image: "/images/insure/agriculture.jpg",
  },
];

export default function WhoWeInsurePage() {
  // State to track the open accordion in each industry section
  const [activePoints, setActivePoints] = useState<Record<string, number | null>>({});

  const togglePoint = (industryId: string, pointIndex: number) => {
    setActivePoints((prev) => ({
      ...prev,
      [industryId]: prev[industryId] === pointIndex ? null : pointIndex,
    }));
  };

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
      
      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
                Who We Insure
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Protection Across
                <span className="block text-white/90">Different Industries</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                Different sectors face different business risks. VSure SME Pro
                supports SMEs with practical protection directions shaped around
                industry realities, continuity needs, and business resilience.
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[24px] bg-white/95 p-8 text-[#1f1633] shadow-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Industry Focus
                  </p>
                  <h2 className="mb-4 text-3xl font-bold">
                    Built around real operating challenges
                  </h2>
                  <p className="leading-8 text-gray-600">
                    From retail to healthcare, each industry has unique
                    exposures. Our goal is to help businesses explore protection
                    approaches that better match those realities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="px-6 py-4">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[28px] bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {industries.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-gray-200 bg-[#f6f7fb] px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-[#4b1f87] hover:text-[#4b1f87]"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-12">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
            Why This Matters
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight">
            Different industries, different risk priorities
          </h2>
          <p className="max-w-4xl leading-8 text-gray-600">
            SMEs do not face risk in the same way. A retail business, a clinic,
            and a logistics company all operate differently. Understanding those
            differences helps create a more relevant and practical protection
            direction.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {industries.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="reveal-elem fade-up grid gap-8 rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10"
            >
              <div
                className="relative overflow-hidden rounded-[28px] p-8 text-white min-h-[360px] flex flex-col justify-end shadow-md"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#27114a]/80 via-[#4b1f87]/70 to-[#ea4c89]/60" />
                <div className="relative z-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                    {item.tag}
                  </p>
                  <h2 className="mb-4 text-3xl font-bold">{item.title}</h2>
                  <p className="leading-8 text-white/90">{item.description}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Common Risk Themes
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Interactive Dropdown Points */}
                    {item.points.map((point, index) => {
                      const isOpen = activePoints[item.id] === index;
                      
                      return (
                        <div
                          key={index}
                          onClick={() => togglePoint(item.id, index)}
                          className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                            isOpen 
                              ? "bg-white shadow-md ring-2 ring-purple-400" 
                              : "bg-[#f8fafc] ring-1 ring-slate-200 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between font-semibold text-gray-900">
                            <div className="flex items-start gap-2 pr-2">
                              <span className="text-base leading-none pt-0.5">{point.emoji}</span>
                              <span className="text-sm leading-snug">{point.title}</span>
                            </div>
                            <ChevronDown 
                              className={`h-4 w-4 shrink-0 text-purple-600 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`} 
                            />
                          </div>
                          
                          <div 
                            className={`grid transition-all duration-300 ${
                              isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-xs text-gray-600 leading-relaxed border-t border-purple-100 pt-3">
                                {point.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="/contact"
                    className="inline-block rounded-full bg-[#4b1f87] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#3b176b]"
                  >
                    Enquire for This Industry
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-4 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-[#111827] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Next Step
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Not sure where your business fits?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/80">
            Reach out to us and we can help you explore the most relevant
            protection direction based on your industry and business priorities.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#111827] transition hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="/solutions"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}