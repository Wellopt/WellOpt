import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  images?: string[];
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, images, backgroundImage }: HeroProps) => {
  const heroImages = images || (backgroundImage ? [backgroundImage] : []);

  return (
    <HeroSlider 
      images={heroImages} 
      interval={5000}
      overlayClass="bg-navy/60"
    >
      <section className="min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-hover transition-colors text-center"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors text-center"
              >
                Explore our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HeroSlider>
  );
};

export default Hero;