import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  { src: portfolio1, title: "Vestido Social", desc: "Modelagem completa com ajustes de caimento" },
  { src: portfolio2, title: "Calça Jeans", desc: "Molde digital com todas as variações de tamanho" },
  { src: portfolio3, title: "Blazer Masculino", desc: "Modelagem estruturada com detalhes técnicos" },
  { src: portfolio4, title: "Camisa Casual", desc: "Molde otimizado para produção em escala" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Portfólio</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Exemplos de <span className="glow-text">Moldes Digitais</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça a qualidade dos moldes criados com o sistema Audaces, garantindo precisão e eficiência na sua produção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="glass-card glow-border group overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-primary/30"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={`Molde digital - ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-semibold mb-1 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
