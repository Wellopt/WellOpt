import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-20 bg-background px-4">
        <div className="text-center max-w-lg mx-auto space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Thank You!
          </h1>
          
          <p className="text-xl text-muted-foreground">
            We'll get back to you 🥳
          </p>
          
          <div className="pt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
