import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface GithubPushEvent {
  type: "PushEvent";
  repo: { name: string };
  created_at: string;
  payload: { commits?: Array<{ message?: string }> };
}

interface GithubPublicEvent {
  type: string;
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [commitInfo, setCommitInfo] = useState<{
    repo: string;
    message: string;
    timeAgo: string;
  } | null>(null);

  // Track mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Fetch latest commit info
  useEffect(() => {
    async function fetchLatestPush() {
      try {
        const res = await fetch(
          "https://api.github.com/users/ttiramisu/events/public"
        );
        if (!res.ok) return;

        const events = await res.json();
        if (!Array.isArray(events)) return;

        const pushEvent = (events as GithubPublicEvent[]).find(
          (e): e is GithubPushEvent => e.type === "PushEvent"
        );

        if (pushEvent) {
          const repoName = pushEvent.repo.name;
          const commitMsg =
            pushEvent.payload.commits?.[0]?.message || "Committed changes";
          const date = new Date(pushEvent.created_at);
          const timeAgo = timeSince(date);

          setCommitInfo({ repo: repoName, message: commitMsg, timeAgo });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub events", error);
      }
    }

    fetchLatestPush();
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    // offset tooltip slightly to the side and below cursor
    mouseX.set(e.clientX + 40);
    mouseY.set(e.clientY - 20);
  }

  function timeSince(date: Date) {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    const intervals = [
      [31536000, "year"],
      [2592000, "month"],
      [86400, "day"],
      [3600, "hour"],
      [60, "minute"],
    ] as [number, string][];
    for (const [sec, label] of intervals) {
      const count = Math.floor(seconds / sec);
      if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""}`;
    }
    return "just now";
  }

  return (
    <section
      id="home"
      className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-10 md:pt-16"
    >
      <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="section-kicker"
          >
            <Sparkles size={14} />
            Design-first portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl"
          >
            Jin Zijie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="section-copy max-w-2xl text-lg"
          >
            I build clean, thoughtful websites and digital experiences with a
            focus on clarity, polish, and practical creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="primary-button">
              View featured work
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {["Web development", "Product thinking", "Visual design"].map(
              (item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          className="soft-card relative overflow-hidden rounded-[2rem] p-5 md:p-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-indigo-50/70" />
          <div className="relative">
            <img
              src="me.jpg"
              alt="Jin Zijie"
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />

            {isHovered && commitInfo && (
              <motion.div
                style={{
                  position: "fixed",
                  left: springX,
                  top: springY,
                  pointerEvents: "none",
                  transform: "translateY(-50%)",
                }}
                initial={{ opacity: 0, x: 10, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="z-50 max-w-xs rounded-2xl border border-slate-200 bg-white/95 p-4 text-left shadow-2xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Latest GitHub activity
                </p>
                <p className="mt-2 text-sm font-medium text-slate-950">
                  {commitInfo.repo}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {commitInfo.message}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {commitInfo.timeAgo === "just now"
                    ? commitInfo.timeAgo
                    : `${commitInfo.timeAgo} ago`}
                </p>
              </motion.div>
            )}

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Role
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Web developer
                </p>
              </div>
              <div className="rounded-2xl bg-white/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Elegant, usable interfaces
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
