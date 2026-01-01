import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import navLogo from "@/assets/WELLOPT LOGO PNG.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  const services = [
    { name: "Services", path: "/services" },
    { name: "Slickline Services", path: "/services/slickline" },
    { name: "BHP Survey", path: "/services/bhp-survey" },
    { name: "Wellhead Maintenance", path: "/services/wellhead" },
    { name: "Marine (Barge)", path: "/services/marine" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <header className="bg-background sticky top-0 z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={navLogo} alt="WellOPT - A well service company" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-accent ${
                  isActive("/") ? "text-accent" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-accent ${
                  isActive("/about") ? "text-accent" : "text-foreground"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${
                    isServicesActive ? "text-accent" : "text-foreground"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 bg-[#002D46] rounded-lg shadow-lg py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2.5 hover:text-accent transition-colors text-sm text-white"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/hse"
                className={`font-medium transition-colors hover:text-accent ${
                  isActive("/hse") ? "text-accent" : "text-foreground"
                }`}
              >
                HSE
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex bg-accent text-accent-foreground px-6 py-2.5 rounded font-semibold hover:bg-orange-hover transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-primary">
            {/* Mobile Header */}
            <div className="container-custom">
              <div className="flex items-center justify-between h-20">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <img src={navLogo} alt="WellOPT" className="h-10 brightness-0 invert" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col items-center pt-8 gap-6">
              <Link
                to="/"
                className="text-white text-lg font-medium transition-colors hover:text-accent"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-lg font-medium transition-colors hover:text-accent"
                onClick={closeMenu}
              >
                About Us
              </Link>

              {/* Services Accordion */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center gap-2 text-white text-lg font-medium transition-colors hover:text-accent"
                >
                  Services
                  {isMobileServicesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isMobileServicesOpen && (
                  <div className="flex flex-col items-center gap-4 mt-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="text-white text-base transition-colors hover:text-accent"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/hse"
                className="text-white text-lg font-medium transition-colors hover:text-accent"
                onClick={closeMenu}
              >
                HSE
              </Link>

              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold mt-4 hover:bg-orange-hover transition-colors"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;