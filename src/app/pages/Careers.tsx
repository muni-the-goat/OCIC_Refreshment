import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Briefcase, Users, TrendingUp, Heart, GraduationCap, Globe, MapPin, Clock, ChevronRight } from "lucide-react";
import hero from "../../assets/Facade-bg.jpg";
import career from "../../assets/careers-with-us.jpg";
import workculture from "../../assets/culture-w-us.webp";

// Benefits data
const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Structured career development programs, mentorship opportunities, and continuous learning initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access to training programs, workshops, conferences, and educational resources to enhance your skills.",
  },
  {
    icon: Globe,
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous paid time off, and family-friendly policies.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a diverse, inclusive team that values innovation, creativity, and collaborative problem-solving.",
  },
  {
    icon: Briefcase,
    title: "Competitive Package",
    description: "Attractive salary, performance bonuses, retirement plans, and comprehensive employee benefits.",
  },
];

// Job openings data
const jobOpenings = [
  {
    title: "Senior Project Manager",
    department: "Construction & Development",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Lead large-scale infrastructure projects from planning to completion, ensuring quality and timely delivery.",
  },
  {
    title: "Financial Analyst",
    department: "Finance",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Analyze financial data, prepare reports, and provide insights to support strategic business decisions.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing & Communications",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Develop and execute marketing campaigns to promote OCIC's projects and strengthen brand presence.",
  },
  {
    title: "Civil Engineer",
    department: "Engineering",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Design and oversee construction projects, ensuring compliance with safety standards and regulations.",
  },
  {
    title: "Human Resources Manager",
    department: "Human Resources",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Manage recruitment, employee relations, training, and organizational development initiatives.",
  },
  {
    title: "Software Developer",
    department: "Information Technology",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    description: "Build and maintain software solutions to support business operations and digital transformation.",
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

export default function Careers() {
  return (
    <div className="bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${hero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </motion.div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAB428] to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#DAB428] to-transparent"
          />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? '#DAB428' : '#A42A28',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-20 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Label */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 mb-6"
                style={{ backgroundColor: '#DAB428' }}
              />

              <p className="text-sm font-bold tracking-widest text-[#DAB428] uppercase mb-6">
                JOIN OUR TEAM
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Build Your Future<br />
                <span style={{ color: '#DAB428' }}>with OCIC</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
                Join Cambodia's leading integrated conglomerate and be part of transformative projects that shape the nation's future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#open-positions"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-base shadow-xl transition-all relative overflow-hidden"
                  style={{ backgroundColor: '#A42A28' }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <span className="relative">View Open Positions</span>
                  <ChevronRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#why-ocic"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base border-2 border-white transition-all"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-medium tracking-wider">EXPLORE</span>
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

      {/* Why Join OCIC */}
      <AnimatedSection>
        <section id="why-ocic" className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background decoration */}
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
                <p className="text-sm font-bold tracking-wider mb-3" style={{ color: '#A42A28' }}>
                  WHY OCIC
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Why Join <span style={{ color: '#DAB428' }}>Our Team</span>
                </h2>
              </div>
            </FadeUp>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl lg:text-4xl font-bold text-[#212121] mb-8 leading-tight">
                  Be Part of Something <span style={{ color: '#DAB428' }}>Bigger</span>
                </h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                  At OCIC, you'll work on groundbreaking projects that directly impact Cambodia's development and growth. From infrastructure to education, hospitality to real estate, our diverse portfolio offers unique opportunities to make a meaningful difference.
                </p>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
                  We believe in empowering our people with the tools, resources, and support they need to excel. Join a team that values innovation, integrity, and collaboration.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '98%', label: 'Employee Satisfaction' },
                    { number: '85%', label: 'Internal Promotions' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-[#A42A28]/10 to-[#DAB428]/10 border border-[#DAB428]/20"
                    >
                      <p className="text-4xl font-bold bg-gradient-to-r from-[#A42A28] to-[#DAB428] bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                {/* Gold accent corner */}
                <div className="absolute -top-4 -left-4 w-24 h-24 z-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#DAB428' }} />
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: '#DAB428' }} />
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={career}
                    alt="OCIC Culture"
                    className="w-full h-[450px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Benefits Grid */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#212121] mb-12">
                What We <span style={{ color: '#DAB428' }}>Offer</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -8 }}
                      className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#DAB428] shadow-lg hover:shadow-2xl transition-all"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" style={{ backgroundColor: '#DAB428' }} />

                      <div className="relative">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                          style={{ backgroundColor: '#A42A28' }}
                        >
                          <Icon size={32} className="text-[#DAB428]" strokeWidth={2.5} />
                        </motion.div>

                        <h4 className="text-lg font-bold text-[#212121] mb-3 group-hover:text-[#A42A28] transition-colors">
                          {benefit.title}
                        </h4>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Bottom accent */}
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
          </div>
        </section>
      </AnimatedSection>

      {/* Our Culture */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1"
              >
                <img
                  src={workculture}
                  alt="OCIC Team"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              <FadeUp delay={0.2}>
                <div className="order-1 lg:order-2">
                  <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#A42A28' }}>
                    Our Culture
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721] mb-6">
                    A Place Where You Can Thrive
                  </h2>
                  <p className="text-base text-black/60 leading-relaxed mb-6">
                    Our culture is built on trust, respect, and entrepreneurial spirit. We foster an environment where diverse perspectives are valued, innovation is encouraged, and every team member has the opportunity to contribute to our collective success.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#A42A28' }}>
                        <ChevronRight size={16} className="text-white" />
                      </div>
                      <span className="text-base text-black/60">Diverse and inclusive workplace that celebrates different backgrounds and perspectives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#A42A28' }}>
                        <ChevronRight size={16} className="text-white" />
                      </div>
                      <span className="text-base text-black/60">Open communication and collaborative decision-making across all levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#A42A28' }}>
                        <ChevronRight size={16} className="text-white" />
                      </div>
                      <span className="text-base text-black/60">Recognition and rewards for outstanding performance and contributions</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection>
        <section id="open-positions" className="py-24 lg:py-32 scroll-mt-20 relative" style={{ backgroundColor: '#F8F7F5' }}>
          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#DAB428', filter: 'blur(100px)' }} />

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
                <p className="text-sm font-bold tracking-wider mb-3" style={{ color: '#A42A28' }}>
                  OPPORTUNITIES
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Open <span style={{ color: '#DAB428' }}>Positions</span>
                </h2>
                <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                  Explore exciting career opportunities across our diverse business sectors
                </p>
              </div>
            </FadeUp>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white border-2 border-gray-100 hover:border-[#DAB428] rounded-2xl p-8 lg:p-10 hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" style={{ backgroundColor: '#DAB428' }} />

                  <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-[#212121] group-hover:text-[#A42A28] transition-colors">
                          {job.title}
                        </h3>
                        <motion.div
                          whileHover={{ rotate: 45 }}
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#DAB428] group-hover:bg-[#DAB428]/10 transition-all"
                        >
                          <ChevronRight size={20} style={{ color: '#A42A28' }} strokeWidth={2.5} />
                        </motion.div>
                      </div>

                      <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 group-hover:bg-[#DAB428]/10 transition-colors">
                          <Briefcase size={16} style={{ color: '#A42A28' }} strokeWidth={2.5} />
                          <span className="font-medium">{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 group-hover:bg-[#DAB428]/10 transition-colors">
                          <MapPin size={16} style={{ color: '#A42A28' }} strokeWidth={2.5} />
                          <span className="font-medium">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 group-hover:bg-[#DAB428]/10 transition-colors">
                          <Clock size={16} style={{ color: '#A42A28' }} strokeWidth={2.5} />
                          <span className="font-medium">{job.type}</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn relative px-8 py-4 rounded-full font-bold text-white shadow-lg overflow-hidden self-start lg:self-center"
                      style={{ backgroundColor: '#A42A28' }}
                    >
                      <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover/btn:w-full" />
                      <span className="relative flex items-center gap-2">
                        Apply Now
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="text-center mt-16 p-10 rounded-2xl bg-white border-2 border-gray-100">
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  Don't see the right position? We're always looking for talented individuals.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-xl overflow-hidden"
                  style={{ backgroundColor: '#A42A28' }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <span className="relative">Submit General Application</span>
                  <ChevronRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-24 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ color: '#A42A28' }}>
                  Ready to Start Your Journey?
                </h2>
                <p className="text-base lg:text-lg text-black/60 mb-8 leading-relaxed">
                  Join OCIC and be part of a team that's building Cambodia's future. Explore our open positions and take the first step toward an exciting career.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#open-positions"
                  className="inline-block px-10 py-3 rounded-full font-semibold text-white shadow-lg"
                  style={{ backgroundColor: '#A42A28' }}
                >
                  Browse Opportunities
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}