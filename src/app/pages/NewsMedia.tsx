import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Calendar, ArrowRight, Search, ChevronRight, Newspaper } from "lucide-react";

// Import news images
import camtechGraduation from "../../assets/CamTech_Graduation_2025.jpg";
import educationBoard from "../../assets/OCIC_Education_Board_Member.jpg";
import noreaEzesoft from "../../assets/OCIC_Norea_Ezesoft_MoU.webp";
import communityImage from "../../assets/Koh-pich-running.webp";
import cisBuilding from "../../assets/CIS_Building.webp";
import environmentImage from "../../assets/environment.webp";
import newsroomHero from "../../assets/news.jpg";

// News categories
const categories = ["All", "Press Center", "CSR", "Company News", "Industry Insights"];

// News data
const featuredNews = {
  category: "PRESS CENTER",
  title: "OCIC Celebrates CamTech 2025 Graduation: Empowering Cambodia's Future Tech Leaders",
  description:
    "OCIC proudly celebrates the graduation of CamTech 2025, marking another milestone in our commitment to nurturing Cambodia's next generation of technology professionals and entrepreneurs. The ceremony honored over 200 graduates who completed intensive training programs in software development, digital marketing, and business technology.",
  image: camtechGraduation,
  date: "March 1, 2026",
  readTime: "5 min read",
};

