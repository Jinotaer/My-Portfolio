import { Award, BadgeCheck, BookCheck, Network, Trophy } from "lucide-react";

const certifications = [
  {
    title: "CCNA Introduction",
    issuer: "Cisco Networking Academy",
    icon: Network,
    tone: "certificate",
  },
  {
    title: "CCNA Switching & Routing",
    issuer: "Cisco Networking Academy",
    icon: Network,
    tone: "certificate",
  },
  {
    title: "Campus DEVCON @ BukSU 2026",
    issuer: "DEVCON Bukidnon / Sui Code Camps",
    icon: BookCheck,
    tone: "certificate",
  },
  {
    title: "Hybrid Mobility by Discipline 2025",
    issuer: "P2A Secretariat",
    icon: BookCheck,
    tone: "certificate",
  },
  {
    title: "P2A Green Entrepreneurship Hackathon 2025",
    issuer: "Philippines Spotlight / BukSU",
    icon: Trophy,
    tone: "award",
  },
  {
    title: "Dean's Lister",
    issuer: "Multiple Semesters",
    icon: Award,
    tone: "award",
  },
  {
    title: "Virtual Entrepreneurship Hackathon 2024",
    issuer: "P2A Secretariat",
    icon: Trophy,
    tone: "award",
  },
];

const count = certifications.length;

function CertificationCard({ item }) {
  const Icon = item.icon;
  const isAward = item.tone === "award";

  return (
    <article
      className={`rounded-[28px] border p-8 text-center transition duration-200 hover:-translate-y-1 ${
        isAward
          ? "border-amber-300/40 bg-white/92 shadow-[0_24px_70px_-42px_rgba(251,191,36,0.22)] dark:border-amber-400/30 dark:bg-[#19181b] dark:shadow-none"
          : "border-slate-200 bg-white/92 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-[#17181f] dark:shadow-none"
      }`}
    >
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
          isAward
            ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white"
            : "bg-gradient-to-br from-indigo-500 to-violet-500 text-white"
        } shadow-[0_18px_32px_-20px_rgba(79,70,229,0.8)]`}
      >
        <Icon size={34} />
      </div>

      <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em] text-slate-900 dark:text-white">
        {item.title}
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-500 dark:text-slate-400">
        {item.issuer}
      </p>
    </article>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative isolate mx-auto mt-20 max-w-7xl overflow-hidden  px-6 py-18 text-white transition-colors md:px-10 md:py-24"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.26em] text-indigo-500 dark:text-violet-400">
            // Certifications
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            Verified
            <span className="ml-3  bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text pr-2 font-light italic text-transparent">
              milestones
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-slate-600 dark:text-slate-400">
            Certifications, academic distinctions, and competition results that
            reflect technical growth, discipline, and consistent performance.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-slate-600 dark:border-white/20 dark:bg-white/[0.02] dark:text-slate-300">
          <BadgeCheck size={16} />{count} recognitions collected
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {certifications.slice(0, 4).map((item) => (
          <CertificationCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-3">
        {certifications.slice(4).map((item) => (
          <CertificationCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
