import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Anchor, CheckCircle, TrendingUp, Zap, Database, Wrench } from "lucide-react";

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
        <section className="relative h-[50vh] md:h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-[#002D46CC]"></div>
          </div>
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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  EQUIPMENT & TECHNOLOGY
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our marine solution, the "M.V. OPRAL BENSON," is a robust, purpose-built
                  slickline barge with impressive capabilities:
                </p>
                <ul className="space-y-3 text-muted-foreground">
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
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80"
                  alt="Marine barge"
                  className="w-full h-80 object-cover rounded-lg"
                />
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
