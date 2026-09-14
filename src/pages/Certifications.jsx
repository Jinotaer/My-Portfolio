import { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import ccnaIntroImg from "../assets/certs/CCNA introtonetworking.png";
import ccnaSrweImg from "../assets/certs/CCNASRWE.png";
import devconImg from "../assets/certs/devcon.png";
import topcitImg from "../assets/certs/topcit.png";
import hybridImg from "../assets/certs/hybrid.png";
import vehp2aImg from "../assets/certs/vehp2a.png";
import wadhwaniProfImg from "../assets/certs/wadhwwaniproficency.png";
import wadhwaniCompImg from "../assets/certs/wadhwanicompletion.png";
import hackathonImg from "../assets/certs/hackathon.png";
import literacyImg from "../assets/certs/literacy.png";

const certifications = [
  {
    title: "ICT EXPO: InnoVa Hackathon",
    issuer: "City of Valencia & DICT",
    date: "Jun 11, 2026",
    year: "2026",
    category: "INNOVATION & HACKATHON",
    image: hackathonImg,
    description:
      "Awarded Certificate of Participation for active involvement, rapid prototyping, and collaborative problem-solving in the InnoVa Hackathon during the Valencia Goes Digital ICT Expo celebration.",
    tags: [
      "InnoVa Hackathon",
      "Valencia Goes Digital",
      "National ICT Month",
      "DICT & NICP",
      "Problem Solving",
    ],
    verifyUrl: "",
    tone: "award",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "May 16, 2025",
    year: "2025",
    category: "NETWORKING",
    image: ccnaIntroImg,
    description:
      "Completed Cisco Networking Academy coursework covering network architectures, IP addressing, IPv4/IPv6 subnetting, Ethernet models, and foundational router/switch configuration.",
    tags: [
      "Cisco Verified",
      "Network Architecture",
      "IPv4/IPv6",
      "Subnetting",
      "Ethernet",
    ],
    verifyUrl: "https://www.netacad.com/",
    tone: "certificate",
  },
  {
    title: "CCNA: Switching, Routing & Wireless",
    issuer: "Cisco Networking Academy",
    date: "Dec 23, 2025",
    year: "2025",
    category: "NETWORKING",
    image: ccnaSrweImg,
    description:
      "Demonstrated proficiency in configuring and troubleshooting VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, and securing wireless LAN infrastructure.",
    tags: [
      "Cisco Verified",
      "VLANs & Trunks",
      "STP",
      "Routing Protocols",
      "WLAN Security",
    ],
    verifyUrl: "https://www.netacad.com/",
    tone: "certificate",
  },
  {
    title: "Campus DEVCON @ BukSU 2026",
    issuer: "DEVCON Bukidnon & Sui Code Camps",
    date: "May 6, 2026",
    year: "2026",
    category: "SOFTWARE & WEB3",
    image: devconImg,
    description:
      "Awarded Certificate of Recognition for active participation and dedication in modern software engineering, Web3 ecosystems, and smart contract development.",
    tags: ["DEVCON", "Sui Code Camps", "Web3", "Smart Contracts", "Full Stack"],
    verifyUrl: "https://devcon.ph/",
    tone: "certificate",
  },
  
  {
    title: "TOPCIT Practical Competency in ICT",
    issuer: "IITP (Institute for Information & Communications Tech)",
    date: "Jul 23, 2026",
    year: "2026",
    category: "STANDARDIZED ASSESSMENT",
    image: topcitImg,
    description:
      "Certified ICT competency in software development, data management, system architecture, information security, and IT business problem solving.",
    tags: [
      "TOPCIT Level 2",
      "Software Development",
      "Data Management",
      "System Architecture",
      "InfoSec",
    ],
    verifyUrl: "https://www.topcit.or.kr/",
    tone: "certificate",
  },
  {
    title: "Hybrid Mobility by Discipline 2025",
    issuer: "Passage to ASEAN (P2A)",
    date: "May 6, 2025",
    year: "2025",
    category: "GLOBAL MOBILITY",
    image: hybridImg,
    description:
      "Participated in international academic mobility focusing on ASEAN educational exchange, collaborative technology workshops, and cross-cultural leadership.",
    tags: [
      "P2A Mobility",
      "ASEAN Collaboration",
      "Cross-Border Tech",
      "Leadership",
    ],
    verifyUrl: "https://p2a.asia/",
    tone: "certificate",
  },
  {
    title: "Virtual Entrepreneurship Hackathon",
    issuer: "P2A Secretariat",
    date: "Aug 19, 2024",
    year: "2024",
    category: "INNOVATION & HACKATHON",
    image: vehp2aImg,
    description:
      "Participated in the ASEAN Green Entrepreneurship Hackathon hosted by the P2A Secretariat, developing sustainable digital tools and business recovery concepts.",
    tags: [
      "P2A Hackathon",
      "Green Tech",
      "ASEAN Sustainability",
      "Product Strategy",
    ],
    verifyUrl: "https://p2a.asia/",
    tone: "award",
  },
  {
    title: "Certificate of Proficiency - Ignite Philippines",
    issuer: "Wadhwani Global Entrepreneur",
    date: "Dec 13, 2025",
    year: "2025",
    category: "ENTREPRENEURSHIP",
    image: wadhwaniProfImg,
    description:
      "Recognized for developing a Certified Practice Venture demonstrating entrepreneurial leadership, practical ideation, and real-world impact across 42 hours of venture training.",
    tags: [
      "Wadhwani Foundation",
      "Practice Venture",
      "Venture Ideation",
      "Leadership",
    ],
    verifyUrl: "https://wadhwanifoundation.org/",
    tone: "award",
  },
  {
    title: "Certificate of Completion - Ignite Philippines",
    issuer: "Wadhwani Global Entrepreneur",
    date: "Sep 7, 2026",
    year: "2026",
    category: "ENTREPRENEURSHIP",
    image: wadhwaniCompImg,
    description:
      "Completed 42 hours of comprehensive coursework and assessments gaining key entrepreneurial skills in business modeling, ideation, and financial planning.",
    tags: [
      "Wadhwani Foundation",
      "Business Modeling",
      "Financial Planning",
      "Ideation",
    ],
    verifyUrl: "https://wadhwanifoundation.org/",
    tone: "certificate",
  },
  {
    title: "Introduction to AI Literacy and Responsible Use",
    issuer: "Mapúa University & CHED (ACHIEVE)",
    date: "Sep 14, 2026",
    year: "2026",
    category: "ARTIFICIAL INTELLIGENCE",
    image: literacyImg,
    description:
      "Completed the micro-credentials course on AI literacy, foundational machine learning concepts, ethical considerations, and responsible AI implementation in collaboration with Arizona State University and CHED.",
    tags: [
      "AI Literacy",
      "Responsible AI",
      "Mapúa University",
      "CHED ACHIEVE",
      "Micro-credentials",
    ],
    verifyUrl: "",
    tone: "certificate",
  },
  {
    title: "Dean's Lister Academic Distinction",
    issuer: "Bukidnon State University",
    date: "Multiple Semesters",
    year: "2024 - 2026",
    category: "ACADEMIC DISTINCTION",
    image: null,
    description:
      "Consistently achieved top academic honors and Dean's List standing in the Bachelor of Science in Information Technology program across multiple academic terms at Bukidnon State University.",
    tags: [
      "Academic Excellence",
      "Dean's Lister",
      "Top Academic GPA",
      "BukSU College of Tech",
    ],
    verifyUrl: "",
    tone: "award",
  },
];

const total = certifications.length;

function getWrappedOffset(index, active, count) {
  let offset = (index - active) % count;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

const OFFSET_STEP_PERCENT = 78;

function getLayerStyle(offset) {
  const abs = Math.abs(offset);
  const dir = Math.sign(offset);
  if (offset === 0) {
    return { x: 0, z: 0, rotateY: 0, scale: 1, zIndex: 30, opacity: 1 };
  }
  if (abs === 1) {
    return {
      x: dir * OFFSET_STEP_PERCENT,
      z: -110,
      rotateY: -dir * 34,
      scale: 0.88,
      zIndex: 20,
      opacity: 0.92,
    };
  }
  if (abs === 2) {
    return {
      x: dir * OFFSET_STEP_PERCENT * 1.84,
      z: -240,
      rotateY: -dir * 48,
      scale: 0.74,
      zIndex: 10,
      opacity: 0.42,
    };
  }
  return {
    x: dir * OFFSET_STEP_PERCENT * 2.3,
    z: -320,
    rotateY: -dir * 54,
    scale: 0.62,
    zIndex: 0,
    opacity: 0,
  };
}

function CertificationCarouselCard({ item, offset, isActive, onSelect }) {
  const abs = Math.abs(offset);
  const visible = abs <= 2;
  const layer = getLayerStyle(offset);

  return (
    <div
      onClick={onSelect}
      aria-hidden={!isActive}
      className={`group absolute top-1/2 left-1/2 w-[78%] max-w-[540px] sm:w-[64%] md:w-[48%] lg:w-[40%] xl:w-[36%] ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
      style={{
        transform: `translateX(-50%) translateY(-50%) translateX(${layer.x}%) translateZ(${layer.z}px) rotateY(${layer.rotateY}deg) scale(${layer.scale})`,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        zIndex: visible ? layer.zIndex : 0,
        opacity: layer.opacity,
        filter:
          abs === 0
            ? "drop-shadow(0 22px 35px rgba(15,23,42,0.18))"
            : abs === 1
              ? "saturate(0.85) brightness(0.95)"
              : "saturate(0.6) brightness(0.96) blur(0.3px)",
        transition:
          "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, filter 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
        willChange: "transform, opacity",
      }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border bg-white transition-shadow duration-500 dark:bg-[#17181f] ${
          isActive
            ? "border-slate-900/80 shadow-[0_24px_55px_-18px_rgba(15,23,42,0.35)] dark:border-white/20 dark:shadow-[0_24px_55px_-18px_rgba(0,0,0,0.7)]"
            : "border-slate-200/90 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.22)] dark:border-white/10"
        }`}
      >
        <div className="relative flex aspect-[16/11] w-full items-center justify-center overflow-hidden bg-slate-50 p-2 sm:p-3 dark:bg-[#0d101a]">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.title} certificate`}
              draggable={false}
              className="h-full w-full rounded-lg object-contain select-none"
            />
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between rounded-xl border-2 border-amber-300/60 bg-gradient-to-br from-amber-50/90 via-white to-amber-100/40 p-4 text-center shadow-inner sm:p-6 dark:border-amber-400/30 dark:from-[#1b1710] dark:via-[#13141f] dark:to-[#1a160d]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-600 sm:text-[10px] dark:text-amber-400">
                  Bukidnon State University
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 shadow-sm sm:h-8 sm:w-8">
                  <Award size={16} />
                </span>
              </div>
              <div className="my-auto py-1">
                <div className="font-mono text-[9px] font-bold tracking-[0.24em] text-slate-400 uppercase sm:text-[10px] dark:text-slate-400">
                  Certificate of Academic Distinction
                </div>
                <div className="mt-1 font-serif text-lg font-bold tracking-tight text-slate-900 sm:text-xl md:text-2xl dark:text-amber-200">
                  Dean&apos;s Lister Award
                </div>
                <div className="mt-1 text-[11px] text-slate-500 sm:text-xs dark:text-slate-400">
                  Presented to <span className="font-semibold text-slate-800 dark:text-slate-200">Jino Taer</span>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-amber-200/70 pt-2 text-[9px] text-slate-400 sm:text-[10px] dark:border-white/10 dark:text-slate-400">
                <span>Multiple Semesters</span>
                <span className="font-medium text-amber-700 dark:text-amber-400">College of Technologies</span>
              </div>
            </div>
          )}

          {/* Subtle dimming gradient on side cards */}
          {!isActive && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 dark:from-[#070811]/45 dark:via-transparent dark:to-[#070811]/25" />
          )}

          {/* Hover Overlay on Active Center Card (matching reference Image 1) */}
          {isActive && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/65 p-6 text-center opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100">
              <div className="max-w-[85%] text-base font-bold tracking-tight text-white sm:text-lg">
                {item.title}
              </div>
              {item.image ? (
                <a
                  href={item.image}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-slate-900 shadow-xl transition-all duration-200 hover:scale-105 hover:bg-slate-100 active:scale-95 sm:text-sm"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-slate-950 shadow-lg">
                  <Award size={14} /> Academic Honor Roll
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const activeItem = certifications[active];

  return (
    <section
      id="certifications"
      className="relative -mx-6 overflow-hidden border-b border-t border-gray-300 bg-white px-4 py-16 sm:px-6 md:-mx-8 md:px-8 md:py-20 dark:bg-gray-950 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.08),transparent_0_20%),radial-gradient(circle_at_20%_60%,rgba(245,158,11,0.06),transparent_0_22%)]" />

      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.26em] text-indigo-500 dark:text-violet-400">
              // Certifications
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
              Verified
              <span className="ml-3 inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text pr-3 font-light italic text-transparent">
                milestones
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-slate-600 dark:text-slate-400">
              Certifications, academic distinctions, and competition results
              that reflect technical growth, discipline, and consistent
              performance.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200">
            <BadgeCheck size={16} />
            {total} recognitions collected
          </div>
        </div>
      </div>

      {/* Carousel rail & cards */}
      <div className="mt-8 md:mt-12">
        <div
          className="relative mx-auto w-full max-w-[1340px] px-2 sm:px-4 md:px-6 touch-pan-y select-none"
          style={{ perspective: "1400px" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="relative h-[220px] sm:h-[270px] md:h-[320px] lg:h-[360px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {certifications.map((item, index) => (
              <CertificationCarouselCard
                key={item.title}
                item={item}
                offset={getWrappedOffset(index, active, total)}
                isActive={index === active}
                onSelect={() => {
                  if (index !== active) goTo(index);
                }}
              />
            ))}
          </div>

          {/* Left / Right Nav Arrows positioned over outer half of side cards */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous certification"
            className="absolute top-1/2 left-[4%] sm:left-[6%] md:left-[9%] lg:left-[12%] z-40 flex h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 dark:border-white/15 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next certification"
            className="absolute top-1/2 right-[4%] sm:right-[6%] md:right-[9%] lg:right-[12%] z-40 flex h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 dark:border-white/15 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Indicator dots matching reference */}
        <div className="mt-7 flex items-center justify-center gap-1 md:mt-8">
          {certifications.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${item.title}`}
              className="flex items-center justify-center px-1.5 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-violet-400"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-slate-900 dark:bg-white"
                    : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Certificate Details (matching reference) */}
        <div
          key={activeItem.title}
          className="animate-project-fade-up mx-auto mt-6 max-w-[64ch] px-4 text-center md:mt-8"
        >
          <div className="font-mono text-xs md:text-[13px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            {activeItem.category} &bull; {activeItem.issuer} ({activeItem.date})
          </div>

          <h3 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white">
            {activeItem.title}
          </h3>

          <p className="mx-auto mt-3.5 max-w-[58ch] text-[0.98rem] leading-7 text-slate-600 dark:text-slate-400">
            {activeItem.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {activeItem.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1 text-[12px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {activeItem.image ? (
              <a
                href={activeItem.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                View Certificate
                <ExternalLink size={15} />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300">
                <BadgeCheck size={16} />
                Verified Academic Honor &bull; BukSU
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
