import Image from "next/image";
import {
  HeartPulse,
  ShieldPlus,
  Wallet,
  Users,
  Check,
  BadgeDollarSign,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    title: "Outpatient Care Access",
    description:
      "Digital-first access designed to make everyday healthcare support easier and more practical.",
    icon: HeartPulse,
  },
  {
    title: "Accident + Health Protection",
    description:
      "A combined approach that supports both daily healthcare needs and broader personal protection.",
    icon: ShieldPlus,
  },
  {
    title: "Affordable & Scalable",
    description:
      "Positioned for individuals, families, gig workers, and SME employees with accessibility in mind.",
    icon: Wallet,
  },
  {
    title: "Workplace Wellbeing",
    description:
      "Supports healthier teams and can contribute to productivity and wellbeing at work.",
    icon: Users,
  },
];

const audience = [
  "Individuals",
  "Families",
  "Gig Workers",
  "SME Employees",
];

const highlights = [
  "Practical digital healthcare solution",
  "Instant healthcare access",
  "Supports affordability and accessibility",
  "Includes no-claim incentive after 6 months claim-free",
];

const includedBenefits = [
  "Accidental Death – RM50,000",
  "Total Permanent Disability – RM50,000",
  "Daily Hospital Income – RM100/day (up to 30 days)",
  "Unlimited virtual GP consultations",
  "Monthly acute medication included",
  "Medication self-collection or doorstep delivery",
  "Healthcare utilisation insights",
  "Complimentary medication delivery for first-time users",
  "Free influenza vaccination after 6 claim-free months",
];

export default function CareConnectPage() {
  return (
    <div className="bg-[#f6f7fb] text-gray-900">
      {/* Hero */}
      <section className="px-6 pt-8 pb-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#06b6d4] text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-2 md:px-12 md:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                CareConnect Suite
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                A Smarter Way
                <span className="block text-white/90">
                  to Handle Everyday Healthcare
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                A digital healthcare and protection concept positioned to help
                people access outpatient care and practical health-related
                support more easily.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-[#1d4ed8] transition hover:bg-gray-100"
                >
                  Enquire Now
                </a>
                <a
                  href="#plans"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Plans
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[24px] bg-white/95 p-8 text-[#1f1633] shadow-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Core Message
                  </p>
                  <h2 className="mb-4 text-3xl font-bold">
                    Healthcare access made more practical
                  </h2>
                  <p className="leading-8 text-gray-600">
                    CareConnect Suite combines everyday digital healthcare access
                    with accident protection support in a more practical and
                    accessible structure.
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#eff6ff] p-4 ring-1 ring-sky-100">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                      Starting Price
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-900">
                      From RM20/month
                    </p>
                    <p className="text-sm text-gray-600">or RM216/year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership proof */}
      <section id="partnership" className="px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Partnership
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-tight">
                VSure working together with HeyDOC for CareConnect Suite
              </h2>
              <p className="mb-5 leading-8 text-gray-600">
                CareConnect Suite is presented as a digital healthcare and
                protection direction that combines outpatient care access with
                broader health-related support.
              </p>
              <p className="leading-8 text-gray-600">
                By showing the HeyDOC branding and step flow here, the page can
                clearly communicate that this solution direction involves
                collaboration and digital healthcare enablement.
              </p>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-[#dbeafe] via-[#ecfeff] to-[#e0f2fe] p-6">
              <div className="overflow-hidden rounded-[24px] shadow-sm">
                <Image
                  src="/images/partner/vsureXheydoc.jpg"
                  alt="Partnership photo"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              About CareConnect
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight">
              Built around everyday healthcare realities
            </h2>
            <p className="mb-5 leading-8 text-gray-600">
              CareConnect Suite highlights rising healthcare costs in Malaysia
              and frames the solution as a practical digital answer to everyday
              outpatient access and protection needs.
            </p>
            <p className="leading-8 text-gray-600">
              It combines EzPA protection with FutureK digital healthcare so
              users can access both accident-related financial support and
              everyday healthcare services in one more integrated experience.
            </p>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#dbeafe] via-[#ecfeff] to-[#e0f2fe] p-8 shadow-sm md:p-10">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Target Audience
                </p>
                <h3 className="mb-5 text-3xl font-bold">
                  Designed for broad everyday use
                </h3>
              </div>

              <div className="space-y-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/80 p-4 text-gray-700 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / plans section */}
      <section id="plans" className="px-6 py-12 scroll-mt-32">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Plans & Coverage
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              What’s included in CareConnect Suite
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              CareConnect Suite combines accident protection with digital
              healthcare access in one practical package, starting from a more
              accessible monthly or annual structure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#06b6d4] p-8 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <BadgeDollarSign className="h-6 w-6 text-white" />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Package Pricing
              </p>
              <h3 className="mb-3 text-3xl font-bold">CareConnect Suite</h3>
              <p className="text-lg text-white/90">
                Integrated accident protection + digital healthcare
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-white/70">
                    Monthly
                  </p>
                  <p className="mt-2 text-3xl font-bold">From RM20</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-white/70">
                    Annual
                  </p>
                  <p className="mt-2 text-3xl font-bold">RM216</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Included Benefits
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {includedBenefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-[#f6f7fb] p-4 ring-1 ring-gray-100"
                    >
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600" />
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] bg-[#eff6ff] p-6 ring-1 ring-sky-100">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500">
                    <ShieldPlus className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Accident Protection
                  </h3>
                  <p className="leading-7 text-gray-600">
                    Financial support through accidental death, total permanent
                    disability, and daily hospital income coverage.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#ecfeff] p-6 ring-1 ring-cyan-100">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Digital Healthcare
                  </h3>
                  <p className="leading-7 text-gray-600">
                    Everyday healthcare support through virtual GP access,
                    medication fulfilment, and better health management visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section id="highlights" className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Key Benefits
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              What CareConnect Suite emphasizes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step image showcase */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="rounded-[28px] bg-[#0f172a] p-8 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Digital Journey
              </p>
              <h2 className="mb-5 text-3xl font-bold">
                A more digital and guided healthcare experience
              </h2>
              <p className="leading-8 text-white/80">
                The step-by-step visual helps show that CareConnect is not just
                a concept, but part of a more guided digital experience tied to
                the healthcare journey.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f6f7fb] p-6 ring-1 ring-gray-100">
              <Image
                src="/images/heydoc-steps.png"
                alt="HeyDOC step by step process"
                width={900}
                height={700}
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dual logo block */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Brand Alignment
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Healthcare branding that supports the CareConnect message
            </h2>
            <p className="leading-8 text-gray-600">
              Adding the HeyDOC brand assets into this page helps reinforce that
              the solution is connected to a real healthcare ecosystem and not
              just a generic product page.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0f172a] p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="VSure logo"
                  width={420}
                  height={220}
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Image
                  src="/images/heydoc-logo-light.png"
                  alt="HeyDOC logo"
                  width={420}
                  height={220}
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights list */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Summary
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight">
            Main themes of CareConnect Suite
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f7fb] p-4 text-gray-700 ring-1 ring-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="px-6 pt-4 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] px-8 py-14 text-center text-white shadow-xl md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Contact
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Want to explore CareConnect further?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
            Reach out to us if you want to learn more about the CareConnect
            Suite direction and how it connects healthcare access with practical
            protection support.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#1d4ed8] transition hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@vsure.life"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
