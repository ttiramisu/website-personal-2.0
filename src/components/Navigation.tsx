import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["About", "Education", "Projects", "Resume"];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navHeight = document.querySelector("nav")?.clientHeight || 0;
    const y =
      el.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: y, behavior: "smooth" });

    // 🔑 update hash WITHOUT reload
    window.history.replaceState(null, "", `/#${id}`);
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/92 border-b border-yellow-600/30 font-mono text-yellow-400">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-bold text-lg"
        >
          ttiramisu
        </a>

        <ul className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.toLowerCase());
                }}
                className="hover:text-yellow-300"
              >
                $ {item.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-2 text-sm text-yellow-400 font-mono border-t border-yellow-600/20 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(255,0,0,0.6)]"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400/80 shadow-[0_0_4px_rgba(255,255,0,0.6)]"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_4px_rgba(0,255,0,0.6)]"></span>
        </div>
        <span className="tracking-tight text-xs">
          <span className="font-bold">ttiramisu@ttiramisu</span>:/mnt/personal
        </span>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 py-4 space-y-3 bg-black border-t border-yellow-600/20">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.toLowerCase());
                }}
                className="block hover:text-yellow-300"
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
