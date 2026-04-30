"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  Clock, 
  ChevronDown, 
  Send, 
  CheckCircle2, 
  Loader2 
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
    value: "Mon - Fri, 9:00 AM - 6:00 PM",
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

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ACTUAL API CALL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormData({ name: "", company: "", email: "", phone: "", message: "" });
        }, 5000);
      } else {
        setFormStatus('error');
        alert("Failed to send message. Please try contacting us directly via email.");
      }
    } catch (error) {
      setFormStatus('error');
      alert("A network error occurred. Please try again.");
    }
  };

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
                    <Send className="h-6 w-6 text-[#ffb5a7]" />
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
          
          <div className="reveal-elem fade-right rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-10 relative overflow-hidden">
            
            <div className={`absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ${formStatus === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="mb-6 rounded-full bg-green-100 p-4">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out to VSure. One of our specialists will review your enquiry and get back to you shortly.
              </p>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Send Us a Message
            </p>
            <h2 className="mb-8 text-4xl font-bold leading-tight">
              Tell us how we can support your business
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-gray-200 bg-[#f6f7fb] px-4 py-3 outline-none transition focus:border-[#4b1f87] focus:ring-1 focus:ring-[#4b1f87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full rounded-2xl border border-gray-200 bg-[#f6f7fb] px-4 py-3 outline-none transition focus:border-[#4b1f87] focus:ring-1 focus:ring-[#4b1f87]"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-gray-200 bg-[#f6f7fb] px-4 py-3 outline-none transition focus:border-[#4b1f87] focus:ring-1 focus:ring-[#4b1f87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-gray-200 bg-[#f6f7fb] px-4 py-3 outline-none transition focus:border-[#4b1f87] focus:ring-1 focus:ring-[#4b1f87]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs or specific concerns..."
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f7fb] px-4 py-3 outline-none transition focus:border-[#4b1f87] focus:ring-1 focus:ring-[#4b1f87] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="mt-2 flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-[#4b1f87] px-8 py-3.5 font-semibold text-white transition hover:bg-[#3b176b] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="h-4 w-4 ml-1" />
                  </>
                )}
              </button>
            </form>
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