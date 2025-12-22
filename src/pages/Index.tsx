import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLogos from "@/components/sections/ClientLogos";
import HeroSlider from "@/components/HeroSlider";
import { Settings, TrendingUp, Wrench, Ship } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Slickline Services",
    description: "Delivering a full range of slickline services for land and swamp operations...",
    link: "/services/slickline",
  },
  {
    icon: TrendingUp,
    title: "BHP Survey",
    description: "Capturing high-precision downhole pressure and temperature data to provide critical insights to well...",
    link: "/services/bhp-survey",
  },
  {
    icon: Wrench,
    title: "Wellhead Maintenance",
    description: "Providing comprehensive wellhead maintenance to ensure the safety, integrity, and operational readiness...",
    link: "/services/wellhead",
  },
  {
    icon: Ship,
    title: "Marine (Slickline Barge)",
    description: "Extending our slickline capabilities to offshore and inland waterways with our fully equipped slickline barge...",
    link: "/services/marine",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80",
  "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Image Slider */}
      <HeroSlider 
        images={heroImages} 
        interval={5000}
        overlayClass="bg-gradient-to-r from-navy/95 to-navy/60"
      >
        <section className="min-h-[500px] md:min-h-[600px] flex items-center">
          <div className="container-custom py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
                Precision.<br />Safety.<br />Performance.
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                WellOPT is Nigeria's leading indigenous provider of expert slickline, wellhead maintenance, and data acquisition services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link
                  to="/contact"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-hover transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors text-center"
                >
                  Explore our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </HeroSlider>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background border border-border rounded-sm p-6 pt-0 text-center hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="w-16 h-16 mx-auto -mt-8 mb-5 bg-[#002D46] rounded-full flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-accent font-semibold text-sm hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Partner Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground">Expert Team Image</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Expert Indigenous Partner
              </h2>
              <p className="text-muted-foreground mb-4">
                Since 2006, WellOPT has grown into one of Nigeria's most trusted indigenous well services companies. We are fully compliant with all major industry bodies, including NUPRC, NIPEX, and NCDMB, giving our clients total peace of mind.
              </p>
              <p className="text-muted-foreground mb-6">
                Our strength lies in our people. We deploy IWCF Certified specialists and highly experienced crews who are experts in delivering safe, efficient, and reliable solutions across land, swamp environments etc.
              </p>
              <Link
                to="/about"
                className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:bg-orange-hover transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Commitment Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Unwavering Commitment to Safety
              </h2>
              <p className="text-muted-foreground mb-4">
                At WellOPT, safety is our foundation. It is a core value integrated into every business decision and a shared responsibility, holding every team member from leadership to the field accountable for our performance.
              </p>
              <p className="text-muted-foreground mb-4">
                We are committed to a "Zero-Loss Culture" with a simple goal: zero accidents, zero health-related incidents, and zero loss to process.
              </p>
              <p className="text-muted-foreground mb-6">
                This commitment is demonstrated by proactively protecting our people, safeguarding the environment, and driving continual improvement through mandatory, certified training and regular equipment audits.
              </p>
              <Link
                to="/hse"
                className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:bg-orange-hover transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center order-first md:order-last">
              <span className="text-muted-foreground">Safety Image</span>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;