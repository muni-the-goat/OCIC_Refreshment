import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import construction from "../../assets/construction.jpg";
import hospitality from "../../assets/Dara_Hotel.avif";
import airportsunset from "../../assets/TIA_Sunset.jpg";
import intercare from "../../assets/intercare.jpg";
import retail from "../../assets/soriya.png";
import skyline from "../../assets/Sector_Hero.jpg";
import agriculture from "../../assets/Agriculture.jpg";
import distribution from "../../assets/dara-ventures.jpg"; 
import leisure from "../../assets/coconut-park.webp";
import school from "../../assets/CIS_Building.webp";
import elitetown from "../../assets/koh-pich-elite-town.jpeg";
import media from "../../assets/media.jpg";
import propertydevelopment from "../../assets/koh-pich-skyline.jpg";
import CCB from "../../assets/CCB.jpg";
import { 
  Wheat, 
  Plane, 
  HardHat, 
  Package, 
  GraduationCap, 
  Heart, 
  Hotel, 
  Palmtree,
  Radio,
  Building2,
  ShoppingBag,
  Home,
  ArrowRight
} from "lucide-react";

interface Sector {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

const sectors: Sector[] = [
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Wheat,
    tagline: "Cultivating Tomorrow's Harvest",
    description: "OCIC's agricultural division focuses on sustainable farming practices and food security initiatives that support Cambodia's rural communities and economic growth. We invest in modern agricultural technologies and practices that enhance productivity while preserving the environment.",
    highlights: [
      "Sustainable farming initiatives",
      "Advanced irrigation systems",
      "Crop diversification programs",
      "Rural community development"
    ],
    image: agriculture
  },
  {
    id: "airport",
    name: "Airport",
    icon: Plane,
    tagline: "Gateway to Cambodia",
    description: "Through Cambodia Airport Investment Co., Ltd. (CAIC), OCIC developed Techo International Airport, a state-of-the-art aviation facility located 20 kilometers south of Phnom Penh. Spanning 2,600 hectares, this modern airport serves as Cambodia's primary international gateway, supporting the nation's growing tourism and business sectors.",
    highlights: [
      "Modern terminal facilities",
      "International connectivity",
      "Advanced aviation technology",
      "Economic growth driver"
    ],
    image: airportsunset
  },
  {
    id: "construction-engineering",
    name: "Construction & Engineering",
    icon: HardHat,
    tagline: "Building Cambodia's Future",
    description: "Our construction and engineering arm delivers world-class infrastructure projects that shape Cambodia's urban landscape. From commercial towers to residential complexes, we combine innovative design with superior craftsmanship to create structures that stand the test of time.",
    highlights: [
      "Large-scale infrastructure projects",
      "Green building practices",
      "Quality assurance standards",
      "Skilled workforce development"
    ],
    image: construction
  },
  {
    id: "distribution",
    name: "Distribution",
    icon: Package,
    tagline: "Connecting Markets, Delivering Value",
    description: "OCIC's distribution network ensures efficient supply chain management across Cambodia and the region. We facilitate the movement of goods from manufacturers to consumers, supporting local businesses and international trade partnerships.",
    highlights: [
      "Extensive distribution network",
      "Cold chain logistics",
      "Import-export expertise",
      "Real-time inventory management"
    ],
    image: distribution
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Empowering Through Knowledge",
    description: "We invest in educational institutions and programs that prepare Cambodia's youth for the challenges of tomorrow. Our education initiatives span from primary schools to higher education institutions, focusing on quality learning environments and modern curricula.",
    highlights: [
      "Modern learning facilities",
      "International curriculum standards",
      "Scholarship programs",
      "Teacher training initiatives"
    ],
    image: school
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    tagline: "Caring for Cambodia's Wellbeing",
    description: "OCIC is committed to improving healthcare accessibility and quality across Cambodia. Our healthcare investments include modern medical facilities, specialized clinics, and health education programs that serve communities nationwide.",
    highlights: [
      "State-of-the-art medical facilities",
      "Specialized treatment centers",
      "Community health programs",
      "Medical equipment & technology"
    ],
    image: intercare
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    tagline: "Defining Cambodian Hospitality",
    description: "Through partnerships like Dara Hotels Group, OCIC develops premium hospitality properties that showcase Cambodia's warmth and cultural richness. Our hotels and resorts deliver exceptional guest experiences while supporting the tourism industry.",
    highlights: [
      "Luxury hotel properties",
      "World-class amenities",
      "Cultural tourism integration",
      "Professional hospitality training"
    ],
    image: hospitality
  },
  {
    id: "leisure",
    name: "Leisure",
    icon: Palmtree,
    tagline: "Creating Memorable Experiences",
    description: "OCIC develops leisure and entertainment venues that enrich the quality of life for Cambodians and visitors alike. From recreational facilities to cultural centers, we create spaces where communities gather, celebrate, and connect.",
    highlights: [
      "Recreation & sports facilities",
      "Entertainment venues",
      "Cultural preservation",
      "Community event spaces"
    ],
    image: leisure
  },
  {
    id: "media",
    name: "Media",
    icon: Radio,
    tagline: "Amplifying Cambodia's Voice",
    description: "Our media investments support information dissemination and cultural expression across Cambodia. We believe in the power of media to educate, entertain, and connect communities in an increasingly digital world.",
    highlights: [
      "Broadcasting infrastructure",
      "Digital media platforms",
      "Content production",
      "Journalism development"
    ],
    image: media
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    tagline: "Developing Spaces, Building Communities",
    description: "OCIC's real estate portfolio includes iconic developments like Canadia Tower and Koh Pich. We create integrated communities that combine residential, commercial, and public spaces, setting new standards for urban development in Cambodia.",
    highlights: [
      "Mixed-use developments",
      "Smart city integration",
      "Sustainable urban planning",
      "Premium office spaces"
    ],
    image: elitetown
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    tagline: "Transforming the Shopping Experience",
    description: "OCIC develops modern retail spaces that bring international shopping experiences to Cambodia. Our retail properties provide platforms for local and international brands to connect with Cambodia's growing consumer market.",
    highlights: [
      "Modern shopping centers",
      "Retail management expertise",
      "Brand partnerships",
      "Customer experience innovation"
    ],
    image: retail
  },
  {
    id: "property-development",
    name: "Property Development",
    icon: Home,
    tagline: "Creating Homes, Building Dreams",
    description: "Our property development projects, including Norea City, provide quality housing solutions for Cambodians. Spanning over 125 hectares, our developments integrate residential, commercial, and recreational spaces to create vibrant, livable communities.",
    highlights: [
      "Master-planned communities",
      "Affordable housing initiatives",
      "Green space integration",
      "Modern infrastructure"
    ],
    image: propertydevelopment
  }
];

