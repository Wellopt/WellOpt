import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ClientLogos from "@/components/sections/ClientLogos";
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/70" />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision.<br />Safety.<br />Performance.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              WellOPT is Nigeria's leading indigenous provider of expert slickline, wellhead maintenance, and data acquisition services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange-hover transition-colors text-center"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-navy transition-colors text-center"
              >
                Explore our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;