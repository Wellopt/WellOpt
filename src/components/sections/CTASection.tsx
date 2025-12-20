import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Get Your Next Project Done Right
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-8">
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