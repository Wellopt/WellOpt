import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      title: "Slickline (Land/Swamp)",
      description: "Delivering a full range of slickline services for land and swamp operations...",
      path: "/services/slickline",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
      hoverImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    },
    {
      title: "BHP Survey",
      description: "Capturing high-precision downhole pressure and temperature data...",
      path: "/services/bhp-survey",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      hoverImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
    },
    {
      title: "Wellhead Maintenance",
      description: "Providing comprehensive wellhead maintenance to ensure safety...",
      path: "/services/wellhead",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
      hoverImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    },
    {
      title: "Marine (Slickline Barge)",
      description: "Extending our slickline capabilities to offshore etc with our fully ready barge...",
      path: "/services/marine",
      image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
      hoverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
    },
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
            <div className="absolute inset-0 bg-[#002D46CC]"></div>
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Core Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Delivering precision, safety, and efficiency across land, swamp, and offshore
              operations in Nigeria.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group relative h-[400px] md:h-[450px] rounded-lg overflow-hidden"
                >
                  {/* Default Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={service.hoverImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  />
                  
                  {/* Dark overlay on the whole card - stays same color on hover */}
                  <div className="absolute inset-0 bg-primary/30"></div>
                  
                  {/* Text container with background that changes from navy to orange */}
                  <div className="absolute bottom-0 left-0 right-0 bg-primary transition-colors duration-500 group-hover:bg-accent">
                    <div className="p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm md:text-base">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Services;
