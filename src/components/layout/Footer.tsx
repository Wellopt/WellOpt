import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";
import workerBanner from "@/assets/worker-banner.png";

interface FooterProps {
  showCTA?: boolean;
}

const Footer = ({ showCTA = true }: FooterProps) => {
  return (
    <footer className="bg-[#333333] text-white">
      {/* CTA Banner inside Footer */}
      {showCTA && (
        <div className="container-custom pt-10 md:pt-14">
          <div 
            className="relative overflow-hidden mx-auto"
            style={{
              backgroundImage: `url('${workerBanner}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '60px',
              maxWidth: '1344px',
              minHeight: '280px',
            }}
          >
            <div className="absolute inset-0 bg-[#002D46CC]" style={{ borderRadius: '60px' }}></div>
            <div className="relative z-10 px-8 py-16 md:py-20 md:px-12 flex flex-col items-center justify-center text-center h-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                Get Your Next Project Done Right
              </h2>
              <p className="text-gray-200 max-w-xl mb-6 text-sm md:text-base">
                Contact our team of experts today. Let's discuss your operational
                needs and develop a safe, efficient, and cost-effective solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-semibold hover:bg-orange-hover transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={footerLogo} alt="WellOPT" className="h-8" />
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Our determination is to satisfy our customers, employees and shareholders...
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p className="font-medium text-white">WellOPT Nigeria Ltd</p>
              <p>76B Obiwell Road, Rumuigbo</p>
              <p>Port Harcourt, Rivers State, Nigeria</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/share/17St8oP3nh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/wellopt-nigeria-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/WelloptLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/welloptltd?igsh=bGdudHFtbzdzOGRt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">COMPANY</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/hse" className="hover:text-accent transition-colors">HSE</Link></li>
              <li><Link to="/#clients" className="hover:text-accent transition-colors">Our Clients</Link></li>
              <li><a href="https://d3345.can1.stableserver.net:2096/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Staff</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">SERVICES</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services/slickline" className="hover:text-accent transition-colors">Slickline</Link></li>
              <li><Link to="/services/bhp-survey" className="hover:text-accent transition-colors">BHP Survey</Link></li>
              <li><Link to="/services/wellhead" className="hover:text-accent transition-colors">WellHead</Link></li>
              <li><Link to="/services/marine" className="hover:text-accent transition-colors">Marine</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">GET IN TOUCH</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:welloptw@wellopt.com" className="hover:text-accent transition-colors">
                  welloptw@wellopt.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+2348139441557" className="hover:text-accent transition-colors">
                  +234 813 944 1557
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;