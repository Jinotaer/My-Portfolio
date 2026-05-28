import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Send, ArrowUpRight, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "Location",
    value: "Valencia City, Bukidnon, Philippines",
    href: "https://maps.google.com/?q=Valencia+City+Bukidnon+Philippines",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "jjane0248@gmail.com",
    href: "mailto:jjane0248@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 997 588 0520",
    href: "tel:+639975880520",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jinotaer",
    href: "https://www.linkedin.com/in/jino-taer-81a51a412",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Jinotaer",
    href: "https://github.com/Jinotaer",
    icon: FaGithub,
  },
];

const web3formsAccessKey =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

const initialFormData = {
  name: "",
  email: "",
  opportunity: "",
  context: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  useEffect(() => {
    if (!showThankYouModal) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowThankYouModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showThankYouModal]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nativeFormData = new FormData(event.currentTarget);
    const botcheck = nativeFormData.get("botcheck")?.toString().trim() ?? "";

    if (botcheck) {
      setSubmitState({
        status: "idle",
        message: "",
      });
      return;
    }

    if (!web3formsAccessKey) {
      setSubmitState({
        status: "error",
        message:
          "Add your Web3Forms access key in VITE_WEB3FORMS_ACCESS_KEY to enable email delivery.",
      });
      return;
    }

    setSubmitState({
      status: "submitting",
      message: "Sending your message...",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: formData.name,
          email: formData.email,
          opportunity: formData.opportunity,
          context: formData.context,
          message: formData.message,
          subject: `Portfolio inquiry from ${formData.name || "website visitor"}`,
          from_name: "Jino Portfolio",
          replyto: formData.email,
          botcheck,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.success) {
        const errorMessage =
          payload?.message ||
          payload?.errors?.[0]?.message ||
          "Message could not be sent. Please try again in a moment.";

        throw new Error(errorMessage);
      }

      setFormData(initialFormData);
      setSubmitState({
        status: "success",
        message: "",
      });
      setShowThankYouModal(true);
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Message could not be sent. Please try again later.",
      });
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative isolate mx-auto mt-20 max-w-7xl overflow-hidden px-6 py-16 text-slate-900 transition-colors dark:text-white md:px-10 md:py-20"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-indigo-500 dark:text-violet-400">
              // Contact
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
              Let&apos;s build
              <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text pb-2 font-light italic text-transparent">
                something great
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[1.04rem] leading-8 text-slate-600 dark:text-slate-400">
              Open to project collaborations, frontend development work, and
              opportunities to build practical web solutions. If you have
              something in mind, feel free to send the details and I&apos;ll get
              back to you.
            </p>

            <div className="mt-10 space-y-2">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between border-b border-slate-200 py-5 transition hover:border-indigo-300 dark:border-white/8 dark:hover:border-indigo-400/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition group-hover:border-indigo-300 group-hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:group-hover:border-indigo-400/30 dark:group-hover:text-white">
                        <Icon size={22} className="text-current" />
                      </div>

                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-lg font-medium text-slate-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-300"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/85 px-5 py-5 text-slate-600 dark:border-white/8 dark:bg-white/[0.03] dark:text-slate-300">
              <div className="flex items-center gap-3">
                <span className="h-2 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                <p className="text-base">
                  <span className="font-semibold text-slate-950 dark:text-white">
                    Currently available for new projects.
                  </span>{" "}
                  For urgent matters, email is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="relative mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.25)] dark:border-white/8 dark:bg-white/[0.03] dark:shadow-none"
            >
              <div
                className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Your Name *
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Jino Taer"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500"
                />
              </label>

              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Email Address *
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Opportunity Type
              </span>
              <input
                name="opportunity"
                type="text"
                placeholder="Web Development, Project Collaboration, etc."
                value={formData.opportunity}
                onChange={handleChange}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Company / Context
              </span>
              <input
                name="context"
                type="text"
                placeholder="School, startup, agency, or project context"
                value={formData.context}
                onChange={handleChange}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Message *
              </span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the role, project, timeline, or what kind of help you need..."
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

              <div aria-live="polite">
                {submitState.message ? (
                  <p
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      submitState.status === "error"
                        ? "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300"
                        : "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                    }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}

                {!web3formsAccessKey ? (
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                    Web3Forms is not configured yet. Add{" "}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700 dark:bg-white/8 dark:text-slate-200">
                      VITE_WEB3FORMS_ACCESS_KEY
                    </code>{" "}
                    to your local env file.
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={submitState.status === "submitting"}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] transition hover:from-indigo-600 hover:to-violet-600 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {submitState.status === "submitting"
                  ? "Sending..."
                  : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {showThankYouModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-thank-you-title"
          onClick={() => setShowThankYouModal(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-[#0c0f18] dark:text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowThankYouModal(false)}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-indigo-400/40 dark:hover:text-white"
              aria-label="Close thank-you message"
            >
              <X size={16} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-[0_20px_40px_-18px_rgba(99,102,241,0.9)]">
              <Send size={20} />
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-500 dark:text-violet-400">
              // Message sent
            </p>

            <h3
              id="contact-thank-you-title"
              className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white"
            >
              Thanks, your message is on the way.
            </h3>

            <p className="mt-4 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-400">
              I received your inquiry and will review it as soon as possible.
              If it is urgent, you can still reach me directly by email.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setShowThankYouModal(false)}
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(99,102,241,0.9)] transition hover:from-indigo-600 hover:to-violet-600"
              >
                Close
              </button>

              <a
                href="mailto:jjane0248@gmail.com"
                className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-indigo-400/40 dark:hover:text-white"
              >
                Email directly
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Contact;
