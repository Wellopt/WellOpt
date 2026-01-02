import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Anchor, CheckCircle, TrendingUp, Zap, Database, Wrench } from "lucide-react";
import marineSlide1 from "@/assets/Marine Slide 1.jpg";
import marineSlide2 from "@/assets/Marine Slide 2.png";
import marine1 from "@/assets/Marine 1.png";
import marine2 from "@/assets/Marine 2.png";


const Marine = () => {
  const capabilities = [
    { icon: Anchor, label: "Offshore/Swamp Well Intervention" },
    { icon: CheckCircle, label: "Wellbore Integrity" },
    { icon: TrendingUp, label: "Production Enhancements" },
    { icon: Zap, label: "Perforating Operations" },
    { icon: Database, label: "Full Data Acquisition" },
    { icon: Wrench, label: "Wellhead Maintenance" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSlider 
          images={[marineSlide1, marineSlide2]} 
          interval={5000}
          overlayClass="bg-[#002D46CC]"
        >
          <section className="relative h-[50vh] md:h-[60vh] flex items-center">
            <div className="container-custom relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Marine Operations
                <span className="block text-2xl md:text-3xl font-normal mt-2">
                  (Slickline Barge)
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                Extending our expert slickline capabilities to offshore, swamp, and inland
                waterways with our fully-equipped, self-propelled barge.
              </p>
            </div>
          </section>
        </HeroSlider>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">OVERVIEW</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              At WellOPT, we provide comprehensive slickline services for swamp and offshore
              locations with our dedicated slickline barge, the "M.V. OPRAL BENSON." This
              self-propelled vessel allows for rapid deployment and efficient operations without
              the need for a tug, capable of working in water depths from 3ft to 20ft. It is a
              fully self-sufficient operational base, complete with on-board accommodation for 21
              people and a hydraulic crane, allowing our expert crews to perform complex well
              interventions safely and efficiently, all while adhering strictly to our HSE policy
              and all NUPRC regulations.
            </p>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              KEY CAPABILITIES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-background p-4 rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section className="section-padding">
          <div className="container-custom">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                EQUIPMENT & TECHNOLOGY
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
                Our marine solution, the "M.V. OPRAL BENSON," is a robust, purpose-built
                slickline barge with impressive capabilities:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8 max-w-4xl">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Vessel Name: M.V. OPRAL BENSON</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Type: Self-Propelled Swamp Barge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Dimensions: 75 ft long x 25 ft wide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Engines: Twin GM 673 (2x228HP) main engines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    On-Board Crane: A telescopic boom crane (10,000lbs at 50ft) for safe and
                    efficient rig-up
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Self-Sufficient: Features full accommodation for 21 people, a 5,000-gallon
                    fuel tank, and a 5,000-gallon water tank for extended operations
                  </span>
                </li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={marine1}
                    alt="Marine barge equipment"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={marine2}
                    alt="Marine operations"
                    className="w-full h-80 object-cover"
                  />
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section className="py-16 bg-background">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              GET A QUOTE FOR MARINE OPERATIONS
            </h2>
            <Link
              to="/contact"
              className="inline-flex border-2 border-accent text-accent px-8 py-3 rounded font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Marine;
