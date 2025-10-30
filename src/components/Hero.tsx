export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path line */}
      <p className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight">
        ttiramisu@ttiramisu:/mnt/home
      </p>

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]">
        Jin&nbsp;Zijie
      </h1>

      {/* Terminal-style tagline */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono">
        <span className="text-yellow-400">~$</span>{" "}
        <span className="inline-block">
          Web Developer | Tech Enthusiast | Lifelong Learner
        </span>
        <span className="blinking-cursor text-yellow-400"> |</span>
      </p>

      {/* Accent underline */}
      <div className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"></div>
    </section>
  );
}
