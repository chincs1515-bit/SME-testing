"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Building2, 
  BadgeCheck, 
  TrendingUp, 
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
  Globe,
  ArrowRight,
  Quote
} from "lucide-react";

const values = [
  {
    title: "SME-Focused",
    description:
      "We design protection solutions around the real operating challenges and growth realities faced by SMEs.",
    icon: Building2,
  },
  {
    title: "Practical",
    description:
      "Our approach emphasizes clear, relevant, and usable protection rather than unnecessary complexity.",
    icon: BadgeCheck,
  },
  {
    title: "Forward-Looking",
    description:
      "We help businesses prepare for evolving risks, including financial pressure, workforce challenges, and digital exposure.",
    icon: TrendingUp,
  },
];

const highlights = [
  {
    title: "Built for modern SME needs",
    detail: "Our solutions are specifically tailored to address the contemporary challenges and operational realities that SMEs face today, ensuring maximum relevance and effectiveness."
  },
  {
    title: "Flexible and scalable approach",
    detail: "As your business grows and evolves, our protection plans adapt. Scale your coverage up or down based on your current size, budget constraints, and emerging risk profile."
  },
  {
    title: "Designed around real business risks",
    detail: "We bypass generic, one-size-fits-all coverage to focus entirely on the specific threats that can disrupt your daily operations, from supply chain issues to modern digital vulnerabilities."
  },
  {
    title: "Supports continuity and resilience",
    detail: "Our ultimate goal is to keep your doors open and your team secure, providing the financial safety net needed to bounce back quickly and confidently from unforeseen events."
  }
];

// Client Testimonials Data
const testimonials = [
  {
    quote: "We've had a great experience working with VSure. VSure have been consistently helpful, responsive, and knowledgeable, always going the extra mile to make sure we understand our options and feel confident in our decisions. We truly appreciate the outstanding service!",
    name: "Mimi Sulaiman",
    title: "OM-AT JMB",
  },
  {
    quote: "Our company has a great experience working with you on insurance renewal. Meybo who represents VSURE to assist us has performed a great job in answering our questions, helping us to solve our problems & reply to our message efficiently. It is nice to work with someone who is very helpful.",
    name: "Chen Pinn Shiuan",
    title: "Account cum Finance Executive, Deep Sea MR",
  },
  {
    quote: "I’ve had a pleasant experience with the service provided by VSure Group, especially Meybo Yong. The team was responsive and helpful throughout. I truly appreciate the support!",
    name: "Nurfatin Zolkarnain",
    title: "Human Resource Manager, Richard Wee Chambers",
  }
];

