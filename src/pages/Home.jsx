import jinoImage from "../assets/jino1.png";

const stats = [
  { value: "25+", label: "Repositories" },
  { value: "Web", label: "Primary Focus" },
  { value: "2023", label: "Since" },
  // { value: "UI", label: "Design Mindset" },
];

function Home() {
  return (
    <section
      id="home"
      className="relative isolate mx-auto max-w-7xl overflow-hidden py-4 transition-colors md:py-6 "
    >
      <div className="absolute left-20 top-20 -z-10 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-500/15" />
      <div className="absolute right-30 top-10 -z-10 h-80 w-80 rounded-full bg-sky-200/45 blur-3xl dark:bg-cyan-500/12" />
      <div className="absolute bottom-15 left-1/3 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-500/10" />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:items-start">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 font-mono text-xs text-indigo-500 shadow-sm backdrop-blur transition-colors dark:border-white/15 dark:bg-white/[0.03] dark:text-indigo-300 dark:shadow-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Available</span>
            <span className="text-gray-300 dark:text-slate-600">-</span>
            <span> Junior Developer roles</span>
          </div>

          <h1 className="mt-8 text-3xl font-extrabold leading-[0.92] tracking-[-0.035em] text-slate-700 transition-colors dark:text-slate-100 sm:text-5xl md:text-[5.25rem]">
            Hi, I'm
            <span className="mt-1 block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Jino Taer
            </span>
          </h1>

          <p className="mt-7 flex items-center gap-3 font-mono text-[1.05rem] font-medium tracking-[-0.02em] text-slate-600 transition-colors dark:text-slate-300">
            <span>Web Developer in Training</span>
            <span className="h-4 w-0.5 bg-cyan-500 motion-safe:animate-[pulse_0.9s_ease-in-out_infinite]" />
          </p>

          <p className="mt-4 max-w-xl text-[1.05rem] leading-10 text-slate-600 transition-colors tracking-normal dark:text-slate-400">
           I'm an IT student passionate about web development, system design, and creating practical digital solutions. I enjoy building clean interfaces, writing maintainable code, and developing user-friendly experiences that solve real-world problems.

          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] transition hover:from-indigo-600 hover:to-violet-600 dark:shadow-[0_24px_60px_-28px_rgba(99,102,241,0.75)]"
            >
              View My Work
              <span className="ml-2 inline-block">&rarr;</span>
            </a>
            <a
              href="#"
              className="rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 text-base font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
            >
              Download CV
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black tracking-[-0.05em] text-slate-900 transition-colors dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 transition-colors dark:text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:-mt-10 lg:self-start">
          <img
            src={jinoImage}
            alt="Jino Taer portrait"
            className="block h-auto w-full object-contain object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
