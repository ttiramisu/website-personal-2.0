export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/90 text-yellow-400 font-mono px-6 py-8 select-none flex flex-col md:flex-row justify-between items-center border-t border-yellow-600/20">
      {/* Left side */}
      <div className="text-left mb-4 md:mb-0">
        <p className="tracking-tight">ttiramisu</p>
        <p className="text-gray-300 text-sm tracking-tight">
          © {currentYear} Zijie. All rights reserved.
        </p>
      </div>

      {/* Right side */}
      <div className="text-right text-sm tracking-tight">
        Designed & Built with <span className="text-red-500">♥</span> using Vite
      </div>
    </footer>
  );
}
