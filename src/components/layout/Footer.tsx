import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-accent">Well</span>
                <span className="text-white">OPT</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Our determination is to satisfy our customers, employees and shareholders...
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-white">WellOPT Nigeria Ltd</p>
              <p>76B Obiiwali Road, Rumuigbo</p>
              <p>Port Harcourt, Rivers State, Nigeria</p>
            </div>
            <div className="flex gap-3 mt-4">
              {["facebook", "linkedin", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/hse" className="hover:text-accent transition-colors">HSE</Link></li>
              <li><Link to="/clients" className="hover:text-accent transition-colors">Our Clients</Link></li>
              <li><Link to="/staff" className="hover:text-accent transition-colors">Staff</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">SERVICES</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services/slickline" className="hover:text-accent transition-colors">Slickline</Link></li>
              <li><Link to="/services/bhp-survey" className="hover:text-accent transition-colors">BHP Survey</Link></li>
              <li><Link to="/services/wellhead" className="hover:text-accent transition-colors">WellHead</Link></li>
              <li><Link to="/services/marine" className="hover:text-accent transition-colors">Marine</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">GET IN TOUCH</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:welloptwell@wellopt.com" className="hover:text-accent transition-colors">
                  welloptwell@wellopt.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+2348139441557" className="hover:text-accent transition-colors">
                  +234 813 944 1557
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 WellOPT Nigeria Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;