import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Settings, CheckCircle, TrendingUp, Search, ShieldCheck, Zap, Layers, Menu } from "lucide-react";

const Slickline = () => {
  const capabilities = [
    { icon: Settings, label: "Precision Operations" },
    { icon: CheckCircle, label: "Wellbore Integrity" },
    { icon: TrendingUp, label: "Production Enhancements" },
    { icon: Search, label: "Fishing Operations" },
    { icon: Layers, label: "Zone Isolation" },
    { icon: ShieldCheck, label: "Safety Valve Operations" },
    { icon: Zap, label: "Perforating Operations" },
    { icon: Menu, label: "And Other Operations" },
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
              backgroundImage: `url('https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-[#002D46CC]"></div>
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Slickline Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Delivering a full range of slickline services for land and swamp operations to
              ensure optimal well performance and integrity.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">OVERVIEW</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              At WellOPT, we provide comprehensive slickline services for land and swamp
              operations, critical for optimizing well performance. Our IWCF Certified
              specialists and highly-trained crews use advanced, well-maintained equipment and
              proven techniques to minimize downtime and enhance production. All operations are
              executed with an unwavering commitment to safety, adhering strictly to our HSE
              policy and all NUPRC regulations.
            </p>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              KEY CAPABILITIES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our equipment fleet is engineered for reliability and performance in Nigerian
                  land and swamp operations. We deploy complete, self-contained operational cells
                  featuring truck-mounted double drum units and portable Slickline Crane Trucks for
                  efficient rig-up. Our units are equipped with rig-safe power packages, including
                  ESD valves and approved spark arrestors. We maintain a full inventory of
                  certified Pressure Control Equipment (PCE), including hydraulic and manual
                  Wireline BOPs in 3-1/2", 4.5", and 7" sizes rated up to 10,000 psi.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80"
                  alt="Slickline equipment"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                  alt="Slickline truck"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80"
                  alt="Equipment detail"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80"
                  alt="Operations"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section className="py-16 bg-background">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              GET A QUOTE FOR SLICKLINE SERVICES
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

export default Slickline;
