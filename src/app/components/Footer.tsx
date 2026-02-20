import { Linkedin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import ocicLogo from "../../assets/OCIC_Logo.png";
import canadiaLogo from "../../assets/CIG_Logo.png";

const explore = ["Home", "About", "CSR", "News & Media", "Careers", "Contact"];
const sectorsLeft = ["Agriculture", "Airport", "Construction & Engineering", "Distribution", "Education", "Healthcare"];
const sectorsRight = ["Hospitality", "Leisure", "Media", "Real Estate", "Retail"];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-20 lg:px-20">
        <div className="flex justify-between gap-8">

          {/* Logo Column */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-start gap-6">
              <img src={canadiaLogo} className="w-72 h-16 object-contain object-left" alt="Canadia Logo" />
              <img src={ocicLogo} className="w-72 h-24 object-contain object-left" alt="OCIC Logo" />
            </div>
            <p className="mt-10 text-xs text-black/40">Copyright © {new Date().getFullYear()} OCIC Group. All rights reserved.</p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-base font-bold tracking-wide text-[#B14240]">EXPLORE</h3>
            <ul className="mt-4 space-y-3 text-base text-black/60">
              {explore.map((item) => (
                <li key={item} className="hover:text-[#B14240] cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <h3 className="text-base font-bold tracking-wide text-[#B14240]">SECTORS</h3>
            <div className="mt-4 flex gap-32">
              <ul className="space-y-3 text-base text-black/60">
                {sectorsLeft.map((item) => (
                  <li key={item} className="hover:text-[#B14240] cursor-pointer">{item}</li>
                ))}
              </ul>
              <ul className="space-y-3 text-base text-black/60">
                {sectorsRight.map((item) => (
                  <li key={item} className="hover:text-[#B14240] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex items-center justify-end gap-3">
              <a aria-label="LinkedIn" href="#" className="rounded-full border border-black/15 p-3 text-black/60 hover:text-[#B14240]"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="#" className="rounded-full border border-black/15 p-3 text-black/60 hover:text-[#B14240]"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="rounded-full border border-black/15 p-3 text-black/60 hover:text-[#B14240]"><Instagram className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="#" className="rounded-full border border-black/15 p-3 text-black/60 hover:text-[#B14240]"><Youtube className="h-5 w-5" /></a>
              <a aria-label="Telegram" href="#" className="rounded-full border border-black/15 p-3 text-black/60 hover:text-[#B14240]"><Send className="h-5 w-5" /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}