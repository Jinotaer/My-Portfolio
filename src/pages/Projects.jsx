import { ExternalLink, FolderGit2 } from "lucide-react";
import inventoryImage from "../assets/Inventory.png";
import chaingaurdImage from "../assets/capstone.png";
import cjciamge from "../assets/cjcchurch.png";
import laundryImage from "../assets/Laundryshop.png";
import GradingImage from "../assets/buksugrading.png";
import VissionImage from "../assets/visionchat.png";
import LibraryImage from "../assets/minilibrary.png";

const featuredProject = {
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
    title: "LaundryTrack",
    description:
      "A web-based laundry shop management system for managing customers, laundry orders, services, payments, and transaction records.",
    tags: ["Laravel", "MySQL", "Blade", "TailwindCSS"],
    year: "2026",
    image: laundryImage,
    githubUrl: "https://github.com/Jinotaer/Multi-Tenant-Laundry-Shop-Management-System.git",
    liveUrl: "",
  },
  {
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

function ProjectLinks({ project }) {
  return (
    <div className="flex items-center gap-2">
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:text-white"
        >
          <FolderGit2 size={15} />
          GitHub
        </a>
      ) : null}

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:text-white"
        >
          <ExternalLink size={15} />
          Live Site
        </a>
      ) : null}
    </div>
  );
}

function FeaturedPreview({ project }) {
  return (
    <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-t-[24px] bg-[#0f1320]  lg:min-h-full lg:rounded-tl-[24px] lg:rounded-tr-none lg:rounded-bl-[24px] lg:rounded-br-none">
      <div className="w-full overflow-hidden  bg-[#0b1020] shadow-[0_18px_48px_-28px_rgba(0,0,0,0.55)]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="block h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/92 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.25)] transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_28px_70px_-36px_rgba(99,102,241,0.25)] dark:border-white/10 dark:bg-[#17181f] dark:shadow-none dark:hover:border-indigo-400/20 dark:hover:bg-[#1b1d25]">
      <div className="h-44 overflow-hidden rounded-t-[24px] bg-slate-100 dark:bg-[#11141c]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-500 dark:border-white/8 dark:bg-white/[0.03] dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-sm text-slate-400 dark:text-slate-500">
            {project.year}
          </span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative -mx-6 border-b border-t border-gray-300 bg-white px-6 py-16 md:-mx-8 md:px-8 dark:bg-gray-950 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.08),transparent_0_18%),radial-gradient(circle_at_80%_40%,rgba(34,211,238,0.08),transparent_0_22%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-indigo-500 dark:text-violet-400">
              // Projects
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
              Selected
              <span className="ml-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text pr-2 font-light italic text-transparent">
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
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
          >
            Discuss a project
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-14 mb-16 flex flex-col items-center gap-10">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/92 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-[#17181f] dark:shadow-none">
            <div className="grid lg:grid-cols-[1fr_0.72fr]">
              <FeaturedPreview project={featuredProject} />

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-[-0.04em] text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-5 text-[1rem] leading-8 text-slate-600 dark:text-slate-400">
                    {featuredProject.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-500 dark:border-white/8 dark:bg-white/[0.03] dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-slate-400 dark:text-slate-500">
                    {featuredProject.year}
                  </span>
                  <ProjectLinks project={featuredProject} />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 xl:col-span-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
