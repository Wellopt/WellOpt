const clients = [
  "Renaissance",
  "Eni",
  "Seplat",
  "Heirs Energies",
  "Chorus",
  "Belemaoil",
  "Waltersmith",
  "Universal Energy",
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-secondary rounded-lg p-6 flex items-center justify-center h-20 hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-muted-foreground">{client}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1">
            See More
            <span className="text-lg">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;