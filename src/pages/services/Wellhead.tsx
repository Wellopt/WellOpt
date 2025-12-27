import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Wrench, AlertTriangle, Activity, Settings, Search, RefreshCw } from "lucide-react";
import wellheadCard from "@/assets/wellhead-card.png";
import wellheadEquipment1 from "@/assets/wellhead-equipment-1.png";
import wellheadEquipment2 from "@/assets/wellhead-equipment-2.png";
import wellheadEquipment3 from "@/assets/wellhead-equipment-3.png";

const Wellhead = () => {
  const capabilities = [
    { icon: Wrench, label: "Routine Maintenance" },
    { icon: AlertTriangle, label: "Non-Routine Maintenance" },
    { icon: Activity, label: "Wellhead Monitoring" },
    { icon: Settings, label: "Valve & Actuator Servicing" },
    { icon: Search, label: "Wellhead Integrity Testing" },
    { icon: RefreshCw, label: "Valve Refurbishment" },
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
              backgroundImage: `url('${wellheadCard}')`,
            }}
          >
            <div className="absolute inset-0 bg-[#002D46CC]"></div>
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Wellhead Maintenance
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Providing comprehensive First-Line wellhead maintenance to ensure the safety,
              integrity, and operational readiness of your surface equipment.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">OVERVIEW</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              At WellOPT, we provide critical First-Line Wellhead Maintenance services for both
              land and swamp operations through our dedicated Wellhead Maintenance Cell. Our
              experienced technicians are trained to service, repair, test, and monitor all
              wellhead components to ensure they function safely and reliably. Proactive
              maintenance prevents leaks, minimizes downtime, and extends the life of your
              equipment. All operations are conducted with an unwavering commitment to safety,
              adhering strictly to our HSE policy and all NUPRC regulations.
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
                Our dedicated Wellhead Maintenance Cell is a self-sufficient unit equipped with
                all necessary tools and technology to perform high-quality maintenance at your
                site.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8 max-w-4xl">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Wellhead Pressure Logger:</strong> We utilize the intrinsically safe
                    digital logger to accurately monitor and record wellhead pressure and
                    temperature.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>High-Pressure Test Pumps:</strong> For accurately testing all valves,
                    seals, and components.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Hydraulic Pumping Units:</strong> To safely control surface and
                    downhole safety valves.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Specialized Tooling:</strong> A full range of tools for servicing
                    various wellhead brands.
                  </span>
                </li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={wellheadEquipment1}
                    alt="Oil wellhead equipment"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={wellheadEquipment2}
                    alt="Protective case with wellhead equipment"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={wellheadEquipment3}
                    alt="Digital meter and sensor equipment"
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
              GET A QUOTE FOR WELLHEAD MAINTENANCE
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

export default Wellhead;
