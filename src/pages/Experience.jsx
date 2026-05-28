const experiences = [
  {
    period: "2025 - Present",
    title: "Portfolio & Frontend Projects",
    role: "Personal Development Track",
    location: "Philippines",
    current: true,
    summary:
      "Building portfolio pieces and interface-driven projects focused on clean structure, responsiveness, and practical user experience.",
    bullets: [
      "Designed and implemented React-based interfaces with reusable component structure and responsive layouts.",
      "Worked on portfolio presentation, section architecture, and UI polish to communicate skills more clearly.",
      "Practiced translating references into working layouts while keeping code readable and maintainable.",
    ],
    tags: ["React", "Tailwind", "JavaScript", "Responsive UI", "UX"],
  },
  {
    period: "2024 - 2025",
    title: "Academic System Projects",
    role: "Student Developer",
    location: "School Projects",
    summary:
      "Developed academic and system-oriented applications as part of coursework, with emphasis on usability, database structure, and functional delivery.",
    bullets: [
      "Built CRUD-based systems for inventory, records, and school-related workflows.",
      "Connected frontend forms with backend logic and database operations using practical full-stack patterns.",
      "Improved project organization by separating layout, components, and data-driven views more clearly.",
    ],
    tags: ["PHP", "MySQL", "XAMPP", "System Design", "CRUD"],
  },
  {
    period: "2023 - 2024",
    title: "Web Development Learning",
    role: "Self-Directed Practice",
    location: "Independent Study",
    summary:
      "Focused on strengthening frontend fundamentals and understanding how real web interfaces are structured, styled, and shipped.",
    bullets: [
      "Practiced HTML, CSS, and JavaScript through small web builds and UI recreations.",
      "Learned component-based development and modern tooling through React and Vite projects.",
      "Built confidence in turning static ideas into functioning interfaces with cleaner visual hierarchy.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Vite", "Frontend"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate mx-auto mt-20 max-w-7xl overflow-hidden py-16 transition-colors md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_24%_12%,rgba(99,102,241,0.1),transparent_0_20%),radial-gradient(circle_at_76%_34%,rgba(34,211,238,0.08),transparent_0_22%),radial-gradient(circle_at_50%_84%,rgba(168,85,247,0.06),transparent_0_18%)]" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.26em] text-indigo-500 dark:text-violet-400">
            // Experience
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            Where I've
            <span className="ml-3 pr-2 font-light italic  bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400  bg-clip-text text-transparent">
              made impact
            </span>
          </h2>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 lg:pt-10">
          3 phases - student projects - growing experience
        </div>
      </div>

      <div className="mt-14 space-y-10">
        {experiences.map((item, index) => (
          <div
            key={`${item.title}-${item.period}`}
            className="grid gap-6 border-t border-slate-200/80 pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[140px_28px_minmax(0,1fr)] dark:border-white/8"
          >
            <div className="font-mono text-sm leading-7 text-slate-400 dark:text-slate-500">
              {item.period}
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-400/90 via-violet-400/60 to-transparent" />
              <div
                className={`absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-4 ${
                  index === 0
                    ? "border-white bg-indigo-500 dark:border-[#070811]"
                    : "border-white bg-violet-400 dark:border-[#070811]"
                }`}
              />
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.25)] backdrop-blur transition-colors dark:border-white/10 dark:bg-[#0d111a]/78 dark:shadow-[0_35px_90px_-55px_rgba(0,0,0,0.95)] md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
                    {item.role}
                    <span className="text-slate-400 dark:text-slate-500">
                      {" "}
                      - {item.location}
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[1.02rem] leading-8 text-slate-600 dark:text-slate-400">
                {item.summary}
              </p>

              <ul className="mt-6 space-y-4 text-[1rem] leading-8 text-slate-700 dark:text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-500 transition-colors dark:border-white/8 dark:bg-white/[0.03] dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
