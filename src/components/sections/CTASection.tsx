import { Link } from "react-router-dom";

interface CTASectionProps {
  variant?: "dark" | "image";
}

const CTASection = ({ variant = "dark" }: CTASectionProps) => {
  return (
    <section
      className={`py-16 md:py-20 ${
        variant === "dark" ? "bg-navy-dark" : "bg-navy-dark/90"
      }`}
    >
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Get Your Next Project Done Right
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Contact our team of experts today. Let's discuss your operational
          needs and develop a safe, efficient, and cost-effective solution.
        </p>
        <Link
          to="/contact"
          className="inline-flex bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange-hover transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTASection;