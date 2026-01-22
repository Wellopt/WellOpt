import React, { useEffect, ReactElement } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "../Hero";
import { Settings, CheckCircle, TrendingUp, Search, ShieldCheck, Zap, Layers, Menu } from "lucide-react";
import slicklineCard from "@/assets/slickline-card.png";
import sicklineSlide2 from "@/assets/sickline slide 2.png";
import sicklineSlide3 from "@/assets/sickline slide 3.png";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import equipment4 from "@/assets/equipment-4.jpg";
import equipment5 from "@/assets/equipment-5.jpg";
import Icon1 from "@/assets/slickline service icon/1.svg";
import Icon2 from "@/assets/slickline service icon/2.svg";
import Icon3 from "@/assets/slickline service icon/3.svg";
import Icon4 from "@/assets/slickline service icon/4.svg";
import Icon5 from "@/assets/slickline service icon/5.svg";
import Icon6 from "@/assets/slickline service icon/6.svg";
import Icon7 from "@/assets/slickline service icon/7.svg";
import Icon8 from "@/assets/slickline service icon/8.svg";

const Slickline = () => {
  useEffect(() => {
    document.title = "WellOPT / Slickline Services";
  }, []);

  const capabilities = [
    { icon: Icon1, label: "Precision Operations" },
    { icon: Icon2, label: "Wellbore Integrity" },
    { icon: Icon3, label: "Production Enhancements" },
    { icon: Icon4, label: "Fishing Operations" },
    { icon: Icon5, label: "Zone Isolation" },
    { icon: Icon6, label: "Safety Valve Operations" },
    { icon: Icon7, label: "Perforating Operations" },
    { icon: Icon8, label: "And Other Operations" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="Slickline Services"
          subtitle="Delivering a full range of slickline services for land and swamp operations to ensure optimal well performance and integrity."
          images={[slicklineCard, sicklineSlide2, sicklineSlide3]}
        />

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
                    {typeof cap.icon === 'function' ? React.createElement(cap.icon, { className: "w-6 h-6 text-accent" }) : <img src={cap.icon} className="w-6 h-6 text-accent" alt={cap.label} />}
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
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                Our equipment fleet is engineered for reliability and performance in Nigerian
                land and swamp operations. We deploy complete, self-contained operational cells
                featuring truck-mounted double drum units and portable Slickline Crane Trucks for
                efficient rig-up. Our units are equipped with rig-safe power packages, including
                ESD valves and approved spark arrestors. We maintain a full inventory of
                certified Pressure Control Equipment (PCE), including hydraulic and manual
                Wireline BOPs in 3-1/2", 4.5", and 7" sizes rated up to 10,000 psi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={sicklineSlide2}
                    alt="Slickline equipment"
                    className="w-full h-64 object-contain bg-white"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={equipment2}
                    alt="Slickline truck"
                    className="w-full h-64 object-contain bg-white"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={equipment3}
                    alt="Equipment detail"
                    className="w-full h-64 object-contain bg-white"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={equipment4}
                    alt="Slickline operations"
                    className="w-full h-64 object-contain bg-white"
                  />
                </div>
                <div className="rounded-lg overflow-hidden md:col-span-2 border border-gray-200">
                  <img
                    src={sicklineSlide3}
                    alt="Slickline machinery"
                    className="w-full h-64 object-contain bg-white"
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
              GET A QUOTE FOR SLICKLINE SERVICES
            </h2>
            <Link
              to="/contact"
              className="inline-flex border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors"
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
