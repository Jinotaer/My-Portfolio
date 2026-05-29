const quickFacts = [
  { label: "Role", value: "IT Student & Aspiring Web Developer" },
  { label: "Current Focus", value: "Web Development & System Design" },
  { label: "Main Stack", value: "React, Tailwind CSS, Laravel, MySQL, PHP, " },
  { label: "Approach", value: "Clean, practical, user-first" },
];

const focusAreas = [
  "Frontend interfaces that feel clear and responsive",
  "System ideas translated into usable screens",
  "Maintainable code structure over rushed output",
  "Learning by building real, practical projects",
];

const principles = [
  "I like projects that solve a clear problem, not just look polished.",
  "I care about readable code because maintenance matters as much as delivery.",
  "I work best when design, logic, and user flow connect cleanly.",
];

function About() {
  return (
    <section
      id="about"
      className="relative isolate -mx-6 overflow-hidden border-t border-b border-gray-300 px-6 py-18 transition-colors md:-mx-8 md:px-8 md:py-24 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-[radial-gradient(circle_at_22%_26%,rgba(99,102,241,0.14),transparent_0_18%),radial-gradient(circle_at_78%_52%,rgba(34,211,238,0.12),transparent_0_22%),radial-gradient(circle_at_50%_84%,rgba(168,85,247,0.08),transparent_0_18%)]" />
      <div className="absolute left-8 top-24 -z-10 h-56 w-56 rounded-full bg-indigo-200/45 blur-3xl dark:hidden" />
      <div className="absolute right-10 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl dark:hidden" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-start lg:gap-12">
          <div className="max-w-3xl lg:pr-4">
            <div className="font-mono text-xs uppercase tracking-[0.26em] text-indigo-500 dark:text-violet-400 ">
              // About Me
            </div>

            <h2 className="mt-7 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-800 transition-colors dark:text-slate-100 sm:text-4xl md:text-5xl">
              Building practical digital work
              <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                while growing into real-world engineering.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[1.05rem] leading-9 text-slate-600 transition-colors dark:text-slate-400">
              <p>
                I’m a BS Information Technology student at Bukidnon State
                University who enjoys creating practical and user-friendly
                digital solutions. I’m especially interested in web development,
                interface design, and building systems that are organized,
                useful, and easy to understand.
              </p>
              <p>
                Through my academic projects and personal practice, I continue
                to improve my skills in frontend development, backend
                fundamentals, database management, server setup, and responsive
                design. I like turning ideas into working applications using
                tools such as React, Tailwind CSS, Laravel, PHP, MySQL, Docker,
                and basic server management.
              </p>
              <p>
                I am focused on continuous learning, improving my development
                skills, and creating projects that are simple, useful, and easy
                to use.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 transition-colors dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
                >
                  <div className="font-mono text-xs text-indigo-500 dark:text-indigo-300">
                    0{index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 transition-colors dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:border-l lg:border-gray-300 lg:pl-10 dark:lg:border-white/10">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur transition-colors  dark:border-white/10 dark:bg-gradient-to-br dark:from-[#101425] dark:via-[#0b0f19] dark:to-[#08131b]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    Snapshot
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-800 transition-colors dark:text-white">
                    Who I am right now
                  </h3>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-2 font-mono text-xs font-medium text-white shadow-[0_18px_36px_-24px_rgba(59,130,246,0.85)]">
                  OJT Ready
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 transition-colors dark:border-white/8 dark:bg-white/[0.03]"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700 transition-colors dark:text-slate-200">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 transition-colors dark:border-white/10 dark:bg-gradient-to-br dark:from-[#101425] dark:via-[#0b0f19] dark:to-[#08131b]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Principles
              </p>

              <div className="mt-5 space-y-4">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 transition-colors dark:border-white/8 dark:bg-white/[0.03]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
