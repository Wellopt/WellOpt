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
                href="https://facebook.com"
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
                href="https://linkedin.com"
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
                href="https://x.com"
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
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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