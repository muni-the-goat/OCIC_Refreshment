import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Heart, Users, GraduationCap, TreePine, Building2, Handshake } from "lucide-react";

// Placeholder images - replace with your actual CSR images
import csrHeroImage from "../../assets/OCIC_IDP_Community_Outreach.webp";
import communityImage from "../../assets/Koh-pich-running.webp";
import educationImage from "../../assets/CIS_Building.webp";
import environmentImage from "../../assets/environment.webp";
import schoolevent from "../../assets/OCIC_KPCC_Rabbit_School_Group_Photo.jpg";

// CSR initiatives data
const csrPillars = [
  {
    icon: Users,
    title: "Community Development",
    description: "Empowering local communities through sustainable development programs and partnerships.",
  },
  {
    icon: GraduationCap,
    title: "Education & Youth",
    description: "Investing in Cambodia's future by supporting education and youth development initiatives.",
  },
  {
    icon: TreePine,
    title: "Environmental Stewardship",
    description: "Committed to sustainable practices and environmental protection in all our projects.",
  },
  {
    icon: Handshake,
    title: "Social Impact",
    description: "Creating lasting positive change through responsible business practices and community engagement.",
  },
];

const initiatives = [
  {
    title: "Education Support Programs",
    image: educationImage,
    description: "OCIC partners with educational institutions to provide scholarships, infrastructure development, and learning resources for Cambodian students. We believe education is the foundation for Cambodia's future prosperity.",
    stats: [
      { label: "Scholarships Awarded", value: "500+" },
      { label: "Schools Supported", value: "25+" },
      { label: "Students Impacted", value: "10,000+" },
    ],
  },
  {
    title: "Community Health & Wellness",
    image: communityImage,
    description: "We organize annual community running events and wellness programs that promote healthy lifestyles while bringing communities together. Our initiatives focus on both physical and mental wellbeing.",
    stats: [
      { label: "Annual Events", value: "12+" },
      { label: "Participants", value: "5,000+" },
      { label: "Communities Reached", value: "30+" },
    ],
  },
  {
    title: "Environmental Conservation",
    image: environmentImage,
    description: "Our commitment to environmental stewardship includes green building practices, waste reduction programs, and urban green space development. We integrate sustainability into every project we undertake.",
    stats: [
      { label: "Trees Planted", value: "15,000+" },
      { label: "Green Spaces Created", value: "50+ hectares" },
      { label: "Carbon Offset", value: "1,000+ tons" },
    ],
  },
];

