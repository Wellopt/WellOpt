import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const clients = [
  "Renaissance", "Eni", "Seplat", "Heirs Energies",
  "Chorus", "Belemaoil", "Waltersmith", "Universal Energy",
  "NNPC", "Newcross", "SEPTA", "Conoil",
  "AIPDC", "Energia", "AA Holdings", "First E&P",
  "Oando", "Sahara",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Meet the trusted, indigenous partner and expert team committed to Nigerian well service excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Company Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                WellOPT is a wholly indigenous Nigerian Well Services company, registered with the CAC and NUPRC since 2006, and fully compliant with NIPEX and NCDMB requirements.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in Slickline Operations, Downhole Gauges, and Wellhead Maintenance, delivering safe and efficient solutions across land, swamp, and offshore environments.
              </p>
              <p className="text-muted-foreground">
                From our purpose-built facilities in Port Harcourt, we have, since 2007, built a strong reputation for quality, reliability, and technical excellence in serving operators across Nigeria's oil and gas sector.
              </p>
            </div>
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-[#002D46CC]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Our Vision
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our reputation is built on performance. From our first project to today, we've partnered with industry leaders to deliver safe, precise, and innovative well solutions, forging relationships defined by trust, results, and shared success. They are:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-secondary rounded-lg p-4 md:p-6 flex items-center justify-center h-16 md:h-20 hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-muted-foreground text-sm md:text-base">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;