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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${hero}')` }}
        >
          {/* Gradient overlay for better text contrast */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(33, 39, 33, 0.75), rgba(33, 39, 33, 0.85))'
            }} 
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest text-white/90 uppercase mb-4">
              Join Our Team
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight drop-shadow-lg">
              Build Your Future<br />with OCIC
            </h1>
            <p className="text-lg lg:text-xl text-white/95 max-w-2xl leading-relaxed mb-8 drop-shadow-md">
              Join Cambodia's leading integrated conglomerate and be part of transformative projects that shape the nation's future.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#open-positions"
              className="inline-block px-10 py-3 rounded-full font-semibold text-white shadow-lg"
              style={{ backgroundColor: '#A42A28' }}
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Join OCIC */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#A42A28' }}>
                  Why OCIC
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#A42A28' }}>
                  Why Join Our Team
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <FadeUp>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#212721] mb-6">
                    Be Part of Something Bigger
                  </h3>
                  <p className="text-base text-black/60 leading-relaxed mb-6">
                    At OCIC, you'll work on groundbreaking projects that directly impact Cambodia's development and growth. From infrastructure to education, hospitality to real estate, our diverse portfolio offers unique opportunities to make a meaningful difference.
                  </p>
                  <p className="text-base text-black/60 leading-relaxed">
                    We believe in empowering our people with the tools, resources, and support they need to excel. Join a team that values innovation, integrity, and collaboration.
                  </p>
                </div>
              </FadeUp>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={career}
                  alt="OCIC Culture"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-black/8 bg-[#F9F9F9] hover:shadow-lg transition-all"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: '#A42A28' }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#A42A28' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
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
        <section id="open-positions" className="py-20 lg:py-28 scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#A42A28' }}>
                  Opportunities
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#A42A28' }}>
                  Open Positions
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-black/8 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-[#212721] mb-2 group-hover:text-[#A42A28] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-base text-black/60 mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-black/50">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-3 rounded-full font-semibold text-white shadow-md self-start lg:self-center"
                      style={{ backgroundColor: '#A42A28' }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-base text-black/60 mb-6">
                  Don't see the right position? We're always looking for talented individuals.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-3 rounded-full font-semibold border-2 transition-colors"
                  style={{ borderColor: '#A42A28', color: '#A42A28' }}
                >
                  Submit General Application
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