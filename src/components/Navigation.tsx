import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Education", "Projects", "Resume"];

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Navbar height to offset
    const navHeight = document.querySelector("nav")?.clientHeight || 0;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/92 border-b border-yellow-600/30 backdrop-blur-md font-mono text-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.15)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg md:text-xl font-bold tracking-tight hover:text-yellow-300 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          ttiramisu
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.toLowerCase());
                }}
                className="relative group hover:text-yellow-300 transition-colors"
              >
                <span className="select-none">$</span> {item.toLowerCase()}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Terminal path below nav */}
      <div className="max-w-6xl mx-auto px-6 py-2 text-sm text-yellow-400 font-mono border-t border-yellow-600/20 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(255,0,0,0.6)]"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400/80 shadow-[0_0_4px_rgba(255,255,0,0.6)]"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_4px_rgba(0,255,0,0.6)]"></span>
        </div>
        <span className="tracking-tight text-xs">
          <span className="font-bold">ttiramisu@ttiramisu</span>:/mnt/website
        </span>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-6 py-4 text-sm border-t border-yellow-600/20 bg-black/95 animate-slideDown">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.toLowerCase());
                }}
                className="block hover:text-yellow-300 transition-colors"
              >
                $ {item.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
