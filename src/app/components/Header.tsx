import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ocicLogo from "../../assets/OCIC_Logo.png";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Sectors", to: "/sectors" },
  { label: "CSR", to: "/csr" },
  { label: "News & Media", to: "/news-media" },
  { label: "Careers", to: "/careers" },
];

const sectorItems = [
  { label: "Agriculture", icon: "🌾" },
  { label: "Airport", icon: "✈️" },
  { label: "Construction & Engineering", icon: "🏗️" },
  { label: "Distribution", icon: "📦" },
  { label: "Education", icon: "🎓" },
  { label: "Healthcare", icon: "🩺" },
  { label: "Hospitality", icon: "🏖️" },
  { label: "Leisure", icon: "🏛️" },
  { label: "Media", icon: "📡" },
  { label: "Real Estate", icon: "🏢" },
  { label: "Retail", icon: "🛍️" },
  { label: "Property Development", icon: "🏘️" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (to: string) => (e: React.MouseEvent) => {
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-white transition-shadow",
        isScrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-1 lg:pl-0 lg:pr-20 relative">
        {/* Logo - left */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <img src={ocicLogo} alt="OCIC" className="h-16 w-auto" />
        </Link>

        {/* Nav links - absolutely centered */}
        <nav className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.label === "Sectors" ? (
              /* Sectors dropdown */
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setIsSectorOpen(true)}
                onMouseLeave={() => setIsSectorOpen(false)}
              >
                <button
                  className={[
                    "flex items-center gap-1 text-lg font-medium transition-colors hover:text-[#B14240]",
                    location.pathname === item.to ? "text-[#B14240] opacity-100" : "text-[#212721] opacity-70 hover:opacity-100",
                  ].join(" ")}
                >
                  Sectors
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isSectorOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                {isSectorOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden z-50">
                    {sectorItems.map((sector, i) => (
                      <NavLink
                        key={sector.label}
                        to={`/sectors#${sector.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        onClick={() => setIsSectorOpen(false)}
                        className="flex items-center gap-4 px-5 py-3 text-sm italic text-[#212721] hover:bg-[#faf5f5] hover:text-[#B14240] transition-colors"
                        style={{ borderBottom: i < sectorItems.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}
                      >
                        <span className="text-lg w-7 flex-shrink-0 flex items-center justify-center" style={{ filter: 'sepia(1) saturate(3) hue-rotate(320deg) brightness(0.6)' }}>
                          {sector.icon}
                        </span>
                        <span>{sector.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick(item.to)}
                className={({ isActive }) =>
                  [
                    "text-lg font-medium text-[#212721] transition-opacity hover:text-[#B14240] opacity-80",
                    isActive ? "opacity-100" : "opacity-70",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Contact - right */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/contact"
            className="rounded-full bg-[#B14240] px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#212721] hover:bg-black/5"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-[#B14240] px-8 py-2 text-center text-lg font-medium text-white"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}