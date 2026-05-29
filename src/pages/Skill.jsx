import { Cpu, Wrench } from "lucide-react";
import { useState } from "react";
import { VscVscode } from "react-icons/vsc";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  // SiPython,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiPostman,
  SiXampp,
  SiDocker,
  SiWordpress,
} from "react-icons/si";

import { MonitorSmartphone } from "lucide-react";

const skillItems = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  // { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Responsive UI", icon: MonitorSmartphone, color: "text-pink-500" },
];

const toolItems = [
  { name: "VS Code", icon: VscVscode, color: "text-sky-500" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-800 dark:text-white" },
  { name: "Vite", icon: SiVite, color: "text-violet-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "XAMPP", icon: SiXampp, color: "text-orange-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Wordpress", icon: SiWordpress, color: "text-blue-500"},
  // { name: "Weebly", icon: SiWebassembly, color: "text-blue-500"},
];

function SkillCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-[0_18px_50px_-35px_rgba(15,23,42,0.22)] transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_-30px_rgba(99,102,241,0.28)] dark:border-white/8 dark:bg-[#17181f] dark:shadow-none dark:hover:border-indigo-400/20 dark:hover:bg-[#1b1d25]">
      <div className="mx-auto flex h-18 w-18 items-center justify-center transition group-hover:scale-105 dark:bg-transparent">
        <Icon className={`text-5xl ${item.color}`} />
      </div>

      <p className="mt-5 text-sm font-medium text-slate-700 transition-colors group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-white">
        {item.name}
      </p>
    </div>
  );
}

function Skill() {
  const [activeTab, setActiveTab] = useState("skills");
  const items = activeTab === "skills" ? skillItems : toolItems;

  return (
    <section
      id="skills"
      className="relative -mx-6 bg-white border-b border-gray-300 px-6 py-16 md:-mx-8 md:px-8 dark:bg-gray-950 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 hidden bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.08),transparent_0_20%),radial-gradient(circle_at_70%_55%,rgba(99,102,241,0.08),transparent_0_22%)] dark:block" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.26em] text-indigo-500 dark:text-violet-400">
              // Skills & Tools
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
             What I Use 
              <span className="ml-3 pr-4 font-light italic  bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400  bg-clip-text text-transparent">
               to Build
              </span>
            </h2>
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] hover:from-indigo-600 hover:to-violet-600 dark:shadow-[0_24px_60px_-28px_rgba(99,102,241,0.75)]"
                  : "border border-slate-300 bg-white/70 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
              }`}
            >
              <Cpu size={16} />
              Skills
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("tools")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                activeTab === "tools"
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] hover:from-indigo-600 hover:to-violet-600 dark:shadow-[0_24px_60px_-28px_rgba(99,102,241,0.75)]"
                  : "border border-slate-300 bg-white/70 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
              }`}
            >
              <Wrench size={16} />
              Tools
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {items.map((item) => (
            <SkillCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
