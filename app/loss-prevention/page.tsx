"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldAlert, 
  Flame, 
  Droplets,
  Laptop, 
  ArrowRight, 
  Activity,
  Building2,
  ShieldCheck,
  MapPin,
  Briefcase,
  Truck,
  Stethoscope,
  GraduationCap,
  Wrench,
  Tractor,
  Users,
  Gauge,
  Package,
  Scale,
  ExternalLink,
  Download
} from "lucide-react";

// Malaysian States for Risk Calculation
const malaysianStates = [
  "Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka", 
  "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Putrajaya", 
  "Sabah", "Sarawak", "Selangor", "Terengganu"
];

// Helper component for external links (Pointing to general Legislation directories)
const LawLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="font-bold text-purple-700 hover:text-purple-900 hover:underline inline-flex items-center gap-1 transition-colors"
    title="View official statutory source"
  >
    {children} <ExternalLink className="h-3 w-3" />
  </a>
);

// Comprehensive Statutory Framework Data with General Directory Links
const industryData: Record<string, { title: string, icon: any, hazards: any[] }> = {
  "Retail & Wholesale": {
    title: "Retail & Wholesale",
    icon: Building2,
    hazards: [
      {
        id: "fire",
        title: "Property Risk & Warehouse Fires",
        icon: Flame,
        product: "EBizCover (Fire Protection)",
        productDesc: "Warehouses and retail floors hold high concentrations of physical inventory. This plan covers the loss of stock, shop fittings, and structural damage in the event of a fire.",
        riskPoints: [
          "High volume of highly flammable cardboard packaging and plastic wrap in storage.",
          "Overloaded electrical sockets powering display lighting and signage.",
          "Poorly ventilated stockrooms leading to heat buildup and spontaneous combustion."
        ],
        preventions: [
          <span key="1">Comply with the <LawLink href="https://www.rcrc-resilience-southeastasia.org/wp-content/uploads/2017/12/1998_fire_services_act_341.pdf">Fire Services Act 1988</LawLink> by maintaining an active Fire Certificate (FC) from BOMBA for designated premises.</span>,
          <span key="2">Ensure all fire extinguishers are inspected annually by an e-Premis registered contractor, as mandated by the <LawLink href="https://jkt.kpkt.gov.my/wp-content/d/sites/default/files/2019-06/1a.%20Uniform%20Building%20By-Laws%201984-K.GN_.5178_1984.pdf">UBBL 1984</LawLink>.</span>,
          <span key="3">Maintain strict clearance between stock and electrical panels to prevent code violations.</span>
        ]
      },
      {
        id: "cyber",
        title: "Customer Data Breach",
        icon: Laptop,
        product: "VSure CyberPro",
        productDesc: "Retailers are prime targets for hackers. This safeguards your business against the financial and reputational fallout of compromised customer payment data.",
        riskPoints: [
          "Storing large databases of customer names, addresses, and purchase histories.",
          "E-commerce platforms are high-value targets for digital payment interception.",
          "Staff accidentally downloading malware via fake vendor emails."
        ],
        preventions: [
          <span key="1">Enforce strict data encryption to comply with the Security Principle of the <LawLink href="https://www.investmalaysia.gov.my/media/3x4fsqum/personal-data-protection-act-2010.pdf">Personal Data Protection Act 2010 (PDPA)</LawLink>.</span>,
          <span key="2">Implement Multi-Factor Authentication (MFA) for staff system logins to prevent unauthorized data access.</span>,
          <span key="3">Conduct Vulnerability Assessment and Penetration Testing (VAPT) per <LawLink href="https://www.cybersecurity.my/">CyberSecurity Malaysia</LawLink> guidelines.</span>
        ]
      },
      {
        id: "flood",
        title: "Inventory Water Damage",
        icon: Droplets,
        product: "EBizCover (Special Perils Extension)",
        productDesc: "Standard fire policies do not cover floods. This extension provides vital compensation for ruined stock and damaged store fixtures caused by sudden water ingress.",
        riskPoints: [
          "Ground-level shops are highly exposed to sudden flash flooding.",
          "Water damage instantly ruins paper goods, electronics, and fashion inventory.",
          "Roof leaks during monsoons causing slow, unnoticed damage to stockrooms."
        ],
        preventions: [
          <span key="1">Consult <LawLink href="https://www.water.gov.my/">JPS (Jabatan Pengairan dan Saliran)</LawLink> flood maps and elevate sensitive stock above historical flood lines.</span>,
          <span key="2">Identify and seal potential water entry points around the premises before monsoon seasons.</span>,
          <span key="3">Establish an emergency response plan for severe weather warnings issued by MET Malaysia.</span>
        ]
      }
    ]
  },
  "Food & Beverage (F&B)": {
    title: "Food & Beverage (F&B)",
    icon: Building2,
    hazards: [
      {
        id: "fire",
        title: "Fire & Explosion (Kitchens & Gas)",
        icon: Flame,
        product: "EBizCover (Fire Protection)",
        productDesc: "Commercial kitchens are the highest risk for sudden fires. This protects your physical assets, covering building renovations and expensive kitchen equipment.",
        riskPoints: [
          "Commercial kitchens use high-powered stoves, deep fryers, and high-pressure gas lines.",
          "Accumulation of grease in exhaust hoods is highly flammable and hard to detect.",
          "Electrical faults in commercial refrigerators can spark overnight fires."
        ],
        preventions: [
          <span key="1">Comply with <LawLink href="https://www.rcrc-resilience-southeastasia.org/wp-content/uploads/2017/12/1998_fire_services_act_341.pdf">BOMBA regulations</LawLink> by hiring certified contractors to clean exhaust hoods and ducts regularly.</span>,
          <span key="2">Ensure commercial gas piping is inspected and certified by <LawLink href="https://www.st.gov.my/">Energy Commission (Suruhanjaya Tenaga)</LawLink> competent persons.</span>,
          <span key="3">Maintain clear access to BOMBA-approved Class F (Cooking Oil) fire extinguishers.</span>
        ]
      },
      {
        id: "machinery",
        title: "Workforce Injury & Equipment Hazards",
        icon: Users,
        product: "EBizCover (Public Liability) & eBLite",
        productDesc: "Protects against liability claims from injured customers, and provides accident coverage for your kitchen staff.",
        riskPoints: [
          "Staff slipping on wet floors or suffering severe burns in crowded kitchens.",
          "Customers experiencing food poisoning leading to public liability claims.",
          "Improper use of heavy commercial mixers or meat slicers."
        ],
        preventions: [
          <span key="1">Mandate HIRARC audits for kitchen zones, complying with the <LawLink href="https://dosh.gov.my/wp-content/uploads/2025/01/Occupational-Safety-and-Health-Act-1994-Act-514_Reprint-Version-1.6.2024_English.pdf">Occupational Safety and Health Act (OSHA 1994)</LawLink>.</span>,
          <span key="2">Adhere strictly to <LawLink href="https://faolex.fao.org/docs/pdf/mal91581.pdf">MOH Food Hygiene Regulations</LawLink>, ensuring all staff have valid Typhoid shots.</span>,
          <span key="3">Provide mandatory slip-resistant footwear and PPE for all back-of-house staff.</span>
        ]
      }
    ]
  },
  "Professional Services": {
    title: "Professional Services",
    icon: Briefcase,
    hazards: [
      {
        id: "cyber",
        title: "Client Data Breach & Ransomware",
        icon: Laptop,
        product: "VSure CyberPro",
        productDesc: "Firms deal with highly confidential client files. A breach can result in massive legal liability. This covers IT forensics and legal fallout.",
        riskPoints: [
          "Law firms, accountants, and consultants store highly sensitive client financial and legal data.",
          "Employees accessing company servers remotely via unsecured home networks.",
          "Phishing attacks targeting executives to authorize fraudulent wire transfers."
        ],
        preventions: [
          <span key="1">Strictly comply with the <LawLink href="https://www.pdp.gov.my/jpdpv2/laws-of-malaysia-pdpa/">Personal Data Protection Act 2010 (PDPA)</LawLink> by encrypting all client communications.</span>,
          <span key="2">Enforce zero-trust network policies and mandatory VPNs for remote access.</span>,
          <span key="3">Register a Data Protection Officer (DPO) and conduct bi-annual cybersecurity training for all staff.</span>
        ]
      },
      {
        id: "liability",
        title: "Public & Professional Liability",
        icon: ShieldAlert,
        product: "EBizCover (Public Liability)",
        productDesc: "Protects against lawsuits claiming injury from clients visiting your office, or third-party property damage.",
        riskPoints: [
          "Clients or visitors slipping and falling on wet floors inside the office premises.",
          "Errors or omissions in provided advice leading to client financial loss."
        ],
        preventions: [
          <span key="1">Maintain a valid Business Premise License from the local council (PBT) per the <LawLink href="https://www.lom.agc.gov.my/">Local Government Act 1976</LawLink>.</span>,
          <span key="2">Fulfill statutory duties by providing clear warning signs for wet floors or hazards within your premises.</span>,
          <span key="3">Ensure clear legal disclaimers and scope of work limits are established in all client contracts.</span>
        ]
      }
    ]
  },
  "Logistics & Transportation": {
    title: "Logistics & Transportation",
    icon: Truck,
    hazards: [
      {
        id: "transit",
        title: "Goods in Transit & Fleet Risks",
        icon: Package,
        product: "Marine & Transit Insurance",
        productDesc: "Logistics companies are responsible for client goods. This covers the loss, theft, or damage of cargo while in transit.",
        riskPoints: [
          "Vehicles involved in road accidents causing total destruction of client cargo.",
          "High risk of cargo theft or hijacking during long-haul overnight routes.",
          "Improper securing of loads leading to breakage during sudden braking."
        ],
        preventions: [
          <span key="1">Strictly adhere to <LawLink href="https://www.apad.gov.my/index.php/sumber-maklumat1/garis-panduan/garis-panduan-kenderaan-barangan?category[0]=18&category_children=1">APAD (Land Public Transport Agency)</LawLink> guidelines on vehicle maintenance and load limits.</span>,
          <span key="2">Ensure all commercial drivers possess valid GDL (Goods Driving License) and undergo regular health screenings.</span>,
          <span key="3">Utilize GPS tracking and telematics for real-time monitoring of high-value cargo routes.</span>
        ]
      },
      {
        id: "workforce",
        title: "Manual Labor & Machinery Injuries",
        icon: Users,
        product: "EBizCover (Public Liability) & eBLite",
        productDesc: "Protects your company from third-party warehouse claims and provides essential accident coverage for drivers and staff.",
        riskPoints: [
          "Forklift accidents causing injury to staff, vendors, or visitors.",
          "Warehouse staff sustaining back injuries from improper heavy lifting.",
          "Pallets collapsing in staging areas posing a fatal risk."
        ],
        preventions: [
          <span key="1">Ensure all heavy lifting equipment hold valid PMA certificates from DOSH per the <LawLink href="https://intranet.dosh.gov.my/competent-person-form/occupational-health/regulation-2-1/regulations/repealed-regulations/regulations-under-factories-and-machinery-act-1967-act-139">Factories and Machinery Act (FMA 1967)</LawLink>.</span>,
          <span key="2">Conduct mandatory Safety & Health Committee meetings per <LawLink href="https://dosh.gov.my/wp-content/uploads/2025/01/Occupational-Safety-and-Health-Act-1994-Act-514_Reprint-Version-1.6.2024_English.pdf">OSHA 1994</LawLink> requirements for workplaces with {'>'}40 employees.</span>,
          <span key="3">Provide necessary ergonomic supports and enforce mandatory rest breaks for long-haul drivers.</span>
        ]
      }
    ]
  },
  "Healthcare & Medical Services": {
    title: "Healthcare & Medical Services",
    icon: Stethoscope,
    hazards: [
      {
        id: "cyber",
        title: "Patient Data (PDPA) Breach",
        icon: Laptop,
        product: "VSure CyberPro",
        productDesc: "Medical records are highly targeted. This provides vital protection against cyber extortion and liability from data breaches.",
        riskPoints: [
          "Ransomware attacks locking doctors out of critical patient medical history.",
          "Unauthorized staff accessing and leaking confidential patient records.",
          "Unsecured medical IoT devices acting as entry points for hackers."
        ],
        preventions: [
          <span key="1">Comply with <LawLink href="https://www.investmalaysia.gov.my/media/3x4fsqum/personal-data-protection-act-2010.pdf">PDPA 2010</LawLink> by ensuring medical software utilizes end-to-end encryption for patient records.</span>,
          <span key="2">Restrict physical and digital access to patient files based strictly on authorized staff roles.</span>,
          <span key="3">Regularly audit digital systems for vulnerabilities or unauthorized access.</span>
        ]
      },
      {
        id: "machinery",
        title: "Equipment Breakdown & Fire",
        icon: Flame,
        product: "EBizCover (Fire & Machinery Breakdown)",
        productDesc: "Medical equipment (X-rays, lab machines) is incredibly expensive. This covers them against fire or sudden electrical breakdown.",
        riskPoints: [
          "Overheating of high-voltage imaging machines (X-rays, MRIs).",
          "Improper storage of highly flammable medical oxygen or sterilization chemicals.",
          "Sudden power surges destroying sensitive diagnostic computers."
        ],
        preventions: [
          <span key="1">Secure PMA certificates from DOSH for any pressurized equipment (e.g., autoclaves) as required by the <LawLink href="https://intranet.dosh.gov.my/competent-person-form/occupational-health/regulation-2-1/regulations/repealed-regulations/regulations-under-factories-and-machinery-act-1967-act-139">FMA 1967</LawLink>.</span>,
          <span key="2">Store oxygen tanks and volatile chemicals in dedicated, fire-rated zones approved by BOMBA.</span>,
          <span key="3">Strictly maintain and calibrate medical electrical equipment according to manufacturer guidelines.</span>
        ]
      }
    ]
  },
  "Education & Training": {
    title: "Education & Training",
    icon: GraduationCap,
    hazards: [
      {
        id: "liability",
        title: "Student Safety & Campus Liability",
        icon: ShieldAlert,
        product: "EBizCover (Public Liability)",
        productDesc: "Institutions owe a high duty of care. This protects against lawsuits if a student, parent, or visitor is injured on campus premises.",
        riskPoints: [
          "Students getting injured on poorly maintained playground or sports equipment.",
          "Slips and falls in high-traffic corridors or cafeteria areas.",
          "Accidents occurring during off-campus excursions or science lab experiments."
        ],
        preventions: [
          <span key="1">Comply with <LawLink href="https://www.moe.gov.my/">Ministry of Education (MOE)</LawLink> safety guidelines for facility maintenance and student-to-teacher supervision ratios.</span>,
          <span key="2">Fulfill statutory duties by regularly inspecting sports facilities and laboratories.</span>,
          <span key="3">Maintain clear protocols and trained staff for medical emergencies and first aid.</span>
        ]
      },
      {
        id: "fire",
        title: "Campus Fire & Property Risk",
        icon: Flame,
        product: "EBizCover (Fire Protection)",
        productDesc: "Protects classrooms, libraries, and administrative buildings against total loss from fire, lightning, and explosion.",
        riskPoints: [
          "Chemistry labs housing highly combustible materials and Bunsen burners.",
          "Overloaded power strips in older dormitories or computer labs.",
          "Arson or accidental fires starting in secluded campus storage areas."
        ],
        preventions: [
          <span key="1">Comply with the <LawLink href="https://www.rcrc-resilience-southeastasia.org/wp-content/uploads/2017/12/1998_fire_services_act_341.pdf">Fire Services Act 1988</LawLink> by conducting mandatory, documented fire drills involving all staff and students.</span>,
          <span key="2">Ensure science labs follow strict protocols for the storage of scheduled wastes and combustible materials (<LawLink href="https://www.doe.gov.my/en/enforcement-management/guidelines-for-industries/">DOE guidelines</LawLink>).</span>,
          <span key="3">Keep fire exits clear and ensure alarms are hard-wired and certified by BOMBA.</span>
        ]
      }
    ]
  },
  "Automotive & Transport": {
    title: "Automotive & Transport",
    icon: Wrench,
    hazards: [
      {
        id: "fire",
        title: "Chemical & Fire Hazards",
        icon: Flame,
        product: "EBizCover (Fire Protection)",
        productDesc: "Workshops are naturally high-risk environments. This covers your premises, specialized tools, and customer vehicles on-site in case of a fire.",
        riskPoints: [
          "Sparks from welding or grinding igniting nearby oil spills or rags.",
          "Improper storage of highly flammable paints, thinners, and lubricants.",
          "Electrical shorts in customer vehicles causing overnight garage fires."
        ],
        preventions: [
          <span key="1">Store oils and solvents in fire-resistant cabinets, complying with BOMBA and <LawLink href="https://www.doe.gov.my/en/utama-english/">Department of Environment (DOE)</LawLink> Scheduled Waste regulations.</span>,
          <span key="2">Ensure proper mechanical ventilation to prevent the buildup of flammable fumes.</span>,
          <span key="3">Dispose of oily rags and hazardous waste via DOE-licensed contractors.</span>
        ]
      },
      {
        id: "machinery",
        title: "Machinery Breakdown & Liability",
        icon: Wrench,
        product: "EBizCover (Machinery Breakdown & Public Liability)",
        productDesc: "Compensates for sudden damage to hoists and compressors, and protects against legal claims if a customer is injured in the workshop.",
        riskPoints: [
          "Hydraulic failure in vehicle lifts dropping cars or becoming stuck.",
          "Air compressor motors burning out due to continuous heavy usage.",
          "Customers wandering into the service bay and slipping on oil."
        ],
        preventions: [
          <span key="1">Ensure all hydraulic vehicle lifts possess valid PMA (Sijil Perakuan Kelayakan) from <LawLink href="https://dosh.gov.my/en/perundangan/garis-panduan/higien-industri-garis-panduan/">DOSH</LawLink> and are inspected regularly.</span>,
          <span key="2">Adhere strictly to manufacturer maintenance schedules for compressors and diagnostic machines.</span>,
          <span key="3">Strictly enforce 'Authorized Personnel Only' zones to prevent public liability incidents.</span>
        ]
      }
    ]
  },
  "Agriculture & Agro-Based": {
    title: "Agriculture & Agro-Based",
    icon: Tractor,
    hazards: [
      {
        id: "weather",
        title: "Extreme Weather & Flood Destruction",
        icon: Droplets,
        product: "EBizCover (Special Perils Extension)",
        productDesc: "Farms are uniquely exposed to unpredictable monsoons. This protects storage facilities and processing plants from severe flooding or storm damage.",
        riskPoints: [
          "Farms are fully exposed to unpredictable monsoons and severe flash flooding.",
          "Lightning strikes can cause immediate fires in dry storage barns.",
          "Windstorms can tear roofs off processing facilities and greenhouses."
        ],
        preventions: [
          <span key="1">Maintain robust drainage systems complying with <LawLink href="https://www.water.gov.my/">JPS (Jabatan Pengairan dan Saliran)</LawLink> agricultural guidelines.</span>,
          <span key="2">Store harvested goods, scheduled fertilizers, and machinery in elevated, weather-proof facilities.</span>,
          <span key="3">Monitor MET Malaysia alerts to implement early-action protective measures.</span>
        ]
      },
      {
        id: "workforce",
        title: "Heavy Machinery & Labor Injuries",
        icon: Users,
        product: "Equipment All Risks & eBLite (EzPA)",
        productDesc: "Vital coverage for expensive farming equipment against accidental damage, and essential accident coverage for manual laborers.",
        riskPoints: [
          "Tractors overturning on uneven terrain or sinking in mud.",
          "Workers suffering lacerations from processing machinery or exposure to hazardous chemicals.",
          "Heatstroke or severe exhaustion from prolonged outdoor labor."
        ],
        preventions: [
          <span key="1">Mandate that all heavy machinery operators hold valid competency licenses and machinery meets DOSH <LawLink href="https://intranet.dosh.gov.my/competent-person-form/occupational-health/regulation-2-1/regulations/repealed-regulations/regulations-under-factories-and-machinery-act-1967-act-139">FMA 1967</LawLink> safety standards.</span>,
          <span key="2">Provide mandatory PPE for chemical handling (regulated under the Pesticides Act) and machinery operation.</span>,
          <span key="3">Enforce OSHA 1994 compliant safety protocols around automated processing lines and moving parts.</span>
        ]
      }
    ]
  }
};