const allNews = [
  {
    category: "PRESS CENTER",
    title: "OCIC Appoints New Education Board Member to Strengthen Academic Excellence",
    excerpt: "Renowned education leader joins OCIC's board to enhance strategic direction in Cambodia's education sector.",
    image: educationBoard,
    date: "February 28, 2026",
    readTime: "3 min read",
  },
  {
    category: "PRESS CENTER",
    title: "Norea City Partners with Ezesoft to Enhance Smart City Infrastructure",
    excerpt: "Strategic partnership aims to integrate cutting-edge technology solutions for sustainable urban development.",
    image: noreaEzesoft,
    date: "February 25, 2026",
    readTime: "4 min read",
  },
  {
    category: "CSR",
    title: "RUN FOR OUR HEROES Brings 4,000+ Runners Together in Koh Pich",
    excerpt: "Annual charity run raises funds for frontline workers and displaced communities across Cambodia.",
    image: communityImage,
    date: "February 20, 2026",
    readTime: "4 min read",
  },
  {
    category: "PRESS CENTER",
    title: "CIS Expansion Project Advances with New State-of-the-Art Facilities",
    excerpt: "New campus wing to accommodate 500 additional students with modern learning environments.",
    image: cisBuilding,
    date: "February 15, 2026",
    readTime: "3 min read",
  },
  {
    category: "CSR",
    title: "Green Oasis Tree-Planting Initiative Brings Community Together",
    excerpt: "OCIC's environmental program plants 5,000 trees in Chroy Changvar district.",
    image: environmentImage,
    date: "February 10, 2026",
    readTime: "3 min read",
  },
  {
    category: "COMPANY NEWS",
    title: "OCIC Reports Strong Q4 Performance Across All Sectors",
    excerpt: "Integrated conglomerate sees growth in real estate, education, and hospitality divisions.",
    image: cisBuilding,
    date: "February 5, 2026",
    readTime: "6 min read",
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

// Category badge color helper
function getCategoryColor(category: string) {
  if (category === "CSR") return "#13b64f";
  if (category === "COMPANY NEWS") return "#DAB428";
  return "#A42A28";
}

export default function NewsMedia() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter((news) => {
    const matchesCategory =
      selectedCategory === "All" ||
      news.category.toLowerCase() === selectedCategory.toUpperCase().replace(" ", "_") ||
      news.category.toLowerCase() === selectedCategory.toLowerCase() ||
      news.category.toUpperCase() === selectedCategory.toUpperCase();
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background — featured image with dark overlay */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${newsroomHero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
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
                NEWS & MEDIA
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Stay in the<br />
                <span style={{ color: "#DAB428" }}>Know</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
                The latest news, press releases, and stories from across OCIC's portfolio — shaping Cambodia's future, one headline at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#latest-news"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-base shadow-xl transition-all relative overflow-hidden"
                  style={{ backgroundColor: "#A42A28" }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <span className="relative">Browse All Stories</span>
                  <ChevronRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#featured"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base border-2 border-white transition-all"
                >
                  Featured Story
                </motion.a>
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

      {/* ── Featured Article ──────────────────────────────────────────── */}
      <AnimatedSection>
        <section id="featured" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-20">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#DAB428", filter: "blur(100px)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#A42A28", filter: "blur(100px)" }} />

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">
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
                  TOP STORY
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#212121]">
                  Featured <span style={{ color: "#DAB428" }}>Article</span>
                </h2>
              </div>
            </FadeUp>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white border-2 border-gray-100 hover:border-[#DAB428] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">

                {/* Image */}
                <div className="relative h-[400px] lg:h-[520px] overflow-hidden">
                  {/* Gold corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#DAB428" }} />
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "#DAB428" }} />
                  </div>
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 z-10">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#A42A28" }}
                    >
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#A42A28" }}>
                    {featuredNews.category}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-[#212121] mt-4 mb-5 leading-tight group-hover:text-[#A42A28] transition-colors">
                    {featuredNews.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {featuredNews.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-black/50 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      <span>{featuredNews.date}</span>
                    </div>
                    <span>•</span>
                    <span>{featuredNews.readTime}</span>
                  </div>

                  {/* Gold accent line */}
                  <motion.div
                    className="mb-6 h-1 rounded-full"
                    style={{ backgroundColor: "#DAB428" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg overflow-hidden"
                    style={{ backgroundColor: "#A42A28" }}
                  >
                    <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover/btn:w-full" />
                    <span className="relative">Read Full Story</span>
                    <ArrowRight size={18} className="relative group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Filter & Search ───────────────────────────────────────────── */}
      <AnimatedSection>
        <section id="latest-news" className="py-10 scroll-mt-20" style={{ backgroundColor: "#F8F7F5" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

              {/* Category pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      selectedCategory === category
                        ? "text-white shadow-md"
                        : "text-black/60 bg-white border-2 border-gray-100 hover:border-[#DAB428]"
                    }`}
                    style={selectedCategory === category ? { backgroundColor: "#A42A28" } : {}}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-11 pr-5 py-3 rounded-full border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── News Grid ─────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#F8F7F5" }}>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#DAB428", filter: "blur(100px)" }} />

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-20">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white border-2 border-gray-100 hover:border-[#DAB428] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: "#DAB428" }} />

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: getCategoryColor(news.category) }}
                        >
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      <h3 className="text-lg font-bold text-[#212121] mb-3 leading-tight group-hover:text-[#A42A28] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-black/50">
                          <div className="flex items-center gap-1">
                            <Calendar size={13} />
                            <span>{news.date}</span>
                          </div>
                          <span>•</span>
                          <span>{news.readTime}</span>
                        </div>
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center gap-1 text-xs font-bold"
                          style={{ color: "#A42A28" }}
                        >
                          Read
                          <ChevronRight size={14} />
                        </motion.div>
                      </div>

                      {/* Gold accent line */}
                      <motion.div
                        className="mt-4 h-0.5 rounded-full"
                        style={{ backgroundColor: "#DAB428" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
                      />
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-24"
              >
                <Newspaper size={48} className="mx-auto mb-4 text-black/20" />
                <p className="text-lg font-medium text-black/40">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  className="mt-4 text-sm font-bold underline"
                  style={{ color: "#A42A28" }}
                >
                  Clear filters
                </button>
              </motion.div>
            )}

            {/* Load More */}
            {filteredNews.length > 0 && (
              <FadeUp delay={0.3}>
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-xl overflow-hidden"
                    style={{ backgroundColor: "#A42A28" }}
                  >
                    <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                    <span className="relative">Load More Stories</span>
                    <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </FadeUp>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Newsletter ────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 lg:py-24 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-20">
            <FadeUp>
              <div className="text-center mb-12">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 mx-auto mb-4"
                  style={{ backgroundColor: "#DAB428" }}
                />
                <p className="text-sm font-bold tracking-wider mb-3" style={{ color: "#A42A28" }}>
                  NEWSLETTER
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">
                  Stay <span style={{ color: "#DAB428" }}>Updated</span>
                </h2>
                <p className="text-base text-gray-600 max-w-xl mx-auto">
                  Subscribe to our newsletter and get the latest news and updates delivered directly to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-100 bg-white focus:border-[#DAB428] focus:outline-none focus:ring-2 focus:ring-[#DAB428]/20 transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-xl whitespace-nowrap overflow-hidden"
                  style={{ backgroundColor: "#A42A28" }}
                >
                  <span className="absolute inset-0 w-0 bg-[#DAB428] transition-all duration-300 ease-out group-hover:w-full" />
                  <span className="relative">Subscribe</span>
                  <ChevronRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </FadeUp>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}