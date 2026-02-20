import { useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "motion/react";
import kohNoreaBridge from "../../assets/Koh_Norea_Bridge.jpg";
import elitetown from "../../assets/koh-pich-elite-town.jpeg";
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

// ✅ NEW: replace inline SVGs with PNG icons
import integrityIcon from "../../assets/icons/integrity.png";
import csrIcon from "../../assets/icons/csr.png";
import entreIcon from "../../assets/icons/entre.png";
import innovationIcon from "../../assets/icons/innovation.png";
import respectIcon from "../../assets/icons/respect.png";
import trustIcon from "../../assets/icons/trust.png";

import { Building2, GraduationCap, HardHat, Hotel, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      description:
        "A beachfront hotel in Sihanoukville developed by Dara Hotels Group, offering guest rooms, dining facilities, and leisure amenities that support tourism and coastal travel in the city.",
    },
    {
      image: airport,
      title: "Techo International Airport",
      description:
        "Techo International Airport, developed by Cambodia Airport Investment Co., Ltd. (CAIC), is located approximately 20 kilometers south of Phnom Penh and spans an area of around 2,600 hectares.",
    },
    {
      image: skyline,
      title: "Koh Pich",
      description:
        "Located along Bassac River in Phnom Penh, Koh Pich is a mixed-use island district developed to support urban living, business activity, and public events within a connected city environment.​",
    },
    {
      image: Tower,
      title: "Canadia Tower",
      description:
        "Launched in 2009, Canadia Tower stood as one of the city's first modern office towers, reflecting rising demand for structured commercial space and contributing to Phnom Penh's evolving business landscape.",
    },
    {
      image: norea,
      title: "Norea Bay View",
      description:
        "Norea City is a large-scale city development by Overseas Cambodian Investment Corporation (OCIC). Located in the heart of Phnom Penh, the development spans approximately 125 hectares and is designed to support the city's expansion through balanced urban planning, improved accessibility, and integrated mixed-use environments.​",
    },
  ];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return (
    <div className="min-h-screen bg-white font-montserrat">
          {/* Sticky Header */}

          {/* Hero Section */}
          <section className="relative h-screen flex items-center pt-16" id="about">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${kohNoreaBridge}')`
              }}
            >
              <div 
                className="absolute inset-0" 
                style={{ backgroundColor: 'rgba(33, 39, 33, 0.6)' }}
              ></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl lg:text-6xl mb-6 text-white" style={{ fontWeight: 600, lineHeight: 1.2 }}>
                  Building Opportunities
                </h1>
                <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed" style={{ fontWeight: 400 }}>
                  We're dedicated to supporting Cambodia's aspiring youth and entrepreneurs in building sustainable ventures across the nation and the region.
                </p>
                <a 
                  href="#sectors"
                  onClick={(e) => handleNavClick(e, 'sectors')}
                  className="inline-block px-8 py-3 rounded text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: '#B14240', fontWeight: 600 }}
                >
                  See More
                </a>
              </motion.div>
            </div>
          </section>

          {/* Core Values Section */}
            <AnimatedSection>
            <section className="py-14 bg-white border-b border-gray-100">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
                  {/* Integrity */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={integrityIcon} alt="Integrity" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      INTEGRITY
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      At the very heart of the things we do are decisions we provide for you.
                    </p>
                  </div>

                  {/* CSR */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={csrIcon} alt="CSR" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      CSR
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      A lifelong commitment to our communities, giving back and enriching lives.
                    </p>
                  </div>

                  {/* Entrepreneurial */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={entreIcon} alt="Entrepreneurial" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      ENTREPRENEURIAL
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      Advancing ideas and opportunities together with research, growth.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={innovationIcon} alt="Innovation" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      INNOVATION
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      Seeking global best practices, enhancing services for customer satisfaction.
                    </p>
                  </div>

                  {/* Respect */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={respectIcon} alt="Respect" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      RESPECT
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      Mindful of our commitment to our customers, partners and colleagues.
                    </p>
                  </div>

                  {/* Trust */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <img src={trustIcon} alt="Trust" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-sm mb-3" style={{ fontWeight: 600, color: "#212721" }}>
                      TRUST
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#4F5B5B" }}>
                      Listening to our customers, working together towards a shared goal.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Our Group at a Glance */}
          <AnimatedSection>
            <section className="py-24 lg:py-32" style={{ backgroundColor: '#F5F3F3' }}>
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <p className="text-sm lg:text-base mb-3" style={{ color: '#B14240', fontWeight: 400 }}>
                    Creating Shared Value
                  </p>
                  <h2 className="text-4xl lg:text-5xl" style={{ fontWeight: 600, color: '#212721' }}>
                    Our Group at a Glance
                  </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Row 1 */}
                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      100+
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Business Entities
                    </div>
                  </div>

                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      11,500+
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Team Members
                    </div>
                  </div>

                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      2,500+ Ha
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Urban and Industrial Developments
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      20,000+
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Underprivileged people supported
                    </div>
                  </div>

                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      70,000+
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Patients Treated through our Medical Centers
                    </div>
                  </div>

                  <div 
                    className="text-center py-12 px-8 rounded-lg"
                    style={{ backgroundColor: '#E8E6E6' }}
                  >
                    <div className="text-5xl lg:text-6xl mb-4" style={{ fontWeight: 600, color: '#212721' }}>
                      1,800+
                    </div>
                    <div className="text-sm lg:text-base" style={{ color: '#4F5B5B', fontWeight: 400 }}>
                      Students enrolled through our educational facilities
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Sectors Section - Alternating Two-Column Layout */}
          <section className="py-20 lg:py-32 bg-white" id="sectors">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
              {/* Sector 1: Property - Image Right */}
              <AnimatedSection className="mb-24 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Left */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 size={20} style={{ color: '#B14240' }} strokeWidth={2} />
                      <span className="text-sm" style={{ color: '#B14240', fontWeight: 600 }}>Property</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontWeight: 600, color: '#212721', lineHeight: 1.2 }}>
                      Iconic Developments
                    </h2>
                    <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: '#4F5B5B' }}>
                      Our diversified property management and development portfolio strive for excellent quality, safety and services for a modern Cambodia.
                    </p>
                    <button 
                      className="px-8 py-3 rounded-full border-2 text-sm transition-all hover:bg-gray-50 hover:scale-105"
                      style={{ borderColor: '#212721', color: '#212721', fontWeight: 600 }}
                    >
                      Property Development
                    </button>
                  </div>

                  {/* Image Right */}
                  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={elitetown}
                      alt="Property Development"
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Sector 2: Education - Image Left */}
              <AnimatedSection className="mb-24 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Left */}
                  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 order-2 lg:order-1">
                    <img 
                      src={CIS}
                      alt="Education"
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap size={20} style={{ color: '#B14240' }} strokeWidth={2} />
                      <span className="text-sm" style={{ color: '#B14240', fontWeight: 600 }}>Education</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontWeight: 600, color: '#212721', lineHeight: 1.2 }}>
                      Creating Opportunities
                    </h2>
                    <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: '#4F5B5B' }}>
                      With purpose and vision, OCIC has established leading international schools that provide world-renowned education to build the youth of today into the leaders of tomorrow.
                    </p>
                    <button 
                      className="px-8 py-3 rounded-full border-2 text-sm transition-all hover:bg-gray-50 hover:scale-105"
                      style={{ borderColor: '#212721', color: '#212721', fontWeight: 600 }}
                    >
                      Find out More
                    </button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Sector 3: Construction - Image Right */}
              <AnimatedSection className="mb-24 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Left */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <HardHat size={20} style={{ color: '#B14240' }} strokeWidth={2} />
                      <span className="text-sm" style={{ color: '#B14240', fontWeight: 600 }}>Construction</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontWeight: 600, color: '#212721', lineHeight: 1.2 }}>
                      International Standard Construction
                    </h2>
                    <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: '#4F5B5B' }}>
                      As Cambodia continues to be one of the fastest-growing economies in the Asia-Pacific, OCIC continues to offer and expand a range of high-quality construction services and supplies to meet the growing demand.
                    </p>
                    <button 
                      className="px-8 py-3 rounded-full border-2 text-sm transition-all hover:bg-gray-50 hover:scale-105"
                      style={{ borderColor: '#212721', color: '#212721', fontWeight: 600 }}
                    >
                      Find out More
                    </button>
                  </div>

                  {/* Image Right */}
                  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={construction}
                      alt="Construction"
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Sector 4: Hospitality - Image Left */}
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Left */}
                  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 order-2 lg:order-1">
                    <img 
                      src={hospitality}
                      alt="Hospitality"
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Hotel size={20} style={{ color: '#B14240' }} strokeWidth={2} />
                      <span className="text-sm" style={{ color: '#B14240', fontWeight: 600 }}>Hospitality</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontWeight: 600, color: '#212721', lineHeight: 1.2 }}>
                      World-Renowned Destinations
                    </h2>
                    <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: '#4F5B5B' }}>
                      At OCIC, we're proud to position ourselves as a leading provider of high-quality hospitality services and destinations for both local and international customers.
                    </p>
                    <button 
                      className="px-8 py-3 rounded-full border-2 text-sm transition-all hover:bg-gray-50 hover:scale-105"
                      style={{ borderColor: '#212721', color: '#212721', fontWeight: 600 }}
                    >
                      Hospitality Projects
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Corporate Responsibility Section */}
          <AnimatedSection>
            <section className="relative py-20 lg:py-0" id="csr">
              <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                {/* Background Image - Full Width */}
                <div 
                  className="absolute inset-0 bg-cover bg-center hidden lg:block"
                  style={{ backgroundImage: `url('${environment}')` }}
                ></div>

                {/* Full red overlay on top of background */}
                <div className="absolute inset-0 hidden lg:block" style={{ backgroundColor: 'rgba(177, 66, 64, 0.88)' }}></div>

                {/* Left Side - Text */}
                <div className="relative lg:col-span-5 flex items-center py-16 lg:py-20 px-6 lg:px-12">
                  <div className="max-w-lg mx-auto lg:ml-auto lg:mr-0">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-3xl lg:text-4xl text-white mb-6" style={{ fontWeight: 600, lineHeight: 1.3 }}
                    >
                      CORPORATE RESPONSIBILITY
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                      className="text-base lg:text-lg text-white mb-8 leading-relaxed" style={{ fontWeight: 400 }}
                    >
                      At OCIC, our commitment to supporting socioeconomic development, is a shared value of our employees and partners all working together for a sustainable and inclusive Cambodia.
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href="#news"
                      onClick={(e) => handleNavClick(e, 'news')}
                      className="inline-block px-8 py-3 bg-white rounded-full"
                      style={{ color: '#B14240', fontWeight: 600 }}
                    >
                      See More
                    </motion.a>
                  </div>
                </div>

                {/* Right Side - Positioned Photo Card */}
                <div className="relative lg:col-span-7 flex items-center justify-center py-16 lg:py-20 px-6 lg:px-12">
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="group overflow-hidden rounded-2xl shadow-2xl max-w-2xl w-full bg-white"
                  >
                    <img 
                      src={running}
                      alt="Corporate Social Responsibility"
                      className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Feature Image Carousel Section */}
          <AnimatedSection>
            <section className="py-20 lg:py-32 bg-white" id="news">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="relative">
                  {/* Main Image with Navigation */}
                  <div className="relative group overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={carouselItems[currentSlide].image}
                        alt={carouselItems[currentSlide].title}
                        className="w-full h-[400px] lg:h-[600px] object-cover"
                      />
                    </AnimatePresence>

                    {/* Gradient overlay at bottom for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl" />

                    {/* Navigation Arrows */}
                    <motion.button
                      onClick={prevSlide}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={24} style={{ color: '#A42A28' }} />
                    </motion.button>
                    <motion.button
                      onClick={nextSlide}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={24} style={{ color: '#A42A28' }} />
                    </motion.button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {carouselItems.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className="transition-all duration-300 rounded-full"
                          style={{
                            width: i === currentSlide ? '24px' : '8px',
                            height: '8px',
                            backgroundColor: i === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Caption Below Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl lg:text-2xl mb-3" style={{ fontWeight: 600, color: '#212721' }}>
                        {carouselItems[currentSlide].title}
                      </h3>
                      <p className="text-base leading-relaxed mb-6 max-w-4xl" style={{ color: '#4F5B5B' }}>
                        {carouselItems[currentSlide].description}
                      </p>
                      <a
                        href="#sectors"
                        onClick={(e) => handleNavClick(e, 'sectors')}
                        className="inline-block px-8 py-3 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                        style={{ backgroundColor: '#B14240', fontWeight: 600 }}
                      >
                        See More
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* App Promotion Section */}
          <AnimatedSection>
            <section className="py-20 lg:py-32" style={{ backgroundColor: '#F5F3F3' }}>
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left: Device Mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex justify-center lg:justify-start"
                  >
                    <div className="relative">
                      <img 
                        src={IphoneMockup}
                        alt="OCIC Mobile App"
                        className="w-full max-w-md rounded-lg h-120 object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Right: Text & Buttons */}
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                      className="text-3xl lg:text-4xl mb-4" style={{ fontWeight: 600, color: '#212721' }}
                    >
                      Find your dream home right through your fingertips.
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                      className="text-base mb-6 leading-relaxed" style={{ color: '#4F5B5B' }}
                    >
                      Download the OCIC Mobile App for FREE!
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#" 
                        className="inline-flex items-center justify-center px-6 py-3 rounded transition-all hover:opacity-80"
                        style={{ backgroundColor: '#B14240', color: 'white' }}
                      >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <span className="text-sm font-semibold">Google Play</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#" 
                        className="inline-flex items-center justify-center px-6 py-3 rounded transition-all hover:opacity-80"
                        style={{ backgroundColor: '#B14240', color: 'white' }}
                      >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        <span className="text-sm font-semibold">App Store</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Footer - Light Background */}
      
        </div>
  
  );
}