const cols = [
  {
    heading: "Product",
    links: ["Features", "Changelog", "Roadmap", "Pricing"],
  },
  {
    heading: "Developers",
    links: ["Documentation", "API reference", "SDKs", "Status"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-5 rounded-full bg-primary inline-block" />
              <span
                className="text-foreground"
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}
              >
                Lumina
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px]">
              The analytics layer that moves as fast as your product does.
            </p>
          </div>

          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground/50 text-xs">
            © 2026 Lumina, Inc. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground/50">
            <a href="#" className="hover:text-muted-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
