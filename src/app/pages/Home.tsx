import { useState } from "react";
import type React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import TechoAirport from "../../assets/TIA_Sunset_V2.jpg";
import kohNoreaBridge from "../../assets/Koh_Norea_Bridge.jpg";
import CIS from "../../assets/CIS.jpg";
import construction from "../../assets/International_Construction.jpg";
import hospitality from "../../assets/Dara_Hotel.avif";
import environment from "../../assets/environment.jpg";
import running from "../../assets/Koh-pich-running.jpg";
import IndependenceHotel from "../../assets/independence-hotel.jpg";
import airport from "../../assets/Airport.jpg";
import skyline from "../../assets/koh-pich-skyline.jpg";
import Tower from "../../assets/cnd_tower.jpg";
import norea from "../../assets/norea-bay-view.jpg";
import IphoneMockup from "../../assets/Iphone-Mockup.png";

import integrityIcon from "../../assets/icons/integrity.png";
import csrIcon from "../../assets/icons/csr.png";
import entreIcon from "../../assets/icons/entre.png";
import innovationIcon from "../../assets/icons/innovation.png";
import respectIcon from "../../assets/icons/respect.png";
import trustIcon from "../../assets/icons/trust.png";

import { Building2, GraduationCap, HardHat, Hotel, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const carouselItems = [
    {
      image: IndependenceHotel,
      title: "INDEPENDENCE HOTEL BY DARA",
      description: "A beachfront hotel in Sihanoukville developed by Dara Hotels Group, offering guest rooms, dining facilities, and leisure amenities that support tourism and coastal travel in the city.",
    },
    {
      image: airport,
      title: "Techo International Airport",
      description: "Techo International Airport, developed by Cambodia Airport Investment Co., Ltd. (CAIC), is located approximately 20 kilometers south of Phnom Penh and spans an area of around 2,600 hectares.",
    },
    {
      image: skyline,
      title: "Koh Pich",
      description: "Located along Bassac River in Phnom Penh, Koh Pich is a mixed-use island district developed to support urban living, business activity, and public events within a connected city environment.​",
    },
    {
      image: Tower,
      title: "Canadia Tower",
      description: "Launched in 2009, Canadia Tower stood as one of the city's first modern office towers, reflecting rising demand for structured commercial space and contributing to Phnom Penh's evolving business landscape.",
    },
    {
      image: norea,
      title: "Norea Bay View",
      description: "Norea City is a large-scale city development by Overseas Cambodian Investment Corporation (OCIC). Located in the heart of Phnom Penh, the development spans approximately 125 hectares and is designed to support the city's expansion through balanced urban planning, improved accessibility, and integrated mixed-use environments.​",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const coreValues = [
    { icon: integrityIcon, title: "INTEGRITY", description: "At the very heart of the things we do are decisions we provide for you." },
    { icon: csrIcon, title: "CSR", description: "A lifelong commitment to our communities, giving back and enriching lives." },
    { icon: entreIcon, title: "ENTREPRENEURIAL", description: "Advancing ideas and opportunities together with research, growth." },
    { icon: innovationIcon, title: "INNOVATION", description: "Seeking global best practices, enhancing services for customer satisfaction." },
    { icon: respectIcon, title: "RESPECT", description: "Mindful of our commitment to our customers, partners and colleagues." },
    { icon: trustIcon, title: "TRUST", description: "Listening to our customers, working together towards a shared goal." },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden" id="about">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${TechoAirport}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
          {/* Decorative Gold Corner Accents */}
          <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-[#DAB428] to-transparent" />
          <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#DAB428] to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-24 bg-gradient-to-t from-[#DAB428] to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-l from-[#DAB428] to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 mb-8"
              style={{ backgroundColor: '#DAB428' }}
            />

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl mb-6 text-white leading-tight"
              style={{ fontWeight: 600 }}
            >
              Building Opportunities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              We're dedicated to supporting Cambodia's aspiring youth and entrepreneurs in building sustainable ventures across the nation and the region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#sectors"
                onClick={(e) => handleNavClick(e, 'sectors')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-base font-semibold transition-all"
                style={{ backgroundColor: '#A42A28' }}
              >
                Explore Our Sectors
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#DAB428' }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values - Enhanced with animations */}
      <AnimatedSection>
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#DAB428' }}>
                OUR FOUNDATION
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#212121' }}>
                Driven by <span style={{ color: '#DAB428' }}>Excellence</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center group relative"
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{ backgroundColor: '#DAB428' }}
                  />

                  <div className="relative">
                    {/* Icon container with advanced animation */}
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 flex items-center justify-center group-hover:border-[#DAB428] group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.img 
                          src={value.icon} 
                          alt={value.title} 
                          className="w-12 h-12 object-contain relative z-10"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    {/* Title with gradient on hover */}
                    <motion.h3 
                      className="text-xs font-bold tracking-wider mb-2 transition-all duration-300"
                      style={{ color: '#212121' }}
                      whileHover={{ 
                        background: 'linear-gradient(90deg, #A42A28, #DAB428)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {value.title}
                    </motion.h3>

                    <p className="text-xs leading-relaxed text-gray-600 group-hover:text-gray-800 transition-colors">
                      {value.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div 
                      className="mt-4 h-1 rounded-full mx-auto"
                      style={{ backgroundColor: '#DAB428' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '40px' }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section - Enhanced with counters and animations */}
      <AnimatedSection>
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F8F7F5' }}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#DAB428', filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#A42A28', filter: 'blur(100px)' }} />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 mx-auto mb-4"
                style={{ backgroundColor: '#DAB428' }}
              />
              <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#DAB428' }}>
                CREATING SHARED VALUE
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ color: '#212121' }}>
                Our Group at a Glance
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Building Cambodia's future through diversified investments and sustainable development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { number: "100+", label: "Business Entities", delay: 0 },
                { number: "11,500+", label: "Team Members", delay: 0.1 },
                { number: "2,500+ Ha", label: "Urban and Industrial Developments", delay: 0.2 },
                { number: "20,000+", label: "Underprivileged people supported", delay: 0.3 },
                { number: "70,000+", label: "Patients Treated through our Medical Centers", delay: 0.4 },
                { number: "1,800+", label: "Students enrolled through our educational facilities", delay: 0.5 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white p-8 border-2 border-gray-100 hover:border-[#DAB428] transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(218, 180, 40, 0.05) 0%, rgba(164, 42, 40, 0.05) 100%)'
                    }}
                  />

                  {/* Top corner accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: '#DAB428' }}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Animated number */}
                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold mb-3"
                      style={{ color: '#A42A28' }}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.2, duration: 0.5, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                      className="text-sm text-gray-700 leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.4, duration: 0.5 }}
                    >
                      {stat.label}
                    </motion.div>

                    {/* Bottom accent bar */}
                    <motion.div 
                      className="mt-6 h-1 rounded-full"
                      style={{ backgroundColor: '#DAB428' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '60px' }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.6, duration: 0.5 }}
                    />
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                       style={{ 
                         background: 'radial-gradient(circle at bottom right, #DAB428 0%, transparent 70%)'
                       }} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sectors Section - Enhanced */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="sectors">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#DAB428', filter: 'blur(80px)' }} />
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#A42A28', filter: 'blur(100px)' }} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 mx-auto mb-4"
              style={{ backgroundColor: '#DAB428' }}
            />
            <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#DAB428' }}>
              DIVERSIFIED PORTFOLIO
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#212121' }}>
              Our Sectors
            </h2>
          </motion.div>

          <div className="space-y-24">
            {/* Property */}
            <AnimatedSection>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                >
                  {/* Icon badge with animation */}
                  <motion.div 
                    className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(218, 180, 40, 0.1)', border: '1px solid rgba(218, 180, 40, 0.3)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building2 size={20} style={{ color: '#DAB428' }} strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-sm font-bold tracking-wider" style={{ color: '#DAB428' }}>PROPERTY</span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#212121' }}>
                    Iconic Developments
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Our diversified property management and development portfolio strive for excellent quality, safety and services for a modern Cambodia.
                  </p>

                  <motion.a
                    href="/sectors"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 font-semibold transition-all group" 
                    style={{ color: '#A42A28' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="group relative"
                >
                  {/* Decorative border effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#DAB428] to-[#A42A28] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={kohNoreaBridge}
                      alt="Property Development"
                      className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="group relative order-2 lg:order-1"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#A42A28] to-[#DAB428] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={CIS}
                      alt="Education"
                      className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="order-1 lg:order-2"
                >
                  <motion.div 
                    className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(218, 180, 40, 0.1)', border: '1px solid rgba(218, 180, 40, 0.3)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap size={20} style={{ color: '#DAB428' }} strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-sm font-bold tracking-wider" style={{ color: '#DAB428' }}>EDUCATION</span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#212121' }}>
                    Creating Opportunities
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    With purpose and vision, OCIC has established leading international schools that provide world-renowned education to build the youth of today into the leaders of tomorrow.
                  </p>

                  <motion.a
                    href="/sectors"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 font-semibold transition-all group" 
                    style={{ color: '#A42A28' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Construction */}
            <AnimatedSection>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(218, 180, 40, 0.1)', border: '1px solid rgba(218, 180, 40, 0.3)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <HardHat size={20} style={{ color: '#DAB428' }} strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-sm font-bold tracking-wider" style={{ color: '#DAB428' }}>CONSTRUCTION</span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#212121' }}>
                    International Standard Construction
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    As Cambodia continues to be one of the fastest-growing economies in the Asia-Pacific, OCIC continues to offer and expand a range of high-quality construction services and supplies to meet the growing demand.
                  </p>

                  <motion.a
                    href="/sectors"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 font-semibold transition-all group" 
                    style={{ color: '#A42A28' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#DAB428] to-[#A42A28] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={construction}
                      alt="Construction"
                      className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Hospitality */}
            <AnimatedSection>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="group relative order-2 lg:order-1"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#A42A28] to-[#DAB428] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={hospitality}
                      alt="Hospitality"
                      className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                  className="order-1 lg:order-2"
                >
                  <motion.div 
                    className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(218, 180, 40, 0.1)', border: '1px solid rgba(218, 180, 40, 0.3)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Hotel size={20} style={{ color: '#DAB428' }} strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-sm font-bold tracking-wider" style={{ color: '#DAB428' }}>HOSPITALITY</span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#212121' }}>
                    World-Renowned Destinations
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    At OCIC, we're proud to position ourselves as a leading provider of high-quality hospitality services and destinations for both local and international customers.
                  </p>

                  <motion.a
                    href="/sectors"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 font-semibold transition-all group" 
                    style={{ color: '#A42A28' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <AnimatedSection>
        <section className="relative py-0" id="csr">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="relative flex items-center py-20 px-6 lg:px-20" style={{ backgroundColor: '#A42A28' }}>
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#DAB428' }} />
                  <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                    Corporate Responsibility
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed mb-8">
                    At OCIC, our commitment to supporting socioeconomic development, is a shared value of our employees and partners all working together for a sustainable and inclusive Cambodia.
                  </p>
                  <motion.a
                    href="/csr"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all text-[#212121]"
                    style={{ backgroundColor: '#DAB428' }}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </motion.a>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[400px] lg:h-auto"
            >
              <img 
                src={running}
                alt="Corporate Social Responsibility"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Projects Carousel - Enhanced */}
      <AnimatedSection>
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F8F7F5' }} id="news">
          {/* Decorative background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5">
            <div className="absolute top-20 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#DAB428', filter: 'blur(100px)' }} />
            <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#A42A28', filter: 'blur(100px)' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 mx-auto mb-4"
                style={{ backgroundColor: '#DAB428' }}
              />
              <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#DAB428' }}>
                FLAGSHIP PROJECTS
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#212121' }}>
                Landmark Developments
              </h2>
            </motion.div>

            <div className="relative">
              {/* Main Carousel Container */}
              <motion.div 
                className="relative group overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Image with transitions */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7 }}
                      className="relative"
                    >
                      <img
                        src={carouselItems[currentSlide].image}
                        alt={carouselItems[currentSlide].title}
                        className="w-full h-[500px] lg:h-[600px] object-cover"
                      />
                      
                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Enhanced Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                >
                  <ChevronLeft size={28} style={{ color: '#A42A28' }} strokeWidth={3} />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                >
                  <ChevronRight size={28} style={{ color: '#A42A28' }} strokeWidth={3} />
                </motion.button>

                {/* Enhanced Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {carouselItems.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-all duration-300 rounded-full relative overflow-hidden group"
                      style={{
                        width: i === currentSlide ? '48px' : '12px',
                        height: '12px',
                        backgroundColor: i === currentSlide ? '#DAB428' : 'rgba(255,255,255,0.5)',
                        border: i === currentSlide ? '2px solid rgba(255,255,255,0.8)' : 'none'
                      }}
                    >
                      {/* Animated fill effect */}
                      {i === currentSlide && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5 }}
                          className="absolute inset-0 bg-white/30"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Project Info Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="mt-12 relative"
                >
                  <div className="bg-white p-8 lg:p-10 shadow-xl border-l-4" style={{ borderColor: '#DAB428' }}>
                    {/* Title with animated underline */}
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl lg:text-2xl font-semibold mb-2"
                        style={{ color: '#212121' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {carouselItems[currentSlide].title}
                      </motion.h3>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '60px' }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-0.5 rounded-full"
                        style={{ backgroundColor: '#A42A28' }}
                      />
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-gray-600 leading-relaxed mb-6 max-w-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {carouselItems[currentSlide].description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                      href="/sectors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05, x: 8 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-3 px-6 py-3 text-white text-sm font-semibold shadow-lg transition-all group relative overflow-hidden"
                      style={{ backgroundColor: '#A42A28' }}
                    >
                      {/* Hover effect overlay */}
                      <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                      <span className="relative">View Project Details</span>
                      <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#DAB428', filter: 'blur(30px)' }} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mobile App Section */}
      <AnimatedSection>
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <img 
                  src={IphoneMockup}
                  alt="OCIC Mobile App"
                  className="w-full max-w-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#DAB428' }}>
                  MOBILE EXPERIENCE
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#212121' }}>
                  Find your dream home right through your fingertips
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Download the OCIC Mobile App for FREE!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 font-semibold transition-all text-white"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 font-semibold transition-all text-white"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    App Store
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}