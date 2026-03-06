import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ocicLogo from "../../assets/OCIC_Logo.png";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Sectors", to: "/sectors" },
  { label: "CSR", to: "/csr" },
  { label: "News & Media", to: "/news-media" },
  { label: "Careers", to: "/careers" },
];

const sectorItems = [
  { label: "Agriculture", icon: "🌾", id: "agriculture" },
  { label: "Airport", icon: "✈️", id: "airport" },
  { label: "Construction & Engineering", icon: "🏗️", id: "construction-engineering" },
  { label: "Distribution", icon: "📦", id: "distribution" },
  { label: "Education", icon: "🎓", id: "education" },
  { label: "Healthcare", icon: "🩺", id: "healthcare" },
  { label: "Hospitality", icon: "🏖️", id: "hospitality" },
  { label: "Leisure", icon: "🏛️", id: "leisure" },
  { label: "Media", icon: "📡", id: "media" },
  { label: "Real Estate", icon: "🏢", id: "real-estate" },
  { label: "Retail", icon: "🛍️", id: "retail" },
  { label: "Property Development", icon: "🏘️", id: "property-development" },
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

  const handleSectorClick = (sectorId: string) => {
    setIsSectorOpen(false);
    
    if (location.pathname === '/sectors') {
      setTimeout(() => {
        const element = document.getElementById(sectorId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-white transition-all duration-300",
        isScrolled ? "shadow-lg border-b border-gray-100" : "shadow-none",
      ].join(" ")}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Gold accent bar on top when scrolled */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-1 origin-left"
        style={{ backgroundColor: '#DAB428' }}
      />

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 lg:pl-6 lg:pr-20 relative">
        {/* Logo - left */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={ocicLogo} 
            alt="OCIC" 
            className="h-14 w-auto" 
          />
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
                <NavLink
                  to={item.to}
                  onClick={handleNavClick(item.to)}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-1 text-base font-semibold transition-all duration-200 hover:text-[#DAB428] relative group",
                      isActive ? "text-[#A42A28]" : "text-gray-700",
                    ].join(" ")
                  }
                >
                  Sectors
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isSectorOpen ? "rotate-180" : ""}`}
                  />
                  {/* Underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAB428] transition-all duration-300 group-hover:w-full" />
                </NavLink>

                {/* Dropdown */}
                <AnimatePresence>
                  {isSectorOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                      onMouseEnter={() => setIsSectorOpen(true)}
                      onMouseLeave={() => setIsSectorOpen(false)}
                    >
                      <div className="w-80 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Gold top accent */}
                        <div className="h-1" style={{ backgroundColor: '#DAB428' }} />
                        
                        <div className="p-2">
                          {sectorItems.map((sector, i) => (
                            <NavLink
                              key={sector.label}
                              to={`/sectors#${sector.id}`}
                              onClick={() => handleSectorClick(sector.id)}
                              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#DAB428]/10 hover:to-transparent hover:text-[#A42A28] transition-all duration-200 rounded-md group"
                            >
                              <span className="text-xl w-8 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                                {sector.icon}
                              </span>
                              <span className="flex-1">{sector.label}</span>
                              <span className="w-0 h-0.5 bg-[#DAB428] group-hover:w-2 transition-all duration-200" />
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick(item.to)}
                className={({ isActive }) =>
                  [
                    "text-base font-semibold transition-all duration-200 hover:text-[#DAB428] relative group",
                    isActive ? "text-[#A42A28]" : "text-gray-700",
                  ].join(" ")
                }
              >
                {item.label}
                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAB428] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            )
          )}
        </nav>

        {/* Contact - right */}
        <div className="hidden md:flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <NavLink
              to="/contact"
              className="relative px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 overflow-hidden group"
              style={{ backgroundColor: '#A42A28' }}
            >
              {/* Hover effect overlay */}
              <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative">Contact</span>
            </NavLink>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((v) => !v)}
          style={{ color: '#A42A28' }}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100 bg-white md:hidden overflow-hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-[#DAB428]/10 hover:to-transparent hover:text-[#A42A28] transition-all rounded-md"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 block text-center px-8 py-3 font-bold text-white transition-all"
                  style={{ backgroundColor: '#A42A28' }}
                >
                  Contact
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}