import { Linkedin, Facebook, Instagram, Youtube, Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ocicLogo from "../../assets/OCIC_Logo.png";
import canadiaLogo from "../../assets/CIG_Logo.png";

const explore = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "CSR", to: "/csr" },
  { label: "News & Media", to: "/news-media" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" }
];

const sectorsLeft = [
  { label: "Agriculture", to: "/sectors#agriculture" },
  { label: "Airport", to: "/sectors#airport" },
  { label: "Construction & Engineering", to: "/sectors#construction-engineering" },
  { label: "Distribution", to: "/sectors#distribution" },
  { label: "Education", to: "/sectors#education" },
  { label: "Healthcare", to: "/sectors#healthcare" }
];

const sectorsRight = [
  { label: "Hospitality", to: "/sectors#hospitality" },
  { label: "Leisure", to: "/sectors#leisure" },
  { label: "Media", to: "/sectors#media" },
  { label: "Real Estate", to: "/sectors#real-estate" },
  { label: "Retail", to: "/sectors#retail" },
  { label: "Property Development", to: "/sectors#property-development" }
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Gold accent bar */}
      <div className="h-1" style={{ backgroundColor: '#DAB428' }} />

      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Logo Column - Reduced */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {/* Logos */}
              <div className="space-y-3">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src={canadiaLogo} 
                  className="h-12 object-contain object-left" 
                  alt="Canadia Logo" 
                />
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src={ocicLogo} 
                  className="h-16 object-contain object-left" 
                  alt="OCIC Logo" 
                />
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                Building Cambodia's future through diversified investments and sustainable development across multiple sectors.
              </p>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-wider mb-4" style={{ color: '#A42A28' }}>
              EXPLORE
            </h3>
            <ul className="space-y-2">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.to}
                    className="text-xs text-gray-600 hover:text-[#A42A28] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" style={{ color: '#DAB428' }} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Columns */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold tracking-wider mb-4" style={{ color: '#A42A28' }}>
              SECTORS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-2">
                {sectorsLeft.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.to}
                      className="text-xs text-gray-600 hover:text-[#A42A28] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#DAB428] transition-colors duration-200" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {sectorsRight.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.to}
                      className="text-xs text-gray-600 hover:text-[#A42A28] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#DAB428] transition-colors duration-200" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info & Social - Right Side */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider mb-4" style={{ color: '#A42A28' }}>
              FOLLOW US
            </h3>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  aria-label={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#DAB428] hover:bg-[#DAB428] hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#DAB428' }} />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone size={14} className="flex-shrink-0" style={{ color: '#DAB428' }} />
                <span>+855 (0) 23 XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Mail size={14} className="flex-shrink-0" style={{ color: '#DAB428' }} />
                <span>info@ocic.com.kh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - More Compact */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>
              Copyright © {new Date().getFullYear()} Overseas Cambodian Investment Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-[#A42A28] transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-[#A42A28] transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/sitemap" className="hover:text-[#A42A28] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#A42A28] via-[#DAB428] to-[#A42A28]" />
    </footer>
  );
}