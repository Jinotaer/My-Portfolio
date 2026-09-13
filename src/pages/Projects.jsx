import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import inventoryImage from "../assets/Inventory.png";
import chaingaurdImage from "../assets/capstone.png";
import cjciamge from "../assets/cjcchurch.png";
import laundryImage from "../assets/Laundryshop.png";
import GradingImage from "../assets/buksugrading.png";
import VissionImage from "../assets/visionchat.png";
import LibraryImage from "../assets/minilibrary.png";
import valorImage from "../assets/valor.png";

const featuredProject = {
  category: "Web App",
  title: "Chaingaurd",
  description:
    "ChainGuard is a digital evidence management system built to support the proper handling, tracking, and documentation of digital evidence. The system helps manage evidence records, case information, handlers, timestamps, and status updates to maintain an organized chain of custody and improve evidence accountability.",
  tags: ["Laravel", "PostgreSQL", "TailwindCSS", "Blade"],
  year: "2026",
  image: chaingaurdImage,
  githubUrl: "",
  liveUrl: "https://chainguardbuk.me/",
};

const projects = [
  {
    category: "Mobile App",
    title: "VALOR",
    description:
      "VALOR is a community reporting and response platform that allows residents to submit reports with photos, location information, and descriptions while helping local authorities manage and respond to community concerns.",
    tags: [
      "React Native",
      "Android",
      "Geolocation",
      "AI Integration",
      "TailwindCSS",
    ],
    year: "2026",
    image: valorImage,
    fit: "contain",
    bgColor: "bg-[#2b3e5b]",
    githubUrl: "",
    liveUrl: "",
  },
  {
    category: "Community Platform",
    title: "CJC Church Website",
    description:
      "A responsive church website for sharing announcements, ministries, events, Bible verses, and community updates with members and visitors.",
    tags: ["Laravel", "MySQL", "React", "TailwindCSS"],
    year: "2026",
    image: cjciamge,
    githubUrl: "https://github.com/Jinotaer/CJC-Minsion-Church.git",
    liveUrl: "",
  },
  {
    category: "Management System",
    title: "LaundryTrack",
    description:
      "A web-based laundry shop management system for managing customers, laundry orders, services, payments, and transaction records.",
    tags: ["Laravel", "MySQL", "Blade", "TailwindCSS"],
    year: "2026",
    image: laundryImage,
    githubUrl:
      "https://github.com/Jinotaer/Multi-Tenant-Laundry-Shop-Management-System.git",
    liveUrl: "",
  },
  {
    category: "Realtime App",
    title: "Vission Chat",
    description:
      "A real-time random chat and video call platform inspired by Omegle, designed for instant user matching and simple online conversations.",
    tags: ["React", "SocketIO", "Vite", "TailwindCSS"],
    year: "2026",
    image: VissionImage,
    githubUrl: "",
    liveUrl: "https://visionchat.duckdns.org/welcome",
  },
  {
    category: "Education Platform",
    title: "BukSu Grading System",
    description:
      "A web-based grading system for managing student records, grades, and academic performance.",
    tags: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
    year: "2025",
    image: GradingImage,
    githubUrl: "",
    liveUrl: "https://grading.chainguardbuk.me/login",
  },
  {
    category: "Library System",
    title: "BukSu Library Management System",
    description:
      "A web-based library management system for tracking book inventory, managing authors and borrowers, monitoring active loans, and organizing library records through a modern dashboard.",
    tags: ["Laravel", "MySQL", "TailwindCSS", "Blade"],
    year: "2025",
    image: LibraryImage,
    githubUrl: "https://github.com/Jinotaer/Mini-Library-Ni-Pjonskie.git",
    liveUrl: "",
  },
  {
    category: "Inventory System",
    title: "BNHS Inventory",
    description:
      "A school inventory management system for tracking supplies, equipment, records, and item movement through organized forms and clear data flow.",
    tags: ["PHP", "MySQL", "XAMPP"],
    year: "2024",
    image: inventoryImage,
    githubUrl: "https://github.com/Jinotaer/BUKIDNON_NHS_INVENTORY_SYSTEM.git",
    liveUrl: "",
  },
];

const allProjects = [featuredProject, ...projects];

