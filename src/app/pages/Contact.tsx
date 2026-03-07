import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, Youtube, Instagram, ChevronRight } from "lucide-react";
import contactHeroImage from "../../assets/Koh_Norea_Bridge-Night.webp";

// Contact information data
const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: [
      "OCIC Tower, Street 169",
      "Sangkat Veal Vong, Khan 7 Makara",
      "Phnom Penh, Cambodia",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+855 (0)23 966 966",
      "+855 (0)23 966 888",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@ocic.com.kh",
      "careers@ocic.com.kh",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday – Friday: 8:00 AM – 5:30 PM",
      "Saturday: 8:00 AM – 12:00 PM",
      "Sunday: Closed",
    ],
  },
];

const socialLinks = [
  { icon: Facebook,  name: "Facebook",  url: "#", color: "#1877F2" },
  { icon: Linkedin,  name: "LinkedIn",  url: "#", color: "#0A66C2" },
  { icon: Youtube,   name: "YouTube",   url: "#", color: "#FF0000" },
  { icon: Instagram, name: "Instagram", url: "#", color: "#E4405F" },
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${contactHeroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </motion.div>

        {/* Gold corner accent */}
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

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? "#DAB428" : "#A42A28",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1,
              }}
              animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-20 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 mb-6"
                style={{ backgroundColor: "#DAB428" }}
              />
              <p className="text-sm font-bold tracking-widest text-[#DAB428] uppercase mb-6">
                GET IN TOUCH
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Let's Start a<br />
                <span style={{ color: "#DAB428" }}>Conversation</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
                Have questions about OCIC or our projects? We'd love to hear from you. Reach out and our team will respond promptly.
              </p>

              {/* Quick-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-base shadow-xl transition-all relative overflow-hidden"
                  style={{ backgroundColor: "#A42A28" }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <span className="relative">Send a Message</span>
                  <ChevronRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="tel:+85523966966"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base border-2 border-white transition-all"
                >
                  <Phone size={18} />
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>

            {/* Right: quick-info card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl space-y-6">
                {contactInfo.slice(0, 3).map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#A42A28" }}
                      >
                        <Icon size={18} className="text-[#DAB428]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-wider text-[#DAB428] uppercase mb-1">
                          {info.title}
                        </p>
                        {info.details.map((d, i) => (
                          <p key={i} className="text-sm text-white/80 leading-relaxed">{d}</p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
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
            <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#DAB428" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Contact Form + Info ──────────────────────────────────────── */}
      <AnimatedSection>
        <section id="contact-form" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-20">

          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#DAB428", filter: "blur(100px)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#A42A28", filter: "blur(100px)" }} />

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">

            {/* Section header */}
            <FadeUp>
              <div className="text-center mb-20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: "#DAB428" }}
                />
                <p className="text-sm font-bold tracking-wider mb-3" style={{ color: "#A42A28" }}>
                  REACH OUT
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  How Can We <span style={{ color: "#DAB428" }}>Help You?</span>
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* ── Left: Contact Form ─────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="mb-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#212121] mb-3">
                    Send Us a <span style={{ color: "#DAB428" }}>Message</span>
                  </h3>
                  <p className="text-base text-gray-600">
                    Fill out the form below and our team will respond within 24–48 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#212121] mb-2">
                      Full Name <span style={{ color: "#A42A28" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#212121] mb-2">
                        Email Address <span style={{ color: "#A42A28" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#212121] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+855 12 345 678"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#212121] mb-2">
                      Subject <span style={{ color: "#A42A28" }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="investment">Investment Inquiries</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#212121] mb-2">
                      Message <span style={{ color: "#A42A28" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all resize-none text-sm"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-white shadow-xl overflow-hidden rounded-full"
                    style={{ backgroundColor: "#A42A28" }}
                  >
                    <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                    <Send size={18} className="relative" />
                    <span className="relative">Send Message</span>
                    <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </motion.div>

              {/* ── Right: Contact Info ────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="mb-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#212121] mb-3">
                    Contact <span style={{ color: "#DAB428" }}>Information</span>
                  </h3>
                  <p className="text-base text-gray-600">
                    Visit us at our head office or reach out through any of the channels below.
                  </p>
                </div>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ y: -4 }}
                      className="group relative p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#DAB428] shadow-lg hover:shadow-2xl transition-all"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" style={{ backgroundColor: "#DAB428" }} />

                      <div className="relative flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#A42A28" }}
                        >
                          <Icon size={22} className="text-[#DAB428]" strokeWidth={2.5} />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-base font-bold text-[#212121] mb-2 group-hover:text-[#A42A28] transition-colors">
                            {info.title}
                          </h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-gray-600 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                          {/* Gold accent line — sits below the text, aligned to text column */}
                          <motion.div
                            className="mt-3 h-0.5 rounded-full"
                            style={{ backgroundColor: "#DAB428" }}
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg"
                >
                  <h4 className="text-base font-bold text-[#212121] mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md transition-all"
                          style={{ backgroundColor: social.color }}
                          aria-label={social.name}
                        >
                          <Icon size={18} />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Our Culture–style "Visit Us" section ─────────────────────── */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-20">

            <FadeUp>
              <div className="text-center mb-16">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: "#DAB428" }}
                />
                <p className="text-sm font-bold tracking-wider mb-3" style={{ color: "#A42A28" }}>
                  VISIT US
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Find Our <span style={{ color: "#DAB428" }}>Location</span>
                </h2>
              </div>
            </FadeUp>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100"
            >
              {/* Gold corner accent on map */}
              <div className="absolute top-0 left-0 w-16 h-16 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#DAB428" }} />
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "#DAB428" }} />
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7475651672896!2d104.91731131477986!3d11.569370191814838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM0JzA5LjciTiAxMDTCsDU1JzA5LjYiRQ!5e0!3m2!1sen!2skh!4v1234567890123!5m2!1sen!2skh"
                width="100%"
                height="500"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OCIC Location"
              />
            </motion.div>

            <FadeUp delay={0.2}>
              <div className="mt-12 text-center">
                <p className="text-base text-gray-600 mb-6">
                  Need directions or have trouble finding us? Feel free to call ahead.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+85523966966"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-xl overflow-hidden"
                  style={{ backgroundColor: "#A42A28" }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <Phone size={18} className="relative" />
                  <span className="relative">Call Us Now</span>
                  <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}