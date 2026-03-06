import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Heart, Users, GraduationCap, TreePine, Building2, Handshake } from "lucide-react";

// Placeholder images - replace with your actual CSR images
import csrHeroImage from "../../assets/environment.webp";
import communityImage from "../../assets/Koh-pich-running.jpg";
import educationImage from "../../assets/CIS_Building.webp";
import environmentImage from "../../assets/environment.webp";

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${csrHeroImage}')` }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(25, 26, 25, 0.7)' }} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-4">
              Corporate Social Responsibility
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight" >
              Building Communities,<br />Creating Impact
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
              A lifelong commitment to our communities, giving back and enriching lives across Cambodia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>
                  Our Commitment
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721] max-w-3xl mx-auto">
                  Corporate Social Responsibility at the Heart of Everything We Do
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-base lg:text-lg text-black/60 text-center max-w-4xl mx-auto leading-relaxed mb-16">
                At OCIC, we believe that sustainable business success goes hand-in-hand with positive social impact. Our CSR initiatives reflect our deep commitment to the communities we serve, focusing on education, health, environmental protection, and economic empowerment across Cambodia.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {csrPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-black/8 bg-[#F9F9F9] hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: '#B14240' }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#212721] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Major Initiatives */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>
                  Our Initiatives
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">
                  Making a Difference
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-20">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#212721] mb-4">
                      {initiative.title}
                    </h3>
                    <p className="text-base text-black/60 leading-relaxed mb-8">
                      {initiative.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {initiative.stats.map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-lg bg-white">
                          <p className="text-2xl font-bold mb-1" style={{ color: '#B14240' }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-black/50">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Impact Areas */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#B14240' }}>
                  Areas of Impact
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721]">
                  Creating Sustainable Change
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    className="p-8 rounded-2xl border border-black/8 bg-white hover:shadow-lg transition-all group"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: area.color }}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#212721] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {area.description}
                    </p>
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
                    src={educationImage}
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