export default function LossPreventionPage() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // State for user inputs
  const [industryKey, setIndustryKey] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");

  // Simulated Risk Engine Logic
  const calculateRiskProfile = () => {
    let riskLevel = "Moderate";
    let riskColor = "text-yellow-600";
    let riskBg = "bg-yellow-100";
    let riskDesc = "Standard operational and statutory risks apply based on your industry.";

    const highFloodStates = ["Kelantan", "Terengganu", "Pahang", "Johor", "Sabah"];
    const highUrbanStates = ["Kuala Lumpur", "Selangor", "Penang", "Putrajaya"];

    if (highFloodStates.includes(location) && (industryKey.includes("Agriculture") || industryKey.includes("Food") || industryKey.includes("Logistics"))) {
      riskLevel = "Critical";
      riskColor = "text-red-600";
      riskBg = "bg-red-100";
      riskDesc = `High exposure to monsoon flooding in ${location} combined with vulnerable physical operations significantly elevates your statutory risk profile.`;
    } else if (highUrbanStates.includes(location) && (industryKey.includes("Retail") || industryKey.includes("Professional") || industryKey.includes("Healthcare"))) {
      riskLevel = "High";
      riskColor = "text-orange-600";
      riskBg = "bg-orange-100";
      riskDesc = `High urban density in ${location} increases risks of targeted cyber threats, PDPA breaches, and public liability claims.`;
    } else if (highFloodStates.includes(location)) {
      riskLevel = "High";
      riskColor = "text-orange-600";
      riskBg = "bg-orange-100";
      riskDesc = `Elevated environmental and flooding risks specific to ${location} require robust physical protections.`;
    }

    return { riskLevel, riskColor, riskBg, riskDesc };
  };

  const handleGenerate = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(2);
    }, 1500);
  };

  // Scroll Animation Effect
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
  }, [step]);

  const currentIndustry = industryData[industryKey];
  const riskProfile = step === 2 ? calculateRiskProfile() : null;

  // Aggregate duplicate products into a single entry
  const productMap = new Map<string, string[]>();
  if (currentIndustry) {
    currentIndustry.hazards.forEach((hazard) => {
      const products = hazard.product.split(" & ").map((p: string) => p.trim());
      
      products.forEach((prodName: string) => {
        if (!productMap.has(prodName)) {
          productMap.set(prodName, []);
        }
        if (!productMap.get(prodName)?.includes(hazard.productDesc)) {
          productMap.get(prodName)?.push(hazard.productDesc);
        }
      });
    });
  }
  const aggregatedProducts = Array.from(productMap.entries()).map(([name, descriptions]) => ({ name, descriptions }));

  return (
    <div className="bg-[#f6f7fb] min-h-screen text-slate-900 pb-32">
      
      {/* Print & Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .reveal-elem {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-elem.fade-up { transform: translateY(60px); }
        .reveal-elem.zoom-in { transform: translateY(30px) scale(0.95); }
        .reveal-elem.is-revealed {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        
        /* Magic Print CSS to format the page as a clean PDF Report */
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-break-inside-avoid { break-inside: avoid; }
          .print-shadow-none { box-shadow: none !important; border: 1px solid #e2e8f0; }
          .reveal-elem { opacity: 1 !important; transform: none !important; transition: none !important; }
          @page { margin: 1.5cm; }
        }
      `}} />

      {/* Header */}
      <section className="px-6 pt-12 pb-8 no-print">
        <div className="reveal-elem zoom-in mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
            <ShieldAlert className="h-4 w-4" />
            Statutory Risk Framework
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Intelligent Risk Profiler
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select your industry and location to generate a customized compliance and risk framework. Discover statutory ways 
            to prevent losses and the right insurance plans to transfer residual risk.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="reveal-elem fade-up mx-auto max-w-5xl rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-12 relative print-shadow-none">

          {/* STEP 1: Inputs */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-3xl mx-auto">
              
              {/* Company Input */}
              <div className="mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-purple-600" /> 1. Company Name <span className="text-sm font-normal text-slate-400">(Optional)</span>
                </h3>
                <input 
                  type="text"
                  placeholder="e.g. Neuroacura Sdn Bhd"
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none text-slate-700 font-medium"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              {/* Location Input */}
              <div className="mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-600" /> 2. Operating Location
                </h3>
                <select 
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none text-slate-700 font-medium bg-white"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="" disabled>Select your primary state...</option>
                  {malaysianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <p className="text-sm text-slate-500 mt-2 ml-1">Location data helps us calculate environmental risks like flooding.</p>
              </div>

              {/* Industry Input */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" /> 3. Primary Industry
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {Object.entries(industryData).map(([key, data]) => {
                    const Icon = data.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setIndustryKey(key)}
                        className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                          industryKey === key 
                            ? "border-purple-600 bg-purple-50 ring-1 ring-purple-600 shadow-sm" 
                            : "border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${industryKey === key ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`text-base font-bold ${industryKey === key ? "text-purple-900" : "text-slate-700"}`}>
                          {data.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={handleGenerate}
                  disabled={!industryKey || !location}
                  className="flex items-center justify-center w-full md:w-auto gap-2 rounded-full bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] px-12 py-4 font-bold text-white transition hover:opacity-90 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? "Analyzing Risk Profile..." : "Generate Risk Framework"} 
                  {isAnalyzing ? <Activity className="h-5 w-5 animate-pulse" /> : <ArrowRight className="h-5 w-5" />}
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: The Framework Report */}
          {step === 2 && currentIndustry && riskProfile && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              
              {/* Intelligent Risk Profile Header */}
              <div className="mb-10 rounded-2xl bg-slate-900 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg print-shadow-none print-break-inside-avoid">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {location} • {currentIndustry.title}
                  </p>
                  <h2 className="text-3xl font-black text-white mb-2">
                    Statutory Risk Assessment {companyName ? <span className="text-purple-300"><br/>for {companyName}</span> : ""}
                  </h2>
                  <p className="text-slate-300 text-sm max-w-xl">{riskProfile.riskDesc}</p>
                </div>
                <div className={`flex flex-col items-center justify-center p-4 rounded-xl ${riskProfile.riskBg} min-w-[160px] text-center shrink-0`}>
                  <Gauge className={`h-8 w-8 ${riskProfile.riskColor} mb-1`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${riskProfile.riskColor}`}>Overall Rating</span>
                  <span className={`text-2xl font-black ${riskProfile.riskColor}`}>{riskProfile.riskLevel} Risk</span>
                </div>
              </div>

              {/* Hazards Framework Grid */}
              <div className="space-y-8 md:space-y-12">
                {currentIndustry.hazards.map((hazard, index) => {
                  const HazardIcon = hazard.icon;
                  
                  return (
                    <div key={hazard.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white print-shadow-none print-break-inside-avoid">
                      
                      {/* Section Title */}
                      <div className="p-6 border-b border-slate-200">
                        <span className="inline-block px-3 py-1 rounded-full border border-red-200 text-red-600 text-xs font-bold tracking-wider mb-3">
                          HAZARD {index + 1}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-light text-slate-800">{hazard.title}</h3>
                      </div>

                      {/* Split Columns */}
                      <div className="flex flex-col md:flex-row p-6 gap-6">
                        
                        {/* Left Column: Hazard Risk */}
                        <div className="md:w-1/2 bg-[#fdf5f4] rounded-xl p-6 border border-red-50">
                          <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                            <HazardIcon className="h-5 w-5 text-red-600" /> 
                            Hazard Risk
                          </h4>
                          <ul className="space-y-4">
                            {hazard.riskPoints.map((point: string, idx: number) => (
                              <li key={idx} className="text-[15px] text-slate-700 flex items-start gap-3">
                                <span className="text-slate-800 font-black mt-0.5">•</span> {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Column: Statutory Preventive Action */}
                        <div className="md:w-1/2 bg-[#f2fae8] rounded-xl p-6 border border-green-50 relative overflow-hidden">
                          {/* Urgency Badge */}
                          <div className="absolute top-0 right-0 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-lg border-b border-l border-red-200 flex items-center gap-1">
                            <ShieldAlert className="h-3 w-3" /> Legal Compliance
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wider mt-2">
                            <ShieldCheck className="h-5 w-5 text-green-600" /> 
                            Statutory Preventive Action
                          </h4>
                          <ul className="space-y-4">
                            {hazard.preventions.map((prevention: React.ReactNode, idx: number) => (
                              <li key={idx} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
                                <span className="text-slate-800 font-black mt-0.5">•</span> {prevention}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Aggregated Recommended Plans Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-purple-100 relative overflow-hidden print-shadow-none print-break-inside-avoid">
                <div className="absolute top-0 left-0 w-2 h-full bg-purple-600"></div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-purple-600" />
                  Recommended VSure Transfer Plans
                </h3>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  While statutory preventative actions reduce the likelihood of incidents, insurance transfers the ultimate financial burden. Based on your {currentIndustry.title} profile, we recommend securing the following coverage:
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {aggregatedProducts.map((prod, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-purple-200 transition-colors">
                      <h4 className="font-bold text-lg text-slate-900 mb-3">{prod.name}</h4>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Coverage Rationale:</strong>
                        {prod.descriptions.length > 1 ? (
                          <ul className="list-disc list-outside space-y-2 mt-2 ml-4">
                            {prod.descriptions.map((desc, dIdx) => (
                              <li key={dIdx}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-1">{prod.descriptions[0]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Disclaimer */}
              <div className="mt-8 rounded-2xl bg-slate-100 p-6 border border-slate-200 text-sm text-slate-600 flex gap-4 items-start print-break-inside-avoid">
                <Scale className="h-6 w-6 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block mb-1">Statutory Disclosure & Policy Validity</strong>
                  Pursuant to Schedule 9 of the Financial Services Act 2013, SMEs have a pre-contractual duty of disclosure. Implementing these statutory risk prevention measures (in compliance with authorities such as BOMBA, DOSH, and PDPA) ensures your operational legality and maintains the validity of your insurance claims. Non-compliance with statutory regulations may result in claims being repudiated during the loss adjustment phase.
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Floating Action Bar for Download/Contact (Hidden when printing) */}
      {step === 2 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 no-print animate-in slide-in-from-bottom-full duration-700">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-900">Secure Your Operations Today</h4>
              <p className="text-sm text-slate-500">Save this statutory report or consult our risk experts.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setStep(1)} 
                className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition text-sm"
              >
                Change Industry
              </button>
              <button 
                onClick={() => window.print()} 
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition text-sm shadow-md"
              >
                <Download className="h-4 w-4" /> Download PDF Report
              </button>
              <Link href="/contact" className="hidden md:flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#4b1f87] to-[#ea4c89] text-white font-bold hover:opacity-90 transition text-sm shadow-md">
                Get Quotation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}