export default function AboutPage() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const toggleHighlight = (index: number) => {
    setActiveHighlight(activeHighlight === index ? null : index);
  };

  // High-End Multiple Scroll Entrance Animation Effect
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
      
      {/* Dynamic CSS styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .reveal-elem {
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        
        .reveal-elem.fade-up {
          transform: translateY(80px);
        }
        
        .reveal-elem.fade-left {
          transform: translateX(80px);
        }
        
        .reveal-elem.fade-right {
          transform: translateX(-80px);
        }
        
        .reveal-elem.zoom-in {
          transform: translateY(40px) scale(0.9);
        }

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
                About VSure SME Pro
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Protection Built
                <span className="block text-white/90">Around SME Realities</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                Learn how VSure SME Pro supports businesses with practical,
                scalable, and more relevant protection solutions designed for
                continuity, confidence, and long-term resilience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/solutions"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-[#4b1f87] transition hover:bg-gray-100"
                >
                  Explore Solutions
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[24px] bg-white/95 p-8 text-[#1f1633] shadow-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Our Direction
                  </p>
                  <h2 className="mb-4 text-3xl font-bold">
                    Helping SMEs protect what matters most
                  </h2>
                  <p className="leading-8 text-gray-600">
                    We aim to make business protection more accessible, more
                    understandable, and more aligned with the risks SMEs face in
                    a changing business environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm md:p-10 flex flex-col">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Who We Are
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight">
              A smarter way to approach SME protection
            </h2>
            <p className="mb-5 leading-8 text-gray-600">
              VSure SME Pro is designed to support small and medium-sized
              enterprises with business protection solutions that are easier to
              understand, easier to access, and easier to scale.
            </p>
            <p className="leading-8 text-gray-600 flex-grow">
              We focus on helping businesses manage risk more confidently
              through practical protection approaches that support continuity,
              resilience, and sustainable growth.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="/insure"
                className="group inline-flex items-center gap-2 font-semibold text-[#4b1f87] transition hover:text-[#ea4c89]"
              >
                See Who We Insure
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
                  Why SME Pro
                </p>
                <h3 className="mb-5 text-3xl font-bold">
                  Protection built with business realities in mind
                </h3>
              </div>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => toggleHighlight(index)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                      activeHighlight === index 
                        ? "bg-white shadow-md ring-2 ring-purple-400" 
                        : "bg-white/80 backdrop-blur hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-gray-900">
                      {item.title}
                      <ChevronDown 
                        className={`h-5 w-5 text-purple-600 transition-transform duration-300 ${
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

      {/* Values */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="reveal-elem fade-up mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Clear, practical, and forward-looking protection
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="reveal-elem fade-up rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-md">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl ">
          <div className="reveal-elem fade-up mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Client Stories
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight">
              What our clients say about us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="reveal-elem fade-up flex flex-col rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f7fb] text-[#4b1f87]">
                  <Quote className="h-6 w-6" />
                </div>
                <p className="mb-8 flex-grow leading-8 text-black-600 italic">
                  "{item.quote}"
                </p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="mt-1 text-sm font-medium text-purple-600">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split section */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm md:p-10 flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Our Mission
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Make business protection more accessible for SMEs
            </h2>
            <p className="leading-8 text-gray-600">
              We believe business protection should not feel complicated or
              distant. Our mission is to support SMEs with solutions that are
              more understandable, more relevant, and more aligned with how
              businesses actually operate.
            </p>
          </div>

          <div 
            className="reveal-elem fade-left rounded-[32px] bg-[#111827] p-8 text-white shadow-sm md:p-10 flex flex-col"
            style={{ transitionDelay: "150ms" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Our Vision
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Empower resilient businesses that grow with confidence
            </h2>
            <p className="leading-8 text-white/75 flex-grow">
              Our vision is to help SMEs build stronger foundations for growth,
              continuity, and confidence by taking a more proactive and
              business-focused approach to protection.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="/solutions"
                className="inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-pink-50 hover:text-[#ea4c89]"
              >
                Discover Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 py-12">
        <div className="reveal-elem zoom-in mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#fdf2f8] to-[#dbeafe] p-8 shadow-sm md:p-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
            Stay Updated
          </p>
          <h2 className="mb-10 text-3xl font-bold leading-tight">
            Follow us on Social Media
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="https://www.facebook.com/vsure.life" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-[#4b1f87] group-hover:text-white group-hover:shadow-md">
                <Facebook className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">Facebook</span>
            </a>

            <a href="https://www.instagram.com/vsure.life/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-md">
                <Instagram className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">Instagram</span>
            </a>

            <a href="https://www.linkedin.com/company/vsuredotcom/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-[#0077b5] group-hover:text-white group-hover:shadow-md">
                <Linkedin className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">LinkedIn</span>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=60162103862&text=Hi%2C+I+would+like+to+know+more&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-md">
                <MessageCircle className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">WhatsApp</span>
            </a>

            <a href="https://www.youtube.com/@vsure927" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-[#FF0000] group-hover:text-white group-hover:shadow-md">
                <Youtube className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">YouTube</span>
            </a>

            <a href="https://vsure.life/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f7fb] text-purple-700 transition group-hover:bg-[#4b1f87] group-hover:text-white group-hover:shadow-md">
                <Globe className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-600">Website</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-4 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Let’s Connect
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Explore a more practical protection approach
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
            Reach out to learn how VSure SME Pro can support your business with
            solutions built around real SME needs and long-term resilience.
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