const impactAreas = [
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Supporting healthcare facilities and programs to improve medical services in underserved communities.",
    color: "#A42A28",
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Building essential infrastructure that connects communities and drives economic growth.",
    color: "#f4c845",
  },
  {
    icon: Users,
    title: "Employment & Training",
    description: "Creating job opportunities and providing skills training for local workforce development.",
    color: "#0eb7b7",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    description: "Implementing eco-friendly practices and promoting environmental awareness across all operations.",
    color: "#13b64f",
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

export default function CSR() {
  return (
    <div className="bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden h-screen flex items-center">
        {/* Background with parallax effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${csrHeroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </motion.div>
        
        {/* Decorative Gold Elements */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAB428] to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#DAB428] to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#DAB428] to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#DAB428] to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-20 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Gold animated line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 mb-6"
              style={{ backgroundColor: '#DAB428' }}
            />
            
            <p className="text-sm font-semibold tracking-widest text-[#DAB428] uppercase mb-6">
              Corporate Social Responsibility
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Building Communities,<br />
              <span style={{ color: '#DAB428' }}>Creating Impact</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
              A lifelong commitment to our communities, giving back and enriching lives across Cambodia.
            </p>
            
            {/* CTA Button */}
            <motion.a
              href="#initiatives"
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-base shadow-xl transition-all group relative overflow-hidden"
              style={{ backgroundColor: '#A42A28' }}
            >
              <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative">Explore Our Initiatives</span>
              <motion.svg 
                className="relative w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-medium tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#DAB428' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Commitment - Redesigned */}
      <AnimatedSection>
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#DAB428', filter: 'blur(100px)' }} />
          
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: '#DAB428' }}
                />
                <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#A42A28' }}>
                  OUR COMMITMENT
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121] max-w-4xl mx-auto leading-tight">
                  Corporate Social Responsibility at the Heart of 
                  <span style={{ color: '#DAB428' }}> Everything We Do</span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-base lg:text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed mb-20">
                At OCIC, we believe that sustainable business success goes hand-in-hand with positive social impact. Our CSR initiatives reflect our deep commitment to the communities we serve, focusing on education, health, environmental protection, and economic empowerment across Cambodia.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {csrPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#DAB428] shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" style={{ backgroundColor: '#DAB428' }} />
                    
                    <div className="relative">
                      {/* Icon with animation */}
                      <motion.div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                        style={{ backgroundColor: '#A42A28' }}
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <Icon size={32} className="text-[#DAB428] relative z-10" strokeWidth={2.5} />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-[#212121] mb-3 group-hover:text-[#A42A28] transition-colors">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                      
                      {/* Bottom accent line */}
                      <motion.div 
                        className="mt-6 h-1 rounded-full"
                        style={{ backgroundColor: '#DAB428' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '40px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Major Initiatives - Redesigned */}
      <AnimatedSection>
        <section id="initiatives" className="py-24 lg:py-32 relative" style={{ backgroundColor: '#F8F7F5' }}>
          {/* Decorative background */}
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#A42A28', filter: 'blur(100px)' }} />
          
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: '#DAB428' }}
                />
                <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#A42A28' }}>
                  OUR INITIATIVES
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Making a <span style={{ color: '#DAB428' }}>Lasting Difference</span>
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-32">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="group relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                      {/* Gold corner accent */}
                      <div className="absolute top-0 left-0 w-20 h-20 z-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#DAB428' }} />
                        <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: '#DAB428' }} />
                      </div>
                      
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-[450px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h3 className="text-2xl lg:text-4xl font-bold text-[#212121] mb-6 leading-tight">
                        {initiative.title}
                      </h3>
                      
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-10">
                        {initiative.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {initiative.stats.map((stat, statIndex) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + statIndex * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group/stat relative text-center p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#DAB428]"
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover/stat:opacity-10 blur-xl transition-opacity" style={{ backgroundColor: '#DAB428' }} />
                            
                            <p className="relative text-3xl font-bold mb-2 bg-gradient-to-r from-[#A42A28] to-[#DAB428] bg-clip-text text-transparent">
                              {stat.value}
                            </p>
                            <p className="relative text-xs text-gray-500 font-medium leading-tight">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Impact Areas - Redesigned */}
      <AnimatedSection>
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#DAB428', filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#A42A28', filter: 'blur(100px)' }} />
          
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: '#DAB428' }}
                />
                <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#A42A28' }}>
                  AREAS OF IMPACT
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Creating <span style={{ color: '#DAB428' }}>Sustainable Change</span>
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#DAB428]"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: area.color }} />
                    
                    <div className="relative flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: area.color }}
                      >
                        <Icon size={36} className="text-white" strokeWidth={2.5} />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#212121] mb-3 group-hover:text-[#A42A28] transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {area.description}
                        </p>
                        
                        {/* Animated underline */}
                        <motion.div 
                          className="mt-5 h-1 rounded-full"
                          style={{ backgroundColor: area.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: '60px' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* More News Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>
                  More News
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">
                  Stay up to date with us
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* News Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={communityImage}
                    alt="Run for Our Heroes"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#A42A28', color: '#F5F5F5' }}>
                      CSR
                    </span>
                    <span className="text-xs text-black/40">December 18, 2025</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#212721] mb-2 line-clamp-2">
                    RUN FOR OUR HEROES Brings 4,000+ Runners Together in Koh Pich to Support Frontliners and Displaced Civilians
                  </h3>
                </div>
              </motion.div>

              {/* News Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={educationImage}
                    alt="Connexion Breast Cancer"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#A42A28', color: '#F5F5F5' }}>
                      CSR
                    </span>
                    <span className="text-xs text-black/40">October 30, 2025</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#212721] mb-2 line-clamp-2">
                    Connexion Raises Awareness for Breast Cancer Through Art, Action, and Early Detection
                  </h3>
                </div>
              </motion.div>

              {/* News Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={environmentImage}
                    alt="Green Oasis Tree Planting"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#A42A28', color: '#F5F5F5' }}>
                      CSR
                    </span>
                    <span className="text-xs text-black/40">September 2, 2025</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#212721] mb-2 line-clamp-2">
                    Green Oasis Tree-Planting Initiative Brings the Community Together in Chroy Changvar
                  </h3>
                </div>
              </motion.div>

              {/* News Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={schoolevent}
                    alt="OCIC Group and KPCC"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#A42A28', color: '#F5F5F5' }}>
                      CSR
                    </span>
                    <span className="text-xs text-black/40">August 12, 2025</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#212721] mb-2 line-clamp-2">
                    OCIC Group and KPCC Join Forces with Rabbit School to Expand Campus for Children with Disabilities
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}