function getWrappedOffset(index, active, total) {
  let offset = (index - active) % total;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

// Layered 3D coverflow (matches reference):
//   offset 0  -> exact center, flat, scale 1, full opacity, highest z
//   offset ±1 -> tucked behind center, angled in 3D (outer edge recedes,
//                inner edge forward), slightly smaller, lower z
//   offset ±2 -> farther out, steeper angle, smaller, faded
const OFFSET_STEP_PERCENT = 84;

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

function CarouselCard({ project, offset, isActive, onSelect }) {
  const abs = Math.abs(offset);
  const visible = abs <= 2;
  const layer = getLayerStyle(offset);
  return (
    <div
      onClick={onSelect}
      aria-hidden={!isActive}
      className={`absolute top-1/2 left-1/2 w-[78%] max-w-[580px] sm:w-[66%] md:w-[52%] lg:w-[44%] xl:w-[38%] ${
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
            ? "drop-shadow(0 22px 35px rgba(15,23,42,0.2))"
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
        className={`overflow-hidden rounded-2xl border bg-white transition-shadow duration-500 dark:bg-[#17181f] ${
          isActive
            ? "border-slate-900/80 shadow-[0_24px_55px_-18px_rgba(15,23,42,0.4)] dark:border-white/20"
            : "border-slate-200/90 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.28)] dark:border-white/10"
        }`}
      >
        <div
          className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
            project.bgColor || "bg-slate-100 dark:bg-[#0b1020]"
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            draggable={false}
            className={`h-full w-full select-none ${
              project.fit === "contain"
                ? "object-contain p-1.5"
                : "object-cover object-center"
            }`}
          />
          {/* Dim + edge fade on side cards so the center pops like the reference */}
          {!isActive && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-white/10 dark:from-[#070811]/45 dark:via-transparent dark:to-[#070811]/25" />
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const total = allProjects.length;

  const goTo = useCallback(
    (index) => {
      setActive(((index % total) + total) % total);
    },
    [total],
  );

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

  const activeProject = allProjects[active];
  const viewHref = activeProject.liveUrl || activeProject.githubUrl;

  return (
    <section
      id="projects"
      className="relative -mx-6 overflow-hidden border-b border-t border-gray-300 bg-white px-4 py-16 sm:px-6 md:-mx-8 md:px-8 md:py-20 dark:bg-gray-950 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.08),transparent_0_18%),radial-gradient(circle_at_80%_40%,rgba(34,211,238,0.08),transparent_0_22%)]" />

      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-indigo-500 dark:text-violet-400">
              // Projects
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
              Selected
              <span className="ml-3 inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text pr-3 font-light italic text-transparent">
                builds
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-slate-600 dark:text-slate-400">
              A mix of interface-focused builds, system concepts, and practical
              applications where I explored structure, usability, and product
              presentation.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
          >
            Discuss a project
            <ExternalLink size={16} />
          </a>
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
            className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {allProjects.map((project, index) => (
              <CarouselCard
                key={project.title}
                project={project}
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
            aria-label="Previous project"
            className="absolute top-1/2 left-[4%] sm:left-[6%] md:left-[9%] lg:left-[12%] z-40 flex h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 dark:border-white/15 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute top-1/2 right-[4%] sm:right-[6%] md:right-[9%] lg:right-[12%] z-40 flex h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 dark:border-white/15 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Original Indicator dots design */}
        <div className="mt-7 flex items-center justify-center gap-1 md:mt-8">
          {allProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
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

        {/* Project Details */}
        <div
          key={activeProject.title}
          className="animate-project-fade-up mx-auto mt-6 max-w-[64ch] px-4 text-center md:mt-8"
        >
          <div className="font-mono text-xs md:text-[13px] font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
            {activeProject.category || "Project"}
          </div>
          <h3 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white">
            {activeProject.title}
          </h3>
          <p className="mx-auto mt-3.5 max-w-[58ch] text-[0.98rem] leading-7 text-slate-600 dark:text-slate-400">
            {activeProject.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {activeProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1 text-[12px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            {viewHref ? (
              <a
                href={viewHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-slate-900 underline decoration-slate-200 underline-offset-8 transition hover:decoration-slate-900 dark:text-white dark:decoration-white/20 dark:hover:decoration-white"
              >
                View Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            ) : null}
            {activeProject.githubUrl ? (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/15 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white"
              >
                <FolderGit2 size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
