import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

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
        const events = await res.json();

        const pushEvent = events.find((e: any) => e.type === "PushEvent");
        if (pushEvent) {
          const repoName = pushEvent.repo.name;
          const commitMsg =
            pushEvent.payload.commits?.[0]?.message || "Committed changes";
          const date = new Date(pushEvent.created_at);
          const timeAgo = timeSince(date);

          setCommitInfo({ repo: repoName, message: commitMsg, timeAgo });
        }
      } catch (err) {
        console.error("Failed to fetch GitHub events", err);
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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black via-black/90 to-black/90 select-none overflow-hidden"
    >
      {/* Terminal-style path line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/home
      </motion.p>

      {/* Profile picture with hover */}
      <motion.div
        className="relative w-40 h-40 md:w-52 md:h-52 mb-6 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="me.jpg" // replace with your actual image
          alt="Jin Zijie"
          className="w-full h-full object-cover rounded-full border-2 border-yellow-400 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,0,0.3)] hover:drop-shadow-[0_0_20px_rgba(255,255,0,0.2)]"
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
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="bg-black/90 text-yellow-300 font-mono p-4 rounded-lg border border-yellow-600 shadow-2xl z-50 max-w-xs text-left"
          >
            <p className="text-yellow-400 text-xs">Latest GitHub commit: </p>
            <p>
              <span className="text-yellow-400">$</span> {commitInfo.repo}
            </p>
            <p className="text-gray-300 text-sm truncate">
              {commitInfo.message}
            </p>
            <p className="text-yellow-400 text-xs mt-2">
              {commitInfo.timeAgo === "just now"
                ? commitInfo.timeAgo
                : `${commitInfo.timeAgo} ago`}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        Jin&nbsp;Zijie
      </motion.h1>

      {/* Terminal-style tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono"
      >
        <span className="text-yellow-400">~$</span>{" "}
        <span className="inline-block">
          Web Developer | Tech Enthusiast | Lifelong Learner
        </span>
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70 origin-left"
      ></motion.div>
    </section>
  );
}
