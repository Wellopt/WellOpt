import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "100%", label: "Compliance with NUPRC & NCDMB Regulations" },
  { value: "0%", label: "Lost Time Incidents (LTIs)" },
  { value: "100%", label: "Projects Completed Without Environmental Incident" },
];

const HSE = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/70" />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Safety is Our Foundation
            </h1>
            <p className="text-lg text-gray-300">
              We are committed to protecting our people, the environment, and the integrity of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* HSE Commitment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Our Unwavering Commitment to HSE
          </h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground mb-4">
              At WellOPT, Health, Safety, and Environmental (HSE) protection is a core value integrated into every business decision. We believe it is a shared responsibility, holding every team member from leadership to the field accountable for our performance while ensuring full compliance with all applicable laws and industry standards.
            </p>
            <p className="text-muted-foreground mb-4">
              Our commitment is demonstrated by proactively protecting our people to achieve zero accidents, safeguarding the environment through responsible resource use, and driving continual improvement with mandatory training and regular audits. We practice open communication, engaging transparently with our clients and stakeholders on all HSE programs and performance.
            </p>
            <p className="text-muted-foreground mb-6">
              Our strategy is guided by a simple goal: a <strong>Zero-Loss Culture.</strong>
            </p>
            
            <ul className="space-y-3">
              {[
                "No Accidents",
                "No Health-Related Incidents",
                "No Loss to Process",
                "No Lapses in Security",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Track Record */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-10">
            <CheckCircle className="w-8 h-8 text-white" />
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Our Safety Track Record
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-3">
                  {stat.value}
                </p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default HSE;