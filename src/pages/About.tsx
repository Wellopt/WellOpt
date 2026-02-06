import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import aboutHero from "@/assets/about-hero.webp";
import companyOverview from "@/assets/company-overview.webp";
import heroTeam from "@/assets/hero-team.webp";
import heroOffice from "@/assets/hero-office.webp";
import ourVision from "@/assets/our-vision.webp";
import ourClients from "@/assets/our-clients.webp";

const About = () => {
  useEffect(() => {
    document.title = "WellOPT / About Us";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Who We Are"
        subtitle="Meet the trusted, indigenous partner and expert team committed to Nigerian well service excellence."
        images={[aboutHero, heroTeam, heroOffice]}
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Company Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                WellOPT is a wholly indigenous Nigerian Well Services company, registered with the CAC and NUPRC since 2006, and fully compliant with NIPEX and NCDMB requirements as well as ISO 9001:2015 certified.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in Slickline Operations, Downhole Gauges, and Wellhead Maintenance, delivering safe and efficient solutions across land, swamp, and offshore environments.
              </p>
              <p className="text-muted-foreground">
                From our purpose-built facilities in Port Harcourt, we have since 2007 built a strong reputation for quality, reliability, and technical excellence in serving operators across Nigeria's oil and gas sector.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src={companyOverview} 
                alt="WellOPT company building" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-12 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${ourVision}')`,
          }}
        >
          <div className="absolute inset-0 bg-[#002D46CC]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Our Vision
          </h2>
          <p className="text-[#FFFFFF] max-w-3xl mx-auto">
            Our vision is to deliver world-class Well Services operations that set the benchmark for excellence in the oil and gas industry. We are driven by an unwavering determination to create lasting value, ensuring the satisfaction of our customers, the growth and fulfillment of our employees, and the sustained returns for our shareholders.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
            Our mission is to deliver excellent service quality built on a strong maintenance culture and the expertise of well-trained personnel. We are committed to fostering mutually beneficial relationships with our host communities and government agencies through well-structured engagement programs.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We uphold loss prevention policies that drive both profitability and sustainable growth, ensuring our operations remain safe, efficient, and responsible. Above all, we value honesty, motivation, and the recognition of our people, knowing that our success is powered by their dedication and skill.
          </p>
        </div>
      </section>

      {/* Expert Personnel */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Expert Personnel
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Our competitive advantage is our people. WellOPT crews are comprised of highly-trained and experienced specialists dedicated to safety and quality. Our slickline specialists and engineers are IWCF Certified, and all chief operators have attended certified slickline training courses to attain breakout certification before deployment. We ensure safety and efficiency on every job by deploying standard field crews consisting of one Chief Operator and two operators.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our reputation is built on performance. From our first project to today, we've partnered with industry leaders to deliver safe, precise, and innovative well solutions, forging relationships defined by trust, results, and shared success.
          </p>
          <div className="flex justify-center">
            <img 
              src={ourClients} 
              alt="Our trusted clients including Renaissance, Eni, Seplat, Heirs Energies, Chorus, Belemaoil, Waltersmith, and Universal Energy" 
              className="max-w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;