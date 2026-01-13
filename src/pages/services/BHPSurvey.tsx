import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "../Hero";
import { Gauge, FlaskConical, TrendingUp, Activity, Grid3X3, Target } from "lucide-react";
import bhpCard from "@/assets/bhp.jpg";
import bhpEquipment1 from "@/assets/bhp-equipment-1.png";
import bhpEquipment2 from "@/assets/bhp-equipment-2.png";

const BHPSurvey = () => {
  useEffect(() => {
    document.title = "WellOPT / BHP Survey";
  }, []);

  const applications = [
    { icon: FlaskConical, label: "Drill Stem Tests" },
    { icon: TrendingUp, label: "Production Tests" },
    { icon: Gauge, label: "Pressure Gradient Surveys" },
    { icon: Activity, label: "Interference & Injection Tests" },
    { icon: Grid3X3, label: "Pressure Monitoring" },
    { icon: Target, label: "Frac & Perforation Monitoring" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="BHP Survey"
          subtitle="Capturing high-precision downhole pressure and temperature data to provide critical insights for reservoir analysis and production optimization."
          images={[bhpCard, bhpEquipment1, bhpEquipment2]}
        />

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">OVERVIEW</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              At WellOPT, we provide high-precision Bottom Hole Pressure (BHP) surveys utilizing
              advanced Downhole Quartz Memory Gauges. Understanding your reservoir's pressure and
              temperature is critical for making informed production and development decisions.
              Our trained and experienced Gauge Engineers not only deploy these rugged,
              high-accuracy tools but are also able to quality-check the acquired data at the well
              site, ensuring you receive reliable and actionable insights. All operations are
              conducted with a strict adherence to our HSE policy and all NUPRC regulations.
            </p>
          </div>
        </section>

        {/* Key Applications */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              KEY APPLICATIONS
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-background p-4 rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <app.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{app.label}</span>
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
                We deploy the industry-leading Electronic Quartz Gauge, a rugged and reliable
                sensor developed for critical well testing. It is renowned for its high accuracy
                and low power consumption.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={bhpEquipment1}
                    alt="BHP Survey equipment kit"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={bhpEquipment2}
                    alt="Gauge equipment case"
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
              GET A QUOTE FOR BHP SURVEY
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

export default BHPSurvey;
