import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";

// Hero & Chairman
import canadiaTowerHeader from "../../assets/About-Page/canadia-tower-header.png";
import chairmanImg from "../../assets/About-Page/pung_kheav_se_ocic.jpg";

// Timeline images
import soriya from "../../assets/About-Page/soriya.png";
import kohPichDev from "../../assets/About-Page/Koh-pich-dev.jpg";
import cambodiaCulturalVilla from "../../assets/About-Page/Cambodia-Cultural-Villa.jpg";
import ccvDroneShot from "../../assets/About-Page/CCV-drone-shot.jpg";
import kohPichBg from "../../assets/About-Page/Koh-Pich-img.jpg";

// Core value icons
import trustIcon from "../../assets/About-Page/trust.png";
import respectIcon from "../../assets/About-Page/respect.png";
import innovativeIcon from "../../assets/About-Page/innovative.png";
import entrepreneurIcon from "../../assets/About-Page/entreprenure.png";
import csrIcon from "../../assets/About-Page/csr.png";
import integrityIcon from "../../assets/About-Page/integrity.png";

const coreValues = [
  {
    title: "Trust",
    subtitle: "Building Trust",
    description: "We believe that building trust with our partners, investors, stakeholders, and colleagues is a key to ensuring a long-lasting growth of the Company.",
    icon: trustIcon,
  },
  {
    title: "Respect",
    subtitle: "Valuable Partnerships",
    description: "We respect and give value to those we make business with, people and colleagues we work with and the contributions they make to the company.",
    icon: respectIcon,
  },
  {
    title: "Innovative",
    subtitle: "Beyond the Present",
    description: "We think beyond the present, always identify new ideas and diligently driving new innovative ways of doing business with our partners.",
    icon: innovativeIcon,
  },
  {
    title: "Entrepreneurial",
    subtitle: "Calculating Risk",
    description: "We believe in boldly taking calculated risks, engrained in performance-driven culture which encourages leadership, creativity and accountability wherein everyone is expected to share an owner's mentality and take personal responsibility for delivering value for partners and investors.",
    icon: entrepreneurIcon,
  },
  {
    title: "Social Responsibility",
    subtitle: "Making an Impact",
    description: "We are committed to meeting the highest standards of corporate citizenship by protecting the health and safety of our partners, investors, employees, through safeguarding the environment and creating a long-lasting positive impact in the communities where we do business.",
    icon: csrIcon,
  },
  {
    title: "Integrity",
    subtitle: "Integrity",
    description: "We act justly, accordingly, and openly in everything we do.",
    icon: integrityIcon,
  },
];

