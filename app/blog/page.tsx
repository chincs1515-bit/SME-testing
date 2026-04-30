"use client";

import { useEffect } from "react";

const posts = [
  {
    title: "VSure Wins UNDP & Generali SME Insurance Innovation Challenge",
    category: "Awards & Recognition",
    date: "November 14, 2024",
    description:
      "VSure has been officially announced as the winning solution of the SME Insurance Innovation Challenge in Malaysia, a joint initiative by UNDP and Generali to drive inclusive business resilience and practical protection for SMEs.",
    url: "https://irff.undp.org/news/undp-and-generali-announce-winning-solution-sme-insurance-innovation-challenge-malaysia",
    image: "/images/undp.png",
  },
  {
    title: "VSure and HEYDOC Health Introduce CareConnect Suite",
    category: "Partnership & Innovation",
    date: "December 9, 2025",
    description:
      "VSure Group and virtual healthcare provider HEYDOC Health have jointly launched CareConnect Suite, a digital ecosystem offering personal accident protection, hospitalisation income replacement, virtual doctor consultations, and medication fulfilment to close gaps in SME employee benefits.",
    url: "https://moneycompass.com.my/vsure-and-heydoc-health-introduce-careconnect-suite-transforming-sme-protection-and-digital-healthcare-in-malaysia/",
    image: "/images/vsurexheydoc.jpg",
  },
  {
    title: "Surging Medical Claims Highlight Need for Better SME Preparation",
    category: "Financial Resilience",
    date: "April 14, 2026",
    description:
      "Medical claims hit RM9.4 billion in 2025, accounting for 53.9% of total life insurance payouts in Malaysia, reinforcing the importance of robust employee benefits to cushion rising medical inflation.",
    url: "https://www.freemalaysiatoday.com/category/nation/2026/04/14/medical-claims-hit-rm9-4bil-up-5-3-in-2025",
    image: "/images/blog/image3.png", 
  },
  {
    title: "Digital Platforms Transform Insurance Buying in Malaysia",
    category: "Digital Transformation",
    date: "March 11, 2026",
    description:
      "A shift toward digital channels is closing the accessibility gap, with surveys showing 88% of buyers feel confident purchasing protection digitally due to improved convenience and flexible payments.",
    url: "https://www.motortrader.com.my/news/digital-platforms-transform-insurance-buying-in-malaysia/",
    image: "/images/blog/image1.jpg", 
  },
  {
    title: "Navigating Medical Inflation: The 2027 RESET Strategy",
    category: "Healthcare Protection",
    date: "January 22, 2026",
    description:
      "To address Malaysia's rising private healthcare costs, Bank Negara Malaysia is preparing a standard Base Medical and Health Insurance Plan to ensure medical protection remains affordable and transparent.",
    url: "https://www.skrine.com/insights/alerts/january-2026-1/anticipating-a-2027-reset-a-snapshot-of-the-outl",
    image: "/images/blog/image2.png", 
  }
];

export default function BlogPage() {

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
                V-Blog
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Insights for
                <span className="block text-white/90">Modern SMEs</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                Explore articles, press releases, and practical perspectives related
                to SME protection, resilience, growth, and evolving business risks.
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[24px] bg-white/95 p-8 text-[#1f1633] shadow-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Knowledge Hub
                  </p>
                  <h2 className="mb-4 text-3xl font-bold">
                    Practical reading for growing businesses
                  </h2>
                  <p className="leading-8 text-gray-600">
                    Our blog is designed to help SMEs better understand business
                    risks, continuity priorities, and protection directions in a
                    clearer and more practical way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="posts" className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="reveal-elem fade-up mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Latest Articles
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Read More from V-Blog
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="reveal-elem fade-up rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Area */}
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-5 h-44 w-full rounded-[24px] object-cover"
                  />
                ) : (
                  <div className="mb-5 h-44 rounded-[24px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe]" />
                )}

                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#f6f7fb] px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-gray-100">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mb-6 leading-7 text-gray-600 flex-grow">
                  {post.description}
                </p>

                <div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-gray-200 px-5 py-2.5 font-medium text-gray-700 transition hover:border-[#4b1f87] hover:text-[#4b1f87]"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-4 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Stay Connected
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Looking for more practical SME insights?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
            Reach out to us if you want to explore protection solutions, business
            resilience strategies, or tailored support for your industry.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="/solutions"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}