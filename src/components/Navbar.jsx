import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECTS", id: "projects" },
  { label: "CERTIFICATIONS", id: "certifications" },
  { label: "CONTACT", id: "contact" },
];

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}


function Navbar() {   
  const [theme, setTheme] = useState(getPreferredTheme);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateActiveLink = () => {
      const probeLine = window.scrollY + window.innerHeight * 0.35;
      let currentSection = navLinks[0].id;

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (probeLine >= top && probeLine < bottom) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    window.addEventListener("resize", closeMenuOnDesktop);

    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-50/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-950/90"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-500 text-sm font-semibold text-indigo-600 transition-colors dark:border-indigo-400 dark:text-violet-400">
            JT
          </div>

          <h1 className="text-lg font-bold text-gray-900 transition-colors dark:text-slate-100">
            jino
            <span className="text-indigo-600 dark:text-violet-400">.dev</span>
          </h1>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`border-b-2 pb-1 text-xs font-semibold tracking-wider transition-colors duration-200 ${
                  activeLink === link.id
                    ? "border-indigo-600 text-indigo-600 dark:border-violet-400 dark:text-white"
                    : "border-transparent text-gray-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>

              {(link.label === "BLOG" || link.label === "CODED") && (
                <span className="absolute -right-6 -top-2 rounded bg-indigo-100 px-1 text-[8px] font-bold text-indigo-600 dark:bg-indigo-500/15 dark:text-violet-300">
                  NEW
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {/* <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            open_to_work
          </div> */}

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-lg border border-gray-300 bg-white/70 p-2 text-gray-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg border border-gray-300 bg-white/70 p-2 text-gray-700 transition-colors dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-gray-50/95 px-6 py-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold tracking-[0.14em] transition-colors ${
                  activeLink === link.id
                    ? "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-white"
                    : "border-gray-200 bg-white/80 text-gray-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 p-3 text-gray-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