export default function Sectors() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sectorElements = sectors.map(s => document.getElementById(s.id));
      
      for (const element of sectorElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(element.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center" style={{ backgroundColor: '#212121' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#212121]"></div>
          <img 
            src={skyline}
            alt="OCIC Sectors"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gold accent bars */}
        <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-[#DAB428] to-transparent" />
        <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#DAB428] to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 mx-auto mb-8"
            style={{ backgroundColor: '#DAB428' }}
          />

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl mb-6 text-white font-semibold"
          >
            Our Sectors
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 max-w-3xl mx-auto"
          >
            Diversified investments across industries that drive Cambodia's economic growth and development
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 py-4 min-w-max">
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => scrollToSection(sector.id)}
                  className={`
                    px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap
                    ${activeSection === sector.id 
                      ? 'text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                  style={activeSection === sector.id ? { backgroundColor: '#A42A28' } : {}}
                >
                  {sector.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20">
        {sectors.map((sector, index) => (
          <AnimatedSection key={sector.id}>
            <section 
              id={sector.id}
              className="mb-32 scroll-mt-32"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl mb-6" style={{ backgroundColor: 'rgba(218, 180, 40, 0.1)' }}>
                      <sector.icon 
                        size={32} 
                        style={{ color: '#DAB428' }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-3xl lg:text-4xl mb-3 font-semibold" style={{ color: '#212121' }}>
                      {sector.name}
                    </h2>
                    <p className="text-lg mb-6 italic" style={{ color: '#A42A28', fontWeight: 500 }}>
                      {sector.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-base mb-8 leading-relaxed text-gray-600">
                      {sector.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h3 className="text-base mb-4 font-semibold" style={{ color: '#212121' }}>
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {sector.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div 
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: '#DAB428' }}
                            />
                            <span className="text-sm text-gray-600">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-8 py-3 text-white text-sm font-semibold transition-all"
                      style={{ backgroundColor: '#A42A28' }}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="relative group overflow-hidden"
                  >
                    <div 
                      className="absolute -inset-4 opacity-10"
                      style={{ backgroundColor: '#DAB428' }}
                    />
                    <img 
                      src={sector.image}
                      alt={sector.name}
                      className="relative w-full h-[400px] lg:h-[500px] object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        ))}
      </div>

      {/* Call to Action Section */}
      <AnimatedSection>
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${CCB}')`,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(33, 39, 33, 0.85)' }} />
          
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#DAB428] to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-[#DAB428] to-transparent" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 text-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 mx-auto mb-8"
              style={{ backgroundColor: '#DAB428' }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl mb-6 text-white font-semibold"
            >
              Partner With Us
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Explore investment opportunities and partnerships across our diverse portfolio of sectors
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-4 text-white text-base font-semibold transition-all shadow-xl"
                style={{ backgroundColor: '#A42A28' }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-4 text-white text-base font-semibold border-2 border-white transition-all"
              >
                Learn About OCIC
              </motion.a>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}