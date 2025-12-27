import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import workerBanner from "@/assets/worker-banner.png";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xzdbeqde", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        navigate("/thank-you");
      } else {
        toast.error("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${workerBanner}')`,
            }}
          >
            <div className="absolute inset-0 bg-[#002D46CC]"></div>
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              We are ready to listen. Contact us today to discuss your operational needs or
              request a quote.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Send Us a Message
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange-hover transition-colors"
                >
                  Submit
                </button>
              </form>

              {/* Contact Info */}
              <div className="lg:pl-12 lg:border-l border-border">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-4">Our Office</h3>
                    <p className="text-muted-foreground">
                      WellOPT Nigeria Ltd
                      <br />
                      76B Obiwali Road, Rumuigbo
                      <br />
                      Port Harcourt, Rivers State,
                      <br />
                      Nigeria
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-accent mb-4">Call Us</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+2348034070680"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +234 803 407 0680
                      </a>
                      <a
                        href="tel:+2348034070385"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +234 803 407 0385
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-accent mb-4">Send Us a Mail</h3>
                    <a
                      href="mailto:welloptwl@wellopt.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      welloptwl@wellopt.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4902406400215!2d6.982804574380204!3d4.85719029511849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce20010726fd%3A0xb6acb2d2dadd77f9!2sWellOPT%20Nigeria%20Ltd!5e0!3m2!1sen!2sng!4v1766835727350!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WellOPT Nigeria Ltd"
              ></iframe>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
