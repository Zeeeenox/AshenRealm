import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Features", "Metrics", "Pricing", "About"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#09090f]/90 backdrop-blur border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary inline-block" />
          <span
            className="text-foreground tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem" }}
          >
            Lumina
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
            Sign in
          </button>
          <button className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:opacity-90 transition-opacity">
            Get started
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#09090f] border-b border-border px-6 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity w-full">
            Get started
          </button>
        </div>
      )}
    </header>
  );
}
