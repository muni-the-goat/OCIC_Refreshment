import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import contactHeroImage from "../../assets/Koh_Norea_Bridge-Night.jpg";

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
      "Monday - Friday: 8:00 AM - 5:30 PM",
      "Saturday: 8:00 AM - 12:00 PM",
      "Sunday: Closed",
    ],
  },
];

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    url: "#",
    color: "#1877F2",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "#",
    color: "#0A66C2",
  },
  {
    icon: Youtube,
    name: "YouTube",
    url: "#",
    color: "#FF0000",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "#",
    color: "#E4405F",
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${contactHeroImage}')` }}
        >
          {/* Gradient overlay */}
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
              Get in Touch
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl text-white/95 max-w-2xl leading-relaxed drop-shadow-md">
              Have questions or want to learn more about OCIC? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left: Contact Form */}
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ color: '#A42A28' }}>
                      Send Us a Message
                    </h2>
                    <p className="text-base text-black/60">
                      Fill out the form below and our team will respond within 24-48 hours.
                    </p>
                  </div>
                </FadeUp>

                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#212721] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#212721] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#212721] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
                        placeholder="+855 12 345 678"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#212721] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
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

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#212721] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full md:w-auto px-10 py-3 rounded-full font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </motion.form>
              </div>

              {/* Right: Contact Information */}
              <div className="lg:col-span-5">
                <FadeUp delay={0.2}>
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ color: '#A42A28' }}>
                      Contact Information
                    </h2>
                    <p className="text-base text-black/60">
                      Visit us at our head office or reach out through any of the channels below.
                    </p>
                  </div>
                </FadeUp>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-6 rounded-xl bg-[#F9F9F9] border border-black/8"
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#A42A28' }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#212721] mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-black/60 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <FadeUp delay={0.4}>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-[#212721] mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all"
                            style={{ backgroundColor: social.color }}
                            aria-label={social.name}
                          >
                            <Icon size={20} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#A42A28' }}>
                  Visit Us
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold" style={{ color: '#A42A28' }}>
                  Find Our Location
                </h2>
              </div>
            </FadeUp>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Google Maps Embed - Replace with your actual location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7475651672896!2d104.91731131477986!3d11.569370191814838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM0JzA5LjciTiAxMDTCsDU1JzA5LjYiRQ!5e0!3m2!1sen!2skh!4v1234567890123!5m2!1sen!2skh"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OCIC Location"
              />
            </motion.div>

            <FadeUp delay={0.2}>
              <div className="mt-12 text-center">
                <p className="text-base text-black/60 mb-6">
                  Need directions or have trouble finding us? Feel free to call ahead.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+85523966966"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white shadow-lg"
                  style={{ backgroundColor: '#A42A28' }}
                >
                  <Phone size={20} />
                  Call Us Now
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}