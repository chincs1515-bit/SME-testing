"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  Clock, 
  ChevronDown, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

const contactCards = [
  {
    title: "Email Us",
    value: "info@vsure.life",
    description: "Reach out for enquiries, consultations, and solution discussions.",
    icon: Mail,
  },
  {
    title: "Call Us",
    value: "+60 16-210 3862",
    description: "Speak with us directly to explore business protection options.",
    icon: Phone,
  },
  {
    title: "Business Hours",
    value: "Mon - Fri, 9:00 AM - 5:00 PM",
    description: "We are available during business hours to support your enquiries.",
    icon: Clock,
  },
];

const whyReachOut = [
  {
    title: "Understand your business priorities",
    detail: "We take the time to learn about your specific industry challenges and operational risks before recommending any protection plans."
  },
  {
    title: "Explore relevant solution directions",
    detail: "Stop guessing which policy fits. We guide you through targeted solutions that directly address your SME's unique vulnerabilities."
  },
  {
    title: "Support continuity and resilience planning",
    detail: "Beyond just insurance, we help you build a comprehensive strategy to ensure your business survives and thrives through unexpected disruptions."
  }
];

export default function ContactPage() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-elem");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f6f7fb] text-gray-900 overflow-hidden">
      
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

      <section className="px-6 pt-8 pb-12">
        <div className="reveal-elem zoom-in mx-auto max-w-6xl relative overflow-hidden rounded-[32px] bg-[#1a0b35] text-white shadow-2xl">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full bg-[#ea4c89] opacity-30 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[90%] rounded-full bg-[#4b1f87] opacity-40 blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 grid gap-10 px-8 py-14 md:grid-cols-2 md:px-12 md:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                Contact Us
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Let’s Talk About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8fa3] to-[#ffc8dd]">Your Business Needs</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/80 md:text-lg">
                Whether you are exploring SME protection, employee benefits,
                cyber-related coverage, or business continuity support, our specialists are
                here to help you navigate the best path forward.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-inner">
                <div className="rounded-[24px] bg-white/10 p-8 text-white border border-white/10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-6 w-6 text-[#ffb5a7]" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold">
                    Speak with our team
                  </h2>
                  <p className="leading-7 text-white/70">
                    Tell us about your business, industry, or protection priorities,
                    and we can help you explore the most suitable solution direction 
                    with zero obligations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {contactCards.map((item, index) => (
            <div
              key={item.title}
              className="reveal-elem fade-up rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-md">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                {item.title}
              </p>
              <h3 className="mb-3 text-2xl font-semibold">{item.value}</h3>
              <p className="leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          
          {/* Direct Action Section (Replaced the Form) */}
          <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Get in Touch
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Tell us how we can support your business
            </h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Choose your preferred method to reach our risk specialists. We respond to all enquiries promptly during our standard business hours.
            </p>

            <div className="space-y-5">
              {/* WhatsApp Direct Link */}
              <a 
                href="https://wa.me/60162103862?text=Hi%20VSure%20Team,%20I%20would%20like%20to%20enquire%20about%20SME%20protection%20solutions%20for%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-6 rounded-2xl border border-gray-200 bg-white hover:border-green-500 hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-green-50 p-4 rounded-full text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-green-600 transition-colors">Chat on WhatsApp</h3>
                    <p className="text-gray-500 text-sm">Fastest response time</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-full group-hover:bg-green-50 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
              </a>

              {/* Direct Email Link */}
              <a 
                href="mailto:info@vsure.life?subject=Enquiry%20from%20VSure%20SME%20Website"
                className="group flex items-center justify-between w-full p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#4b1f87] hover:shadow-[0_8px_30px_rgba(75,31,135,0.12)] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-purple-50 p-4 rounded-full text-[#4b1f87] group-hover:bg-[#4b1f87] group-hover:text-white transition-colors duration-300">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-[#4b1f87] transition-colors">Send us an Email</h3>
                    <p className="text-gray-500 text-sm">info@vsure.life</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-full group-hover:bg-purple-50 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#4b1f87] transition-colors" />
                </div>
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
                  Why Reach Out
                </p>
                <h2 className="mb-5 text-3xl font-bold">
                  Let’s find a practical protection direction
                </h2>
                <p className="leading-8 text-gray-700">
                  Our team can help you explore solution directions based on your
                  industry, business stage, and the types of risks you are most
                  concerned about.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {whyReachOut.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveReason(activeReason === index ? null : index)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                      activeReason === index 
                        ? "bg-white shadow-md ring-2 ring-purple-400" 
                        : "bg-white/80 backdrop-blur hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-gray-900">
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`h-5 w-5 shrink-0 text-purple-600 transition-transform duration-300 ${
                          activeReason === index ? "rotate-180" : ""
                        }`} 
                      />
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-300 ${
                        activeReason === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
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

      <section className="px-6 pt-4 pb-16">
        <div className="reveal-elem fade-up mx-auto max-w-6xl rounded-[32px] bg-[#111827] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Next Step
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Ready to explore the right protection approach?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/80">
            Get in touch with us and start a conversation about protecting your
            business with more clarity, flexibility, and confidence.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/solutions"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#111827] transition hover:bg-gray-200"
            >
              View Solutions
            </a>
            <a
              href="/insure"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Who We Insure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}