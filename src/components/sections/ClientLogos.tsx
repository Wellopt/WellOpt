import clientLogosImage from "@/assets/client-logos.png";

const ClientLogos = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Trusted By Industry Leaders
        </h2>
        <div className="flex justify-center">
          <img 
            src={clientLogosImage} 
            alt="Our trusted clients including Renaissance, Eni, Seplat, Heirs Energies, Chorus, Belemaoil, Waltersmith, and Universal Energy" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;