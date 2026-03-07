import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { ArrowRight, Quote } from "lucide-react";

// Hero & Chairman
import canadiaTowerHeader from "../../assets/About-Page/canadia-tower-header.jpg";
import chairmanImg from "../../assets/About-Page/pung_kheav_se_ocic.webp";

// Timeline images
import soriya from "../../assets/About-Page/soriya.png";
import kohPichDev from "../../assets/About-Page/Koh-pich-dev.webp";
import cambodiaCulturalVilla from "../../assets/About-Page/Cambodia-Cultural-Villa.jpg";
import ccvDroneShot from "../../assets/About-Page/CCV-drone-shot.webp";
import kohPichBg from "../../assets/About-Page/Koh-Pich-img.webp";

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

export default function About() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section - Full Screen Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${kohPichDev}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#212721]/70 via-[#212721]/50 to-[#212721]/80" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-[#B14240] mx-auto mb-8"
            />
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              About OCIC
            </h1>
            <p className="text-lg lg:text-xl text-white/90 font-light tracking-wide">
              Building Cambodia's Future, One Project at a Time
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Chairman Message - Magazine Layout */}
      <AnimatedSection>
        <section className="py-32 bg-[#F8F7F5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left: Large Number & Label */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-[120px] lg:text-[140px] font-bold leading-none text-[#B14240]/10 mb-4">
                    01
                  </div>
                  <div className="border-l-4 border-[#B14240] pl-6">
                    <p className="text-xs tracking-[0.3em] text-black/40 uppercase mb-2">Leadership</p>
                    <h3 className="text-2xl font-semibold text-[#212721]">Chairman's Vision</h3>
                  </div>
                </motion.div>
              </div>

              {/* Middle: Image */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#B14240] transform rotate-3 rounded-2xl transition-transform group-hover:rotate-6" />
                  <img 
                    src={chairmanImg} 
                    alt="Chairman Pung Kheav Se" 
                    className="relative rounded-2xl w-full h-[550px] object-cover shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                    <p className="text-sm font-semibold text-[#B14240] mb-1">Chairman & Founder</p>
                    <h4 className="text-xl font-bold text-[#212721]">
                      Lok Neak Oknha Dr. Pung Kheav Se
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="sticky top-32">
                  <Quote size={40} className="text-[#B14240] mb-6" strokeWidth={1.5} />
                  <p className="text-xl lg:text-2xl font-light text-[#212721] leading-relaxed mb-8 italic">
                    "OCIC provides leadership, development capability, funding and finance solutions across the project cycle to support property and infrastructure development that drives progress."
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-3 text-base font-semibold text-[#B14240] group"
                  >
                    Read the Full Message
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision, Mission, Who We Are - Bold Typography */}
      <AnimatedSection>
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#212721] leading-tight mb-6">
                We are an ambitious team<br />with a simple purpose
              </p>
            </motion.div>

            <div className="space-y-24">
              {[
                { 
                  label: "VISION", 
                  text: "To contribute to Cambodia's transformation into a global economy through value-creation for stakeholders, innovative infrastructure and strategic partnerships.",
                  color: "#B14240"
                },
                { 
                  label: "MISSION", 
                  text: "To contribute to Cambodia's development and growth within ASEAN by building opportunities for Cambodians, particularly younger generations, through strategic investments.",
                  color: "#C8A84B"
                },
                { 
                  label: "VALUES", 
                  text: "We are driven by innovation and an entrepreneurial spirit, with trust and respect as our core values.",
                  color: "#212721"
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-black/10 pb-16"
                >
                  <div className="lg:col-span-3">
                    <h3 
                      className="text-3xl lg:text-4xl font-bold tracking-tight"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </h3>
                  </div>
                  <div className="lg:col-span-9">
                    <p className="text-lg lg:text-xl font-light text-[#212721] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Unparalleled Opportunities - Split Screen */}
      <AnimatedSection>
        <section className="py-0 bg-[#212721]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 lg:p-20 flex items-center"
            >
              <div>
                <div className="w-20 h-1 bg-[#B14240] mb-8" />
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Unparalleled<br />Opportunities
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Experience matters. Constantly innovating, at OCIC we are always seeking the most relevant and most innovative ways to partner with local and global businesses, entrepreneurs, corporations and governments to design, engineer, build, and deliver pioneering property and infrastructure projects.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-auto"
            >
              <img 
                src={canadiaTowerHeader} 
                alt="OCIC Opportunities" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#212721] to-transparent" />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Values - Card Grid with Hover Effects */}
      <AnimatedSection>
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#B14240]" />
                <p className="text-sm font-bold tracking-[0.3em] text-[#B14240] uppercase">What Drives Us</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#212721]">Our Core Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-[#F8F7F5] border border-black/10 rounded-2xl p-8 overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-[#B14240] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-black/10 flex items-center justify-center group-hover:border-[#B14240] group-hover:bg-[#B14240]/5 transition-all">
                      <img 
                        src={value.icon} 
                        alt={value.title} 
                        className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
                        style={{ filter: 'invert(20%) sepia(90%) saturate(1200%) hue-rotate(340deg) brightness(80%)' }} 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#212721] mb-2 group-hover:text-[#B14240] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm font-semibold text-black/40 mb-4 uppercase tracking-wider">
                    {value.subtitle}
                  </p>
                  <p className="text-base text-black/60 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B14240]/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline - Horizontal Scroll Style */}
      <AnimatedSection>
        <section className="py-32 bg-[#F8F7F5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#C8A84B]" />
                <p className="text-sm font-bold tracking-[0.3em] text-[#C8A84B] uppercase">Our Journey</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#212721]">Humble Beginnings</h2>
            </motion.div>

            <div className="space-y-32">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Side */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-[#B14240] opacity-10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform" />
                      <img 
                        src={item.image} 
                        alt={item.year} 
                        className="relative rounded-2xl w-full h-[400px] lg:h-[500px] object-cover shadow-xl"
                      />
                      {/* Year Badge */}
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B14240] rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-4xl font-bold text-white">{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="lg:px-12">
                      <p className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4">
                        {item.label}
                      </p>
                      <div className="w-16 h-1 bg-[#B14240] mb-6" />
                      <p className="text-lg lg:text-xl font-light text-[#212721] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner - Full Width Immersive */}
      <AnimatedSection>
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${kohPichBg}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B14240]/90 via-[#B14240]/80 to-[#B14240]/70" />
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-1 bg-white mx-auto mb-8" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Building Cambodia<br />Driving Development
              </h2>
              <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Infrastructure is fundamental to progress. OCIC works across the spectrum of the property and infrastructure development process based on local market needs, catalysing private sector participation and creating development impact.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-[#212721] bg-white hover:bg-[#C8A84B] hover:text-white transition-all text-base group"
              >
                Explore Our Impact
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
        </section>
      </AnimatedSection>
    </div>
  );
}