const timeline = [
  {
    year: "2000",
    label: "WHERE IT ALL STARTED",
    image: soriya,
    description: "OCIC Started operations in real estate and property development with numerous public and private infrastructure planned and developed in the years that followed.",
  },
  {
    year: "2003",
    label: "EXPANDING HORIZONS",
    image: kohPichDev,
    description: "OCIC expanded its portfolio with new commercial developments and retail spaces, establishing a strong presence across Cambodia's growing urban centres.",
  },
  {
    year: "2010",
    label: "A DECADE OF GROWTH",
    image: cambodiaCulturalVilla,
    description: "A milestone decade brought diversification into education, healthcare, and hospitality — cementing OCIC's role as Cambodia's leading integrated conglomerate.",
  },
  {
    year: "2020",
    label: "GATEWAY TO THE WORLD",
    image: ccvDroneShot,
    description: "Cambodia's new international gateway, built to strengthen global connectivity and support long-term aviation growth through modern design, efficiency, and capacity.",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <section className="relative overflow-hidden min-h-[320px] flex items-center bg-[#EEF3F8]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('${canadiaTowerHeader}')` }}
        />
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20 py-20 w-full text-center relative z-10">
          <FadeUp>
            <h1 className="text-5xl lg:text-6xl font-semibold text-[#212721]">About Us</h1>
            <div className="mx-auto mt-4 w-16 h-[3px] rounded-full" style={{ backgroundColor: '#B14240' }} />
          </FadeUp>
        </div>
      </section>

      {/* Chairman Message */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeUp>
                <p className="text-sm font-semibold tracking-widest text-black/40 uppercase mb-4">A Message from our Chairman</p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721] mb-6 leading-snug">
                  Lok Neak Oknha Dr. Pung Kheav Se
                </h2>
                <p className="text-base lg:text-lg text-black/60 leading-relaxed mb-8">
                  OCIC provides leadership, development capability, funding and finance solutions across the project cycle to support property and infrastructure development that drives progress.
                </p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="inline-block px-8 py-3 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: '#B14240' }}
                >
                  Read Our Chairman's Message
                </motion.a>
              </FadeUp>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="overflow-hidden rounded-2xl shadow-xl"
              >
                <img src={chairmanImg} alt="Chairman Pung Kheav Se" className="w-full h-[480px] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quote + Vision / Mission / Who We Are */}
      <AnimatedSection>
        <section className="py-20 lg:py-24 border-t border-black/5">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <p className="text-2xl lg:text-3xl font-semibold text-center text-[#212721] mb-16">
                "We are an ambitious team with a simple purpose"
              </p>
            </FadeUp>
            <div className="space-y-10">
              {[
                { label: "VISION", text: "To be Cambodia's developer and investor of choice, and a leader propelling the country and contributing to Cambodia's prominence in the region." },
                { label: "MISSION", text: "To nurture the younger generation, by empowering them and providing the tools to invest in their personal growth with shared values, together for Cambodia." },
                { label: "WHO WE ARE", text: "OCIC is one of Cambodia's leading diversified conglomerates. OCIC Group is a group of companies and businesses that are affiliated to OCIC and includes a business portfolio in property development, real estate, education, healthcare, airport, construction & engineering, retail, hospitality to media and leisure. OCIC's major developments include the Techo International Airport, Russey Keo Bridge, Koh Norea Bridge, Koh Pich, Norea City, Chroy Changvar Satellite City, Bassac Garden City, Chamkarmon City and Olympia City." },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                    <div className="lg:col-span-2">
                      <span className="text-sm font-bold tracking-widest" style={{ color: '#B14240' }}>{item.label}</span>
                    </div>
                    <div className="lg:col-span-10">
                      <p className="text-base text-black/70 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="mt-10 border-t border-black/5" />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Unparalleled Opportunities */}
      <AnimatedSection>
        <section className="py-16 lg:py-20 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">Unparalleled Opportunities</h2>
                <p className="text-base text-black/60 leading-relaxed">
                  Experience matters. Constantly innovating, at OCIC we are always seeking the most relevant and most innovative ways to partner with local and global businesses, entrepreneurs, corporations and governments to design, engineer, build, and deliver pioneering property and infrastructure projects.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-14">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>What drives us</p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">Our Core Values</h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: (i % 2) * 0.1 }}
                  className="rounded-2xl border border-black/8 bg-[#F9F9F9] p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-black/10 flex items-center justify-center bg-white">
                      <img src={value.icon} alt={value.title} className="w-9 h-9 object-contain" style={{ filter: 'invert(20%) sepia(90%) saturate(1200%) hue-rotate(340deg) brightness(80%)' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#A42A28' }}>{value.title}</h3>
                      <p className="text-sm text-black/40">{value.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline - Our Story */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 border-t border-black/5">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>Our Story</p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">Humble Beginnings</h2>
              </div>
            </FadeUp>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[33%] top-0 bottom-0 w-[2px] bg-black/10 hidden lg:block" />

              <div className="space-y-20">
                {timeline.map((item) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                  >
                    <div className="lg:col-span-4 relative">
                      <p className="text-xs font-bold tracking-widest text-black/30 uppercase mb-2">{item.label}</p>
                      <div className="flex items-center">
                        <span className="text-5xl lg:text-6xl font-bold" style={{ color: '#B14240' }}>{item.year}</span>
                        <div className="hidden lg:block w-3 h-3 rounded-full bg-[#212721] ml-auto mr-[-6px] relative z-10 flex-shrink-0" />
                      </div>
                    </div>
                    <div className="lg:col-span-8 lg:pl-8">
                      <div className="overflow-hidden rounded-xl mb-4 border border-black/5">
                        <img src={item.image} alt={item.year} className="w-full h-64 object-cover" />
                      </div>
                      <p className="text-base text-black/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection>
        <section className="relative overflow-hidden py-20 mx-6 lg:mx-20 rounded-2xl mb-20">
          {/* Background image with zoom-in on scroll */}
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${kohPichBg}')` }}
          />
          {/* Red overlay fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(164, 42, 40, 0.80)' }}
          />
          {/* Content */}
          <div className="relative text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Building Cambodia Driving Development
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              className="text-base text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Infrastructure is fundamental to progress. OCIC works across the spectrum of the property and infrastructure development process based on local market needs, catalysing private sector participation and creating development impact.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-block px-10 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: '#C8A84B' }}
            >
              Find out More
            </motion.a>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}