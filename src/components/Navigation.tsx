import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    // { label: "Writeups", id: "writeups" },
  ];

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
    <nav className="nav-shell fixed left-0 top-0 z-50 w-full text-slate-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="text-sm font-semibold tracking-[0.2em] text-slate-950 uppercase"
        >
          ttiramisu
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="nav-link text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <ul
          id="mobile-nav"
          className="border-t border-slate-200 bg-white/95 px-6 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="block py-2 text-slate-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
