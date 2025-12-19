import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Slickline", path: "/services/slickline" },
    { name: "BHP Survey", path: "/services/bhp-survey" },
    { name: "Wellhead Maintenance", path: "/services/wellhead" },
    { name: "Marine", path: "/services/marine" },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-accent">Well</span>
              <span className="text-primary">OPT</span>
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">A well Service Company</span>
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
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                className="flex items-center gap-1 font-medium transition-colors hover:text-accent"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-lg shadow-lg border py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 hover:bg-secondary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
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
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              <div className="py-2">
                <span className="font-medium">Services</span>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/hse" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>HSE</Link>
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-6 py-2.5 rounded font-semibold text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;