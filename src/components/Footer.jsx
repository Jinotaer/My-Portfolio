const footerLinks = [
  { label: "Download CV", href: "#" },

  {
    label: "GitHub",
    href: "https://github.com/jino-taer",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jino-taer-81a51a412",
  },
  { label: "Email", href: "mailto:jjane0248@gmail.com" },
  // { label: "Sitemap", href: "#top" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 font-mono text-[11px] text-gray-500 transition-colors dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left">
          &copy; {year} Jino Taer - All rights reserved.
        </p>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="transition hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-center md:text-right">
          Built with React 19 - Tailwind CSS - Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;
