import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Calendar, ArrowRight, Search } from "lucide-react";

// Import news images
import camtechGraduation from "../../assets/CamTech_Graduation_2025.jpg";
import educationBoard from "../../assets/OCIC_Education_Board_Member.jpg";
import noreaEzesoft from "../../assets/OCIC_Norea_Ezesoft_MoU.webp";
import communityImage from "../../assets/Koh-pich-running.webp";
import cisBuilding from "../../assets/CIS_Building.webp";
import environmentImage from "../../assets/environment.webp";

// News categories
const categories = ["All", "Press Center", "CSR", "Company News", "Industry Insights"];

// News data
const featuredNews = {
  category: "PRESS CENTER",
  title: "OCIC Celebrates CamTech 2025 Graduation: Empowering Cambodia's Future Tech Leaders",
  description: "OCIC proudly celebrates the graduation of CamTech 2025, marking another milestone in our commitment to nurturing Cambodia's next generation of technology professionals and entrepreneurs. The ceremony honored over 200 graduates who completed intensive training programs in software development, digital marketing, and business technology.",
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

export default function NewsMedia() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter((news) => {
    const matchesCategory = selectedCategory === "All" || news.category.toLowerCase() === selectedCategory.toLowerCase().replace(" ", "_");
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section with Featured Article */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F5F3F3] to-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#A42A28' }}>
              News & Media
            </h1>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Stay informed with the latest news, updates, and stories from OCIC
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    FEATURED
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="text-xs font-semibold tracking-wider" style={{ color: '#A42A28' }}>
                  {featuredNews.category}
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#212721] mt-4 mb-4 leading-tight group-hover:text-[#A42A28] transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-base text-black/60 leading-relaxed mb-6">
                  {featuredNews.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-black/50 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredNews.date}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredNews.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 font-semibold group/btn"
                  style={{ color: '#A42A28' }}
                >
                  Read Full Story
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <AnimatedSection>
        <section className="py-12 border-b border-black/5">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === category
                        ? 'text-white shadow-md'
                        : 'text-black/60 bg-[#F5F3F3] hover:bg-[#E5E3E3]'
                    }`}
                    style={selectedCategory === category ? { backgroundColor: '#A42A28' } : {}}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-auto">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-12 pr-4 py-3 rounded-full border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* News Grid */}
      <AnimatedSection>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl mb-5 relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ 
                            backgroundColor: news.category === 'CSR' ? '#13b64f' : '#A42A28',
                            color: 'white'
                          }}
                        >
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#212721] mb-3 leading-tight group-hover:text-[#A42A28] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-black/60 leading-relaxed mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-black/50">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{news.date}</span>
                        </div>
                        <span>•</span>
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-black/40">No news articles found matching your criteria.</p>
              </div>
            )}

            {/* Load More Button */}
            {filteredNews.length > 0 && (
              <FadeUp delay={0.3}>
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-10 py-3 rounded-full font-semibold text-white shadow-lg"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    Load More Stories
                  </motion.button>
                </div>
              </FadeUp>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Subscription */}
      <AnimatedSection>
        <section className="py-20 lg:py-24 bg-[#F5F3F3]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ color: '#A42A28' }}>
                  Stay Updated
                </h2>
                <p className="text-base text-black/60 mb-8">
                  Subscribe to our newsletter and get the latest news and updates delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 rounded-full border border-black/20 focus:border-[#A42A28] focus:outline-none focus:ring-2 focus:ring-[#A42A28]/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 rounded-full font-semibold text-white shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: '#A42A28' }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}