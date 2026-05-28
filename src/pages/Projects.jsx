import { ArrowRight, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "FlowDesk",
  description:
    "A productivity dashboard concept focused on task planning, lightweight reporting, and clean decision-making screens. I designed it to feel structured, fast, and clear even with dense information.",
  tags: ["React", "TailwindCSS", "Charts", "Dashboard UI"],
  year: "2025",
};

const projects = [
  {
    title: "BNHS Inventory",
    description:
      "A school inventory system build centered on practical forms, records, and clear data flow.",
    tags: ["PHP", "MySQL", "XAMPP"],
    year: "2025",
    variant: "inventory",
  },
  {
    title: "JobTrack",
    description:
      "A job application tracker concept designed to keep status, notes, and progress visible at a glance.",
    tags: ["React", "UI Design", "Tracking"],
    year: "2025",
    variant: "tracker",
  },
  {
    title: "SimplePay",
    description:
      "A payment landing page exploration with clear hierarchy, focused CTA blocks, and conversion-first layout.",
    tags: ["Landing Page", "TailwindCSS", "UX"],
    year: "2024",
    variant: "payments",
  },
];

function FeaturedPreview() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-[24px] border border-gray-300 bg-gradient-to-br from-white via-slate-50 to-indigo-50 p-4 dark:border-white/8 dark:from-[#151821] dark:via-[#10131a] dark:to-[#17132a]">
      <div className="rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)] dark:border-white/8 dark:bg-[#0c0f16] dark:shadow-none">
        <div className="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 dark:border-white/8">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="h-7 w-40 rounded-full bg-slate-100 dark:bg-white/[0.05]" />
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-5 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
                    Daily Focus
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em]">
                    18 tasks
                  </h3>
                </div>
                <div className="rounded-xl bg-white/15 px-3 py-1 font-mono text-xs">
                  +12%
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-white/15">
                <div className="h-full w-2/3 rounded-full bg-white" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/[0.04]">
                <div className="h-8 w-8 rounded-xl bg-cyan-400/20" />
                <div className="mt-4 h-3 w-14 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
                <div className="mt-2 h-6 w-10 rounded-full bg-slate-300 dark:bg-white/[0.12]" />
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/[0.04]">
                <div className="h-8 w-8 rounded-xl bg-violet-400/20" />
                <div className="mt-4 h-3 w-14 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
                <div className="mt-2 h-6 w-12 rounded-full bg-slate-300 dark:bg-white/[0.12]" />
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/[0.04]">
                <div className="h-8 w-8 rounded-xl bg-emerald-400/20" />
                <div className="mt-4 h-3 w-14 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
                <div className="mt-2 h-6 w-10 rounded-full bg-slate-300 dark:bg-white/[0.12]" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-100/90 p-4 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded-full bg-slate-300 dark:bg-white/[0.12]" />
              <div className="h-8 w-8 rounded-xl bg-slate-200 dark:bg-white/[0.08]" />
            </div>
            <div className="mt-5 h-36 rounded-[20px] bg-white p-4 shadow-inner dark:bg-[#131724]">
              <div className="flex h-full items-end gap-3">
                <div className="h-12 w-full rounded-t-2xl bg-cyan-400/70" />
                <div className="h-20 w-full rounded-t-2xl bg-indigo-400/70" />
                <div className="h-28 w-full rounded-t-2xl bg-violet-400/80" />
                <div className="h-16 w-full rounded-t-2xl bg-emerald-400/70" />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-white/[0.08]" />
              <div className="h-3 w-4/5 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
              <div className="h-3 w-3/5 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallPreview({ variant }) {
  if (variant === "inventory") {
    return (
      <div className="h-44 rounded-t-[24px] bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-4 dark:from-[#101a2a] dark:via-[#0f141d] dark:to-[#0c1a21]">
        <div className="grid h-full grid-cols-[0.65fr_1fr] gap-3">
          <div className="space-y-2 rounded-2xl bg-white/90 p-3 dark:bg-white/[0.05]">
            <div className="h-4 w-16 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
            <div className="space-y-2 pt-3">
              <div className="h-9 rounded-xl bg-sky-100 dark:bg-sky-400/10" />
              <div className="h-9 rounded-xl bg-slate-100 dark:bg-white/[0.04]" />
              <div className="h-9 rounded-xl bg-slate-100 dark:bg-white/[0.04]" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-14 rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
            <div className="grid h-[calc(100%-3.5rem)] grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
              <div className="rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "tracker") {
    return (
      <div className="h-44 rounded-t-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-4">
        <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 text-white">
          <div className="h-3 w-20 rounded-full bg-white/20" />
          <div className="mt-4 max-w-[180px] text-2xl font-bold leading-tight tracking-[-0.04em]">
            Track applications with clarity
          </div>
          <div className="mt-5 flex gap-2">
            <div className="h-8 w-20 rounded-full bg-cyan-400/80" />
            <div className="h-8 w-16 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 rounded-t-[24px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-4 dark:from-[#13172a] dark:via-[#10131b] dark:to-[#101827]">
      <div className="grid h-full gap-3">
        <div className="grid grid-cols-[1fr_0.9fr] gap-3">
          <div className="rounded-2xl bg-white/95 p-3 dark:bg-white/[0.05]">
            <div className="h-4 w-20 rounded-full bg-slate-200 dark:bg-white/[0.08]" />
            <div className="mt-3 space-y-2">
              <div className="h-8 rounded-xl bg-slate-100 dark:bg-white/[0.04]" />
              <div className="h-8 rounded-xl bg-slate-100 dark:bg-white/[0.04]" />
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 p-3 text-white">
            <div className="h-4 w-16 rounded-full bg-white/20" />
            <div className="mt-8 h-10 rounded-2xl bg-white/15" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
          <div className="rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
          <div className="rounded-2xl bg-white/90 dark:bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/92 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.25)] transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_28px_70px_-36px_rgba(99,102,241,0.25)] dark:border-white/10 dark:bg-[#17181f] dark:shadow-none dark:hover:border-indigo-400/20 dark:hover:bg-[#1b1d25]">
      <SmallPreview variant={project.variant} />
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
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-indigo-400/50 dark:hover:text-white"
          >
            <ArrowRight size={18} />
          </button>
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

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/92 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-[#17181f] dark:shadow-none">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <FeaturedPreview />

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
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] transition hover:from-indigo-600 hover:to-violet-600 dark:shadow-[0_24px_60px_-28px_rgba(99,102,241,0.75)]"
                  >
                    <ArrowRight size={18} />
                  </button>
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
