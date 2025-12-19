import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Gauge, FlaskConical, TrendingUp, Activity, Grid3X3, Target } from "lucide-react";

const BHPSurvey = () => {
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
        <section className="relative h-[50vh] md:h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              BHP Survey
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Capturing high-precision downhole pressure and temperature data to provide
              critical insights for reservoir analysis and production optimization.
            </p>
          </div>
        </section>

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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  EQUIPMENT & TECHNOLOGY
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We deploy the industry-leading Electronic Quartz Gauge, a rugged and reliable
                  sensor developed for critical well testing. It is renowned for its high accuracy
                  and low power consumption.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                  alt="BHP Survey equipment"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee67df9c8a6e?w=600&q=80"
                  alt="Gauge equipment"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80"
                  alt="Field technician"
                  className="w-full h-48 object-cover rounded-lg col-span-2"
                />
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
              className="inline-flex border-2 border-accent text-accent px-8 py-3 rounded font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default BHPSurvey;
